<?php

//used to get current link from the server
function grabActiveLink($for_api = false){
	
$raw_link = $_SERVER['REQUEST_URI'];

	if($for_api){
		$preprocessed_link = preg_split("/api/i", $raw_link)[1];
	}
	else{
		$preprocessed_link = $raw_link;
	}
	return explode("?", $preprocessed_link)[0];
}

function checkUserValide(){
	global $dbh;

	$value = $_SERVER['HTTP_X_AUTH_TOKEN'];

	$req = $dbh -> prepare("SELECT * FROM `users` WHERE `apiToken` LIKE ?");
	$req->bindValue(1, $value);
	$req->execute();
	$res = $req->fetch(PDO::FETCH_ASSOC);
	if($res != null){
		return true;
	}
	return false;
}
