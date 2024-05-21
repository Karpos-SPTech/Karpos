var database = require("../database/config");

function buscarfazendaPorEmpresa(token) {

  var instrucaoSql = `SELECT * FROM usuario a WHERE fkToken = ${token}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(token, nome) {
  
  var instrucaoSql = `INSERT INTO (nome, fkToken) usuario VALUES (${nome}, ${token})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarfazendaPorEmpresa,
  cadastrar
}
