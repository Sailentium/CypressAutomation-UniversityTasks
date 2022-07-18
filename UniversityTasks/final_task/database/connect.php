<?php
$mysqli = mysqli_connect( $config["server"], $config["login"], $config["pass"], $config["db"]);  

if (!$mysqli) { printf("Ошибка при подключении к базе данных. Код ошибки: %s\n", mysqli_connect_error()); exit; 
} 
if (!$mysqli->set_charset("utf-8")) {printf("Ошибка при загрузке набора символов utf8: %s\n", $mysqli->error); exit();
}
?>