const request = require('supertest');
const app = require('./index');

describe('API de Alunos', () => {
  let novoAlunoId;

  // Os testes das próximas branches serão inseridos aqui dentro

it('deve criar um novo aluno (POST /alunos)', async () => {
  const novoAluno = {
    nome: 'Carlos Silva',
    curso: 'Computação'
  };

  const res = await request(app)
    .post('/alunos')
    .send(novoAluno);

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty('id');
  expect(res.body.nome).toEqual('Carlos Silva');
  expect(res.body.curso).toEqual('Computação');

  novoAlunoId = res.body.id;
});

it('não deve criar aluno sem nome ou curso (POST /alunos)', async () => {
  const res = await request(app)
    .post('/alunos')
    .send({ nome: 'Sem Curso' });

  expect(res.statusCode).toEqual(400);
  expect(res.body).toHaveProperty('erro');
});
 
});