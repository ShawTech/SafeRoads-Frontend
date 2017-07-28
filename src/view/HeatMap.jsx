import React from 'react';
import { observer } from 'mobx-react';
import { mapState } from '../state/appState';
import HEREMap, { Marker } from 'react-here-maps';

// NOTE: You'll want to hide this from source control if you aren't just using a trial key.

const center = { lat: 0, lng: 0 };
@observer
class HeatMap extends React.Component {
  render() {
    return (
      
            <HEREMap 
                appId="8eQACGYOury0Xo6Vf8mV"
                appCode="dNwFCAaXAzLVDTzNoPqWdw"
                center={center}
                zoom={14}
            >
                <Marker {...center}>
                    <div className="circle-marker"></div>
                </Marker>
            </HEREMap>
    );
  }
  resetLocation() {
    // TODO: Move to current location
  }
}
export { HeatMap };
export default HeatMap;