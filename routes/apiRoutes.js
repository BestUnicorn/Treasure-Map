// Dependencies (need the model)
var db = require("../models/index.js");
var passport = require("../config/passport.js");

// Routes
module.exports = function(app) {
    // Route to get user information from login and check it against the database
    app.post('/api/login', passport.authenticate("local"), function(req, res) {
        // Send json back to allow for login to occur (will be done through the front end) but only if authentication succeeds
        res.json("home");
    });

    // Route to post user info to sign up (which will be checked against existing users beforehand)
    app.post('/api/signup', function(req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            res.redirect(307, '/api/login'); // 307 is for temporary redirect (since the login after signup finish quickly)
        }).catch(function(error) {
            console.log(error);
            res.json(error);
        });
    });

    // Route to GET list of locations from database
    app.get('/api/locations/', function(req, res) {
        db.Treasure.findAll( // Get names of locations to list with
            {
                where: {
                    userName: req.user.email,
                    UserId: req.user.id
                },
                attributes: ['Location']
            }).then(function(dbLocations) {
            console.log(dbLocations); //debugging
            res.json(dbLocations);
        }).catch(function(error) {
            console.log(error);
            res.json(error);
        });
    });
    
    // Route to GET details on a specific location
    app.get('/api/locations/detail/:id', function(req, res) {
        db.Treasure.findOne({
            where: {
                userName: req.user.email,
                id: req.params.id
            }
        }).then(function(dbDetails) {
            console.log(dbDetails); //debugging
            res.json(dbDetails);
        }).catch(function(error) {
            console.log(error);
            res.json(error);
        });
    });

    // Route to POST new location to database
    app.post('/api/locations', function(req, res) {
        // Pull data to create new
        db.Treasure.create({
            userName: req.user.email,
            Location: req.body.Location,
            Latitude: req.body.Latitude,
            Longitude: req.body.Longitude,
            accuracy: req.body.accuracy,
            UserId: req.user.id
        }).then(function(dbNewLocation) {
            console.log(dbNewLocation); //debugging
            res.json(dbNewLocation);
        }).catch(function(error) {
            console.log(error);
            res.json(error);
        });
    });

    // Route to DELETE a location from the database
    app.delete('/api/locations/:id', function(req, res) {
        db.Treasure.destroy({
            where: {
                id: req.params.id,
                userName: req.user.email
            }
        }).then(function() {
            //marker.setMap(null); // For Google Map API
            console.log("Delete Successful"); // Debugging
            res.json("Delete Successful");
        }).catch(function(error) {
            console.log(error);
            res.json(error);
        });
    });

    // Route to update an existing location in the database
    app.put('/api/locations/:id', function(req, res) {
        db.Treasure.update({
            Location: req.body.location,
            Latitude: req.body.latitude,
            Longitude: req.body.longitude,
            accuracy: req.body.accuracy
        },
        {where: {
            id: req.params.id,
            username: req.user.email
        }}).then(function() {
            console.log("Update Successful"); // Debugging
            res.json("Update Successful");
        }).catch(function(error) {
            console.log(error);
            res.json(error);
        });
    });

    // Route for logging user out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // Route to obtain user data for use in client-side queries
    app.get('/api/user_data', function(req, res) {
        if (!req.user) {
            // Send empty response if user is not logged in
            res.json({});
        }
        else {
            res.json({
                email: req.user.email,
                userId: req.user.id
            });
        }
    });
}