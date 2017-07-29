import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import App from './view/App';

import { mapState } from './state/appState';
import SocketIo from 'socket.io-client';
import { setupPolling } from './client/setupSocket';

// Sets up our SocketIO end points
setupPolling(mapState);
// Renders our components into DOM
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
