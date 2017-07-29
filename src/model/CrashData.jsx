import { LatLng } from './LatLng';
/**
 * A single piece of a crash data that maps onto the heatmap.
 * Might want to find a better name for it.
 */
class CrashData {
  constructor(latlng, probability) {
    // That latlng that this piece of data relates to
    this.latlng = latlng;
    // The probability that a crash will occur at this particular lat lng
    this.probability = probability;
  }
}
export default CrashData;
export { CrashData };