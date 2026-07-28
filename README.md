# API-Lab

API REST desenvolvida em **Node.js** para gerenciamento de alunos, utilizando **Git Flow**, **testes automatizados com Jest** e **Integração Contínua (CI/CD)** com **GitLab CI**.

---

# Objetivo

Este projeto foi desenvolvido como atividade prática da formação em DevOps, com foco na aplicação de conceitos de:

- Git Flow
- Versionamento distribuído
- Testes automatizados
- Integração Contínua (CI)
- Pipeline GitLab CI/CD

---

# Tecnologias

- Node.js
- Express
- Jest
- ESLint
- Git
- Git Flow
- GitLab CI/CD

---

# Estrutura do projeto

```
api-lab
│
├── index.js
├── index.test.js
├── package.json
├── package-lock.json
├── eslint.config.js
├── .gitignore
├── .gitlab-ci.yml
└── README.md
```

---

# Git Flow

Durante o desenvolvimento foram utilizadas as seguintes branches:

```
main
develop

feature/setup-inicial
feature/criar-aluno
feature/listar-alunos
feature/atualizar-aluno
feature/deletar-aluno
docs/readme
```

Cada funcionalidade foi desenvolvida em sua própria branch e posteriormente integrada à branch **develop**.

---

# Funcionalidades

A API implementa operações CRUD para gerenciamento de alunos.

## Criar aluno

```
POST /alunos
```

## Listar alunos

```
GET /alunos
```

## Buscar aluno por ID

```
GET /alunos/:id
```

## Atualizar aluno

```
PUT /alunos/:id
```

## Remover aluno

```
DELETE /alunos/:id
```

Também foram implementados filtros por:

- nome
- curso

---

# Testes Automatizados

O projeto utiliza **Jest** para validação da API.

Foram implementados testes para:

- criação de alunos;
- validação de campos obrigatórios;
- listagem;
- filtros;
- consulta por ID;
- atualização;
- exclusão;
- tratamento de registros inexistentes.

Resultado final:

```
Test Suites: 1 passed
Tests: 10 passed
```

---

# Pipeline GitLab CI

A pipeline possui quatro estágios:

```
security
build
quality
test
```

Jobs executados:

- security-sast
- build
- lint-and-quality
- test

Todas as etapas foram executadas com sucesso.

---

# Como executar

Instalar dependências

```bash
npm install
```

Executar aplicação

```bash
node index.js
```

Executar testes

```bash
npm test
```

Executar lint

```bash
npm run lint
```

---

# Competências demonstradas

- Desenvolvimento de API REST
- Git Flow
- Versionamento com Git
- Integração Contínua (CI)
- GitLab CI/CD
- Testes Automatizados
- ESLint
- Boas práticas de desenvolvimento

---

# Autora

**Alê Tavares **

Estudante de Engenharia de Software

Tecnóloga em Segurança da Informação

Residente em Cibersegurança

Formação DevOps – Aponti Academy

---

Projeto desenvolvido para fins acadêmicos e de aprendizado.