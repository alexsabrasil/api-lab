const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

let alunos = [
  { id: 1, nome: 'João da Silva', curso: 'Engenharia' },
  { id: 2, nome: 'Maria Souza', curso: 'Medicina' }
];

let nextId = 3;

app.post('/alunos', (req, res) => {
  const { nome, curso } = req.body;

  if (!nome || !curso) {
    return res.status(400).json({
      erro: 'Nome e curso são obrigatórios.'
    });
  }

  const novoAluno = {
    id: nextId++,
    nome,
    curso
  };

  alunos.push(novoAluno);
  res.status(201).json(novoAluno);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API de alunos rodando em http://localhost:${port}`);
  });
}

app.get('/alunos', (req, res) => {
  const { curso, nome } = req.query;
  let resultado = alunos;

  if (curso) {
    resultado = resultado.filter(
      a => a.curso.toLowerCase() === curso.toLowerCase()
    );
  }

  if (nome) {
    resultado = resultado.filter(
      a => a.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  res.json(resultado);
});

app.get('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({
      erro: 'Aluno não encontrado.'
    });
  }

  res.json(aluno);
});

module.exports = app;