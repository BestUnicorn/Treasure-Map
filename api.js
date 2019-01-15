// var key = require("./keys.js");

var location = document.getElementById("map");

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(coordinates)
    } else {
        location.innerHTML = "Geolocation is not supported by this browser.";
    }
    console.log(coordinates);
}

function coordinates(position) {
    console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude); 
  }
  
// getLocation();

module.exports = location;