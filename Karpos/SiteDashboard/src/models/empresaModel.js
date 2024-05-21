var database = require("../database/config");

function buscarPorId(token) {
  var instrucaoSql = `SELECT * FROM empresa WHERE token = '${token}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(cep, cnpj) {
  var instrucaoSql = `INSERT INTO empresa (cep, cnpj) VALUES ('${cep}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
