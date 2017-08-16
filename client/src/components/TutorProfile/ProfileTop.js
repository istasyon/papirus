import React, { Component } from 'react';

import './styles/ProfileTop.scss';

export default class ProfileTop extends Component {
  render() {
    return (
      <section className="ProfileTop">
        <div className="ProfileTop__container">
          <img
            src="https://randomuser.me/api/portraits/men/94.jpg"
            className="ProfileTop__avatar"
            alt="avatar"
          />
          <div className="ProfileTop__text_content">
            <h1>MERVE P.</h1>
            <div>5 STARS</div>
            <div className="ProfileTop__location_platform_container">
              <div className="ProfileTop__location_container">
                <div>LOKASYON</div>
                <p>Besiktas, Istanbul</p>
              </div>
              <div className="ProfileTop__platform_container">
                <div>PLATFORM</div>
                <p>Online, Lokal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
