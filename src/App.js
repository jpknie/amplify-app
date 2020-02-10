import React from 'react';
import './App.css';

import { BrowserRouter as Router,
         Route } from 'react-router-dom';

import RecordingView from './RecordingView';

import SideNav, { 
  Toggle, 
  Nav, 
  NavItem, 
  NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faVideo, faHome } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route render={
            ({ location, history }) =>
          <React.Fragment>
            <SideNav
              onSelect={(selected) => {
                const to = '/' + selected; 
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}>
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                  <NavIcon>
                    <FontAwesomeIcon icon={faHome} />
                  </NavIcon>
                  <NavText>
                    Digia Pelican Rouge
                  </NavText>
                </NavItem>
                <NavItem eventKey="recordings">
                  <NavIcon>
                    <FontAwesomeIcon icon={faVideo} />
                  </NavIcon>
                  <NavText>
                    Videos
                  </NavText>          
                </NavItem>
              </SideNav.Nav>
            </SideNav>
           <Route path="/recordings" component={
                  props => <RecordingView />
            } />
        </React.Fragment>
        }
      />
      </Router>
      </div>
    );
  }
}

export default App;