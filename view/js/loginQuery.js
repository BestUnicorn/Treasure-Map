$(document).ready(function() {
    var emailInput = $("#loginEmail");
    var passwordInput = $("#loginPassword");
    $("#loginBtn").click(function(event) {
        event.preventDefault();
        var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return console.log("Email and/or password missing");
        }

        // Run logUserIn if the forms are filled
        logUserIn(userData.email, userData.password);
    })
    function logUserIn (email, password) {
        $.post('/api/login', {email: email, password: password}).then(function(data) {
            window.location.replace(data);
        }).catch((error) => console.log(error));
    }
})

