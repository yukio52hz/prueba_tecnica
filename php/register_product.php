<?php
include_once 'conection.php';
$code= $_POST['code'];
$name = $_POST['name'];
$price = $_POST['price'];
$amount = $_POST['amount'];

$check_name= 'SELECT * FROM `tb_products` WHERE name =?';
$sent_check= $pdo->prepare($check_name);
$sent_check->execute(array($name));
$check_result= $sent_check->fetch();


if($check_result){
    echo false;
    die();
}else{
    $data_insert = 'INSERT INTO `tb_products` (`code`, `name`, `price`, `amount`) VALUES (:code,:name,:price,:amount)';
    $data_insert = $pdo->prepare($data_insert);
    $data_insert->bindParam(':code',$code);
    $data_insert->bindParam(':name',$name);
    $data_insert->bindParam(':price',$price);
    $data_insert->bindParam(':amount',$amount);
    $data_insert->execute();
    echo true;
};