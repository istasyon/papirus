import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

import Navbar from '../common/Navbar';
import TutorCard from './TutorCard';

import './styles/FindTutors.scss';

export default class FindTutors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: [],
      loadFinished: false
    };
    this.loadMore = this.loadMore.bind(this);
  }

  async componentDidMount() {
    const response = await axios.post('/api/tutors');
    this.setState({ tutors: response.data.tutors });
  }

  renderTutors() {
    return this.state.tutors.map(tutor => {
      return <TutorCard key={tutor._id} data={tutor} />;
    });
  }

  async loadMore() {
    const response = await axios.post(
      `/api/tutors?length=${this.state.tutors.length}`
    );
    if (response.data.tutors.length < 1) {
      return this.setState({ loadFinished: true });
    }
    this.setState({ tutors: this.state.tutors.concat(response.data.tutors) });
  }

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
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadMore}
            hasMore={!this.state.loadFinished}
            loader={<div className="loader">Loading ...</div>}
          >
            {this.renderTutors()}
          </InfiniteScroll>
        </div>
      </main>
    );
  }
}
