CREATE DATABASE mercadomistico;
 
use mercadomistico;
 
create table users(
	idusers int primary key auto_increment not null,
    username varchar(50) not null,
	nome varchar(255),
    email varchar (255) not null,
    senha varchar(255) not null
);
 
create table produtos(
	idprodutos int primary key auto_increment not null,
    descricao VARCHAR(1000) not null,
    nome VARCHAR(255) not null,
    preco INT not null
    );
 
create table carrinho(
	idcarrinho int primary key auto_increment not null,
    valortotal int not null,
    itens int not null,
    usuarioid int not null,
    produto int not null,
    foreign key (usuarioid) references users(idusers),
    foreign key (produto) references produtos(idprodutos)
);
 
create table compra (
	idCompra int auto_increment primary key,
    valor_compra int,
    carrinho_id int,
    foreign key (carrinho_id) REFERENCES carrinho (idcarrinho)
);

alter table users add column perfil enum('admin', 'usuario') default('usuario');
insert into users (username,nome,email,senha,perfil)
VALUES("Zekapk", "Arthur", "Arthurprk@gmail.com", "123", "admin");
SELECT idusers,username,nome,email,senha,perfil FROM users WHERE email = "Arthurprk@gmail.com";

select * from users;