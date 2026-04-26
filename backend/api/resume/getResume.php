<?php
include("../../config/db.php");

$user_id = $_GET['user_id'];

$result = $conn->query("SELECT * FROM resumes WHERE user_id='$user_id'");

$data = [];

while($row = $result->fetch_assoc()){
  $data[] = $row;
}

echo json_encode($data);
?>