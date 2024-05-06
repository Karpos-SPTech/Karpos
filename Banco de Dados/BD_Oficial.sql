CREATE DATABASE karposTech;

USE karposTech;
create table empresa(
token int primary key auto_increment,
nome varchar(45),
cnpj char(14),
cep CHAR(9),
numEnd varchar(45),
complemento varchar(45));

insert into empresa values
(default,'Caramico Cloud','01456963849','03560-340','450A','Jardim Santa Helena'),
(default,'Karpos Ltda','85738693019','04980-400','320','Bairro do Limoeiro');

-- Tabela que armazenara os dados do produtor de algodão
create table usuario (
    idUsuario  int primary key auto_increment,
    nome varchar(50) not null,
    email varchar(100) not null unique,
    senha varchar(30) not null,
    documento varchar(14) unique,
	telefone varchar(11),
    fkToken int, constraint fkEmpresaUsuario
    foreign key(fktoken) references empresa(token)
);

insert into usuario values
(default,'Fernanda Caramico','fernanda.caramico@sptech.school','fern4nd4c4r4m1c0','12345678900','11924356879',1),
(default,'Mauricio Almeida','mauricio.almeida@sptech.school','m4ur1c104lmeid4','12345678901','11924356878',2);



create table parametros(
idParametro int primary key auto_increment,
tempIdealMin float,
tempIdealMax float,
tempMin float,
tempMax float,
UmidadeMax float,
UmidadeMin float
)auto_increment=100;

insert into parametros values
(default,25,30,16,34,60,70);

-- Tabela responsavel por armazenar os dados da fazenda
create table fazenda (
	idFazenda int primary key auto_increment,
    nome varchar(45),
	cep char(9) not null,
    numEnd varchar(45),
	hectares float not null,
	qtdSensores int not null,
    	fkEmpresa int, constraint fkEmpresaFazenda
    foreign key(fkEmpresa) references empresa(idEmpresa),
    
		fkParametro int, constraint fkFazendaParametro
	foreign key (fkParametro) references parametros(idParametro)
);
insert into fazenda values
(default,'Cotton Farm 1','08234-350','335',5,10,1,100),
(default,'Cotton Farm','07560-432','960B',8,15,1,100),
(default,'Fazenda Almeida','07639-345','490A',4,3,2,100);

select * from fazenda;

CREATE TABLE sensor (
	idSensor int auto_increment,
    tipo varchar(45), constraint chkTipo
    check (tipo in('dht11Umidade','lm35Temperatura')),
	fkFazenda int, constraint fkTerrenoSensor primary key(idSensor,fkFazenda),
    constraint fkFazendaSensor
    foreign key(fkFazenda) references fazenda(idFazenda)
);

insert into sensor values
(default,'lm35Temperatura',1),
(default,'lm35Temperatura',1),
(default,'dht11Umidade',1);

create table dados(
idDados int auto_increment,
fkSensor int, primary key(idDados,fkSensor),
dtHorario datetime,
valorSensor decimal (5,2),
valor decimal(4,2),
constraint fkdadosSensor foreign key (fkSensor)
references sensor(idSensor));

insert into dados values
(default,1,'2024-05-03 14:00:00',30.05,1),
(default,1,'2024-05-03 15:00:00',25.40,1),
(default,1,'2024-05-03 16:00:00',26.00,1),
(default,1,'2024-05-03 16:30:00',24.90,1),
(default,1,'2024-05-03 16:40:00',19.55,1),
(default,2,'2024-05-04 19:00:00',28.12,0.8),
(default,2,'2024-05-04 19:10:00',32.10,0.8),
(default,2,'2024-05-06 10:40:00',30.20,0.8),
(default,3,'2024-05-04 15:30:00',74.10,1),
(default,3,'2024-05-04 15:52:00',60.10,1),
(default,3,'2024-05-05 11:20:00',65.40,1),
(default,3,'2024-05-05 11:22:00',64.90,1);

insert into dados values
(default,1,'2024-05-03 14:00:00',38.05,1),
(default,1,'2024-05-03 14:00:00',39.40,1),
(default,2,'2024-05-03 14:00:00',15.12,1);

select * from dados;

SELECT concat('O(a) produtor(a) ', nome, ' possui o email ', email) 
FROM usuario;

select * from sensor;

create view captura as
select s.idSensor , s.tipo, d.dtHorario as 'Horario de captura', round(d.valorSensor*d.valor,2) as Valor from dados as d join sensor as s order by idSensor;

create view Estavel as
SELECT  p.tempMin as tempMin,d.valorSensor as valor, p.tempMax as tempMax
FROM parametros as p join dados as d
WHERE valorSensor >= tempMin
AND valorSensor <= tempMax;

create view Alerta as
SELECT  d.fkSensor as sensor, p.tempMin as tempMin,d.valorSensor as valor, p.tempMax as tempMax
FROM parametros as p join dados as d
WHERE d.valorSensor <= tempMin
or d.valorSensor >= tempMax and d.fkSensor in(1,2) order by d.fkSensor;

-- Trás todos os dados que estão dentro dos parâmetros estabelecidos
select * from Estavel;

-- Trás todos os dados que estão fora dos parâmetros estabelecidos
select * from Alerta;

-- Trás todos os dados capturados, tanto temperatura quanto umidade
select * from captura;