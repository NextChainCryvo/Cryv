create database cryv

create table user(
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL, 
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)