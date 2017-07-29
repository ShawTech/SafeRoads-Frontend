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
        blur: 25,
        minOpacity: 0,
        gradient:   {0.2: "#55BBFA", 0.4: "#FABB55", 0.6: "#FA9955",0.75: "#FF3333", 1: "#FF0000"}
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