# Login AUTH

### Um Login de autenticação usando React e JS como estrutura e back-end usando JWT, SQLITE e Express como Middleware

O principal obejtivo do projeto e destacar as minhas habilidades e de como me utilizo de ferramentas de gerenciamento de dados e manipulação que estarão fazendo também parte de autenticação de cadastros para a criação de Logins e gerenciamento de contas no sistema.

### Ferramentas Utilizadas
- React
- JavaScript
- Express
- SQLite
- JWT
- CSS
- Nodemon

Instalação e Configuração

1. React

Para instalar e configurar o React:

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina.

Execute o seguinte comando para criar uma nova aplicação React:

npx create-react-app nome-do-projeto

Navegue até o diretório do projeto:

cd nome-do-projeto

Inicie o servidor de desenvolvimento:

npm start

2. JavaScript

O JavaScript é uma linguagem de programação que é utilizada tanto no front-end quanto no back-end. Não é necessário instalá-lo separadamente, pois ele é suportado nativamente pelos navegadores e pelo Node.js.

3. Express

Para instalar e configurar o Express:

No diretório do seu projeto Node.js, execute o seguinte comando:

npm install express

Crie um arquivo server.js e adicione o seguinte código básico para iniciar um servidor Express:

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

Inicie o servidor:

node server.js

4. SQLite

Para instalar e configurar o SQLite:

Instale o SQLite com o seguinte comando:

npm install sqlite3

Crie um arquivo database.js e adicione o seguinte código para configurar o SQLite:

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE exemplo (id INT, nome TEXT)");
  db.run("INSERT INTO exemplo (id, nome) VALUES (1, 'Exemplo')");
});

module.exports = db;

5. JWT (JSON Web Tokens)

Para instalar e configurar o JWT:

Instale o pacote JWT com o seguinte comando:

npm install jsonwebtoken

Crie um arquivo auth.js e adicione o seguinte código para configurar a autenticação com JWT:

const jwt = require('jsonwebtoken');
const secretKey = 'sua-chave-secreta';

function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { generateToken, verifyToken };

6. CSS

O CSS é utilizado para estilizar as páginas da web. Você pode criar arquivos .css em seu projeto React e importá-los nos componentes conforme necessário:

import './App.css';

7. Nodemon

Para instalar e configurar o Nodemon:

Instale o Nodemon globalmente ou como uma dependência de desenvolvimento:

npm install -g nodemon
# ou
npm install --save-dev nodemon

Para iniciar o servidor com o Nodemon, execute o seguinte comando:

nodemon server.js

Contribuição

Se você deseja contribuir para este projeto, por favor, faça um fork do repositório e envie um pull request.

Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
