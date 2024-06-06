var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/captura", function (req, res) {
    medidaController.captura(req, res);
});

router.get("/tempo-real/:idFazenda", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;