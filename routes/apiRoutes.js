// Dependencies (need the model)
var db = require("../models/index.js");

// Routes
module.exports = function(app) {

    // Route to GET list of locations from database
    app.get('/api/locations', function(req, res) {
        db.treasure.findAll({}).then(function(dbLocations) {
            res.json(dbLocations);
        }).catch(function(error) {
            console.log(error);
        });
    })
    
    // Route to GET details on a specific location
    app.get('/api/locations/detail', function(req, res) {
        db.treasure.findOne({

        }).then(function(dbDetails) {
            res.json(dbDetails);
        }).catch(function(error) {
            console.log(error);
        });
    })

    // Route to POST new location to database
    app.post('/api/location', function(req, res) {
        // Pull data to create new
        db.treasure.create(req.body).then(function(dbNewLocation) {
            res.json(dbNewLocation);
        }).catch(function(error) {
            console.log(error);
        });
    })
}