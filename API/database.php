<?php

$host = "localhost";
$db_name = "redwire";

$dsn = "mysql:host=$host;dbname=$db_name;charset=utf8mb4";
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
$dbh = new PDO($dsn, "api.website.redwire", "(z_[BMwlw9zvU)9z", $options);
