import { MapState } from '../model/MapState';
import { CrashData } from '../model/CrashData';
const mapState = new MapState([
  new CrashData(new LatLng(), 0.5),
  new CrashData(new LatLng(), 1)
]);