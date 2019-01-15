// Dependencies
var path = require("path"); // Allows for easy absolute pathing to html files

// Routes (using function export)
// When this function is required and given the 'app' object in server.js, it will construct the required route functions
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../view/index.html"));
    })
    app.get('/detail', function(req, res) {
        res.sendFile(path.join(__dirname, "../view/detail.html"));
    })
}
