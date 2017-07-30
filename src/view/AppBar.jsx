import React from 'react';
import './AppBar.css';
const AppBar = ({title}) => (
  <header className="app-bar shadow">
    <a href="https://www.saferoads.tech" className="link">
      <h1 className="txt-app-bar-title dark">{title}</h1>
    </a>
  </header>
);
export default AppBar;
export { AppBar };