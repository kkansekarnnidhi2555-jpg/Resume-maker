<?php
include("../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$user_id = $data['user_id'];
$resume = json_encode($data['resume']);

$conn->query("INSERT INTO resumes(user_id,data) VALUES('$user_id','$resume')");
?>
