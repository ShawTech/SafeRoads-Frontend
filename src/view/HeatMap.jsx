import React from 'react';
import { tileLayer, map, LatLng } from 'leaflet';
import { mapState } from '../state/appState';
import { observer } from 'mobx-react';
// import "mapbox.js"
import './HeatMap.css';
import './leaflet-heat.js';
const initialLocation = { lat: -37.81425, lng: 144.9632 };

const MapBoxOptions = {
    accessToken: "pk.eyJ1IjoibG9yZGVyaWtpciIsImEiOiJjaXFkOGk0dGswMmRsZmpucDdrdXkweTZ2In0.iPdqtjwZaw2gHQG3bxwSmQ"
}
@observer
class HeatMap extends React.Component {
  constructor() {
    super()
    this.tileLayer = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.saferoads.tech/">SafeRoads (ShawTech)</a>'
    });
    this.heatLayer = L.heatLayer(
      [],
      {
        max: 1,
        blur: 25,
        minOpacity: 0,
        gradient: {0.4: "#FFFFFF", 0.7: "#55BBFA", 0.85: "#FABB55", 0.9: "#FA9955",0.95: "#FF3333", 1: "#FF0000"}
      } 
    );
    // this.trafficLayer = L.mapbox.styleLayer('mapbox://styles/lorderikir/cj5q2c46z1g8j2rqnt2qh9uje', MapBoxOptions)
  }
  componentDidMount() {
    this.map = map(this.mapContainer).setView([initialLocation.lat, initialLocation.lng], 13);
    this.tileLayer.addTo(this.map);
    this.heatLayer.addTo(this.map);
    // this.trafficLayer.addTo(this.map);
  }
  render() {
    this.heatLayer.setLatLngs(
      mapState.crashDataList.map(
        (crashDataItem) => {
          return [crashDataItem.latlng.lat, crashDataItem.latlng.lng, crashDataItem.probability]
        }
      )
    );
      return (
        <div className="map-container" ref={(mapContainer) => { this.mapContainer = mapContainer; }}></div>
      );
  }
}
export {HeatMap};
export default HeatMap;