import { keys } from 'socket-keys.jsx';
import { mapState } from './MapState.jsx';
function setupSocket(socket) {
  socket.on(keys.retrievedCrashData, (crashDataList) => {
    mapState.crashDataList = crashDataList;
  });
}
export { setupSocket }
export default setupSocket;