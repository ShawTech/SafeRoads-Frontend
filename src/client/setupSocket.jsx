import { keys } from './socket-keys.jsx';
/**
 * Sets up socket endpoint and specifies what to do when they are triggered.
 */
function setupSocket(socket, mapState) {
  socket.on(keys.retrievedCrashData, (crashDataList) => {
    console.log("Retrieved data: " );
    console.log(crashDataList);
    // Since we're using MobX this will automatically trigger a rerender :D
    mapState.crashDataList = crashDataList;
  });
  socket.on('connection', () => {
    console.log("Connected to socketio");
  })
}
export { setupSocket }
export default setupSocket;