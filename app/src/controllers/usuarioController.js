var usuarioModel = require("../models/usuarioModel");
const bcrypt = require("bcrypt");

function autenticar(req, res) {
   const { email, senha } = req.body;

    usuarioModel.buscarPorEmail(email)
        .then(resultado => {
            if (resultado.length > 0) {
                const usuario = resultado[0];
                bcrypt.compare(senha, usuario.senha, function(err, coincide) {
                    if (coincide) {
                        res.json({
                            id: usuario.id,
                            email: usuario.email
                        });
                    } else {
                        res.status(403).send("Email ou senha inválidos");
                    }
                });
            } else {
                res.status(403).send("Email ou senha inválidos");
            }
        })
        .catch(erro => {
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    const { email, senha } = req.body;

    const saltRounds = 5;

    bcrypt.hash(senha, saltRounds, function (err, hash) {
        if (err) {
            console.error("Erro ao gerar hash:", err);
            return res.status(500).json({ erro: "Erro interno no servidor" });
        }


        usuarioModel.cadastrar(email, hash)
            .then(resultado => {
                res.status(201).json(resultado);
            })
            .catch(erro => {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    });
}

module.exports = {
    autenticar,
    cadastrar
}