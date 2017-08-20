import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Landing from './components/Landing';
import FindTutors from './components/FindTutors';
import BecomeTutor from './components/BecomeTutor';
import TutorProfile from './components/TutorProfile';

class Router extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      this.props.loginUser(token, user);
    } else {
      this.props.loginUser(null, null);
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/find-tutors/:category?" component={FindTutors} />
            <Route path="/tutors/:tutorID" component={TutorProfile} />
            <Route path="/become-a-tutor" component={BecomeTutor} />
            <Route render={() => <p>404 Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(Router);
