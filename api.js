var key = require("./keys.js");
var request = require('request');


function getLocation() {
    var URL = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + key;

    request(URL, function (err, response, body) {
        var data = JSON.parse(body);
        var logData = [
            ("latitude: " + data.location.lat),
            ("longitude: " + data.location.lng),
        ].join("\n");
        fs.appendFile("log.txt", logData + "\n\n\n", function (err) {
            if (err) throw err;
            console.log(logData);
            module.exports = logData;
        });
    });
};

getLocation();