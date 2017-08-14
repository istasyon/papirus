import React, { Component } from 'react';
import './styles/TestimonialCard.scss';

class TestimonialCard extends Component {
  render() {
    return (
      <div className="TestimonialCard">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          expedita saepe temporibus cum nihil perspiciatis perferendis impedit,
          nam eveniet cupiditate optio autem fuga quas atque deleniti
          blanditiis. Quis, fuga, deleniti!
        </p>
        <h5>Jack Smith</h5>
        <p>Studying International Business</p>
        <img
          src="/src/assets/testimonial-avatar-1.png"
          className="TestimonialCard__avatar"
          alt="avatar"
        />
      </div>
    );
  }
}

export default TestimonialCard;
