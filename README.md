# Login AUTH

### Este projeto é um conteúdo de teste fornecido pela VX. O objetivo do teste é desenvolver um sistema de login utilizando um framework, com funcionalidades de autenticação e integração a um banco de dados.

Este projeto é uma aplicação web que utiliza as seguintes tecnologias:

- React
- JavaScript
- Express
- SQLite
- JWT (JSON Web Tokens)
- CSS
- Nodemon

## Instalação e Configuração

### 1. React

Para instalar e configurar o React:

1. Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina.
2. Execute o seguinte comando para criar uma nova aplicação React:
   ```bash
   npx create-react-app nome-do-projeto
   ```
3. Navegue até o diretório do projeto:
   ```bash
   cd nome-do-projeto
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

### 2. JavaScript

O JavaScript é uma linguagem de programação que é utilizada tanto no front-end quanto no back-end. Não é necessário instalá-lo separadamente, pois ele é suportado nativamente pelos navegadores e pelo Node.js.

### 3. Express

Para instalar e configurar o Express:

1. No diretório do seu projeto Node.js, execute o seguinte comando:
   ```bash
   npm install express
   ```
2. Crie um arquivo `server.js` e adicione o seguinte código básico para iniciar um servidor Express:
   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
     res.send('Hello, World!');
   });

   app.listen(port, () => {
     console.log(`Servidor rodando em http://localhost:${port}`);
   });
   ```
3. Inicie o servidor:
   ```bash
   node server.js
   ```

### 4. SQLite

Para instalar e configurar o SQLite:

1. Instale o SQLite com o seguinte comando:
   ```bash
   npm install sqlite3
   ```
2. Crie um arquivo `database.js` e adicione o seguinte código para configurar o SQLite:
   ```javascript
   const sqlite3 = require('sqlite3').verbose();
   const db = new sqlite3.Database(':memory:');

   db.serialize(() => {
     db.run("CREATE TABLE exemplo (id INT, nome TEXT)");
     db.run("INSERT INTO exemplo (id, nome) VALUES (1, 'Exemplo')");
   });

   module.exports = db;
   ```

### 5. JWT (JSON Web Tokens)

Para instalar e configurar o JWT:

1. Instale o pacote JWT com o seguinte comando:
   ```bash
   npm install jsonwebtoken
   ```
2. Crie um arquivo `auth.js` e adicione o seguinte código para configurar a autenticação com JWT:
   ```javascript
   const jwt = require('jsonwebtoken');
   const secretKey = 'sua-chave-secreta';

   function generateToken(payload) {
     return jwt.sign(payload, secretKey, { expiresIn: '1h' });
   }

   function verifyToken(token) {
     return jwt.verify(token, secretKey);
   }

   module.exports = { generateToken, verifyToken };
   ```

### 6. CSS

O CSS é utilizado para estilizar as páginas da web. Você pode criar arquivos `.css` em seu projeto React e importá-los nos componentes conforme necessário:

```javascript
import './App.css';
```

### 7. Nodemon

Para instalar e configurar o Nodemon:

1. Instale o Nodemon globalmente ou como uma dependência de desenvolvimento:
   ```bash
   npm install -g nodemon
   # ou
   npm install --save-dev nodemon
   ```
2. Para iniciar o servidor com o Nodemon, execute o seguinte comando:
   ```bash
   nodemon server.js
   ```


## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes. Todos os conteúdos utilizados neste projeto estão licenciados.

