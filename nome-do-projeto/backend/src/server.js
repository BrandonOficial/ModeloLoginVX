const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require('./database');  // Configuração do banco SQLite

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'HS202';

// Middleware para interpretar JSON
app.use(express.json());

// Middleware para autenticação com JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // 'Bearer <token>'
  console.log('Token:', token); // Adicione esta linha
  
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.error('Token inválido:', err); // Log para ajudar no debug
      return res.status(403).json({ message: 'Token inválido.' });
    }
    
    req.user = user;  // Armazenar os dados do usuário
    next();  // Seguir para a próxima etapa (rota protegida)
  });
};

// Rota para registrar usuários
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      `INSERT INTO users (email, password) VALUES (?, ?)`,
      [email, hashedPassword],
      (err) => {
        if (err) {
          return res.status(400).json({ message: 'Usuário já existe.' });
        }
        res.status(201).json({ message: 'Usuário registrado com sucesso.' });
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Erro interno ao registrar usuário.' });
  }
});

// Rota para login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Erro ao buscar usuário.' });
    }

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login bem-sucedido.', token });
  });
});

// Rota protegida: Dashboard
app.get('/dashboard', authenticateToken, (req, res) => {
  console.log('Usuário autenticado:', req.user);
  res.json({
    message: `Bem-vindo ao dashboard, ${req.user.email}!`,
    user: req.user,  // Retorna os dados do usuário
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
