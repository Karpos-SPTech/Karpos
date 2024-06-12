CREATE DATABASE karposTech;

USE karposTech;

create table leads(
idLeads int primary key auto_increment,
nomeEmpresa varchar(45),
email varchar(100),
assunto varchar(100),
mensagem varchar(500)
);

create table empresa(
token int primary key auto_increment,
nome varchar(45),
cnpj char(14),
cep CHAR(9),
numEnd varchar(45),
complemento varchar(45)) auto_increment=1555;

insert into empresa values
(default,'Caramico Cloud','01456963849','03560-340','450A','Jardim Santa Helena'),
(default,'Karpos Ltda','85738693019','04980-400','320','Bairro do Limoeiro');

select * from empresa;

-- Tabela que armazenara os dados do produtor de algodão
create table usuario (
    idUsuario  int primary key auto_increment,
    nome varchar(50) not null,
    email varchar(100) not null unique,
    senha varchar(30) not null,
     cpf char(14),
	telefone varchar(11),
    fkToken int,
    constraint fkEmpresaUsuario foreign key(fktoken) references empresa(token)
);

select * from usuario;
create table parametros(
idParametro int primary key auto_increment,
tempMax float,
tempIdealMin float,
tempIdealMax float,
tempIdeal float,
tempMin float,
umidadeMin float,
umidadeIdealMin float,
umidadeIdealMax float,
umidadeMax float
)auto_increment=100;

insert into parametros values
(default,25,30,16,34,60,70,80,80,80);

select * from parametros;

-- Tabela responsavel por armazenar os dados da fazenda
create table fazenda (
	idFazenda int primary key auto_increment,
    nome varchar(45),
	cep char(9) not null,
    numEnd varchar(45),
	qtdLotes int,
    	fkEmpresa int, constraint fkEmpresaFazenda
    foreign key(fkEmpresa) references empresa(token),
		fkParametro int, constraint fkFazendaParametro
	foreign key (fkParametro) references parametros(idParametro)
);
insert into fazenda values
(default,'Cotton Farm 1','08234-350','335',5,1555,100),
(default,'Cotton Farm','07560-432','960B',8,1556,100),
(default,'Fazenda Almeida','07639-345','490A',4,1556,100);

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
(default,'lm35Temperatura',2),
(default,'dht11Umidade',3);

create table capturaDoSensor(
idDados int auto_increment,
fkSensor int, primary key(idDados,fkSensor),
dtHorario datetime,
temperatura decimal (5,2),
umidade decimal (5,2),
constraint fkdadosSensor foreign key (fkSensor)
references sensor(idSensor));

select * from capturaDoSensor;

insert into capturaDoSensor values
(2,5,now(),25,80),
(3,5,now(),27,70),
(4,5,now(),29,60);

insert into capturaDoSensor values
(5,5,now(),60,10);

select * from capturaDoSensor;

select dtHorario, temperatura, umidade from capturaDoSensor;

-- dados fora do padrão -------------------------------------------------------------------------------------------------------------------------------------

SELECT concat('O(a) produtor(a) ', nome, ' possui o email ', email) 
FROM usuario;

select * from sensor;

create view vw_captura as
select s.idSensor , s.tipo, d.dtHorario as 'Horario de captura', round(d.temperatura*d.valorMockado,2) as Valor from dados as d join sensor as s order by idSensor;

create view vw_estavel as
SELECT  d.fkSensor as sensor,p.tempMin as tempMin,d.temperatura as temperatura, p.tempMax as tempMax
FROM parametros as p join dados as d
WHERE temperatura >= tempMin
AND temperatura <= tempMax;

create view vw_alerta as
SELECT  d.fkSensor as sensor, p.tempMin as tempMin,d.temperatura as valor, p.tempMax as tempMax
FROM parametros as p join dados as d
WHERE d.temperatura <= tempMin
or d.temperatura >= tempMax and d.fkSensor in(1,2) order by d.fkSensor;

-- Trás todos os dados que estão dentro dos parâmetros estabelecidos
select * from vw_estavel;

-- Trás todos os dados que estão fora dos parâmetros estabelecidos
select * from vw_alerta;

-- Trás todos os dados capturados, tanto temperatura quanto umidade
select * from vw_captura;
