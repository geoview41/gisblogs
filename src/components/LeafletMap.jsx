import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function LeafletMap() {
  useEffect(() => {
    const map = L.map('map').setView([46.5191, 6.6336], 13);

    L.tileLayer('https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg', {
      attribution: '&copy; swisstopo',
      tileSize: 256,
      minZoom: 0,
      maxZoom: 18,
      bounds: [
        [45, 5],  // approximate bounding box for Switzerland
        [48, 11]
      ]
    }).addTo(map);
  }, []);

  return (
    <div id="map" style={{ height: '400px', width: '100%', margin: '2rem 0', borderRadius: '8px' }}></div>
  );
}
