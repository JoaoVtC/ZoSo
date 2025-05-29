var database = require("../database/config")
var idPontuacao;

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
    naoRespondido, seqAcertos,errosTotais, albumMaisAcertado, albumMaisErrado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO pontuacaoTotal (fkUsuario, acertosTntv1, acertosTntv2, acertosTntv3, acertosTntv4, acertosTntv5,
            naoRespondido, errosTotais, acertosTotais, seqAcertos) VALUES (${idUsuario}, ${tntv1}, ${tntv2}, ${tntv3}, ${tntv4}, ${tntv5}, ${naoRespondido}, ${errosTotais}, ${tntv1 + tntv2 + tntv3 + tntv4 + tntv5}, ${seqAcertos});   
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    .then(resPontuacaoTotal => {
        idPontuacao = resPontuacaoTotal.insertId
           var instrucaoSql2 = `  INSERT INTO pontuacaoAlbum (fkPontuacao, fkPontuacaoUsuario, albumMaisAcertado, albumMaisErrado)
         VALUES (${idPontuacao}, ${idUsuario}, '${albumMaisAcertado}', '${albumMaisErrado}');
 `  
        return database.executar(instrucaoSql2)
    })
 
  console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    database.executar(instrucaoSql2)

}

function obterPontuacao(idUsuario){
    var instrucaoSql = `SELECT * FROM pontuacaoTotal
    join pontuacaoAlbum
    on fkUsuario = fkPontuacaoUsuario and 
    fkPontuacao = idPontuacao
    WHERE fkUsuario = ${idUsuario}
    order by idPontuacao desc;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    pontuacao,
    obterPontuacao
};

