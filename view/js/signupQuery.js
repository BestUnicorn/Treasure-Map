$(document).ready(function() {
    // References for form inputs
    var emailInput = $("#signupEmail");
    var passwordInput = $("#signupPassword");

    // Clicking signup will first check that the forms have been filled
    $("#signupBtn").click(function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return console.log("Email and/or password missing");
        }

        // Run signUserUp if the forms are filled
        signUserUp(userData.email, userData.password);
        
    });


function signUserUp(email, password) {
    $.post('/api/signup', {email: email, password: password}).then(function(data) {
        console.log(data); // debugging
        console.log(window.location);
        window.location.replace(data);
        }).catch(function(error) {
            console.log(error);
        });
    }
});
