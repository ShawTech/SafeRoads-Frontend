function get_data(mapState) {
  fetch('https://backend.saferoads.tech:3141/crash/probability', {
    method: 'get',
  }).then((response) => {
    return response.json();
  }).then((jsonData) => {
    console.log(jsonData);  
    mapState.replaceCrashData(jsonData);
  });
}
/**
 * Sets up socket endpoint and specifies what to do when they are triggered.
 */
function setupPolling(mapState) {
  get_data(mapState);
  setInterval(() => {
    console.log("Retrieving data")  ;
    get_data(mapState);
  }, 10000)
}
export { setupPolling }
export default setupPolling;