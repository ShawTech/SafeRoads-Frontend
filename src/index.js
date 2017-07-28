import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import App from './view/App';
import SokcetIo from 'socket.io-client';
import { setupSocket } from './client/setupSocket';

setupSocket(SocketIo.connect('http://127.0.0.1:8080'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
