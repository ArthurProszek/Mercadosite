Banco de Dados

O banco de dados utiliza MySQL e é composto por quatro tabelas principais: users, produtos, carrinho, e compra. Além disso, um campo adicional perfil foi adicionado à tabela users, diferenciando os tipos de usuários entre "admin" e "usuario".

Tabela users:

Armazena informações de autenticação dos usuários, como nome de usuário, e-mail, senha e perfil.
O campo perfil define se o usuário é um administrador ou um usuário padrão.

Tabela produtos:

Armazena informações dos produtos à venda, como nome, preço e descrição.
Cada produto possui um identificador único.

Tabela carrinho:

Gerencia as informações sobre os carrinhos de compras, associando produtos aos usuários.

Tabela compra:

Registra as compras realizadas, com uma referência ao carrinho.

API

A API é desenvolvida com Node.js utilizando o framework Express, e suporta diversas operações CRUD (criar, ler, atualizar e deletar).

Rotas para users:

POST /cadastro/cadastrar: Cria um novo usuário.
GET /cadastro/listar: Lista todos os usuários.
PUT /cadastro/editar/:id: Atualiza os dados de um usuário.
DELETE /cadastro/deletar/:id: Deleta um usuário.
Rotas para produtos:
POST /produtos/user: Cria um novo produto.
GET /produtos/listar: Lista todos os produtos.
PUT /produtos/editar/:id: Atualiza os dados de um produto.
DELETE /produtos/deletar/:id: Deleta um produto.

Login:

POST /login: Verifica o e-mail e a senha do usuário e, se corretos, autentica o login.

Frontend
Foi esboçado um formulário de cadastro e login em JavaScript, utilizando fetch para enviar requisições para a API.
Cadastrar Usuário: Uma função para capturar os dados de um formulário e enviar uma requisição POST para a rota /cadastro/cadastrar.
Login: Função semelhante, mas para login, enviando as credenciais para a rota /login.



Banco de Dados

O banco de dados utiliza MySQL e é composto por quatro tabelas principais: users, produtos, carrinho, e compra. Além disso, um campo adicional perfil foi adicionado à tabela users, diferenciando os tipos de usuários entre "admin" e "usuario".

Tabela users:

Armazena informações de autenticação dos usuários, como nome de usuário, e-mail, senha e perfil.
O campo perfil define se o usuário é um administrador ou um usuário padrão.

Tabela produtos:

Armazena informações dos produtos à venda, como nome, preço e descrição.
Cada produto possui um identificador único.

Tabela carrinho:

Gerencia as informações sobre os carrinhos de compras, associando produtos aos usuários.

Tabela compra:

Registra as compras realizadas, com uma referência ao carrinho.

API

A API é desenvolvida com Node.js utilizando o framework Express, e suporta diversas operações CRUD (criar, ler, atualizar e deletar).

Rotas para users:

POST /cadastro/cadastrar: Cria um novo usuário.
GET /cadastro/listar: Lista todos os usuários.
PUT /cadastro/editar/:id: Atualiza os dados de um usuário.
DELETE /cadastro/deletar/:id: Deleta um usuário.
Rotas para produtos:
POST /produtos/user: Cria um novo produto.
GET /produtos/listar: Lista todos os produtos.
PUT /produtos/editar/:id: Atualiza os dados de um produto.
DELETE /produtos/deletar/:id: Deleta um produto.

Login:

POST /login: Verifica o e-mail e a senha do usuário e, se corretos, autentica o login.

Frontend
Foi esboçado um formulário de cadastro e login em JavaScript, utilizando fetch para enviar requisições para a API.
Cadastrar Usuário: Uma função para capturar os dados de um formulário e enviar uma requisição POST para a rota /cadastro/cadastrar.
Login: Função semelhante, mas para login, enviando as credenciais para a rota /login.



Banco de Dados

O banco de dados utiliza MySQL e é composto por quatro tabelas principais: users, produtos, carrinho, e compra. Além disso, um campo adicional perfil foi adicionado à tabela users, diferenciando os tipos de usuários entre "admin" e "usuario".

