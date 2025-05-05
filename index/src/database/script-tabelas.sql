create database zoso;
use zoso;

create table usuario(
idUsuario int primary key auto_increment,
nickname varchar(45), 
email varchar(90),
telefoneCel char(11));

create table pontuacaoTotal(
idPontuacao int,
fkUsuario int,
constraint pkPontCad primary key (idPontuacao, fkUsuario),
acertosTotais int,
errosTotais int,
seqAcertos int,
naoRespondido int,
constraint FkPontCad foreign key (fkUsuario) references usuario(idUsuario)
);

create table tentativa(
idTentativa int primary key auto_increment,
acertosTntv1 int,
acertosTntv2 int,
acertosTntv3 int,
acertosTntv4 int,
acertosTntv5 int,
fkPontuacao int,
fkPontuacaoUsuario int,
constraint fkPontTent foreign key (fkPontuacao) references pontuacaoTotal(idPontuacao),
constraint fkPontUserTent foreign key (fkPontuacaoUsuario) references pontuacaoTotal(fkUsuario)
);

create table pontuacaoAlbum(
fkPontuacao int,
fkPontuacaoUsuario int,
albumMaisAcertado varchar(45),
albumMenosAcertado varchar(45),
acertosAlbum int,
errosAlbum int,
constraint pkPontAlbum primary key (fkPontuacao, fkAlbum),
constraint constPontAlbum foreign key (fkPontuacao) references pontuacaoTotal(idPontuacao),
constraint constUserPont foreign key (fkPontuacaoUsuario) references pontuacaoTotal(fkUsuario),
);




