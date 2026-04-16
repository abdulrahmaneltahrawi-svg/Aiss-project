<?php
session_start();

header("Content-Type: application/json; charset=UTF-8");
require_once __DIR__ . "/db.php";

function respond($success, $message, $extra = []) {
    echo json_encode(array_merge([
        "success" => $success,
        "message" => $message
    ], $extra), JSON_UNESCAPED_UNICODE);
    exit;
}

// لازم يكون عامل login
if (!isset($_SESSION["user_id"])) {
    respond(false, "Unauthorized");
}

$user_id = (int) $_SESSION["user_id"];

// التحقق من الصلاحية
$stmt = $conn->prepare("SELECT can_add_article FROM users WHERE id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    respond(false, "User not found");
}

$user = $result->fetch_assoc();

if ((int)$user["can_add_article"] !== 1) {
    respond(false, "Not allowed");
}

// البيانات
$title = isset($_POST["title"]) ? trim($_POST["title"]) : "";

if ($title === "") {
    respond(false, "Title is required");
}

// ===== رفع صورة الغلاف =====
if (!isset($_FILES["cover_image"]) || $_FILES["cover_image"]["error"] !== 0) {
    respond(false, "Cover image is required");
}

$imgExt = strtolower(pathinfo($_FILES["cover_image"]["name"], PATHINFO_EXTENSION));
$allowedImages = ["jpg", "jpeg", "png", "webp"];

if (!in_array($imgExt, $allowedImages)) {
    respond(false, "Invalid image type");
}

$imageName = time() . "_" . uniqid() . "." . $imgExt;
$imagePath = "../assets/uploads/magazines/images/" . $imageName;

if (!is_dir(dirname(__DIR__) . "/assets/uploads/magazines/images/")) {
    mkdir(dirname(__DIR__) . "/assets/uploads/magazines/images/", 0777, true);
}

move_uploaded_file($_FILES["cover_image"]["tmp_name"], dirname(__DIR__) . "/assets/uploads/magazines/images/" . $imageName);

// ===== رفع PDF =====
if (!isset($_FILES["file"]) || $_FILES["file"]["error"] !== 0) {
    respond(false, "PDF file is required");
}

$fileExt = strtolower(pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION));

if ($fileExt !== "pdf") {
    respond(false, "Only PDF allowed");
}

$pdfName = time() . "_" . uniqid() . ".pdf";

if (!is_dir(dirname(__DIR__) . "/assets/uploads/magazines/files/")) {
    mkdir(dirname(__DIR__) . "/assets/uploads/magazines/files/", 0777, true);
}

move_uploaded_file($_FILES["file"]["tmp_name"], dirname(__DIR__) . "/assets/uploads/magazines/files/" . $pdfName);

$pdfPath = "assets/uploads/magazines/files/" . $pdfName;

// ===== حفظ في الداتا بيز =====
$stmt = $conn->prepare("
    INSERT INTO magazines (title, cover_image, file_path)
    VALUES (?, ?, ?)
");

$coverPath = "assets/uploads/magazines/images/" . $imageName;

$stmt->bind_param("sss", $title, $coverPath, $pdfPath);

if ($stmt->execute()) {
    respond(true, "Magazine added successfully");
} else {
    respond(false, "Failed to add magazine");
}