Tabela users:

Armazena informações de autenticação dos usuários, como nome de usuário, e-mail, senha e perfil.
O campo perfil define se o usuário é um administrador ou um usuário padrão.

Tabela produtos:

Armazena informações dos produtos à venda, como nome, preço e descrição.
Cada produto possui um identificador único.

Tabela carrinho:

Gerencia as informações sobre os carrinhos de compras, associando produtos aos usuários.

Tabela compra:

Registra as compras realizadas, com uma referência ao carrinho.

API

A API é desenvolvida com Node.js utilizando o framework Express, e suporta diversas operações CRUD (criar, ler, atualizar e deletar).

Rotas para users:

POST /cadastro/cadastrar: Cria um novo usuário.
GET /cadastro/listar: Lista todos os usuários.
PUT /cadastro/editar/:id: Atualiza os dados de um usuário.
DELETE /cadastro/deletar/:id: Deleta um usuário.
Rotas para produtos:
POST /produtos/user: Cria um novo produto.
GET /produtos/listar: Lista todos os produtos.
PUT /produtos/editar/:id: Atualiza os dados de um produto.
DELETE /produtos/deletar/:id: Deleta um produto.

Login:

POST /login: Verifica o e-mail e a senha do usuário e, se corretos, autentica o login.

Frontend
Foi esboçado um formulário de cadastro e login em JavaScript, utilizando fetch para enviar requisições para a API.
Cadastrar Usuário: Uma função para capturar os dados de um formulário e enviar uma requisição POST para a rota /cadastro/cadastrar.
Login: Função semelhante, mas para login, enviando as credenciais para a rota /login.



Mercadomistico banco de dados:

Introdução Este projeto configura um banco de dados chamado "mercadomistico" para gerenciar usuários, produtos, carrinhos de compras e registros de compras em um mercado místico. O banco de dados utiliza MySQL para armazenar e manipular os dados relacionados.

Pré-requisitos - MySQL instalado em seu sistema. - Ferramenta para executar scripts SQL, como MySQL Workbench ou linha de comando MySQL. - Um ambiente de desenvolvimento configurado para interagir com o banco de dados, se necessário.

Instruções de Instalação

Passo 1: Configurar o Banco de Dados 1. Abra uma conexão com o servidor MySQL. 2. Crie o banco de dados executando o seguinte comando: sql CREATE DATABASE mercadomistico; 3. Selecione o banco de dados para uso: sql USE mercadomistico;

Passo 2: Criar as Tabelas 4. Execute os seguintes scripts SQL para criar as tabelas necessárias:

create table users(
    idusers int primary key auto_increment not null,
    username varchar(50) not null,
    nome varchar(255),
    email varchar (255) not null,
    senha varchar(255) not null
);


explicação tabela usuário: Em resumo, a tabela users armazena informações essenciais para a autenticação e identificação dos usuários, incluindo um identificador único (idusers), um nome de usuário (username), um nome completo opcional (nome), um e-mail obrigatório (email) e uma senha (senha).

CREATE TABLE produtos (
    idprodutos INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    descricao VARCHAR(1000) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    preco INT NOT NULL
);
 explicação tabela produtos: 
A tabela produtos é projetada para armazenar informações sobre produtos. Cada produto tem um identificador único (idprodutos), uma descrição (descricao), um nome (nome) e um preço (preco). O identificador é auto-incrementado para garantir que cada produto tenha um identificador único e crescente. Todos os campos são obrigatórios, ou seja, não podem ser deixados em branco.

CREATE TABLE carrinho (
    idcarrinho INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    valortotal INT NOT NULL,
    itens INT NOT NULL,
    usuarioid INT NOT NULL,
    produto INT NOT NULL,
    FOREIGN KEY (usuarioid) REFERENCES users(idusers),
    FOREIGN KEY (produto) REFERENCES produtos(idprodutos)
);
    explicação tabela carrinho:
    A tabela carrinho é projetada para armazenar informações sobre os carrinhos de compras dos usuários. Cada carrinho tem um identificador único (idcarrinho), um valor total (valortotal), a quantidade de itens (itens), e associações com um usuário (usuarioid) e um produto (produto). As colunas usuarioid e produto são chaves estrangeiras, garantindo que eles correspondam a usuários e produtos existentes.

