var database = require("../database/config")

function autenticar(email, pwd) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, pwd)
    var instrucaoSql = `
        SELECT idUsuario, nickname, email FROM usuario WHERE email = '${email}' AND senha = '${pwd}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function pontuacao(idUsuario, tntv1, tntv2, tntv3, tntv4, tntv5,
    naoRespondido, seqAcertos,errosTotais, albumMaisAcertado, albumMaisErrado, qntdAcertos, qntdErros) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO pontuacaoTotal (fkUsuario, acertosTntv1, acertosTntv2, acertosTntv3, acertosTntv4, acertosTntv5,
            naoRespondido, errosTotais, seqAcertos) VALUES (${idUsuario}, ${tntv1}, ${tntv2}, ${tntv3}, ${tntv4}, ${tntv5}, ${naoRespondido}, ${errosTotais}, ${seqAcertos});   
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    .then(resPontuacaoTotal => {
        var idPontuacao = resPontuacaoTotal.insertId
           var instrucaoSql2 = `  INSERT INTO pontuacaoAlbum (fkPontuacao, fkPontuacaoUsuario, albumMaisAcertado, albumMaisErrado, acertosAlbumMaisAcertado, errosAlbumMaisErrado)
         VALUES (${idPontuacao}, ${idUsuario}, '${albumMaisAcertado}', '${albumMaisErrado}', ${qntdAcertos}, ${qntdErros});
 `  
        return database.executar(instrucaoSql2)
    })
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    database.executar(instrucaoSql2)

}


module.exports = {
    autenticar,
    pontuacao
};

