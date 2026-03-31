# API REST com Node.js, Express e Arquitetura em Camadas

## Descrição
- API simples em Node.js utilizando o framework Express
- Permite o cadastro de usuários com validações de negócio.

---

## Estrutura do Projeto

```
meu-projeto/
├── package.json
└── src/
    ├── app.js
    ├── server.js
    └── userService.js
```

---

## Configuração Inicial

```bash
npm init -y
npm install express
```

No `package.json`, adicione:

```json
"type": "module",
"scripts": {
  "start": "node src/server.js"
}
```


## Como Executar

```bash
npm start
```

O servidor estará disponível em: `http://localhost:3000`



## Endpoints

### `POST /users`

Cria um novo usuário.

**Body**
```json
{
  "name": "João Silva",
  "age": 25,
  "isActive": true
}
```

**Resposta de sucesso: 201 Created:**
```json
{
  "id": 482910,
  "name": "João Silva",
  "age": 25,
  "isActive": true,
  "roles": ["user"]
}
```

**Resposta de erro: 400 Bad Request:**
```json
{
  "error": "O nome do usuário é obrigatório."
}
```

---

## Regras de Negócio

- O campo name é obrigatório.
- O campo age deve ser maior ou igual a 18.
- O campo roles é definido automaticamente como ['user'].
- O id é gerado aleatoriamente.

---

# PARTE 2: Documentação

## ENTREGA 01 — Requisitos Funcionais

| ID    | Requisito                        | Descrição                                                                 |
|-------|----------------------------------|---------------------------------------------------------------------------|
| RF-01 | Cadastro de usuário              | O sistema deve permitir o cadastro de um novo usuário via `POST /users` com os campos `name`, `age` e `isActive`. |
| RF-02 | Validação de nome obrigatório    | O sistema deve lançar erro caso o campo `name` não seja informado na requisição. |
| RF-03 | Validação de maioridade          | O sistema deve lançar erro caso o campo `age` seja inferior a 18 anos.    |

---

## ENTREGA 08 - Descritivo de Casos de Teste

### 8.1 Casos de Teste

| ID Caso | ID Requisito | Descrição                                          | Precondição                              | Passos                                                                                     | Resultado Esperado                                                                 |
|---------|--------------|----------------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| CT-01   | RF-01        | Criar usuário com dados válidos                    | Nenhuma                                  | 1. Chamar createUser com name: "João Silva" e age: 25. 2. Verificar os campos retornados. | Objeto com name, age, isActive: true, roles: ['user'] e id definido.    |
| CT-02   | RF-02        | Lançar erro ao não informar o nome                 | Nenhuma                                  | 1. Chamar createUser sem o campo name. 2. Esperar que uma exceção seja lançada.         | Erro com mensagem "O nome do usuário é obrigatório."                             |
| CT-03   | RF-03        | Lançar erro ao informar idade menor que 18         | Nenhuma                                  | 1. Chamar createUser com age: 16`. 2. Esperar que uma exceção seja lançada.              | Erro com mensagem "O usuário deve ser maior de idade."                         |

---

### 8.2 Ferramentas e Ambiente

**Ferramentas:**
- Jest - framework de testes unitários
- Node.js - ambiente de execução JavaScript
- Express - framework web para Node.js

**Ambiente:**
- Node.js
- SO: Windows
- Editor: VS Code

---
