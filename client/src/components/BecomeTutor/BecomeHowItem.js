import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './styles/BecomeHowItem.scss';

export default class BecomeHowItem extends Component {
  renderItems() {
    return this.props.items.map(item => {
      const { icon, itemHeading, description } = item;
      return (
        <div key={icon} className="BecomeHowItem__item">
          <FontAwesome
            className="BecomeHowItem__item_icon"
            name={icon}
            size="4x"
          />
          <h5>
            {itemHeading}
          </h5>
          <p>
            {description}
          </p>
        </div>
      );
    });
  }
  render() {
    const { number, heading, subheading } = this.props;
    return (
      <div className="BecomeHowItem">
        <div className="BecomeHowItem__label">
          <span>
            {number}
          </span>
        </div>
        <h4>
          {heading}
        </h4>
        <p>
          {subheading}
        </p>
        <div className="BecomeHowItem__items_container">
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
