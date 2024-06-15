const knex = require('../conexao');

const criarTarefas = async (req, res) => {
    const { id } = req.usuario;
    const { titulo, descricao, status } = req.body;

    if (!titulo || !descricao || !status) {
        return res.status(400).json({ mensagem: "Todos os campos devem ser fornecidos." });
    }

    try {

        const tarefaEncontrada = await knex('tarefas').where({ idusuario: id, titulo }).first();
        if (tarefaEncontrada) {
            return res.status(400).json({ mensagem: "Já existe uma tarefa com este titulo" });
        }

        await knex('tarefas').insert({ titulo, descricao, status, idusuario: id });

        return res.status(201).json({ mensagem: "Tarefa registrada com sucesso" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro interno de servidor ao cadastrar taferefa." });
    }
}

const listarTarefas = async (req, res) => {
    const { id, nome } = req.usuario;
    try {
        const tarefas = await knex("tarefas").where({ idusuario: id }).returning('*');

        return res.json({
            usuario: nome,
            tarefas
        });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro no servidor ao listar as tarefas do usuario logado" });
    }
}

const atualizarTarefa = async (req, res) => {
    const { id } = req.usuario;
    const { idta } = req.query;
    const { titulo, descricao, status } = req.body;
    if (!titulo || !descricao || !status) {
        return res.status(400).json({ mensagem: "Todos os campos devem ser fornecidos" })
    }

    try {
        const tarefaEncontrada = await knex('tarefas').where({idta, idusuario:id}).first();
        
        if(!tarefaEncontrada){
            return res.status(404).json({mensagem:'Tarefa Não encontrada, verifique o id da tarefa desejada e tente novamente.'});
        }
        await knex('tarefas').where({idta, idusuario:id}).update(titulo, descricao, status);
        
        res.json({mensagem:'Tarefa Atualizada com Sucesso!'});
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro no servidor ao atualizar Tarefa" });
    }
}

const deletarTarefa = async (req, res) => {

}

module.exports = {
    criarTarefas,
    listarTarefas,
    atualizarTarefa,
    deletarTarefa
}