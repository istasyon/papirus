import React, { Component } from 'react';
import './styles/BecomeHero.scss';

export default class BecomeHero extends Component {
  render() {
    return (
      <section className="BecomeHero">
        <div className="BecomeHero__card">
          <h1 className="BecomeHero__heading">We need tutors like you.</h1>
          <p className="BecomeHero__description">
            Create your free account. Set your available hours. Start teaching.
          </p>
          <button className="BecomeHero__button btn">APPLY NOW</button>
        </div>
      </section>
    );
  }
}
