import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './styles/Values.scss';

export default class Values extends Component {
  render() {
    return (
      <section className="Values">
        <h2 className="Values__heading">
          Earn money by teaching flexibly in-person or online. Wherever and
          whenever you want.
        </h2>
        <Grid fluid style={{ textAlign: 'center' }}>
          <Row className="Values__row">
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="user" size="4x" />
              <p className="Values__description">Free account</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="dollar" size="4x" />

              <p className="Values__description">Earn money</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome
                className="Values__icon"
                name="graduation-cap"
                size="4x"
              />
              <p className="Values__description">Review course requests</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="smile-o" size="4x" />
              <p className="Values__description">No payment hussle</p>
            </Col>
          </Row>
          <Row className="Values__row">
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="search" size="4x" />
              <p className="Values__description">Reach more students</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="calendar" size="4x" />
              <p className="Values__description">Teach whenever you want</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome
                className="Values__icon"
                name="map-marker"
                size="4x"
              />
              <p className="Values__description">Teach wherever you want</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="comments" size="4x" />
              <p className="Values__description">Connect with your students</p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
