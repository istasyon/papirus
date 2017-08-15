import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import TutorCard from './TutorCard';

import './styles/FindTutors.scss';

export default class FindTutors extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <div className="FindTutors__content">
          <div className="FindTutors__heading_container">
            <div className="FindTutors__heading_text_container">
              <h1 className="FindTutors__heading_title">Find a Tutor</h1>
              <p className="FindTutors__heading_description">
                Browse qualified tutors on different areas. Review profiles and
                get in touch with your next tutor.
              </p>
            </div>
            <img
              src="/src/assets/search.svg"
              className="FindTutors__icon_search"
              alt="search icon"
            />
          </div>
          <TutorCard />
          <TutorCard />
        </div>
      </main>
    );
  }
}
