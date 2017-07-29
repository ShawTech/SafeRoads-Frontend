import { observable, action } from 'mobx';
/**
 * This class contains all the data relating to the heatmap
 */
class MapState {
  @observable
  crashDataList = null;
  // Please check MobX if you want to know what the annotations do, they're very simple.
  constructor(crashDataList = []) {
    this.crashDataList = crashDataList;
  }

  @action
  replaceCrashData(crashDataList) {
    this.crashDataList = crashDataList;
  }
}
export default MapState; 
export { MapState };