const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./auth.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});


// Criar a tabela de usuários se ela não existir
db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);
`,
  (err) => {
    if (err) {
      console.error('Erro ao criar a tabela:', err.message);
    }
  }
);

process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Erro ao fechar a conexão com o banco de dados:', err.message);
    } else {
      console.log('Conexão com o banco de dados fechada.');
    }
    process.exit(0);
  });
});

db.run(`CREATE INDEX IF NOT EXISTS idx_users_email ON users (email)`, (err) => {
  if (err) {
    console.error('Erro ao criar o índice:', err.message);
  }
});


module.exports = db;
