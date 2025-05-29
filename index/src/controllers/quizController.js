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

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.pontuacao(idUsuario,tntv1, tntv2, tntv3, tntv4, tntv5,
            naoRespondido, seqAcertos, errosTotais, albumMaisAcertado, albumMaisErrado
        )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar a pontuação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

function obterPontuacao(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as pontuações do usuário`);

    quizModel.obterPontuacao(idUsuario).then(function (resultado) {
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
    pontuacao,
    obterPontuacao
}