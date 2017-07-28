import { keys } from './socket-keys.jsx';
/**
 * Sets up socket endpoint and specifies what to do when they are triggered.
 */
function setupSocket(socket, mapState) {
  socket.on(keys.retrievedCrashData, (crashDataList) => {
    // Since we're using MobX this will automatically trigger a rerender :D
    mapState.crashDataList = crashDataList;
  });
}
export { setupSocket }
export default setupSocket;