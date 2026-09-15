<?php
session_start();
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

$action = $_GET['action'] ?? '';

if ($action === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $email = $input['email'] ?? '';
    $password = $input['password'] ?? '';

    if (!empty($email) && strlen($password) >= 6) {
        $_SESSION['user'] = $email;
        echo json_encode([
            'status' => 'success',
            'message' => 'Logged in successfully',
            'session_id' => session_id(),
            'user' => $email
        ]);
    } else {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid email or password']);
    }
    exit;
}

if ($action === 'watchlist') {
    if (!isset($_SESSION['watchlist'])) {
        $_SESSION['watchlist'] = ['AAPL', 'TSLA', 'AMZN'];
    }

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $input = json_decode(file_get_contents('php://input'), true);
        $symbol = strtoupper($input['symbol'] ?? '');
        if ($symbol && !in_array($symbol, $_SESSION['watchlist'])) {
            $_SESSION['watchlist'][] = $symbol;
        }
        echo json_encode(['status' => 'success', 'watchlist' => $_SESSION['watchlist']]);
        exit;
    }

    echo json_encode(['status' => 'success', 'watchlist' => $_SESSION['watchlist']]);
    exit;
}

echo json_encode([
    'status' => 'online',
    'project' => 'StockPro Web App',
    'active_session' => session_id(),
    'user' => $_SESSION['user'] ?? null
]);
