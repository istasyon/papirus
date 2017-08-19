import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/TutorCard.scss';

export default class TutorCard extends Component {
  render() {
    const {
      firstName,
      rating,
      imageUrl,
      hourlyRate,
      platform
    } = this.props.data;
    return (
      <Link to="/tutors/merve-p-123" className="TutorCard__container">
        <img src={imageUrl} className="TutorCard__avatar" alt="user avatar" />
        <div className="TutorCard__content_container">
          <div className="TutorCard__content_top">
            <div className="TutorCard__content_left">
              <div className="TutorCard__name_rating">
                <h3 className="TutorCard__name">
                  {firstName}
                </h3>
                <div className="TutorCard__rating">
                  {rating}
                </div>
              </div>
              <div className="TutorCard__location_container">
                <p>Besiktas, Istanbul</p>
              </div>
              <p>
                PLATFORM: {platform}
              </p>
            </div>
            <div className="TutorCard__content_right">
              <button>Book Now</button>
              <button>Send Message</button>
              <p>
                Hourly Rate: {hourlyRate}$
              </p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssumenda
            voluptate
          </p>
        </div>
      </Link>
    );
  }
}
