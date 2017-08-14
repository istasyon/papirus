import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './styles/HowItWorks.scss';

class HowItWorks extends Component {
  render() {
    return (
      <section className="HowItWorks">
        <h2 className="HowItWorks__title">How It Works</h2>
        <Grid fluid>
          <Row>
            <Col className="HowItWorks__col" xs={12} sm={4}>
              <img
                src="/src/assets/search.svg"
                className="HowItWorks__icon"
                alt="search icon"
              />
              <h3 className="HowItWorks__item_title">1. Search for a tutor</h3>
              <p className="HowItWorks__item_text">
                Search for in-person or online tutoring
              </p>
            </Col>
            <Col className="HowItWorks__col" xs={12} sm={4}>
              <img
                src="/src/assets/calendar-clock.svg"
                className="HowItWorks__icon"
                alt="calendar icon"
              />
              <h3 className="HowItWorks__item_title">
                2. Choose a date and time
              </h3>
              <p className="HowItWorks__item_text">
                Schedule your lessons according to teacher's real-time
                availability.
              </p>
            </Col>
            <Col className="HowItWorks__col" xs={12} sm={4}>
              <img
                src="/src/assets/rocket.svg"
                className="HowItWorks__icon"
                alt="rocket icon"
              />
              <h3 className="HowItWorks__item_title">3. Start Learning</h3>
              <p className="HowItWorks__item_text">
                Take your lesson online or in person.
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default HowItWorks;
