<?php
$user = 'root';
$password = 'root';
$db = 'diplom-bd';
$host = 'localhost';
$port = 8888;

$link = mysqli_init();
$success = mysqli_real_connect(
   $link,
   $host,
   $user,
   $password,
   $db,
   $port
);
// $connect = mysqli_connect( host:'localhost', user:'root', password:'', database:'diplom-bd');
$mysql = new mysqli($host, $user, $password, $db);
  
$prod= mysqli_query( $connect , query:"SELECT * FROM `orderdetail`");
var_dump($prod);

if (!$connect){
  echo 'eror';}
