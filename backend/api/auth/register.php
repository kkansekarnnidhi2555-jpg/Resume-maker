<?php
include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$password = md5($data['password']);

$conn->query("INSERT INTO users(email,password) VALUES('$email','$password')");
?>