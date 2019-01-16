// Dependencies (need the model)
var db = require("../models/index.js");

// Routes
module.exports = function(app) {

    // Route to GET list of locations from database
    app.get('/api/locations/:username', function(req, res) {
        db.Treasure.findAll({attributes: ['Location']}, // Get names of locations to list with
            {where: {user: req.params.username}}).then(function(dbLocations) {
            console.log(dbLocations); //debugging
            res.json(dbLocations);
        }).catch(function(error) {
            console.log(error);
        });
    });
    
    // Route to GET details on a specific location
    app.get('/api/locations/detail/:username/:id', function(req, res) {
        db.Treasure.findOne({
            where: {
                user: req.params.username,
                id: req.params.id
            }
        }).then(function(dbDetails) {
            console.log(dbDetails); //debugging
            res.json(dbDetails);
        }).catch(function(error) {
            console.log(error);
        });
    });

    // Route to POST new location to database
    app.post('/api/locations', function(req, res) {
        // Pull data to create new
        db.Treasure.create(req.body).then(function(dbNewLocation) {
            console.log(dbNewLocation); //debugging
            res.json(dbNewLocation);
        }).catch(function(error) {
            console.log(error);
        });
    });

    // Route to DELETE a location from the database
    app.delete('/api/locations/:username/:id', function(req, res) {
        db.Treasure.destroy({
            where: {
                id: req.params.id,
                username: req.params.username
            }
        }).then(function(dbDeleteLocation) {
            //marker.setMap(null); // For Google Map API
            console.log(dbDeleteLocation); // Debugging
            res.json(dbDeleteLocation);
        }).catch(function(error) {
            console.log(error);
        });
    });

    // Route to update an existing location in the database
    app.put('/api/locations/:username/:id', function(req, res) {
        db.Treasure.update({
            Location: req.body.location,
            Latitude: req.body.latitude,
            Longitude: req.body.longitude,
            accuracy: req.body.accuracy,
            where: {
                id: req.params.id,
                username: req.params.username
            }
        }).then(function(dbUpdateLocation) {
            console.log(dbUpdateLocation); // Debugging
            res.json(dbUpdateLocation);
        }).catch(function(error) {
            console.log(error);
        });
    });

    // Route to get user information from login and check it against the database
    app.get('/api/login/:email/:password', function(req, res) {
        db.User.findOne({
            where: {
                email: req.params.email,
                password: req.params.password
            }
        }).then(function(dbLogin) {
            console.log(dbLogin);
            res.json(dbLogin);
        });
    });

    // Route to post user info to sign up (which will be checked against existing users beforehand)
    app.post('/api/signup', function(req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function(dbSignup) {
            console.log(dbSignup);
            res.json(dbSignup);
        });
    })
}