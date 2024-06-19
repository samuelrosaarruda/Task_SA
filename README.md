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

1. Instale as dependencias dos Pré-requisitos (para instalação do npm

3. Com o VS Code aberto dentro da pasta do projeto clonado, digite no terminal do VS Code:

   ```bash
   npm install
   ```

4. Instale as dependências:

   ```bash
   npm install
   ```

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
- `npm test`: Executa os testes.

### Exemplos de uso

Para interagir com a API, você pode usar ferramentas como [Postman](https://www.postman.com/) ou [cURL](https://curl.se/). Veja os endpoints disponíveis abaixo.

## Endpoints

### Autenticação

- **`POST /api/auth/login`**
  - Descrição: Autentica um usuário.
  - Parâmetros:
    - `email` (string) - obrigatório
    - `password` (string) - obrigatório
  - Resposta:
    - `200 OK`: Retorna o token JWT e informações do usuário.
    - `401 Unauthorized`: Credenciais inválidas.

### Usuários

- **`GET /api/users`**
  - Descrição: Retorna uma lista de usuários.
  - Parâmetros:
    - Nenhum
  - Resposta:
    - `200 OK`: Lista de usuários.

- **`POST /api/users`**
  - Descrição: Cria um novo usuário.
  - Parâmetros:
    - `name` (string) - obrigatório
    - `email` (string) - obrigatório
    - `password` (string) - obrigatório
  - Resposta:
    - `201 Created`: Usuário criado com sucesso.
    - `400 Bad Request`: Parâmetros inválidos.

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
