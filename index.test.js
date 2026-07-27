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

it('deve listar todos os alunos (GET /alunos)', async () => {
  const res = await request(app).get('/alunos');

  expect(res.statusCode).toEqual(200);
  expect(Array.isArray(res.body)).toBe(true);
  expect(res.body.length).toBeGreaterThanOrEqual(2);
});

it('deve listar alunos filtrados por curso (GET /alunos?curso=...)', async () => {
  const res = await request(app).get('/alunos?curso=medicina');

  expect(res.statusCode).toEqual(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
  expect(res.body[0].nome).toEqual('Maria Souza');
});

it('deve listar alunos filtrados por nome (GET /alunos?nome=...)', async () => {
  const res = await request(app).get('/alunos?nome=joão');

  expect(res.statusCode).toEqual(200);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
  expect(res.body[0].nome).toEqual('João da Silva');
});

it('deve retornar um aluno pelo ID (GET /alunos/:id)', async () => {
  const res = await request(app).get(`/alunos/${novoAlunoId}`);

  expect(res.statusCode).toEqual(200);
  expect(res.body.id).toEqual(novoAlunoId);
  expect(res.body.nome).toEqual('Carlos Silva');
});

it('deve retornar 404 ao buscar aluno inexistente (GET /alunos/:id)', async () => {
  const res = await request(app).get('/alunos/9999');

  expect(res.statusCode).toEqual(404);
});

it('deve atualizar os dados de um aluno (PUT /alunos/:id)', async () => {
  const res = await request(app)
    .put(`/alunos/${novoAlunoId}`)
    .send({ nome: 'Carlos da Silva' });

  expect(res.statusCode).toEqual(200);
  expect(res.body.nome).toEqual('Carlos da Silva');
  expect(res.body.curso).toEqual('Computação');
});

});