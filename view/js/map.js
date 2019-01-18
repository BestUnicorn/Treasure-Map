function cartographer(lat, lng) {
    var myLatLng = {lat: coords.latitude, lng: coords.longitude};
    var pirate = {
        url:'view/images/pirate.png',
        size: new google.maps.MarkerImage(20,30),
        scaledSize: new google.maps.scaledSize(20,30)
        };
    var treasure = {
        url:'view/images/x.png',
        size: new google.maps.MarkerImage(20,30),
        scaledSize: new google.maps.scaledSize(20,30)
        };
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });
  
    var PirateMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: pirate
    });
    var treasureMarker = new google.maps.Marker({
      position: {lat: db.treasure.latitude, lng: db.treasure.longitude},
      map: map,
      title: db.treasure.name,
      icon: treasure
    });
  }
