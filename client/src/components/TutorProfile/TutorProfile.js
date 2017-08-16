import React, { Component } from 'react';

import Navbar from '../common/Navbar';
import ProfileTop from './ProfileTop';
import './styles/TutorProfile.scss';

export default class TutorProfile extends Component {
  render() {
    return (
      <main className="TutorProfile">
        <Navbar />
        <ProfileTop />
        <section className="TutorProfile__detail">
          <div className="TutorProfile__detail_inner_container">
            <div className="TutorProfile__detail_left">
              <iframe
                className="TutorProfile__video"
                src="https://www.youtube.com/embed/7q6YekNTwHA"
              />
              <h3>English</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa a
                velit alias ratione debitis, consequatur, laudantium at vero
                perferendis molestiae, nobis saepe ut eaque! Necessitatibus
                ratione quibusdam iste velit, distinctio.
              </p>
              <h3>Education</h3>
              <h3>Experiences</h3>
              <h3>Certificates</h3>
              <h3>Comments</h3>
            </div>
            <div className="TutorProfile__detail_right">
              <div className="TutorProfile__detail_right_container">
                <div className="TutorProfile__book_card">
                  <div className="TutorProfile__book_card_top">
                    <span className="TutorProfile__book_card_rate">
                      Hourly Rate
                    </span>
                    <span>75.00 EUR</span>
                  </div>
                  <div className="TutorProfile__book_card_content">
                    <button>BOOK NOW</button>
                    <div>OR</div>
                    <button>SEND MESSAGE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
