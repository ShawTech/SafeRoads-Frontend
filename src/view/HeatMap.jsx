import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { observer } from 'mobx';
import { mapState } from './State';
const position = [51.505, -0.09];
// NOTE: You'll want to hide this from source control if you aren't just using a trial key.
const platform = new H.service.Platform({
  app_id: '8eQACGYOury0Xo6Vf8mV',
  app_code: 'dNwFCAaXAzLVDTzNoPqWdw',
  useCIT: true,
  useHTTPS: true
});

@observer
class HeatMap extends React.Component {
  componentDidMount() {
    this.map = new H.Map(document.getElementById('map'), defaultLayers.normal.map);
    this.defaultLayers = platform.createDefaultLayers();
    this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    this.ui = H.ui.UI.createDefault(map, defaultLayers);
  }
  render() {
    return (
      <div id="map"></div>
    );
  }
  resetLocation() {
    // TODO: Move to current location
  }
}
export { HeatMap };
export default HeatMap;