import './index.css';

import App from './view/App';
import React from 'react';
import ReactDOM from 'react-dom';
import SocketIo from 'socket.io-client';
import { mapState } from './state/appState';
import registerServiceWorker from './registerServiceWorker';
import { setupSocket } from './client/setupSocket';

// Sets up our SocketIO end points
setupSocket(SocketIo.connect('http://localhost:8080'), mapState);
// Renders our components into DOM
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
