import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

import Navbar from '../common/Navbar';
import TutorCard from './TutorCard';
import TutorFilter from './TutorFilter';

import './styles/FindTutors.scss';

export default class FindTutors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutors: [],
      loadFinished: false,
      platform: 'BOTH',
      hourlyRateMin: 20,
      hourlyRateMax: 60,
      sortProperty: 'rating desc',
      category: 'English'
    };
    this.loadMore = this.loadMore.bind(this);
    this.handlePlatform = this.handlePlatform.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleHourlyRate = this.handleHourlyRate.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  async componentDidMount() {
    const { platform, sortProperty } = this.state;
    if (this.props.match.params.category) {
      let category = this.props.match.params.category;
      this.handleCategory(category.charAt(0).toUpperCase() + category.slice(1));
    } else {
      const response = await axios.post(
        `/api/tutors?platform=${platform}&sortProperty=${sortProperty}&category=${this
          .state.category}`
      );
      this.setState({ tutors: response.data.tutors });
    }
  }

  renderTutors() {
    return this.state.tutors.map(tutor => {
      return <TutorCard key={tutor._id} data={tutor} />;
    });
  }

  async loadMore() {
    const {
      hourlyRateMin,
      hourlyRateMax,
      platform,
      category,
      sortProperty
    } = this.state;
    const response = await axios.post(
      `/api/tutors??platform=${platform}&hourlyRateMin=${hourlyRateMin}&hourlyRateMax=${hourlyRateMax}&sortProperty=${sortProperty}&category=${category}&offset=${this
        .state.tutors.length}`
    );
    if (response.data.tutors.length < 1) {
      return this.setState({ loadFinished: true });
    }
    this.setState({ tutors: this.state.tutors.concat(response.data.tutors) });
  }

  async handlePlatform(platform) {
    const { hourlyRateMin, hourlyRateMax, sortProperty, category } = this.state;
    const response = await axios.post(
      `/api/tutors?platform=${platform}&hourlyRateMin=${hourlyRateMin}&hourlyRateMax=${hourlyRateMax}&sortProperty=${sortProperty}&category=${category}`
    );
    this.setState({
      tutors: response.data.tutors,
      platform,
      loadFinished: false
    });
  }

  async handleSort(sortProperty) {
    const { hourlyRateMin, hourlyRateMax, platform, category } = this.state;
    const response = await axios.post(
      `/api/tutors?platform=${platform}&hourlyRateMin=${hourlyRateMin}&hourlyRateMax=${hourlyRateMax}&sortProperty=${sortProperty}&category=${category}`
    );
    this.setState({
      tutors: response.data.tutors,
      sortProperty,
      loadFinished: false
    });
  }

  async handleHourlyRate(val) {
    const { sortProperty, platform, category } = this.state;
    const response = await axios.post(
      `/api/tutors?platform=${platform}&hourlyRateMin=${val[0]}&hourlyRateMax=${val[1]}&sortProperty=${sortProperty}&category=${category}`
    );
    this.setState({
      tutors: response.data.tutors,
      hourlyRateMin: val[0],
      hourlyRateMax: val[1],
      loadFinished: false
    });
  }

  async handleCategory(category) {
    const { sortProperty, platform, hourlyRateMin, hourlyRateMax } = this.state;
    const response = await axios.post(
      `/api/tutors?platform=${platform}&hourlyRateMin=${hourlyRateMin}&hourlyRateMax=${hourlyRateMax}&sortProperty=${sortProperty}&category=${category}`
    );
    this.setState({
      tutors: response.data.tutors,
      category,
      loadFinished: false
    });
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
          <TutorFilter
            onPlatform={this.handlePlatform}
            onSort={this.handleSort}
            onHourlyRate={this.handleHourlyRate}
            onCategory={this.handleCategory}
            category={this.state.category}
          />
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
