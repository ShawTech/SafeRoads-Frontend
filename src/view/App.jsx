import React from 'react';
//import { HeatMap } from './HeatMap'; 
import { HeatMap } from './HeatMap';
import { AppBar } from './AppBar';
import './App.css';
const App = ({}) => (
  <div className="page">
    <div className="main-app-bar">
      <AppBar title="SafeRoads.Tech Australia - Predictive Road Accidents"/>
    </div>
    <main className="map-section">
      <HeatMap/>
    </main>
  </div>
);
export default App;
