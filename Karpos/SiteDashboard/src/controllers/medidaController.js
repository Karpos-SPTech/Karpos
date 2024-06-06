var medidaModel = require("../models/medidaModel");

function captura(req, res) {
    medidaModel.captura()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json({ umidade: resultado[resultado.length - 1].umidade,
                    temperatura:resultado[resultado.length - 1].temperatura,
                    horario: resultado[resultado.length - 1].horario
                 });
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error(erro);
            res.status(500).json(erro);
        });
}

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idFazenda = req.params.idFazenda;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idFazenda, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idFazenda = req.params.idFazenda;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idFazenda).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    captura,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}