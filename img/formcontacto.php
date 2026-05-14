<?php

// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Recoger los datos del formulario
    $titulo = $_POST["titulo"];
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $servicios = $_POST["servicios"];
    $estado = $_POST["estado"];
    $mensaje = $_POST["mensaje"];

    // ReCaptcha
    $ip = $_SERVER['REMOTE_ADDR'];
    $captcha = $_POST['g-recaptcha-response'];
    $secretkey = "6LfjgrQpAAAAAIJGpFFs4DWzA4FDOww1FjVMrP2G";
    
    $respuesta = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretkey&response=$captcha&remoteip=$ip");

    $atributos = json_decode($respuesta, TRUE);

    // ReCaptcha

    // Dirección de correo para enviar el mensaje
    // Jul.22 / 2024
    $destinatario = "salducin@centraldealarmas.com.mx, mbadillo@centraldealarmas.com.mx, igonzalez@centraldealarmas.com.mx, jschiavon@centraldealarmas.com.mx, rlopez@centraldealarmas.com.mx";

    // Asunto del correo
    $asunto = "$titulo";

    // Construir el cuerpo del mensaje
    $cuerpoMensaje = "Desde:\n $titulo\n\n";
    $cuerpoMensaje .= "Nombre:\n $nombre\n\n";
    $cuerpoMensaje .= "Correo:\n $correo\n\n";
    $cuerpoMensaje .= "Telefono:\n $telefono\n\n";
    $cuerpoMensaje .= "Servicios:\n $servicios\n\n";
    $cuerpoMensaje .= "Estado:\n $estado\n\n";
    $cuerpoMensaje .= "Mensaje:\n $mensaje";

    // Cabeceras del correo
    $cabeceras = "From: $correo\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras);

    // Redirigir a la página de agradecimiento
    header("Location: gracias.html");
    exit;
} else {
    // Si se intenta acceder directamente al script, redirigir a index.html
    header("Location: index.html");
    exit;
}
?>