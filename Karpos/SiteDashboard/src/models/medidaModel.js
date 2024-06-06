var database = require("../database/config");

function captura() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function captura(): ")
    var instrucaoSql = `
    select dtHorario, temperatura, umidade, DATE_FORMAT(dtHorario,'%H:%i:%s') as horario from capturaDoSensor;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(idFazenda, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idFazenda}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idFazenda) {

    var instrucaoSql = `SELECT 
    tempIdealMax as temperatura, 
    UmidadeMax as umidade,
                        DATE_FORMAT(dtHorario,'%H:%i:%s') as momento_grafico, 
                        fkFazenda
                        FROM sensor join dados on fkSensor = idSensor WHERE fkFazenda = ${idFazenda} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    captura,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
