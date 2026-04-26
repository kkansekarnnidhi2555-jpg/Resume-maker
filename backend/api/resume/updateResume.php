<?php
include("../../config/db.php");

$data = json_decode(file_get_contents("php://input"), true);

$id = $data['id'];
$resume = json_encode($data['resume']);

$conn->query("UPDATE resumes SET data='$resume' WHERE id='$id'");
?>