import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import LandingNavbar from './LandingNavbar';
import { FormControl } from 'react-bootstrap';
import CATEGORIES from '../../constants/categories';
import './styles/Hero.scss';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(
      `/find-tutors/${this.state.searchValue.trim().toLowerCase()}`
    );
    this.setState({ searchValue: '' });
  }

  render() {
    return (
      <section className="Hero">
        <LandingNavbar onHowItWorks={this.props.onHowItWorks} />
        <div className="Hero__overlay">
          <div className="Hero__content">
            <h1 className="Hero__title">
              Find local and online tutors at affordable prices
            </h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <select
                  className="Hero__searchinput"
                  onChange={event => {
                    this.setState({ searchValue: event.target.value });
                  }}
                >
                  {CATEGORIES.map(item => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                type="submit"
                className="Hero__button"
                onClick={this.handleSubmit}
              >
                SEARCH TUTORS
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Hero);
