<?php
header("Content-Type: application/json; charset=UTF-8");
include "db.php";

function respond($success, $message, $extra = []) {
    echo json_encode(array_merge([
        "success" => $success,
        "message" => $message
    ], $extra), JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_input($data) {
    return trim($data);
}

$name = isset($_POST["name"]) ? clean_input($_POST["name"]) : "";
$email = isset($_POST["email"]) ? clean_input($_POST["email"]) : "";
$phone = isset($_POST["phone"]) ? clean_input($_POST["phone"]) : "";
$password = isset($_POST["password"]) ? $_POST["password"] : "";

if ($name === "") {
    respond(false, "Name is required");
}

if ($email === "") {
    respond(false, "Email is required");
}

if ($password === "") {
    respond(false, "Password is required");
}

if (strlen($name) < 2 || strlen($name) > 100) {
    respond(false, "Name must be between 2 and 100 characters");
}

if (!preg_match("/^[\p{L}\s]+$/u", $name)) {
    respond(false, "Name contains invalid characters");
}

if (strlen($email) > 150) {
    respond(false, "Email is too long");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, "Invalid email format");
}

if ($phone !== "") {
    if (strlen($phone) > 20) {
        respond(false, "Phone is too long");
    }

    if (!preg_match("/^[0-9+\-\s]{7,20}$/", $phone)) {
        respond(false, "Invalid phone format");
    }
} else {
    $phone = null;
}

if (strlen($password) < 6) {
    respond(false, "Password must be at least 6 characters");
}

if (strlen($password) > 255) {
    respond(false, "Password is too long");
}

$checkStmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
if (!$checkStmt) {
    respond(false, "Server error");
}

$checkStmt->bind_param("s", $email);
$checkStmt->execute();
$checkResult = $checkStmt->get_result();

if ($checkResult->num_rows > 0) {
    respond(false, "Email already exists");
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)");
if (!$stmt) {
    respond(false, "Server error");
}

$stmt->bind_param("ssss", $name, $email, $phone, $hashedPassword);

if ($stmt->execute()) {
    respond(true, "User registered successfully");
} else {
    respond(false, "Failed to register user");
}
?>