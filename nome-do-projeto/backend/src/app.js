const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, email: "user@example.com", password: "123456" }, // Mock data
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ message: "Login bem-sucedido" });
  } else {
    res.status(401).json({ message: "Credenciais inválidas" });
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando em http://localhost:5000");
});
