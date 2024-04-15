CREATE DATABASE KarposTech;

USE KarposTech;

-- Tabela que armazenara os dados do produtor de algodão
CREATE TABLE cadastro (
    idCadastro INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(30) NOT NULL,
    documento VARCHAR(14) UNIQUE,
	telefone VARCHAR(11)
);

INSERT INTO cadastro VALUES
(default,'Fernanda Caramico','fernanda.caramico@sptech.school','fern4nd4c4r4m1c0','12345678900','11924356879'),
(default,'Mauricio Almeida','mauricio.almeida@sptech.school','m4ur1c104lmeid4','12345678901','11924356878'),
(default,'Alexandre Frizon','alexandre.frizzon@sptech.school','fern4nd4c4r4m1c0','12345678902','11924356877');

    CREATE TABLE login (            
    idUsuario INT AUTO_INCREMENT,
    fkCadastro INT, constraint pkCadastro PRIMARY KEY(idUsuario,fkCadastro),
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(30) NOT NULL,
	CONSTRAINT fkCadastroLogin
    FOREIGN KEY(fkCadastro) REFERENCES Cadastro(idCadastro)
);

INSERT INTO login VALUES
(default,'fernanda.caramico@sptech.school','fern4nd4c4r4m1c0',1);


select * from login join cadastro on login.fkCadastro = cadastro.idCadastro;

-- Tabela responsavel por armazenar os dados da fazenda
CREATE TABLE fazenda (
	idFazenda INT PRIMARY KEY AUTO_INCREMENT,
	cep CHAR(9) NOT NULL,
    numEnd varchar(45),
	Hectares FLOAT NOT NULL,
	qtdSensores INT NOT NULL,
    	fkUsuário INT, CONSTRAINT fkFazendaLogin
    FOREIGN KEY(fkUsuário) REFERENCES login(idUsuario)
);

INSERT INTO fazenda VALUES
(default,'Fazenda Caramico','08234-350','335',5.5,10),
(default,'Fazenda Almeida','07639-345','490A',4,3),
(default,'Fazenda Frizon','09235-23','90C',3.6,20);

CREATE TABLE sensor (
	idSensor INT AUTO_INCREMENT,
	fkTerreno int, constraint fkTerrenoSensor PRIMARY KEY(idSensor,fkTerreno),
    temperatura DECIMAL(4,2),
	umidade FLOAT,
    CONSTRAINT fkFazendaSensor
    FOREIGN KEY(fkTerreno) REFERENCES fazenda(idFazenda)
);

create table parametros(
idParametro int primary key auto_increment,
espécie varchar(45),
tempMax float,
tempMin float,
UmidadeMax float,
UmidadeMin float);








SELECT concat(nome, email) FROM produtor;

SELECT concat(nome, ' ', email) FROM produtor;

SELECT concat('O produtor ', nome, ' possui o email ', email) 
FROM produtor;
    
SELECT concat(nome, email) FROM usuario;

SELECT concat(nome, ' ', email) FROM produtor;

SELECT concat('O usuario ', nome, ' possui o nivel de acesso: ', nivel_de_acesso) 
FROM usuario;