# Projeto Task_SA
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)

## Índice

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints](#endpoints)
- [Contribuição](#contribuição)
- [Contato](#contato)

## Descrição

Esta é uma API realizada para registros e gerenciamentos (CRUD) de tarefas e de usuários. Nele será possível:
- Cadastrar Tarefas e Usuários;
- Listar Tarefas e mostrar informação do Usuário Logado;
- Atualizar Tarefas e as informações do Usuário Logado;
- Excluir Tarefas e o registro do Usuário Logado;
- As Tarefas serão relacionadas com o Usuário Logado, permitindo assim as alterações das Tarefas de cada Usuário Logado.
## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (v6 ou superior)
- [postman](https://www.postman.com/downloads/) (v11 ou superior)
- [Git](https://git-scm.com/downloads) (v2.45.2 ou superior)
- [Visual Studio Code](https://code.visualstudio.com/download) (v1.90 ou superior)
- [Beekeeper Studio](https://www.beekeeperstudio.io/get) (v4.3.4 ou superior)
### Passos para instalação

1. Instale as dependencias dos Pré-requisitos (para instalação do [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)).
   
2. Realize o clone do projeto:
   ```bash
   git clone git@github.com:samuelrosaarruda/Task_SA.git
   ```
3. Com o VS Code aberto dentro da pasta do projeto clonado, digite no terminal do VS Code:

   ```bash
   npm install
   ```

4. Rode os comandos de criação do banco de dados e das tabelas, presentes no arquivo [dump.sql](https://github.com/samuelrosaarruda/Task_SA/blob/master/dump.sql), no Beekeeper Studio:
- O tipo de conexão do BD deve ser `Postgres`

5. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias:
   ```env
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   DB_NAME=nome_do_banco
   ```

6. Inicie o servidor:

   ```bash
   npm start
   ```

## Uso

### Comandos Disponíveis

- `npm start`: Inicia o servidor em modo de produção.
- `npm run dev`: Inicia o servidor em modo de desenvolvimento com hot-reload.

### Exemplos de uso

Para interagir com a API, você pode usar ferramentas como [Postman](https://www.postman.com/downloads/) ou [Insomnia](https://insomnia.rest/download). Veja os endpoints disponíveis abaixo.

## Endpoints
   
### Autenticação

- **`POST /login`**
  - Descrição: Autentica um usuário.
  - Parâmetros:
    - `email` (string) - obrigatório
    - `password` (string) - obrigatório
  - Resposta:
    - `200 OK`: Retorna o token JWT e informações do usuário.
    - `400 Bad Request`: Caso tenha sido passada uma informação inválida.
    - `404 Not Found`: Caso o usuario não esteja cadastrado no banco de dados
      
- **`Intermediario verificaLogin`**
  - Descrição: Irá vericar se usuário esta logado, para a realização das modicações nas rotas de Usuários e de Tabelas.
  - Parâmetros:
    - `Token`: Nescessário fornecer o Token na função Bearer Token do Postman ou Insomnia.
  - Respostas:
    - `401 Unauthorized`: Caso não seja fornecido o Token
    - `404 Not Found`: Caso o usuário não seja encontrado no registro de Usuários
    - `403 Forbidden`: Caso o usuário esteja não esteja autorizado ou tenha fornecido um token que já inspirou
### Usuários
- **`POST /usuario`**
  - Descrição: Cria um usuário.
  - Parâmetros:
    - `nome` (string) - obrigatório
    - `email` (string) - obrigatório
    - `senha` (string) - obrigatório
  - Resposta:
    - `201 Created`: Retorna as informações do usuário criado
    - `400 Bad Request`: Caso tenha uma requsição inválida
    - `500 Internal Server Error`: Caso ocorra algum erro no servidor em momento de cadatro de usuário
   
- **`GET /usuario`**
   - Descrição: Lista as informaçoes do usuário logado.
   - Resposta:
     - `200 OK`: Irá mostrar os dados do usuário.
     - `500 Internal Server Error`: Caso ocorra algum erro no servidor em momento do detalhamento do usuário logado
       
- **`PUT /usuario`**
  - Descrição: Irá atualizar as informações do usuário logado.
  - Parâmetros:
    - `nome` (string) - obrigatório
    - `email` (string) - obrigatório
    - `senha` (string) - obrigatório
  - Resposta:
    - `200 Ok`: Retornará as informações atualizadas do usuário logado
    - `400 Bad Request`: Caso seja fornecido uma informação inválida
    - `500 Internal Server Error`: Caso tenha ocorrido um problema no servidor ao acessar a rota de atualização do usuário logado
      
- **`DELETE /usuario`**
  - Descrição: Irá remover o registro do Usuário logado.
  - Resposta:
    - `200 OK`: Irá remover o usuário logado.
    - `500 Internal Server Error`: Caso tenha corrido um problema no servidor ao acessar a rota de exclusão do usuário logado

### Tarefas
- **`POST /tarefas`**
  - Descrição: Cria uma tarefa no registro de tarefas do usuário logado.
  - Parâmetros:
    - `titulo` (string) - obrigatório
    - `descrição` (string) - obrigatório
    - `status` (string) - obrigatório
  - Resposta:
    - `201 Created`: Retorna as informações da tarefa criada
    - `400 Bad Request`: Caso tenha uma requsição inválida
    - `500 Internal Server Error`: Caso ocorra algum erro no servidor em momento de cadastro de tarefas
      
- **`GET /tarefas`**
   - Descrição: Lista as informações das tarefas do usuário logado.
   - Resposta:
     - `200 OK`: Irá mostrar as tarefas do usuário logado.
     - `500 Internal Server Error`: Caso ocorra algum erro no servidor em momento do detalhamento das tarefas do usuário logado
       
- **`PUT /tarefas/:idta`**
  - Descrição: Irá atualizar as informações de uma tarefa do usuário logado.
  - Parâmetros:
    - `titulo` (string) - obrigatório
    - `descrição` (string) - obrigatório
    - `status` (string) - obrigatório
  - Resposta:
    - `200 Ok`: Retornará as informações atualizadas da tarefa do usuário logado
    - `400 Bad Request`: Caso seja fornecido uma informação inválida
    - `500 Internal Server Error`: Caso tenha ocorrido um problema no servidor ao acessar a rota de atualização da tarefa do usuario logado
      
- **`DELETE /tarefas/:idta`**
  - Descrição: Irá remover o registro de uma tarefa do usuário logado.
  - Resposta:
    - `200 OK`: A tarefa desejada foi removida
    - `500 Internal Server Error`: Caso tenha corrido um problema no servidor ao acessar a rota de exclusão de tarefa do usuário logado
         
## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção de bug (`git checkout -b feature/nova-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Contato

- Nome: **Samuel da Rosa Arruda**
- Email: arrudarosasamuel@gmail.com
- LinkedIn: [Meu LinkedIn](https://www.linkedin.com/in/samuel-da-rosa-arruda-1b3676201/)

---

Desenvolvido com ❤️ por [Samuel da Rosa Arruda](https://github.com/samuelrosaarruda).
