import { observable, action } from 'mobx';
/**
 * This class contains all the data relating to the heatmap
 */
class MapState {
  // Please check MobX if you want to know what the annotations do, they're very simple.
  constructor() {
    // Create heat map provider
    this.heatmapProvider = new H.data.heatmap.Provider({
      colors: new H.data.heatmap.Colors({
        '0.00': 'rgba(3, 150, 255, 0.33)', // blue
        '0.2': '#F8D800', // yellow
        '0.6': '#EA5455',  // red
        '0.8': '#B74242'
      }, true),
      // Paint assumed values in regions where no data is available
        assumeValues: true
    });
  }
}
export default MapState; 
export { MapState };