<?php
function checkAuth() {
    if (!isset($_GET['user_id'])) {
        echo json_encode(["status"=>"unauthorized"]);
        exit();
    }
}
?>