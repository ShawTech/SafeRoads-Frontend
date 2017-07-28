import { observable, action } from 'mobx';
class MapState {
  @observable crashDataList = [];
  constructor(crashDataList) {
    this.crashDataList = crashDataList;
  }
  
  @action
  addCrashData(crashData) {
    this.crashDataList.push(crashData);
  }
}
export default MapState; 
export { MapState };