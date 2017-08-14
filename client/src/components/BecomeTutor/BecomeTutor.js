import React, { Component } from 'react';
import BecomeHero from './BecomeHero';
import Values from './Values';
import BecomeHow from './BecomeHow';
import BecomeFooter from './BecomeFooter';

export default class BecomeTutor extends Component {
  render() {
    return (
      <main>
        <BecomeHero />
        <Values />
        <BecomeHow />
        <BecomeFooter />
      </main>
    );
  }
}
