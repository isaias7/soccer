import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './app.scss';

import AppContainer from '../../containers/AppContainer';

// const Link = reactRouter.Link;

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppContainer />
      </Router>
    );
  }
}
render(<App />, document.getElementById('app'));
