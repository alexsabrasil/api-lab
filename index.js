const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let alunos = [
  { id: 1, nome: 'João da Silva', curso: 'Engenharia' },
  { id: 2, nome: 'Maria Souza', curso: 'Medicina' }
];

let nextId = 3;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API de alunos rodando em http://localhost:${port}`);
  });
}

module.exports = app;