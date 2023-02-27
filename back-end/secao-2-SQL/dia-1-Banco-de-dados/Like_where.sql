USE sakila;
SELECT * FROM film
WHERE title LIKE 'p%r';-- 

SELECT * FROM film
WHERE title LIKE '_C%';-- 

SELECT * FROM film
WHERE title LIKE '________';-- 

SELECT * FROM film
WHERE title LIKE 'E__%';-- 

SELECT * FROM film
WHERE title LIKE '%ace%';--

SELECT * FROM film
WHERE description LIKE '%china'; -- 

SELECT * FROM film
WHERE description LIKE '%girl%' AND title Like '%lord';--  

SELECT * FROM film
WHERE title LIKE '___gon%';-- 

USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';--

USE sakila;
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%'; 

USE sakila;
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';