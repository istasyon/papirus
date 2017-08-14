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
        <Grid fluid>
          <Row>
            <Col xs={6} sm={6} md={3}>
              <FontAwesome className="Values__icon" name="user" size="4x" />
              <p>Free account</p>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <FontAwesome
                className="Values__icon"
                name="graduation-cap"
                size="4x"
              />
              <p>Free account</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="comments" size="4x" />
              <p>Free account</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="dollar" size="4x" />
              <p>Free account</p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="calendar" size="4x" />
              <p>Free account</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome className="Values__icon" name="search" size="4x" />
              <p>Free account</p>
            </Col>
            <Col xs={6} sm={3} md={3}>
              <FontAwesome
                className="Values__icon"
                name="map-marker"
                size="4x"
              />
              <p>Free account</p>
            </Col>
            <Col xs={6} sm={6} md={3}>
              <FontAwesome className="Values__icon" name="smile-o" size="4x" />
              <p>Free account</p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
