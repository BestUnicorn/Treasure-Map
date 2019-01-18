// Dependencies
var path = require("path"); // Allows for easy absolute pathing to html files

// Require middleware for checking if user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated.js");

// Routes (using function export)
// When this function is required and given the 'app' object in server.js, it will construct the required route functions
module.exports = function(app) {
    app.get('/login', function(req, res) {
        if (req.user) {
            res.redirect('/home');
        }
        res.sendFile(path.join(__dirname, "../view/login.html"));
    });
    app.get('/', function(req, res) {
        if (req.user) {
            res.redirect('/home');
        }
        res.sendFile(path.join(__dirname, "../view/index.html"));
    });
    app.get('/signup', function(req, res) {
        if (req.user) {
            res.redirect('/home');
        }
        res.sendFile(path.join(__dirname, "../view/signup.html"));
    });
    app.get('/home', isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../view/home.html"));
    });
}