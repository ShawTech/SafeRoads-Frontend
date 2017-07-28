import { MapState } from '../model/MapState';
import { CrashData } from '../model/CrashData';
import { LatLng } from '../model/LatLng';
// Use this mapState for testing without a backend server
const mapState = new MapState([
  new CrashData(new LatLng(), 0.5),
  new CrashData(new LatLng(), 1)
]);
export { mapState };
export default mapState;