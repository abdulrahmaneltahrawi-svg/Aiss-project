<?php
header("Content-Type: application/json; charset=UTF-8");
require_once _DIR_ . "/db.php";

function respond($success, $message, $extra = []) {
    echo json_encode(array_merge([
        "success" => $success,
        "message" => $message
    ], $extra), JSON_UNESCAPED_UNICODE);
    exit;
}

$result = $conn->query("
    SELECT id, title, cover_image
    FROM user_articles
    ORDER BY id DESC
");

if (!$result) {
    respond(false, "Server error");
}

$articles = [];

while ($row = $result->fetch_assoc()) {
    $articles[] = $row;
}

respond(true, "Articles fetched successfully", [
    "articles" => $articles
]);
?>