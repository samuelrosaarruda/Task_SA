const knex = require('../conexao');
const jwt = require('jsonwebtoken')
const { hash, compare } = require('bcryptjs');
const senhaJwt = process.env.SENHA_JWT;

const cadastroUsuario = async (req, res) => {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha || nome.trim().length === 0) {

        return res.status(400).json({ mensagem: 'Todos os dados devem ser fornecidos' });

    }

    try {

        const emailJaCadastrado = await knex('usuarios').where({ email }).first()

        if (emailJaCadastrado) {

            return res.status(400).json({ mensagem: "Este email pertence a outro usuario, informe um email valido para o registro" });

        }

        const senhaCriptografada = await hash(senha, 10);

        await knex('usuarios').insert({ nome, email, senha: senhaCriptografada })

        return res.status(204).send();

    } catch (error) {

        return res.status(500).json({ mensagem: 'Erro interno no sevidor ao cadastrar Usuario' });

    }
}

const login = async (req, res) => {

    const { email, senha } = req.body;

    if (!email || !senha) {

        return res.status(400).json({ mensagem: 'Os dados email e senha são nescessarios para o login' });

    }

    try {

        const usuarioEncontrado = await knex('usuarios').where({ email }).first();

        if (!usuarioEncontrado) {

            return res.status(404).json({ mensagem: "Usuario não encontrado" })

        }

        const senhaValidada = await compare(senha, usuarioEncontrado.senha);

        if (!senhaValidada) {
            return res.status(400).json({ mensagem: "Email ou senha inválida" });
        }

        const token = await jwt.sign({ id: usuarioEncontrado.id }, senhaJwt, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = usuarioEncontrado;

        return res.json({
            usuario: dadosUsuario,
            token
        });

    } catch (error) {

        return res.status(500).json({ mensagem: "Erro interno no servidor ao logar usuario" });

    }
}

const detalharUsuarioLogado = async (req, res) => {
    const { id } = req.usuario;
    try {
        const perfilUsuario = await knex('usuarios').where({ id }).returning("*");
        const { senha: _, ...dadosUsuario } = perfilUsuario[0]
        return res.json(dadosUsuario);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor ao detalhar usuario logado" });
    }
}

const atualizaUsuario = async (req, res) => {

    const usuario = req.usuario;
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ menagem: "Os dados nome, senha e email devem ser fornecidos para a atualização da conta" });
    }

    try {

        const emailJaExiste = await knex('usuarios').where({ email }).first();

        if (emailJaExiste) {
            return res.status(400).json({ mensagem: "Este email já esta vinculado em uma conta" });
        }

        const senhaJaCadastrada = await compare(senha, usuario.senha);

        if (senhaJaCadastrada) {
            return res.status(400).json({ mensagem: "Esta senha já foi cadastrada" });
        }

        const senhaCriptografada = await hash(senha, 10);

        const atualizacao = await knex('usuarios').update({
            nome, email, senha: senhaCriptografada
        }).where({ id: usuario.id }).returning('*');

        const { senha: _, ...usuarioAtualizado } = atualizacao[0];

        return res.json(usuarioAtualizado);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro interno no servidor ao atualizatar usuario logado" });

    }
}

const excluirUsuario = async (req, res) => {
    const { id } = req.usuario;
    try {
        await knex('usuarios').where({ id }).delete();
        return res.json({ mensagem: "Usuario Excluido com sucesso." });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor ao excluir usuario Logado" });
    }



}

module.exports = {
    cadastroUsuario,
    login,
    detalharUsuarioLogado,
    atualizaUsuario,
    excluirUsuario
}