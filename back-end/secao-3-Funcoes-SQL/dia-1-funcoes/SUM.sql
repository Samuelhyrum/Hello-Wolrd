SELECT AVG(length) AS 'Média de Duração' FROM film;

SELECT MIN(length) AS 'Duração Mínima' FROM film;

SELECT MAX(length) AS 'Duração Máxima' FROM film;

SELECT SUM(length) AS 'Tempo de Exibição Total' FROM film;

SELECT COUNT(*) AS 'Filmes Registrados' FROM film;


SELECT AVG(length) AS 'Média de Duração',
       MIN(length) AS 'Duração Mínima',
       MAX(length) AS 'Duração Máxima',
       SUM(length) AS 'Tempo de Exibição Total',
       COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;