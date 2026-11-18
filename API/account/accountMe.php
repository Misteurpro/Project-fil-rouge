<?php
header('Content-type: application/json');

$value = $_SERVER['HTTP_X_AUTH_TOKEN'];

$req = $dbh -> prepare("SELECT * FROM `users` WHERE `apiToken` LIKE ?");
$req->bindValue(1, $value);
$req->execute();
$res = $req->fetch(PDO::FETCH_ASSOC);
echo json_encode($res);
