create database zoso;
use zoso;

create table usuario(
idUsuario int primary key auto_increment,
nickname varchar(45), 
email varchar(90),
telefoneCel char(11),
foto varchar(180));

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

create table album(
idAlbum int primary key auto_increment,
nome varchar(45),
duracao time,
dtLancamento date,
foto varchar(180));

create table musica(
idMusica int primary key auto_increment,
nome varchar(45),
duracao time, 
link varchar(180),
fkAlbum int,
constraint fkAlbumMusica foreign key (fkAlbum) references album(idAlbum)
);

create table pontuacaoAlbum(
fkPontuacao int,
fkPontuacaoUsuario int,
fkAlbum int,
acertosAlbum int,
errosAlbum int,
constraint pkPontAlbum primary key (fkPontuacao, fkAlbum),
constraint constPontAlbum foreign key (fkPontuacao) references pontuacaoTotal(idPontuacao),
constraint constUserPont foreign key (fkPontuacaoUsuario) references pontuacaoTotal(fkUsuario),
constraint constAlbum foreign key (fkAlbum) references album(idAlbum)
);


INSERT INTO album (nome, duracao, dtLancamento, foto) VALUES
('Led Zeppelin', '00:44:00', '1969-01-12', 'https://i.imgur.com/JrP8YjO.jpg'),
('Led Zeppelin II', '00:42:00', '1969-10-22', 'https://i.imgur.com/ULpKZbM.jpg'),
('Led Zeppelin III', '00:43:00', '1970-10-05', 'https://i.imgur.com/LKVKQBh.jpg'),
('Led Zeppelin IV', '00:42:00', '1971-11-08', 'https://i.imgur.com/6Dh3Pyz.jpg'),
('Houses of the Holy', '00:41:00', '1973-03-28', 'https://i.imgur.com/6s3WYPz.jpg'),
('Physical Graffiti', '01:22:00', '1975-02-24', 'https://i.imgur.com/IUje4h6.jpg'),
('Presence', '00:44:00', '1976-03-31', 'https://i.imgur.com/5Y8XuZJ.jpg'),
('In Through the Out Door', '00:42:00', '1979-08-15', 'https://i.imgur.com/qyc47Em.jpg'),
('Coda', '00:33:00', '1982-11-19', 'https://i.imgur.com/XvBFi1J.jpg');

INSERT INTO musica (nome, duracao, link, fkAlbum) VALUES
('Good Times Bad Times', '00:02:46', 'https://www.youtube.com/watch?v=auYKkz0l1bI', 1),
('Babe Im Gonna Leave You', '00:06:41', 'https://www.youtube.com/watch?v=ZQgYn23Xvck', 1),
('You Shook Me', '00:06:28', 'https://www.youtube.com/watch?v=9a6z6ZzKc1k', 1),
('Dazed and Confused', '00:06:26', 'https://www.youtube.com/watch?v=auYKkz0l1bI', 1),
('Your Time Is Gonna Come', '00:04:34', 'https://www.youtube.com/watch?v=auYKkz0l1bI', 1),
('Black Mountain Side', '00:02:12', 'https://www.youtube.com/watch?v=auYKkz0l1bI', 1),
('Communication Breakdown', '00:02:27', 'https://www.youtube.com/watch?v=auYKkz0l1bI', 1),
('I Can\'t Quit You Baby', '00:04:42', 'https://www.youtube.com/watch?v=auYKkz0l1bI', 1),
('How Many More Times', '00:08:28', 'https://www.youtube.com/watch?v=auYKkz0l1bI', 1);


