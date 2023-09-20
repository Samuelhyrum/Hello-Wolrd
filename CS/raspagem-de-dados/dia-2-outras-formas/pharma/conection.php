<?php

//Constantes para armazenamento das variáveis de conexão.
define('HOST', '127.0.0.1');
define('PORT', '3306');
define('DBNAME', 'php_db');
define('USER', 'root');
define('PASSWORD', 'password');

try {
	$dsn = new PDO("mysql:host=". HOST . ";port=".PORT.";dbname=" . DBNAME .";user=" . USER . ";password=" . PASSWORD);
    echo 'Login feito';
} catch (PDOException $e) {
	echo 'A conexão falhou e retornou a seguinte mensagem de erro: ' .$e->getMessage();
}
$dsn = null;