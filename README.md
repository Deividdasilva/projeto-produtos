
# # CRUD DE PRODUTOS
Este projeto consiste em uma API backend desenvolvida em JAVA(Spring Boot), e um frontend em Angular. Utiliza PostgreSQL como sistema de banco de dados, com Docker e Docker Compose para simplificar a configuração e a execução do ambiente de desenvolvimento.

## Requisitos

- Docker
- Docker Compose

## Configuração do Ambiente

### Clonando o Repositório

```bash
git clone https://github.com/Deividdasilva/projeto-produtos
cd projeto-produtos
```

### Iniciando os Containers

Utilize o Docker Compose para iniciar os containers:

```bash
docker-compose up -d
```

### Executando os Scripts SQL

**Após iniciar os containers, conecte-se ao container do PostgreSQL:**
docker exec -it postgres-db psql -U postgres

**Dentro do cliente PostgreSQL, crie o banco de dados:**

CREATE DATABASE api_produtos;

**Execute os comandos SQL para criar as tabelas e constraints:**

*Criação da tabela de categorias*

CREATE TABLE categoria (
    id BIGSERIAL NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    CONSTRAINT categoria_pk PRIMARY KEY (id)
);

*Criação da tabela de produtos*

CREATE TABLE produto (
    id BIGSERIAL NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    categoria_id BIGINT,
    CONSTRAINT produto_pk PRIMARY KEY (id),
    CONSTRAINT fk_categoria FOREIGN KEY (categoria_id) REFERENCES categoria (id)
);

### Acessando a Aplicação

- **Projeto Backend**: [http://localhost:8080](http://localhost:8080)
- **Projeto Frontend**: [http://localhost:4200](http://localhost:4200)

## Estrutura do Projeto

- `projeto-produtos/api-produtos`: Código-fonte da api.
- `projeto-produtos/frontend`: Código-fonte do Frontend.


### Rotas da API

**Categorias**
```bash
Listar todas as categorias
GET /categorias
Retorna todas as categorias cadastradas.

Buscar categoria por ID
GET /categorias/{id}
Retorna os detalhes de uma categoria específica.

Criar uma nova categoria
POST /categorias
Corpo da requisição (JSON):

json
Copiar código
{
  "titulo": "Nome da Categoria"
}
Atualizar uma categoria
PUT /categorias/{id}
Corpo da requisição (JSON):

json
Copiar código
{
  "titulo": "Novo Nome da Categoria"
}
Deletar uma categoria
DELETE /categorias/{id}

```


**Produtos**
```bash
Listar todos os produtos
GET /produtos
Retorna todos os produtos cadastrados.

Buscar produto por ID
GET /produtos/{id}
Retorna os detalhes de um produto específico.

Criar um novo produto
POST /produtos
Corpo da requisição (JSON):

json
Copiar código
{
  "titulo": "Nome do Produto",
  "descricao": "Descrição do Produto",
  "categoria_id": 1
}
Atualizar um produto
PUT /produtos/{id}
Corpo da requisição (JSON):

json
Copiar código
{
  "titulo": "Novo Nome do Produto",
  "descricao": "Nova Descrição do Produto",
  "categoria_id": 1
}
Deletar um produto
DELETE /produtos/{id}

```
