import { MapState } from './MapState';
import { observable } from 'mobx';
class MapState {
  constructor(crashDataList) {
    @observable
    this.crashDataList = crashDataList;
  }
  
  @action
  addCrashData(crashData) {
    this.crashDataList.push(crashData);
  }
}
export default MapState; 
export { MapState };