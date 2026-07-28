# API-Lab

> API REST desenvolvida em Node.js para gerenciamento de alunos, utilizando Git Flow, testes automatizados com Jest e Integração Contínua (CI/CD) com GitLab.

---

## Sobre o projeto

O **API-Lab** foi desenvolvido como atividade prática da formação em DevOps, com o objetivo de aplicar conceitos de versionamento, Git Flow, testes automatizados e integração contínua.

Durante o desenvolvimento foram implementadas funcionalidades seguindo um fluxo semelhante ao utilizado em equipes profissionais de desenvolvimento de software.

---

## Tecnologias utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| Node.js | Backend |
| Express | API REST |
| Jest | Testes automatizados |
| ESLint | Qualidade do código |
| Git | Versionamento |
| Git Flow | Estratégia de branches |
| GitLab CI/CD | Pipeline de Integração Contínua |
| GitHub | Portfólio do projeto |

---

## Arquitetura

```text
Cliente
    │
    ▼
API REST (Express)
    │
    ▼
Dados em memória
```

---

## Estrutura do projeto

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

## Git Flow

O desenvolvimento foi organizado utilizando Git Flow.

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

Cada funcionalidade foi implementada em uma branch específica e posteriormente integrada à branch **develop**.

---

## Funcionalidades

### Cadastro

- Criar aluno

### Consulta

- Listar alunos
- Buscar aluno por ID
- Filtrar por nome
- Filtrar por curso

### Atualização

- Atualizar dados

### Remoção

- Excluir aluno

---

## Testes Automatizados

Foram implementados testes utilizando **Jest**.

Cobertura funcional:

- Cadastro
- Validações
- Consulta
- Filtros
- Atualização
- Exclusão
- Tratamento de erros

Resultado final:

```
Test Suites: 1 passed

Tests: 10 passed
```

---

## Pipeline GitLab CI

A Integração Contínua foi implementada utilizando GitLab CI.

### Estágios

```
security

build

quality

test
```

### Jobs

- security-sast
- build
- lint-and-quality
- test

Pipeline executada com sucesso.

---

## Como executar

### Instalar dependências

```bash
npm install
```

### Executar aplicação

```bash
node index.js
```

### Executar testes

```bash
npm test
```

### Executar análise de código

```bash
npm run lint
```

---

## Competências demonstradas

- Desenvolvimento de API REST
- Versionamento com Git
- Git Flow
- Integração Contínua
- GitLab CI/CD
- Testes Automatizados
- ESLint
- Boas práticas de desenvolvimento

---

## Evolução do projeto

Próximas implementações planejadas:

- Frontend em React
- Banco de dados PostgreSQL
- Docker Compose
- Swagger/OpenAPI
- Autenticação JWT
- Deploy em ambiente cloud
- Dashboard Web

---

## Repositórios

**GitHub**

> Portfólio do projeto

**GitLab**

> Pipeline CI/CD

---

## Autora

**Alê Tavares**

- Engenharia de Software
- Tecnóloga em Segurança da Informação
- Residente em Cibersegurança
- Formação DevOps

---

Projeto desenvolvido para fins acadêmicos e de aprendizado.