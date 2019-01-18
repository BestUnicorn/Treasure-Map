$(document).ready(
    $("#signupBtn").click(function(event) {
        event.preventDefault();
        var email = $("#signupEmail").val();
        var password = $("#signupPassword").val();
        $.post('/api/signup', {email: email, password: password}, function(data) {
            console.log(data); // debugging
            if (data) {
                $.get(window.location + '/home', function(error) {
                    console.log(error);
                })
            }
        })
    })
)