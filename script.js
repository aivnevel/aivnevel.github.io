// Scrollen naar sectie
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// FAQ antwoorden uitklappen
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const symbol = element.querySelector("span");

    if (answer.style.display === "block") {
        answer.style.display = "none";
        symbol.textContent = "+";
    } else {
        answer.style.display = "block";
        symbol.textContent = "-";
    }
}

// Contact formulier bevestiging
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmationMessage").textContent = "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.";
    this.reset();
});

