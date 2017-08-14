import React, { Component } from 'react';

import BecomeHowItem from './BecomeHowItem';
import './styles/BecomeHow.scss';

export default class BecomeHow extends Component {
  render() {
    return (
      <section className="BecomeHow">
        <h2 className="BecomeHow__heading">HOW IT WORKS</h2>
        <BecomeHowItem
          number="1"
          heading="Create your free account"
          subheading="Fill your application form"
          items={[
            {
              icon: 'file-o',
              itemHeading: 'Test heading',
              description: 'test description test description'
            },
            {
              icon: 'map-marker',
              itemHeading: 'Test heading',
              description: 'test description test description'
            },
            {
              icon: 'dollar',
              itemHeading: 'Test heading',
              description: 'test description test description'
            }
          ]}
        />
        <BecomeHowItem
          number="2"
          heading="Create your free account"
          subheading="Fill your application form"
          items={[
            {
              icon: 'commenting-o',
              itemHeading: 'Test heading',
              description: 'test description test description'
            },
            {
              icon: 'calendar-check-o',
              itemHeading: 'Test heading',
              description: 'test description test description'
            },
            { icon: '', itemHeading: '', description: '' }
          ]}
        />
        <BecomeHowItem
          number="3"
          heading="Create your free account"
          subheading="Fill your application form"
          items={[
            {
              icon: 'credit-card',
              itemHeading: 'Test heading',
              description: 'test description test description'
            },
            {
              icon: 'money',
              itemHeading: 'Test heading',
              description: 'test description test description'
            },
            {
              icon: 'percent',
              itemHeading: 'Test heading',
              description: 'test description test description'
            }
          ]}
        />
      </section>
    );
  }
}
