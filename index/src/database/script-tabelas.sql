create database zoso;
use zoso;

create table usuario(
idUsuario int primary key auto_increment,
nickname varchar(45) not null, 
email varchar(90) not null unique,
senha varchar(45) not null);

create table pontuacaoTotal(
idPontuacao int,
fkUsuario int,
constraint pkPontCad primary key (idPontuacao, fkUsuario),
acertosTntv1 int,
acertosTntv2 int,
acertosTntv3 int,
acertosTntv4 int,
acertosTntv5 int,
errosTotais int,
seqAcertos int,
naoRespondido int,
constraint FkPontCad foreign key (fkUsuario) references usuario(idUsuario)
);

create table pontuacaoAlbum(
fkPontuacao int,
fkPontuacaoUsuario int,
albumMaisAcertado varchar(45),
albumMaisErrado varchar(45),
acertosAlbumMaisAcertado int,
errosAlbumMaisErrado int,
constraint pkPontAlbum primary key (fkPontuacao, fkAlbum),
constraint constPontAlbum foreign key (fkPontuacao) references pontuacaoTotal(idPontuacao),
constraint constUserPont foreign key (fkPontuacaoUsuario) references pontuacaoTotal(fkUsuario),
);




