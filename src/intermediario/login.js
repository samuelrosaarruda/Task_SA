const jwt = require('jsonwebtoken');
const knex = require('../conexao');
const senhaJwt = process.env.SENHA_JWT;

const vericarLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ mensagem: "Foreneça o token" })
    }

    const token = authorization.split(' ')[1];

    try {

        const { id } = await jwt.verify(token, senhaJwt);

        const usuarioEncontrado = await knex('usuarios').where({ id }).first();

        if (!usuarioEncontrado) {
            return res.status(404).json({ mensagem: "Usuario não encontrado" });
        }

        req.usuario = usuarioEncontrado;

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: "Usuario não atorizado" });
    }
}

module.exports = vericarLogin;