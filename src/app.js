
const map = L.map('map', {
  zoomControl: false
}).setView([38.952, -104.789], 15);

L.control.zoom({
  position: 'bottomright'
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  minZoom: 5,
  attribution: '© OpenStreetMap'
    
}).addTo(map);


class DataGrabber = { 

}











let marker = L.marker([38.952, -104.789]);

marker.addTo(map);













// create the following:
// 2. Home page, figure out a background for the hero
// 3. Add box inside of the map element to show cursors coords
// 4. figure out how to drop marker

