const express = require("express");
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.send("🚀 Olá, mundo! Meu app com Node.js e Express está rodando.");
});

// Exemplo de rota com parâmetro
app.get("/saudacao/:nome", (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá, ${nome}! Bem-vindo ao app 🚀`);
});

// Exemplo de rota POST
app.post("/mensagem", (req, res) => {
  const { mensagem } = req.body;
  res.json({ resposta: `Você enviou: ${mensagem}` });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
