import React, { Component } from 'react';
import './styles/Hero.scss';

class Hero extends Component {
  render() {
    return (
      <section className="Hero">
        <div className="Hero__overlay">
          <div className="Hero__content">
            <h1 className="Hero__title">
              Find local and online tutors at affordable prices
            </h1>
            <button className="Hero__button">SEARCH TUTORS</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
