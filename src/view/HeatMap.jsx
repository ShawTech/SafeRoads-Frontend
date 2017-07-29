import React from 'react';
import { observer } from 'mobx-react';
import { mapState } from '../state/appState';
import './HeatMap.css';
import Data from "../temp/output.json"

const initialLocation = { lat: -37.81425, lng: 144.9632  };

function useMetric(map, defaultLayers){
  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);

  // Set the UI unit system to imperial measurement
  ui.setUnitSystem(H.ui.UnitSystem.METRIC);
}

function setUpClickListener(map) {
  // Attach an event listener to map display
  // obtain the coordinates and display in an alert box.
  map.addEventListener('tap', function (evt) {
    var coord = map.screenToGeo(evt.currentPointer.viewportX,
            evt.currentPointer.viewportY);
    console.log('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
        ((coord.lat > 0) ? 'N' : 'S') +
        ' ' + Math.abs(coord.lng.toFixed(4)) +
         ((coord.lng > 0) ? 'E' : 'W'));
  });
}

function addCircleToMap(map){
  map.addObject(new H.map.Circle(
    // The central point of the circle
    initialLocation,
    // The radius of the circle in meters
    10,
    {
      style: {
        strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
        lineWidth: 2,
        fillColor: 'rgba(191, 45, 36, 0.7)'  // Color of the circle
      }
    }
  ));
}

function addMarkerToGroup(group, coordinate, html) {
  var marker = new H.map.Marker(coordinate);
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);
}

/**
 * This is a wrapper around HERE maps. You can find the docs at: https://developer.here.com/api-explorer.
 * Note that we're getting the javascript variables from index.html since HERE maps doesn't have a 
 * npm package.
 */
@observer
class HeatMap extends React.Component {
  componentDidMount() {
    // API key data
    // NOTE: You'll want to hide this from source control if you aren't just using a trial key.
    this.platform = new H.service.Platform({
      'app_id': '8eQACGYOury0Xo6Vf8mV',
      'app_code': 'dNwFCAaXAzLVDTzNoPqWdw'
    });

    this.maptypes = this.platform.createDefaultLayers();

    // Create a map that mounts onto our mapContainer <div> tag
    this.map = new H.Map(
      this.mapContainer, 
      this.maptypes.normal.map,
      {
        zoom: 15,
        center: initialLocation,
        hidpi: true
      }
    );

    var group = new H.map.Group();

    this.map.addObject(group);



    this.map.layers = []
    // This lets us use the default behaviour of HERE maps like moving around with a cursor.
    this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    
    this.map.setBaseLayer(this.maptypes.normal.traffic)
    this.map.addLayer(this.maptypes.incidents)
    
    // var parisMarker = new H.map.Marker(initialLocation);
    // this.map.addObject(parisMarker);

    
    addMarkerToGroup(group, initialLocation, '<div>Melbourne</div>')
    addMarkerToGroup(group, {lat: -37.8356, lng: 145.0773}, '<div>Melbourne</div>')
    useMetric(this.map, this.maptypes)
    setUpClickListener(this.map)

    addCircleToMap(this.map)


    for(var i=0; i < Data.length; i++){
      var item = Data[i]
      var coords = {lat: Number((item.X).toFixed(5)), lng:  Number((item.Y).toFixed(5))}
      console.log(item)
      addMarkerToGroup(group, coords , "<div>Test</div>");
    }
    console.log(group)
  }


  render() {
    return (
      // This is a where we mount the HERE maps non-React component
      <div className="map-container" ref={(mapContainer) => { this.mapContainer = mapContainer; }} style={{width: "100%"}}></div>
    );
  }
  resetLocation() {
    // TODO: Move to current location
  }
}
export { HeatMap };
export default HeatMap;