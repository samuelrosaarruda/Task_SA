const express = require('express');
const { criarTarefas, listarTarefas, atulizarTarefa, deletarTarefa } = require('./controlador/tarefas');
const { cadastroUsuario, atualizaUsuario, excluirUsuario, login, detalharUsuarioLogado } = require('./controlador/usuarios');
const vericarLogin = require('./intermediario/login');

const rota = express();

rota.post('/usuario', cadastroUsuario);
rota.post('/login', login)

rota.use(vericarLogin);

rota.get('/usuario', detalharUsuarioLogado);
rota.put('/usuario', atualizaUsuario);
rota.delete('/usuario', excluirUsuario);

rota.post('/tarefas', criarTarefas);

rota.get('/tarefas', listarTarefas);
rota.put('/tarefas/:id', atulizarTarefa);
rota.delete('/tarefas/:id', deletarTarefa)

module.exports = rota