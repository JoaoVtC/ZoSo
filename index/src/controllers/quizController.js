var quizModel = require("../models/quizModel");

function pontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var tntv1 = req.body.tntv1Server;
    var tntv2 = req.body.tntv2Server;
    var tntv3 = req.body.tntv3Server;
    var tntv4 = req.body.tntv4Server;
    var tntv5 = req.body.tntv5Server;
    var naoRespondido = req.body.naoRespondidosServer;
    var seqAcertos = req.body.seqAcertosServer;
    var errosTotais = req.body.errosTotaisServer


        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.pontuacao(tntv1, tntv2, tntv3, tntv4, tntv5,
            naoRespondido, seqAcertos, errosTotais
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

module.exports = {
    pontuacao
}