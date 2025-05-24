var quizModel = require("../models/quizModel");

function pontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idServer;
    var tntv1 = req.body.tntv1Server;
    var tntv2 = req.body.tntv2Server;
    var tntv3 = req.body.tntv3Server;
    var tntv4 = req.body.tntv4Server;
    var tntv5 = req.body.tntv5Server;
    var naoRespondido = req.body.naoRespondidosServer;
    var seqAcertos = req.body.seqAcertosServer;
    var errosTotais = req.body.errosTotaisServer
    var albumMaisAcertado = req.body.albumMaisAcertadoServer
    var albumMaisErrado = req.body.albumMaisErradoServer
    var qntdAcertos = req.body.qntdAcertosAlbumServer
    var qntdErros = req.body.qntdErrosAlbumServer

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.pontuacao(idUsuario,tntv1, tntv2, tntv3, tntv4, tntv5,
            naoRespondido, seqAcertos, errosTotais, albumMaisAcertado, albumMaisErrado, qntdAcertos, qntdErros
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