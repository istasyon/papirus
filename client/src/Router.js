import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import FindTutors from './components/FindTutors';
import BecomeTutor from './components/BecomeTutor';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/find-tutors/:category?" component={FindTutors} />
            <Route path="/become-a-tutor" component={BecomeTutor} />
            <Route render={() => <p>404 Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