CREATE TABLE compra (
    idCompra INT AUTO_INCREMENT PRIMARY KEY,
    valor_compra INT,
    carrinho_id INT,
    FOREIGN KEY (carrinho_id) REFERENCES carrinho(idcarrinho)
);
 explicação tabela compra:
A tabela compra armazena informações sobre as compras realizadas. Cada compra é identificada de forma única pela coluna idCompra, e tem um valor total associado (valor_compra). A tabela também se relaciona com a tabela carrinho através da coluna carrinho_id, que é uma chave estrangeira. Essa relação garante que cada compra esteja vinculada a um carrinho existente na tabela carrinho.

Testando o Banco de Dados

Para verificar se as tabelas foram criadas corretamente, execute os comandos:

Para listar todas as tabelas no banco de dados mercadomistico:

SHOW TABLES;
Para visualizar a estrutura de uma tabela específica (substituir <table_name> pelo nome da tabela, como users, produtos, carrinho, ou compra):

DESCRIBE <table_name>;
Inserção de Dados de Exemplo

Dados de exemplo para testar o banco de dados.

sql Inserindo um usuário de exemplo INSERT INTO users (username, nome, email, senha) VALUES ('usuario', 'Nome Sobrenome', 'email@examplo.com', 'senha123');

Inserindo um produto de exemplo INSERT INTO produtos (descricao, nome, preco) VALUES ('Poção de cura básica', 'Poção de Cura', 50);

Inserindo um item no carrinho INSERT INTO carrinho (valortotal, itens, usuarioid, produto) VALUES (50, 1, 1, 1);

Registrando uma compra INSERT INTO compra (valor_compra, carrinho_id) VALUES (50, 1);

api:
 

 const express = require('express');
const cors = require('cors');

 express: Framework para criar aplicações web e APIs de forma rápida e fácil.
cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing), que permite que recursos sejam compartilhados entre diferentes origens (domínios).


configuração do servidor 

const porta = 3000;
const app = express();

Define a porta onde o servidor Express irá escutar as requisições (porta 3000).
Cria uma instância do aplicativo Express.

javascript

app.use(cors());
app.use(express.json());

 app.use(cors()): Habilita CORS para que a API possa ser acessada por aplicações de diferentes domínios.
app.use(express.json()): Faz com que o Express interprete requisições com payload JSON.


app.listen(porta, () => console.log(`Rodando na porta ${porta}`));

Faz o servidor escutar a porta definida e imprime uma mensagem no console indicando que o servidor está rodando.

conexão com o banco de dados:

const connection = require('./db_config.js');

Importa o módulo de configuração de banco de dados. Esse módulo deve configurar e exportar uma conexão com o banco de dados MySQL.


rotas para cadastro de usuários:

app.post('/cadastro/cadastrar', (request, response) => {
    let params = [
        request.body.idusers,
        request.body.username,
        request.body.nome,
        request.body.email,
        request.body.senha
    ];

    let query = "INSERT INTO users(idusers, username, nome, email, senha) VALUES(?,?,?,?,?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});


app.post('/cadastro/cadastrar'): Rota para criar um novo usuário.
request.body: Obtém os dados do corpo da requisição (id, nome, username, email e senha).
connection.query(query, params, callback): Executa a query SQL para inserir um novo usuário na tabela users.
Retorna um status 201 se a inserção for bem-sucedida, caso contrário, retorna um status 400.

listar usuários:

app.get('/cadastro/listar', (request, response) => {
    const query = "SELECT * FROM users";

    connection.query(query, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.get('/cadastro/listar'): Rota para listar todos os usuários.
Executa uma query SQL para selecionar todos os registros da tabela users.
Retorna um status 200 com os dados dos usuários se a consulta for bem-sucedida, caso contrário, retorna um status 400.



editar usuário:



app.put('/cadastro/editar/:id', (request, response) => {
    let params = [
        request.body.nome,
        request.body.senha,
        request.params.id
    ];

    let query = "UPDATE users SET nome = ?, senha = ? WHERE idusers = ?;";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro na atualização dos dados",
                data: err
            });
        }

        response.status(200).json({
            success: true,
            message: "Dados atualizados com sucesso",
            data: results
        });
    });
});


