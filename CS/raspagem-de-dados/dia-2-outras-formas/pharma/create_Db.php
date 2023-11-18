    <?php
    $servername = "localhost"; // Host do MySQL
    $username = "root"; // Nome de usuário do MySQL
    $password = "password"; // Senha do MySQL

    // Cria uma conexão ao MySQL
    $conn = new mysqli($servername, $username, $password);

    // Verifica a conexão
    if ($conn->connect_error) {
        die("Erro na conexão: " . $conn->connect_error);
    }


    $dbname = "php_db";

    // SQL para criar o novo banco de dados
    $sql = "CREATE DATABASE $dbname";

    if ($conn->query($sql) === TRUE) {
        echo "Banco de dados criado com sucesso!";
    } else {
        echo "Erro ao criar o banco de dados: " . $conn->error;
    }

    // Fecha a conexão
    $conn->close();
    ?>
