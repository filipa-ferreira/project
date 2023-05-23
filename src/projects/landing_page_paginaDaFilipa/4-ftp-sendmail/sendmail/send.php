<?php

require_once 'vendor/autoload.php';

define("HOST", "premium211.web-hosting.com"); // servidor SMTP
define("PORT", 465); // PORT do servidor SMTP
define("SMTP_SECURE", "ssl"); // ssl ou tls, 
define("USERNAME", "info@filipaferreira.dev"); // username do email de envio
define("PASSWORD", "catarina1988"); // password do email de envio
define("FROM_EMAIL", "no-reply@filipaferreira.dev"); // email se quem recebe fizer reply // Fazer conta com dominio real para o formulário poder enviar 
define("FROM_NAME", "Filipa-Ferreira"); // de quem esta a enviar

//identificação das variaveis que correspondem ao atributo "name" no form 
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$message = $_POST['subject'];


/// Construção da mensagem a enviar por email, em php utiliza-se o '.' para juntar strings em vez do '+'
//$msgAEnviar = "Nome: ".$name.' ,Email: '.$email.' ,Mensagem: '.$message;
$msgAEnviar = "<p>Name: ".$firstname."</p>";
$msgAEnviar .= "<p>Name: ".$lastname."</p>";
$msgAEnviar .= "<p>Email: ".$email."</p>";
$msgAEnviar .= "<p>Message: ".$message."</p>";

$mail = new PHPMailer();
//$mail->SMTPDebug = 3;  

$mail->isSMTP();
$mail->Host = HOST;
$mail->SMTPAuth = true;
$mail->Username = USERNAME;
$mail->Password = PASSWORD;
$mail->SMTPSecure = SMTP_SECURE;
$mail->Port = PORT;

$mail->setFrom(FROM_EMAIL, FROM_NAME);
$mail->addAddress('info@filipaferreira.dev', 'filipa'); // para enviar para o email que o user insere
$mail->isHTML(true);


$mail->Subject = "Mensagem do formulario de teste ....";
$mail->Body    = $msgAEnviar;
$mail->AltBody = $msgAEnviar;

if(!$mail->send()) {
    // echo 'Message could not be sent.';
    // echo 'Mailer Error: ' . $mail->ErrorInfo;
    header("Location: ../feedbackerror.html");
}
else {
    // echo 'Message has been sent.';
    header("Location: ../feedbackform.html");
}
