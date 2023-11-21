<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  // Correo al que se enviarán los datos del formulario
  $destinatario = "equiposdigitalia@gmail.com"; // Reemplaza con tu dirección de correo electrónico
  $asunto = "Nuevo mensaje de contacto de $nombre";

  $cuerpoMensaje = "Nombre: $nombre\n";
  $cuerpoMensaje .= "Email: $email\n";
  $cuerpoMensaje .= "Mensaje:\n$mensaje";

  // Enviar el correo
  mail($destinatario, $asunto, $cuerpoMensaje);

  // Redirigir a una página de agradecimiento
  header("Location: gracias.html");
} else {
  // Si alguien intenta acceder a este archivo directamente, redirige al formulario
  header("Location: contacto.html");
}
?>
