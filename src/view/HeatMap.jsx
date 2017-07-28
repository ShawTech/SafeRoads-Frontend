import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { observer } from 'mobx';
import { mapState } from './State';
const position = [51.505, -0.09];
const HeatMap = observer((props) => (
  <Map center={position} zoom={13}>
  </Map>
));
export { HeatMap };
export default HeatMap;