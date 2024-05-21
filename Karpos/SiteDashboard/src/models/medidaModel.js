var database = require("../database/config");

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
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
