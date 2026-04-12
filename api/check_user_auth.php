<?php
ini_set('session.use_strict_mode', 1);

session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => '',
    'secure' => false, // خليها true في production مع HTTPS
    'httponly' => true,
    'samesite' => 'Lax'
]);

session_start();

header("Content-Type: application/json; charset=UTF-8");

if (isset($_SESSION["user_id"], $_SESSION["user_name"], $_SESSION["user_email"])) {
    echo json_encode([
        "authenticated" => true,
        "user" => [
            "id" => $_SESSION["user_id"],
            "name" => $_SESSION["user_name"],
            "email" => $_SESSION["user_email"]
        ]
    ], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode([
        "authenticated" => false
    ], JSON_UNESCAPED_UNICODE);
}
?>