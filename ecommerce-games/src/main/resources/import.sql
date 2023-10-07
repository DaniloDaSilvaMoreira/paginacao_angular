-- This file allow to write SQL commands that will be emitted in test and dev.
-- The commands are commented as their support depends of the database
-- insert into myentity (id, field) values(1, 'field-1');
-- insert into myentity (id, field) values(2, 'field-2');
-- insert into myentity (id, field) values(3, 'field-3');
-- alter sequence myentity_seq restart with 4;

INSERT INTO estado (nome, sigla) VALUES ('Acre', 'AC');
INSERT INTO estado (nome, sigla) VALUES ('Amazonas', 'AM');
INSERT INTO estado (nome, sigla) VALUES ('Goiás', 'GO');
INSERT INTO estado (nome, sigla) VALUES ('Pará', 'PA');
INSERT INTO estado (nome, sigla) VALUES ('Tocantins', 'TO');

INSERT INTO cidade (nome, id_estado) VALUES ('Manaus', 2);
INSERT INTO cidade (nome, id_estado) VALUES ('Palmas', 5);
INSERT INTO cidade (nome, id_estado) VALUES ('Guaraí', 5);
INSERT INTO cidade (nome, id_estado) VALUES ('Belém', 4);
INSERT INTO cidade (nome, id_estado) VALUES ('Goiânia', 3);

INSERT INTO genero (nome) VALUES ('Terror');
INSERT INTO genero (nome) VALUES ('Action RPG');
INSERT INTO genero (nome) VALUES ('Plataforma');
INSERT INTO genero (nome) VALUES ('Puzzle');
INSERT INTO genero (nome) VALUES ('RPG de turno');
INSERT INTO genero (nome) VALUES ('Ação e Aventura');
INSERT INTO genero (nome) VALUES ('Hack and Slash');
INSERT INTO genero (nome) VALUES ('Tiro em Primeira Pessoa');

INSERT INTO developer (nome, anoFundacao, classificacao) VALUES ('Konami', '1970-10-22', 'SECOND_PARTY');
INSERT INTO developer (nome, anoFundacao, classificacao) VALUES ('Santa Monica Studio', '2002-01-12', 'FIRST_PARTY');
INSERT INTO developer (nome, anoFundacao, classificacao) VALUES ('Nintendo EPD', '1980-08-30', 'FIRST_PARTY');
INSERT INTO developer (nome, anoFundacao, classificacao) VALUES ('Naughty Dog', '1996-08-04', 'SECOND_PARTY');
INSERT INTO developer (nome, anoFundacao, classificacao) VALUES ('Bethesda', '1990-11-15', 'THIRD_PARTY');
INSERT INTO developer (nome, anoFundacao, classificacao) VALUES ('Studio MDHR', '2015-12-05', 'INDIE');

INSERT INTO fabricante (nome, anoFundacao) VALUES ('Nintendo', '1888-01-28');
INSERT INTO fabricante (nome, anoFundacao) VALUES ('Sony', '1977-11-09');
INSERT INTO fabricante (nome, anoFundacao) VALUES ('Microsoft', '1975-05-10');
INSERT INTO fabricante (nome, anoFundacao) VALUES ('SEGA', '1979-09-29');
INSERT INTO fabricante (nome, anoFundacao) VALUES ('Atari', '1978-02-11');

INSERT INTO plataforma (nome, descricao, anoLancamento, id_fabricante) 
       VALUES ('PlayStation 5', '', '2021-05-30', 2);
INSERT INTO plataforma (nome, descricao, anoLancamento, id_fabricante) 
       VALUES ('Nintendo Switch', '', '2017-01-22', 1);
INSERT INTO plataforma (nome, descricao, anoLancamento, id_fabricante) 
       VALUES ('XBox Series X', '', '2021-11-18', 3);
INSERT INTO plataforma (nome, descricao, anoLancamento, id_fabricante) 
       VALUES ('SEGA Dreamcast', '', '1998-04-17', 4);
INSERT INTO plataforma (nome, descricao, anoLancamento, id_fabricante)
       VALUES ('Windows', '', '2013-01-05', 3);
INSERT INTO plataforma (nome, descricao, anoLancamento, id_fabricante)
       VALUES ('PlayStation 4', '', '2016-06-09', 2);

INSERT INTO produto (nome, descricao, preco) VALUES ('Super Mario Odyssey', 'descricao exemplo', 289.90);
INSERT INTO produto (nome, descricao, preco) VALUES ('God of War Ragnarok', 'descricao exemplo', 193.51);
INSERT INTO produto (nome, descricao, preco) VALUES ('The Legend of Zelda: Tears of the Kingdom', 'descricao exemplo', 306.90);
INSERT INTO produto (nome, descricao, preco) VALUES ('The Last Of Us 2', 'descricao exemplo', 150.15);
INSERT INTO produto (nome, descricao, preco) VALUES ('Doom Eternal', 'descricao exemplo', 160.90);

INSERT INTO game (anoLancamento, id_developer, id) VALUES ('2017-10-27', 3, 1);
INSERT INTO game (anoLancamento, id_developer, id) VALUES ('2022-11-09', 2, 2);
INSERT INTO game (anoLancamento, id_developer, id) VALUES ('2023-05-17', 3, 3);
INSERT INTO game (anoLancamento, id_developer, id) VALUES ('2020-06-19', 4, 4);
INSERT INTO game (anoLancamento, id_developer, id) VALUES ('2020-03-20', 5, 5);

