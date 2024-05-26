<?php
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $username = htmlspecialchars(trim($_POST['username']));
    $email = htmlspecialchars($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    $to = "excodeenv@gmail.com";
    $subject = "New Message from $username";
    $body = "you have a received a new message.\n\n".
            "Name: $username\n".
            "Email: $email\n".
            "Message: \n$message";
    $headers = "From: $subject\n".
    $headers .= "Reply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully";
    } else {
        echo "Message sending failed";
    }
}else {
    echo "Invalid request";
}
?>