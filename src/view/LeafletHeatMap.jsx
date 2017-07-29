import React from 'react';
import { tileLayer, map, LatLng } from 'leaflet';
import { mapState } from '../state/appState';
import { observer } from 'mobx-react';
import './HeatMap.css';
import './leaflet-heat.js';
const initialLocation = { lat: -37.81425, lng: 144.9632 };

@observer
class HeatMap extends React.Component {
  constructor() {
    super()
    this.tileLayer = tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })  ;   
    console.log("Rendering heatlayer");
    this.heatLayer = L.heatLayer(
      [],
      {
        "radius": 20,
        "maxOpacity": .8, 
        // scales the radius based on map zoom
        "scaleRadius": true,
        "useLocalExtrema": true
      }
    );
  }
  componentDidMount() {
    this.map = map(this.mapContainer).setView([initialLocation.lat, initialLocation.lng], 13);
    this.tileLayer.addTo(this.map);
    this.heatLayer.addTo(this.map);
  }
  render() {
    this.heatLayer.setLatLngs(
      mapState.crashDataList.map(
        (crashDataItem) => {
          return new LatLng(crashDataItem.latlng.lat, crashDataItem.latlng.lng, crashDataItem.probability);
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