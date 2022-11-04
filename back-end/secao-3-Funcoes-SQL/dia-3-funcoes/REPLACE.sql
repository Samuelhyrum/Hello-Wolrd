SELECT UCASE('Oi, eu sou uma string');
SELECT UCASE(title) FROM sakila.film LIMIT 10;

SELECT LCASE('Oi, eu sou uma string');
SELECT LCASE(title) FROM sakila.film LIMIT 10;

SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres');
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;

SELECT LEFT('Oi, eu sou uma string', 6);
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;

SELECT RIGHT('Oi, eu sou uma string', 6);
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;

SELECT CHAR_LENGTH('Oi, eu sou uma string');
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;

SELECT SUBSTRING('Oi, eu sou uma string', 8, 2);
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;

SELECT SUBSTRING('Oi, eu sou uma string', 5);
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

SELECT UCASE('trybe');

SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'Você já ouviu falar do DuckDuckGo?',
'Você já ouviu falar do Google?');

SELECT CHAR_LENGTH('Uma frase qualquer');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');