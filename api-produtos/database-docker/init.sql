-- -- Criação do banco de dados
CREATE DATABASE api_produtos;

-- -- Usar o banco de dados recém-criado
\c api_produtos;

-- Criação da tabela de categorias
CREATE TABLE categoria (
    id BIGSERIAL NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    CONSTRAINT categoria_pk PRIMARY KEY (id)
);

-- Criação da tabela de produtos
CREATE TABLE produto (
    id BIGSERIAL NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    categoria_id BIGINT,
    CONSTRAINT produto_pk PRIMARY KEY (id),
    CONSTRAINT fk_categoria FOREIGN KEY (categoria_id) REFERENCES categoria (id)
);
