<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // --- Sanitizar entradas ---
    function limpiar($valor) {
        return htmlspecialchars(strip_tags(trim($valor)));
    }

    $nombre   = limpiar($_POST["nombre"]);
    $correo   = filter_var($_POST["correo"], FILTER_VALIDATE_EMAIL);
    $telefono = limpiar($_POST["telefono"]);
    $servicio = limpiar($_POST["servicio"]);
    $estado   = limpiar($_POST["estado"]);
    $mensaje  = limpiar($_POST["mensaje"]);

    // --- Validar correo ---
    if (!$correo) {
        echo "Correo electrónico no válido.";
        exit;
    }

    // --- Validar reCAPTCHA ---
    $captcha = $_POST['g-recaptcha-response'];
    $secretkey = "6LfjgrQpAAAAAIJGpFFs4DWzA4FDOww1FjVMrP2G";
    $ip = $_SERVER['REMOTE_ADDR'];

    $url = "https://www.google.com/recaptcha/api/siteverify";
    $datos = [
        'secret' => $secretkey,
        'response' => $captcha,
        'remoteip' => $ip
    ];

    $opciones = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($datos),
        ]
    ];

    $contexto = stream_context_create($opciones);
    $respuesta = file_get_contents($url, false, $contexto);
    $resultado = json_decode($respuesta, true);

    if (!$resultado["success"]) {
        echo "Error: No se pudo verificar el reCAPTCHA. Inténtalo nuevamente.";
        exit;
    }

    // --- Enviar correo ---
    $destinatario = "salducin@centraldealarmas.mx, pmares@centraldealarmas.mx";
    $asunto = "Nuevo mensaje del formulario";

    $cuerpoMensaje  = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Correo: $correo\n";
    $cuerpoMensaje .= "Teléfono: $telefono\n";
    $cuerpoMensaje .= "Servicio de interés: $servicio\n";
    $cuerpoMensaje .= "Estado: $estado\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje\n";

    $cabeceras  = "From: $correo\r\n";
    $cabeceras .= "Reply-To: $correo\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    if (mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras)) {
        header("Location: gracias.html");
        exit;
    } else {
        echo "Error al enviar el mensaje. Inténtalo nuevamente.";
        exit;
    }

} else {
    header("Location: index.html");
    exit;
}
?>
