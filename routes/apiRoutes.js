// Dependencies (need the model)
var db = require("../models/index.js");

// Routes
module.exports = function(app) {

    // Route to GET list of locations from database
    app.get('/api/locations', function(req, res) {
        db.Treasure.findAll({}).then(function(dbLocations) {
            console.log(dbLocations); //debugging
            res.json(dbLocations);
        }).catch(function(error) {
            console.log(error);
        });
    })
    
    // Route to GET details on a specific location
    app.get('/api/locations/detail', function(req, res) {
        db.Treasure.findOne({

        }).then(function(dbDetails) {
            console.log(dbDetails); //debugging
            res.json(dbDetails);
        }).catch(function(error) {
            console.log(error);
        });
    })

    // Route to POST new location to database
    app.post('/api/location', function(req, res) {
        // Pull data to create new
        db.Treasure.create(req.body).then(function(dbNewLocation) {
            console.log(dbNewLocation); //debugging
            res.json(dbNewLocation);
        }).catch(function(error) {
            console.log(error);
        });
    })
}