const typed = new Type(".typing", {
    strings: ["Frontend Developer", "Backend Developer", "Graphic Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const write = new Type(".Animate", {
    strings: ["Frontend Developer", "Backend Developer", "Graphic Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var emailField = document.getlementById("email-field");
var emailField = document.getlementById("email-error");
var emailField = document.get("email-error");
function validateEmial(){

}

// === FORM SUBMISSION ======

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Display the response message
        this.reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Sorry, something went wrong. Please try again later.');
    });
});