<?php
include("../../config/db.php");

$id = $_GET['id'];

$conn->query("DELETE FROM resumes WHERE id='$id'");
?>