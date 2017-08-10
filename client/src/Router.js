import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import SecondPage from './components/SecondPage';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/second" component={SecondPage} />
            <Route render={() => <p>404 Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
