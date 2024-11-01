<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verzamelen van gegevens uit het formulier
    $naam = htmlspecialchars(trim($_POST['naam']));
    $email = htmlspecialchars(trim($_POST['email']));
    $onderwerp = htmlspecialchars(trim($_POST['onderwerp']));

    // Validatie
    if (empty($naam) || empty($email) || empty($onderwerp)) {
        echo "Alle velden zijn verplicht.";
        exit;
    }

    // E-mail verzenden
    $to = 'info@depriveles.be'; // Ontvanger
    $subject = 'Aanmelding lesgever: ' . $onderwerp;
    $message = "Naam: $naam\nE-mail: $email\nOnderwerp: $onderwerp";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Aanmelding succesvol! U ontvangt een bevestiging per e-mail.";
    } else {
        echo "Er is een fout opgetreden bij het verzenden van uw aanmelding. Probeer het later opnieuw.";
    }
} else {
    echo "Ongeldig verzoek.";
}
?>
