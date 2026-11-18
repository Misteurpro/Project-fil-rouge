<?php

require_once"../API/database.php";
require_once"../PHP/functions.php";


if(checkUserValide()){
	$link = grabActiveLink(true);
	$page_dir = '../API/';
	switch($link){
		case'/account/me':
			$page_dir.="account/accountMe.php";
			break;
		case'/account/edit':
			$page_dir.="account/accountEdit.php";
			break;
		case'/login':
			$page_dir.="login.php";
			break;
		case'/registration':
			$page_dir.="signin.php";
			break;
		default:
			http_response_code(404);
			break;
	}
	
		include_once$page_dir;
}
else{
	http_response_code(401);
}
