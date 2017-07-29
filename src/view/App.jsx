import React, { Component } from 'react';
import { HeatMap } from './HeatMap'; 
import './App.css';
const App = ({}) => (
  <div className="App">
    <div className="header">
      <div className="container">
        <ul>
          <li><b style={{textTransform: "uppercase"}}>SafeRoads.Tech Australia - Predictive Road Accidents</b></li>
        </ul>
      </div>
    </div>
    <div className="map-section">
      <HeatMap/>
    </div>
  </div>
);
export default App;
