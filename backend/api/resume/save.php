<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../../config/db.php';

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->email) && !empty($data->resumeData)) {
    $email = $conn->real_escape_string($data->email);
    $resumeJson = $conn->real_escape_string(json_encode($data->resumeData));

    // Upsert
    $sql = "INSERT INTO resumes (email, data) VALUES ('$email', '$resumeJson') ON DUPLICATE KEY UPDATE data='$resumeJson'";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Resume saved successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error saving resume: " . $conn->error]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Incomplete data. Email is required to save."]);
}
?>
