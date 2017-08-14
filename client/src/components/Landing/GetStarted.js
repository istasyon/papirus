import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles/GetStarted.scss';

class GetStarted extends Component {
  render() {
    return (
      <section className="GetStarted">
        <Grid fluid>
          <Row>
            <Col className="GetStarted__col" xs={12} sm={6}>
              <div className="GetStarted__student">
                <div className="GetStarted__item_overlay">
                  <div className="GetStarted__item_content">
                    <h3 className="GetStarted__item_title">
                      Learn Locally or Online
                    </h3>
                    <p className="GetStarted__item_description">
                      Get personal lessons with best tutors. Find tutors in your
                      area or learn from home.
                    </p>
                    <Link
                      to="/find-tutors"
                      className="GetStarted__item_btn_search btn"
                    >
                      SEARCH FOR A TUTOR
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="GetStarted__col" xs={12} sm={6}>
              <div className="GetStarted__teacher">
                <div className="GetStarted__item_overlay">
                  <div className="GetStarted__item_content">
                    <h3 className="GetStarted__item_title">Are You a Tutor?</h3>
                    <p className="GetStarted__item_description">
                      Papirus needs tutors like you. Teach with Papirus and earn
                      money working from home or anywhere you want.
                    </p>
                    <Link
                      to="/become-a-tutor"
                      className="GetStarted__item_btn_apply btn"
                    >
                      APPLY TO TEACH
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default GetStarted;
