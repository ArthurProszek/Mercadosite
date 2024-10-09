const express = require('express');
const cors = require('cors');

// Definir a porta
const porta = 3000;
const app = express();

// Habilitar o cors e utilizar json
app.use(cors());
app.use(express.json());
    
// Testar
app.listen(porta, () => console.log(`Rodando na porta ${porta}`));

const connection = require('./db_config.js');

// Rotas para cadastro de usuários
app.post('/cadastro/cadastrar', (request, response) => {
    let params = [
        null,  // idusers é auto_increment
        request.body.username,  
        request.body.nome || request.body.username, 
        request.body.email,
        request.body.senha
    ];

    let query = "INSERT INTO users(idusers, username, nome, email, senha) VALUES(?,?,?,?,?);";

    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Usuário cadastrado com sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Erro ao cadastrar usuário",
                data: err  // Isso retornará o erro específico
            });
        }
    });
});


// Rotas para cadastro de produtos
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

app.delete('/produtos/deletar/:id', (request, response) => {
    let id = request.params.id;

    let query = "DELETE FROM produtos WHERE idprodutos = ?;";

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

app.post('/login', (request, response) => {
    let params = [request.body.email];

    let query = "SELECT idusers, username, nome, email, senha, perfil FROM users WHERE email = ?";

    connection.query(query, params, (err, results) => {
        if (results.length > 0) {
            let senhaDigita = request.body.senha;  // Corrigido de "password" para "senha"
            let senhaBanco = results[0].senha;

            if (senhaBanco === senhaDigita) {
                response.status(200).json({
                    success: true,  // Corrigido "sucess" para "success"
                    message: "Sucesso",
                    data: results[0]
                });
            } else {
                response.status(400).json({
                    success: false,  // Corrigido "sucess" para "success"
                    message: "Verifique sua senha!"
                });
            }
        } else {
            response.status(400).json({
                success: false,  // Corrigido "sucess" para "success"
                message: "Email não cadastrado"
            });
        }
    });
});
