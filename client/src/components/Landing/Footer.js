import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <section className="Footer">
        <h3 className="Footer__title">Don't stop now</h3>
        <div className="Footer__button_container">
          <Link to="/find-tutors" className="Footer__button_learn btn">
            START LEARNING
          </Link>
          <Link to="/become-a-tutor" className="Footer__button_tutor btn">
            BECOME A TUTOR
          </Link>
        </div>
      </section>
    );
  }
}

export default Footer;
