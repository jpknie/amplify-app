import React from 'react';
import logo from './logo.svg';
import './App.css';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <SideNav
        onSelect={(selected) => console.log(selected)} style={{'background-color': '#00fa'}}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
            <FontAwesomeIcon icon={faCoffee} />
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <header className="App-header">
      <p>Testing React side navigator</p>
      </header>
    </div>
  );
}

export default App;
