import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import App from './components/App';
import PhotoGrid from './components/photogrid/PhotoGrid';
import Photo from './components/photo/Photo';
import Profile from './components/profile/Profile';

import './components/bundle.scss';

ReactDOM.render(
  <MuiThemeProvider>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={PhotoGrid} />;
          <Route path="/photo/:type" component={Photo} />
          <Route path="/profile" component={Profile} />
        </Route>
      </Router>
  </MuiThemeProvider>
  , document.getElementById('react-root'));
