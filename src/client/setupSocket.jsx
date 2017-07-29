function get_data(mapState) {
  fetch('http://localhost:8080/crash/probability', {
    method: 'get',
  }).then((response)=>{
    return response.json();
  }).then((jsonData)=>{
    console.log(jsonData);
    mapState.heatmapProvider.clear();
    mapState.heatmapProvider.addData(jsonData.map((crashDataItem) => {
      return { 
        lat: crashDataItem.latlng.lat, 
        lng: crashDataItem.latlng.lng,
        value: crashDataItem.probbility * 100 
      }
    }), false);
  })
}
/**
 * Sets up socket endpoint and specifies what to do when they are triggered.
 */
function setupPolling(mapState) {
  get_data(mapState);
  setInterval(() => {
    get_data(mapState);
  }, 2000)
}
export { setupPolling }
export default setupPolling;