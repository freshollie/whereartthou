//
// Streetview Map
//

function svinitialize(lat, lon) {
  const coordArrayLatLongs = [lat, lon];

  console.log(coordArrayLatLongs);

  window.locLL = coordArrayLatLongs[0] + ',' + coordArrayLatLongs[1];

  // Do streetview
  var whoamiLocation = new google.maps.LatLng(coordArrayLatLongs[0], coordArrayLatLongs[1]);
  var streetViewService = new google.maps.StreetViewService();
  var STREETVIEW_MAX_DISTANCE = 100;

  streetViewService.getPanoramaByLocation(whoamiLocation, STREETVIEW_MAX_DISTANCE, function(streetViewPanoramaData, status) {
    if (status === google.maps.StreetViewStatus.OK) {

      // We have a streetview pano for this location, so let's roll
      var panoramaOptions = {
        position: whoamiLocation,
        addressControl: false,
        linksControl: false,
        pov: {
          heading: 270,
          zoom: 0.3,
          pitch: -10
        },
        visible: true
      };

      var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);

    } else {
      // no street view available in this range, or some error occurred
      alert('Streetview is not available for this location :( Mind telling us that you saw this?');
    }
  });
};
