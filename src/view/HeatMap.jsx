import React from 'react';
import { observer } from 'mobx-react';
import { mapState } from '../state/appState';
import './HeatMap.css';
const initialLocation = { lat: -37.8136, lng: 144.9631  };
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
        zoom: 10,
        center: initialLocation
      }
    );
    // This lets us use the default behaviour of HERE maps like moving around with a cursor.
    this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
  }
  render() {
    return (
      // This is a where we mount the HERE maps non-React component
      <div className="map-container" ref={(mapContainer) => { this.mapContainer = mapContainer; }}></div>
    );
  }
  resetLocation() {
    // TODO: Move to current location
  }
}
export { HeatMap };
export default HeatMap;