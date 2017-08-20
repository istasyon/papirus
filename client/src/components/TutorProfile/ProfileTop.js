import React, { Component } from 'react';

import './styles/ProfileTop.scss';

export default class ProfileTop extends Component {
  render() {
    const { imageUrl, firstName, lastName, rating, platform } = this.props.user;
    return (
      <section className="ProfileTop">
        <div className="ProfileTop__container">
          <img src={imageUrl} className="ProfileTop__avatar" alt="avatar" />
          <div className="ProfileTop__text_content">
            <h1>{`${firstName} ${lastName}`}</h1>
            <div>
              {rating} STARS
            </div>
            <div className="ProfileTop__location_platform_container">
              <div className="ProfileTop__location_container">
                <div>LOKASYON</div>
                <p>Besiktas, Istanbul</p>
              </div>
              <div className="ProfileTop__platform_container">
                <div>PLATFORM</div>
                <p>
                  {platform}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
