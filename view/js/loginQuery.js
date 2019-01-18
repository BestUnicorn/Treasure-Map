$(document).ready(
    $("#loginBtn").click(function(event) {
        event.preventDefault();
        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();
        $.post('/api/login', function(data) {
            console.log(data); // debugging
        })
    })
)