<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['naamLesgever']);
    $email = htmlspecialchars($_POST['emailLesgever']);
    $vak = htmlspecialchars($_POST['vak']);

    $to = "info@depriveles.be";
    $subject = "Aanmelding Lesgever";
    $message = "Naam: $name\nEmail: $email\nVakgebied: $vak";
    $headers = "From: info@depriveles.be";

    if (mail($to, $subject, $message, $headers)) {
        echo "E-mail succesvol verzonden.";
    } else {
        echo "Er ging iets mis bij het versturen van de e-mail.";
    }
}
?>
