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

Esta é uma API realizada para registros e gerenciamentos (CRUD) de tarefas e de usuarios.
Nele será possivel:
- Cadastrar Tarefas e Usuarios;
- Listar Tarefas e mostrar informação do Usuario Logado;
- Atualizar Tarefas e as informações do Usuario Logado;
- Excluir Tarefas e o registro do Usuario Logado;
- As Tarefas serão relacionadas com o Usurio Logado, permitindo assim as alterações das Tarefas de cada Usuario Logado.
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
    - `400 Bad Request`: Caso não seja enviada todas as informações, retornará: 'Todos os dados devem ser fornecidos'
    - `400 Bad Request`: Caso as informações estejam inválidas, retornará: 'Email ou senha inválida'
    - `404 Not Found`: Caso o usuario não esteja cadastrado no banco de dados, retornará: 'Usuario não encontrado'
      
- **`Intermediario verificaLogin`**
  - Descrição: Irá vericar se usuário esta logado, para a realização das modicações nas rotas de Usuários e de Tabelas.
  - Parâmetros:
    -`Token`: Nescessário fornecer o Token na função Bearer Token do Postman ou Insomnia.
  - Respostas:
    -`401`
### Usuários
- **`POST /usuario`**
  - Descrição: Cria um usuario.
  - Parâmetros:
    - `nome` (string) - obrigatório
    - `email` (string) - obrigatório
    - `senha` (string) - obrigatório
  - Resposta:
    - `201 Created`: Retorna a mensagem: 'Usuario cadastrado com sucesso'
    - `400 Bad Request`: Caso não seja enviada todas as informações, retornará: 'Todos os dados devem ser fornecidos'
    - `400 BAD Request`: Caso já exista um usuario cadastrado com o email enviado, retornará: 'Este email pertence a outro usuario, informe um email valido para o registro'
    - `500 Internal Server Error`: Caso ocorra algum erro no servidor em momento de cadatro de usuário, retornará: 'Erro interno no sevidor ao cadastrar Usuario'
   
  -**`GET /usuario`**
   - Descrição: Lista as informaçoes do usuário logado.
   - Resposta:
     - `200 OK`: Irá mostrar os dados do usuário.
     
## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature ou correção de bug (`git checkout -b feature/nova-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Contato

- Nome: Seu Nome
- Email: seu.email@example.com
- LinkedIn: [Seu LinkedIn](https://www.linkedin.com/in/seuusuario)

---

Desenvolvido com ❤️ por [Seu Nome](https://github.com/seuusuario).
