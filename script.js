// Add event listener to contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send contact form data to server or perform other actions
    console.log('Contact form submitted!');
});

// Add event listener to login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Authenticate user credentials and perform login actions
    console.log('Login form submitted!');
});