import React, { Component } from 'react';

import './styles/TutorCard.scss';

export default class TutorCard extends Component {
  render() {
    return (
      <div className="TutorCard__container">
        <img
          src="https://randomuser.me/api/portraits/men/94.jpg"
          className="TutorCard__avatar"
          alt="search icon"
        />
        <div className="TutorCard__content_container">
          <div className="TutorCard__content_top">
            <div className="TutorCard__content_left">
              <div className="TutorCard__name_rating">
                <h3 className="TutorCard__name">Merve P.</h3>
                <div className="TutorCard__rating">5</div>
              </div>
              <div className="TutorCard__location_container">
                <p>Besiktas, Istanbul</p>
              </div>
            </div>
            <div className="TutorCard__content_right">
              <button>Book Now</button>
              <button>Send Message</button>
              <p>Hourly Rate: 30$</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssumenda
            voluptate
          </p>
        </div>
      </div>
    );
  }
}