app.put('/cadastro/editar/:id'): Rota para editar um usuário existente.
Atualiza os campos nome e senha do usuário com base no id fornecido na URL.
Retorna um status 200 se a atualização for bem-sucedida, caso contrário, retorna um status 400.

deletar usuário:

app.delete('/cadastro/deletar/:id', (request, response) => {
    let id = request.params.id;

    let query = "DELETE FROM users WHERE idusers = ?;";

    connection.query(query, [id], (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.delete('/cadastro/deletar/:id'): Rota para deletar um usuário baseado no id fornecido.
Executa uma query SQL para remover o usuário da tabela users.
Retorna um status 200 se a exclusão for bem-sucedida, caso contrário, retorna um status 400.


rotas para cadastro de produtos:


app.post('/produtos/user', (request, response) => {
    let params = [
        request.body.nome,
        request.body.preco,
        request.body.descricao
    ];

    let query = "INSERT INTO produtos(nome, preco, descricao) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.post('/produtos/user'): Rota para criar um novo produto.
Adiciona um novo produto à tabela produtos com nome, preço e descrição fornecidos.
Retorna um status 201 se a inserção for bem-sucedida, caso contrário, retorna um status 400.


rotas  para cadastro de produtos:

app.post('/produtos/user', (request, response) => {
    let params = [
        request.body.nome,
        request.body.preco,
        request.body.descricao
    ];

    let query = "INSERT INTO produtos(nome, preco, descricao) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.post('/produtos/user'): Rota para criar um novo produto.
Adiciona um novo produto à tabela produtos com nome, preço e descrição fornecidos.
Retorna um status 201 se a inserção for bem-sucedida, caso contrário, retorna um status 400.



listar produtos:

app.get('/produtos/listar', (request, response) => {
    const query = "SELECT * FROM produtos";

    connection.query(query, (err, results) => {
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem sucesso",
                data: err
            });
        }
    });
});

app.get('/produtos/listar'): Rota para listar todos os produtos.
Executa uma query SQL para selecionar todos os registros da tabela produtos.
Retorna um status 200 com os dados dos produtos se a consulta for bem-sucedida, caso contrário, retorna um status 400.


editar produto:

app.put('/produtos/editar/:id', (request, response) => {
    let params = [
        request.body.nome,
        request.body.preco,
        request.body.descricao,
        request.params.id
    ];

    let query = "UPDATE produtos SET nome = ?, preco = ?, descricao = ? WHERE idprodutos = ?;";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro na atualização dos dados",
                data: err
            });
        }

        response.status(200).json({
            success: true,
            message: "Dados atualizados com sucesso",
            data: results
        });
    });
});


app.put('/produtos/editar/:id'): Rota para editar um produto existente.
Atualiza os campos nome, preco, e descricao do produto com base no id fornecido na URL.
Retorna um status 200 se a atualização for bem-sucedida, caso contrário, retorna um status 400.

exemplo de api:


criar um usuário
Método: POST
Formato do Corpo da Requisição (Request Body)

json 
{
  "nome": "nome do user",
  "senha": "senha do user"
}

 requisição 
POST /api/usuarios HTTP/1.1
Host: exemplo.com
Content-Type: application/json

{
  "nome": "gabriel",
  "senha": "senha123"
}

json 
{
  "id": 1,
  "nome": "gabriel",
  "senha": "senha123",
  "mensagem": "Usuário criado com sucesso."
}



