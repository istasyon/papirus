import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import TestimonialCard from './TestimonialCard';
import './styles/Testimonial.scss';

class Testimonial extends Component {
  render() {
    return (
      <section className="Testimonial">
        <Grid fluid>
          <Row>
            <Col className="Testimonial__col" xs={12} sm={12} md={4}>
              <TestimonialCard />
            </Col>
            <Col className="Testimonial__col" xs={12} sm={12} md={4}>
              <TestimonialCard />
            </Col>
            <Col className="Testimonial__col" xs={12} sm={12} md={4}>
              <TestimonialCard />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Testimonial;
