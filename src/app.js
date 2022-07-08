const map = L.map('map').setView([38.952, -104.789], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 5,
    attribution: '© OpenStreetMap'
}).addTo(map);

let marker =  L.marker([38.952, -104.789])

marker.addTo(map);