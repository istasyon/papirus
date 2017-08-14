import React, { Component } from 'react';
import BecomeHero from './BecomeHero';
import Values from './Values';

export default class BecomeTutor extends Component {
  render() {
    return (
      <main>
        <BecomeHero />
        <Values />
      </main>
    );
  }
}