INSERT INTO generos_game (id_game, id_genero) VALUES (1, 3);
INSERT INTO generos_game (id_game, id_genero) VALUES (1, 6);
INSERT INTO generos_game (id_game, id_genero) VALUES (2, 6);
INSERT INTO generos_game (id_game, id_genero) VALUES (2, 7);
INSERT INTO generos_game (id_game, id_genero) VALUES (3, 4);
INSERT INTO generos_game (id_game, id_genero) VALUES (3, 6);
INSERT INTO generos_game (id_game, id_genero) VALUES (3, 2);
INSERT INTO generos_game (id_game, id_genero) VALUES (4, 1);
INSERT INTO generos_game (id_game, id_genero) VALUES (5, 8);
INSERT INTO generos_game (id_game, id_genero) VALUES (5, 1);
INSERT INTO generos_game (id_game, id_genero) VALUES (5, 3);
INSERT INTO generos_game (id_game, id_genero) VALUES (5, 6);

INSERT INTO plataformas_game (id_game, id_plataforma) VALUES (1, 2);
INSERT INTO plataformas_game (id_game, id_plataforma) VALUES (2, 1);
INSERT INTO plataformas_game (id_game, id_plataforma) VALUES (2, 5);
INSERT INTO plataformas_game (id_game, id_plataforma) VALUES (3, 2);
INSERT INTO plataformas_game (id_game, id_plataforma) VALUES (4, 6);
INSERT INTO plataformas_game (id_game, id_plataforma) VALUES (5, 1);
INSERT INTO plataformas_game (id_game, id_plataforma) VALUES (5, 2);

INSERT INTO usuario (nome, cpf, email, login, senha, perfil) VALUES ('José Alencar', '09112332145', 'jose_alencar@hotmail.com', 'JoseAlen', '1234', 'USER');
INSERT INTO usuario (nome, cpf, email, login, senha, perfil) VALUES ('João Aguiar', '89114182345', 'joao_aguia@gmail.com', 'Joao123', 'senha', 'ADMIN');
INSERT INTO usuario (nome, cpf, email, login, senha, perfil) VALUES ('Luísa Soares', '19429301284', 'luisa1263@hotmail.com', 'B1az3', 'luisa789', 'USER');
INSERT INTO usuario (nome, cpf, email, login, senha, perfil) VALUES ('Julia Ramos', '92874291092', 'julia.ra@gmail.com', 'Juh', 'Juh276', 'USER');

INSERT INTO telefone (codigoarea, numero, id_usuario) VALUES ('011', '98456-7812', 1);
INSERT INTO telefone (codigoarea, numero, id_usuario) VALUES ('061', '99901-5842', 1);
INSERT INTO telefone (codigoarea, numero, id_usuario) VALUES ('061', '99933-0572', 1);
INSERT INTO telefone (codigoarea, numero, id_usuario) VALUES ('063', '99933-0572', 2);
INSERT INTO telefone (codigoarea, numero, id_usuario) VALUES ('078', '98203-3301', 3);
INSERT INTO telefone (codigoarea, numero, id_usuario) VALUES ('092', '98382-0912', 3);
INSERT INTO telefone (codigoarea, numero, id_usuario) VALUES ('012', '99928-0912', 4);
INSERT INTO telefone (codigoarea, numero, id_usuario) VALUES ('071', '99283-8723', 4);

INSERT INTO noticia (titulo, conteudo, dataPublicacao, autor, topicoPrincipal)
       VALUES ('Nostalgia total: 7 games que eram sucesso em lan houses',
'Os jogadores mais antigos vão se lembrar do King of Dragon Pass, lançado para PC e Mac em 1999 (posteriormente para iOS em 2011 e para Android em 2014). Ele acabou tendo uma sequência em 2018, chamada Six Ages. E agora, uma terceira obra está surpreendendo a indústria: Six Ages 2.

O ano de 2023 viu o surgimento de apenas três jogos, que conseguiram obter a média quase perfeita de 96/100 no Metacritic, site agregador de classificação de jogos. Entre estes três títulos, dois nomes conhecidos estão no topo: Baldurs Gate III e The Legend of Zelda: Tears of the Kingdom. Porém, o desconhecido Six Ages 2: Lights Going Out, game desenvolvido pela A Sharp e publicado pela Kitfox Games, se meteu no meio.', '2023-09-30', 'Danilo da Silva', 'CURIOSIDADES');
INSERT INTO noticia (titulo, dataPublicacao, autor, topicoPrincipal)
       VALUES ('Lançamentos: Games que você precisa jogar em outubro', '2023-10-03', 'Erick Santos', 'LANCAMENTO');
INSERT INTO noticia (titulo, dataPublicacao, autor, topicoPrincipal)
       VALUES ('NÃO ESQUEÇA NESTA TERÇA: Epic Games Store solta 2 jogos de graça', '2023-10-03', 'Luís Felipe', 'EVENTO');
INSERT INTO noticia (titulo, dataPublicacao, autor, topicoPrincipal)
       VALUES ('Total War: Pharaoh tem lançamento adiado na loja da Epic Games', '2023-09-30', 'Emannuel Oliveira', 'ATUALIZACAO');