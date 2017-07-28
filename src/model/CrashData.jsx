import { LatLng } from './LatLng';
class CrashData {
  constructor(latlng, probability) {
    this.latlng= latlng;
    this.probability = probability;
  }
}
export default CrashData;
export { CrashData };