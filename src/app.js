class Map {
  constructor(mapEl) {
    this.markersArr = [];
    this.mapEl = mapEl;
    this.mainMap = L.map(mapEl, {
      zoomControl: false
    }).setView([38.952, -104.789], 15);

    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.mainMap);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 5,
      attribution: '© OpenStreetMap'
    }).addTo(this.mainMap);
  }

  createPoint(lat, lon) {
    this.markersArr.push(L.marker([lat, lon]));
  }

  drawMarkers() {
    this.removeAllMarkers();
    this.markersArr.forEach( point => {
      point.addTo(this.mainMap);
    });
  }

  removeAllMarkers() {
    this.markersArr.forEach( point => {
      this.mainMap.removeLayer(point);
    });
  }
}

class Monument {
  constructor(lat, lon, type, text) {
    this.lat = lat;
    this.lon = lon;
    this.type = type;
    this.text = text;
  }
}

class SearchAside {
  // create tile El from point

  // create put all Els in aside

  // 
}

class DataGrabber {
  // gets the api data

}


const mainMap = new Map('map');

mainMap.createPoint(38.952, -104.789);
mainMap.createPoint(38.962, -104.789);
mainMap.createPoint(38.972, -104.789);
mainMap.createPoint(38.982, -104.789);
mainMap.drawMarkers();





document.querySelector('.btn').addEventListener('click', mainMap.removeAllMarkers.bind(mainMap));





// create the following:
// 2. Home page, figure out a background for the hero
// 3. Add box inside of the map element to show cursors coords
// 4. figure out how to drop marker

