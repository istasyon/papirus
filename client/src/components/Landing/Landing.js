import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';

import Hero from './Hero';
import GetStarted from './GetStarted';
import HowItWorks from './HowItWorks';
import Testimonial from './Testimonial';
import Footer from './Footer';

export default class Landing extends Component {
  render() {
    return (
      <main>
        <Hero onHowItWorks={() => scrollToElement('#how-it-works')} />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <GetStarted />
        <Testimonial />
        <Footer />
      </main>
    );
  }
}
