// // var locationSearch = require("./location.js");

// // function cartographer() {
// //   if (navigator.geolocation) {
// //     navigator.geolocation.getCurrentPosition(initMap);
// //     initMap();
// //   } else {
// //     map.innerHTML = "Geolocation is not supported by this browser.";
// //     showError();
// //   }
// // }

// function initMap(position) {
//   var latitude = position.coords.latitude
//   var longitude = position.coords.longitude
//   var loc = { lat: latitude, lng: longitude };
//   var mapStyle = new google.maps.StyledMapType(        [
// {
//     "featureType": "all",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#675a4b"
//         }
//     ]
// },
// {
//     "featureType": "all",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "administrative",
//     "elementType": "geometry",
//     "stylers": [
//         {
//             "color": "#ffebc5"
//         },
//         {
//             "lightness": "-10"
//         }
//     ]
// },
// {
//     "featureType": "administrative",
//     "elementType": "geometry.stroke",
//     "stylers": [
//         {
//             "color": "#675a4b"
//         }
//     ]
// },
// {
//     "featureType": "administrative.country",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#b70046"
//         }
//     ]
// },
// {
//     "featureType": "administrative.province",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "administrative.province",
//     "elementType": "geometry.stroke",
//     "stylers": [
//         {
//             "color": "#675a4b"
//         },
//         {
//             "weight": "0.50"
//         }
//     ]
// },
// {
//     "featureType": "administrative.province",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#675a4b"
//         }
//     ]
// },
// {
//     "featureType": "administrative.locality",
//     "elementType": "all",
//     "stylers": [
//         {
//             "visibility": "simplified"
//         }
//     ]
// },
// {
//     "featureType": "administrative.locality",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#ff850a"
//         }
//     ]
// },
// {
//     "featureType": "administrative.neighborhood",
//     "elementType": "geometry",
//     "stylers": [
//         {
//             "visibility": "on"
//         }
//     ]
// },
// {
//     "featureType": "administrative.neighborhood",
//     "elementType": "labels",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "landscape",
//     "elementType": "all",
//     "stylers": [
//         {
//             "color": "#f2f2f2"
//         }
//     ]
// },
// {
//     "featureType": "landscape",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "saturation": "-71"
//         },
//         {
//             "lightness": "-2"
//         },
//         {
//             "color": "#ffebc5"
//         }
//     ]
// },
// {
//     "featureType": "poi",
//     "elementType": "all",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "poi.park",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#70bfaf"
//         }
//     ]
// },
// {
//     "featureType": "road",
//     "elementType": "all",
//     "stylers": [
//         {
//             "saturation": -100
//         },
//         {
//             "lightness": 45
//         },
//         {
//             "visibility": "simplified"
//         }
//     ]
// },
// {
//     "featureType": "road",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "road.highway",
//     "elementType": "all",
//     "stylers": [
//         {
//             "visibility": "simplified"
//         }
//     ]
// },
// {
//     "featureType": "road.highway",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#ffffff"
//         }
//     ]
// },
// {
//     "featureType": "road.highway",
//     "elementType": "geometry.stroke",
//     "stylers": [
//         {
//             "color": "#675a4c"
//         }
//     ]
// },
// {
//     "featureType": "road.highway",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#675a4b"
//         }
//     ]
// },
// {
//     "featureType": "road.arterial",
//     "elementType": "all",
//     "stylers": [
//         {
//             "visibility": "simplified"
//         }
//     ]
// },
// {
//     "featureType": "road.arterial",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#ffffff"
//         }
//     ]
// },
// {
//     "featureType": "road.arterial",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#675a4b"
//         }
//     ]
// },
// {
//     "featureType": "road.arterial",
//     "elementType": "labels.icon",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "road.local",
//     "elementType": "all",
//     "stylers": [
//         {
//             "visibility": "simplified"
//         }
//     ]
// },
// {
//     "featureType": "transit",
//     "elementType": "all",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// },
// {
//     "featureType": "water",
//     "elementType": "all",
//     "stylers": [
//         {
//             "color": "#7ccff0"
//         },
//         {
//             "visibility": "on"
//         }
//     ]
// },
// {
//     "featureType": "water",
//     "elementType": "geometry.fill",
//     "stylers": [
//         {
//             "color": "#cfeae4"
//         }
//     ]
// },
// {
//     "featureType": "water",
//     "elementType": "labels.text.fill",
//     "stylers": [
//         {
//             "color": "#109579"
//         }
//     ]
// },
// {
//     "featureType": "water",
//     "elementType": "labels.text.stroke",
//     "stylers": [
//         {
//             "visibility": "off"
//         }
//     ]
// }
// ],
// {name: 'Styled Map'});
//   var map = new google.maps.Map(
//     document.getElementById('map_div'),
//     { zoom: 16,
//       center: loc,
//       mapTypeControlOptions: {
//         mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
//       }
//     });
//   var flag = {
//     url: '/images/pirate.png',
//     scaledSize: new google.maps.Size(40, 30)
//   };
//   var marker = new google.maps.Marker({
//     position: loc,
//     map: map,
//     icon: flag
//   });
//   map.mapTypes.set('styled_map', mapStyle);
//     map.setMapTypeId('styled_map');
//   console.log(position.coords.accuracy)
//   console.log(loc);
//   markerMaker(loc, map);
// }

// function markerMaker(location, map) {
//   var map = map;
//   // var loc = location;
//   var x = {
//     url: '/images/x.png',
//     scaledSize: new google.maps.Size(40, 30)
//   };
//   // var darkx = {
//   //   url: '/images/dark-x.png',
//   //   scaledSize: new google.maps.Size(40, 30)
//   // };
//   var marker = new google.maps.Marker({
//     position: {lat: 33.6561723, lng: -117.8584635},
//     map: map,
//     icon: x
//   });
//   // var darker = new google.maps.Marker({
//   //   position: {lat: 33.6361925, lng: -117.8384837},
//   //   map: map,
//   //   icon: darkx
//   // });
// }

// // var key = require("./routes/keys.js")
// // var map = document.getElementById("map");

// // function showPosition(position) {
// //   console.log(map_url);
// //   console.log(position);
// //   console.log(position.coords.latitude);
// //   console.log(position.coords.longitude);
// //   console.log(position.coords.accuracy);
// // };

// // function showError(error) {
// //   switch (error.code) {
// //     case error.PERMISSION_DENIED:
// //       console.log("User denied the request for Geolocation.")
// //       break;
// //     case error.POSITION_UNAVAILABLE:
// //       console.log("Location information is unavailable.")
// //       break;
// //     case error.TIMEOUT:
// //       console.log("The request to get user location timed out.")
// //       break;
// //     case error.UNKNOWN_ERROR:
// //       console.log("An unknown error occurred.")
// //       break;
// //   }
// // }

// {/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=" + key + "&callback=cartographer">
// </script> */}
