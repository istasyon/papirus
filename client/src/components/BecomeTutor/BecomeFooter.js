import React, { Component } from 'react';
import './styles/BecomeFooter.scss';

export default class BecomeFooter extends Component {
  render() {
    return (
      <section className="BecomeFooter">
        <h2 className="BecomeFooter__heading">
          Fill the application form and start teaching
        </h2>
        <button className="BecomeFooter__button btn">APPLY NOW</button>
      </section>
    );
  }
}
