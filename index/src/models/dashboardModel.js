function obterPontuacao(idUsuario){
    var instrucaoSql = `SELECT * FROM pontuacaoTotal
    join pontuacaoAlbum
    on fkUsuario = fkPontuacaoUsuario and 
    fkPontuacao = idPontuacao
    WHERE fkUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
    obterPontuacao
}