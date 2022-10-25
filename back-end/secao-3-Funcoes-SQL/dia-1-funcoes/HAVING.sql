SELECT active, COUNT(*)
FROM customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM customer
GROUP BY store_id, active;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

SELECT district, COUNT(*)
FROM address
GROUP BY district
ORDER BY COUNT(*) DESC;


SELECT rating, AVG(length) AS duracao_media
FROM film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) AS custo_substituicao
FROM sakila.film
GROUP by rating
HAVING custo_substituicao > 3950.50
ORDER BY custo_substituicao;