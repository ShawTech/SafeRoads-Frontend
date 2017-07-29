import React from 'react';
const AppBar = ({title}) => (
  <header className="app-bar shadow">
    <h1 className="txt-app-bar-title dark">{title}</h1>
  </header>
);
export default AppBar;
export { AppBar };