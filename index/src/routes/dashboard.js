var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/dashboard/:idUsuario", function (req, res) {
    dashboardController.obterPontuacao(req, res);
})


module.exports = router;