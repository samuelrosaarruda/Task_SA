create database banco_tarefas;

create table usuarios(
    id serial primary key,
    nome text not null,
    email text unique not null,
    senha text not null
);

create table tarefas(
    idta serial primary key,
    titulo text not null,
    descricao text not null,
    status text not null,
    idusuario integer references usuarios(id)
);