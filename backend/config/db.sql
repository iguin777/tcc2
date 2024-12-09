DROP DATABASE IF EXISTS gamejam;

CREATE DATABASE gamejam;
USE gamejam;

CREATE TABLE etec (
    id_etec INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE concurso (
    id_concurso INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    fk_etec_id INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    qtd_max_equipes INT NOT NULL,
    qtd_min_equipes INT NOT NULL,
    FOREIGN KEY (fk_etec_id) REFERENCES etec(id_etec)
);

CREATE TABLE equipe_tipo (
    id_tipo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    tipo_nome VARCHAR(100) NOT NULL
);

CREATE TABLE equipe (
    id_equipe INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    nome_engine VARCHAR(100) NOT NULL,
    fk_concurso_id INT NOT NULL,
    fk_tipo_id INT NOT NULL,
    FOREIGN KEY (fk_concurso_id) REFERENCES concurso(id_concurso),
    FOREIGN KEY (fk_tipo_id) REFERENCES equipe_tipo(id_tipo)
);

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) NOT NULL,
    fk_equipe_id INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    usuario_rm VARCHAR(10) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    etec VARCHAR(100) NOT NULL,
    FOREIGN KEY (fk_equipe_id) REFERENCES equipe(id_equipe)
);

CREATE TABLE jogo (
    id_jogo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(200) NOT NULL,
    nome_engine VARCHAR(100) NOT NULL
);

CREATE TABLE equipes_concorrentes (
    fk_id_concorrentes INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    fk_lider_id INT NOT NULL,
    fk_jogo_id INT NOT NULL,
    FOREIGN KEY (fk_id_concorrentes) REFERENCES equipe(id_equipe),
    FOREIGN KEY (fk_lider_id) REFERENCES usuario(id_usuario),
    FOREIGN KEY (fk_jogo_id) REFERENCES jogo(id_jogo)
);

INSERT INTO etec (nome) VALUES
('ETEC São Paulo'),
('ETEC Campinas'),
('ETEC São José dos Campos');

INSERT INTO concurso (fk_etec_id, data_inicio, data_fim, nome, qtd_max_equipes, qtd_min_equipes) VALUES
(1, '2024-01-15', '2024-01-20', 'Concurso A', 10, 5),
(2, '2024-02-10', '2024-02-15', 'Concurso B', 8, 4),
(3, '2024-03-05', '2024-03-10', 'Concurso C', 12, 6);

INSERT INTO equipe_tipo (tipo_nome) VALUES
('Desenvolvedora'),
('Designer'),
('Programadora');

INSERT INTO equipe (nome, nome_engine, fk_concurso_id, fk_tipo_id) VALUES
('Equipe A', 'Unity', 1, 1),
('Equipe B', 'Unreal Engine', 1, 2),
('Equipe C', 'Godot', 2, 3),
('Equipe D', 'Unity', 3, 1);

INSERT INTO usuario (nome, fk_equipe_id, email, telefone, usuario_rm, senha, etec) VALUES
('Alice Silva', 1, 'alice.silva@example.com', '11999999999', 'RM001', '123', 'ETEC São Paulo'),
('Bob Santos', 1, 'bob.santos@example.com', '11988888888', 'RM002', 'senha123', 'ETEC São Paulo'),
('Carol Oliveira', 2, 'carol.oliveira@example.com', '11977777777', 'RM003', 'senha123', 'ETEC Campinas'),
('David Costa', 3, 'david.costa@example.com', '11966666666', 'RM004', 'senha123', 'ETEC São José dos Campos');

INSERT INTO jogo (nome, nome_engine) VALUES
('Jogo A', 'Unity'),
('Jogo B', 'Unreal Engine'),
('Jogo C', 'Godot');

INSERT INTO equipes_concorrentes (fk_lider_id, fk_jogo_id) VALUES
(1, 1),
(2, 2),
(3, 3);