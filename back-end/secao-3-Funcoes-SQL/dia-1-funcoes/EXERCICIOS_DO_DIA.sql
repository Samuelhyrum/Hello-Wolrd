SELECT MAX(salary) FROM employees;

SELECT MAX(salary) - MIN(salary) FROM employees;

SELECT job_id, AVG(salary) AS 'average_salary'
FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

SELECT SUM(salary) FROM employees;

SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary),2)
FROM employees; 

SELECT job_id, COUNT(*)
AS 'total'
FROM employees
WHERE job_id = "it_prog";

SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id
HAVING job_id = "it_prog";

SELECT job_id, AVG(salary)
AS 'avg_salary'
FROM employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY avg_salary DESC;

SELECT department_id, AVG(salary) 'average_salary', COUNT(*) 'number_employees'
FROM employees
GROUP BY department_id 
HAVING number_employees > 10;

SET SQL_SAFE_UPDATES = 0;
UPDATE employees
SET phone_number = REPLACE(phone_number, '515','777')
WHERE phone_number LIKE '515%';
SET SQL_SAFE_UPDATES = 1;

SELECT * FROM employees
WHERE LENGTH(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) 'hire_year'
FROM employees;

SELECT employee_id, first_name, DAY(hire_date) 'hire_year'
FROM employees;

SELECT employee_id, first_name, MONTH(hire_date) 'hire_year'
FROM employees;

SELECT UPPER(CONCAT(first_name, " ", last_name))
FROM employees;

SELECT last_name, hire_date
FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE() , hire_date) 'days_worked'
FROM hr.employees;