<?php
$link = 'mysql:host=localhost;dbname=db_products';
$user = 'root';
$password = '';
  try{
    $pdo = new PDO($link,$user,$password);
}catch (PDOException $err ){
   print '¡Error!:'. $err->getMessage(). '<br/>';
   die();
}
