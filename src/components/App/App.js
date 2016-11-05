import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import Home from '../Home/index';
import About from '../About';
import Stores from '../Stores';
import NoMatch from '../NoMatch'

class App extends Component {
  render() {

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

    return (
      <BrowserRouter>
          <div>
            <AppBar
              title="Title"
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              iconElementRight={true ? <Logged /> : <Login />}
            />
            <ul>
              {/* 3. Link to some paths with `Link` */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/stores">Stores</Link></li>
            </ul>

            <hr/>

            {/* 4. Render some `<Match/>` components.
                  When the current location matches the `pattern`
                  then the `component` will render.
            */}
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/about" component={About} />
            <Match pattern="/stores" component={Stores} />
        
            {/* If none of those match, then a sibling `Miss` will render. */}
            <Miss component={NoMatch}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App
