import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../common/Navbar';
import ProfileTop from './ProfileTop';
import './styles/TutorProfile.scss';

export default class TutorProfile extends Component {
  state = {
    user: {},
    loading: true
  };

  async componentDidMount() {
    const response = await axios.get(
      `/api/users/${this.props.match.params.tutorID}`
    );
    this.setState({ user: response.data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>LOADING</h1>;
    }
    const {
      teachingSubjects,
      description,
      education,
      experience,
      hourlyRate
    } = this.state.user;
    return (
      <main className="TutorProfile">
        <Navbar />
        <ProfileTop user={this.state.user} />
        <section className="TutorProfile__detail">
          <div className="TutorProfile__detail_inner_container">
            <div className="TutorProfile__detail_left">
              <iframe
                className="TutorProfile__video"
                src="https://www.youtube.com/embed/7q6YekNTwHA"
              />
              <h3>
                {teachingSubjects[0]}
              </h3>
              <p>
                {description}
              </p>
              <h3>Education</h3>
              <p>
                {education}
              </p>
              <h3>Experiences</h3>
              {experience}
              <h3>Comments</h3>
            </div>
            <div className="TutorProfile__detail_right">
              <div className="TutorProfile__detail_right_container">
                <div className="TutorProfile__book_card">
                  <div className="TutorProfile__book_card_top">
                    <span className="TutorProfile__book_card_rate">
                      Hourly Rate
                    </span>
                    <span>
                      {hourlyRate} EUR
                    </span>
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
