var database = require("../database/config");

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \t\t >> Função: cadastrar():", nome, email);
  
    var instrucaoSql = `
        INSERT INTO usuarios (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorEmail(email) {
    console.log("ACESSEI O USUARIO MODEL \n \t\t >> Função: buscarPorEmail():", email);
    
    var instrucaoSql = `
        SELECT id, nome, email, senha FROM usuarios WHERE email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarPorEmail
};