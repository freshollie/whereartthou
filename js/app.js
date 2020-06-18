$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const lat = parseFloat(urlParams.get("lat")) * 100;
  const lon = parseFloat(urlParams.get("lon")) * 1000;

  console.log(lat, lon)
  
  if (!lat || !lon) {
    return;
  }
  // Init maps
  svinitialize(lat, lon);
});
