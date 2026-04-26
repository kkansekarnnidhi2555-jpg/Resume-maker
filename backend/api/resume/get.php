<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../../config/db.php';

if (isset($_GET['email'])) {
    $email = $conn->real_escape_string($_GET['email']);
    
    $sql = "SELECT data FROM resumes WHERE email = '$email'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode(["status" => "success", "resumeData" => json_decode($row['data'])]);
    } else {
        echo json_encode(["status" => "error", "message" => "No resume found for this email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Email is required to fetch resume."]);
}
?>
