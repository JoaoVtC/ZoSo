create database zoso;
use zoso;

create table usuario(
idUsuario int primary key auto_increment,
nickname varchar(45) not null, 
email varchar(90) not null unique,
senha varchar(45) not null);

create table pontuacaoTotal(
idPontuacao int auto_increment,
fkUsuario int,
constraint pkPontCad primary key (idPontuacao, fkUsuario),
acertosTntv1 int,
acertosTntv2 int,
acertosTntv3 int,
acertosTntv4 int,
acertosTntv5 int,
errosTotais int,
acertosTotais int, 
seqAcertos int,
naoRespondido int,
constraint FkPontCad foreign key (fkUsuario) references usuario(idUsuario)
);

create table pontuacaoAlbum(
fkPontuacao int,
fkPontuacaoUsuario int,
albumMaisAcertado varchar(45),
albumMaisErrado varchar(45),
constraint pkPontAlbum primary key (fkPontuacao, fkPontuacaoUsuario),
constraint constPontAlbum foreign key (fkPontuacao) references pontuacaoTotal(idPontuacao),
constraint constUserPont foreign key (fkPontuacaoUsuario) references pontuacaoTotal(fkUsuario)
);



insert into usuario (nickname,email, senha) values ("Jhaoder", "jhaoder@gmail.com", "1234aB!");
insert into pontuacaoTotal (fkUsuario, acertosTntv1, acertosTntv2, acertosTntv3, acertosTntv4, acertosTntv5, errosTotais, seqAcertos,
naoRespondido) values (1, 1, 3, 2, 5, 2, 4, 1);
insert into pontuacaoAlbum (fkPontuacao, fkPontuacaoUsuario, albumMaisAcertado, albumMaisErrado) values
(1, 1, "Led Zeppellin II", "Presence");
