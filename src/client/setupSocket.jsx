import { keys } from './socket-keys.jsx';
function setupSocket(socket, mapState) {
  socket.on(keys.retrievedCrashData, (crashDataList) => {
    mapState.crashDataList = crashDataList;
  });
}
export { setupSocket }
export default setupSocket;