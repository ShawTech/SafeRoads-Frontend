import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './view/App';

import { mapState } from './state/appState';
import SocketIo from 'socket.io-client';
import { setupSocket } from './client/setupSocket';

// Sets up our SocketIO end points
setupSocket(SocketIo.connect('http://10.77.0.109:8080'), mapState);
// Renders our components into DOM
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
