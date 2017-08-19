import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import './styles/TutorFilter.scss';

export default class TutorFilter extends Component {
  render() {
    return (
      <div className="TutorFilter">
        <FormControl
          componentClass="select"
          onChange={event => {
            this.props.onPlatform(event.target.value);
          }}
        >
          <option value="BOTH">Both</option>
          <option value="LOCAL">Local</option>
          <option value="ONLINE">Online</option>
        </FormControl>
        <FormControl
          componentClass="select"
          onChange={event => {
            this.props.onSort(event.target.value);
          }}
        >
          <option value="rating desc">Rating Descending</option>
          <option value="rating asc">Rating Ascending</option>
          <option value="hourly desc">Hourly Rate Descending</option>
          <option value="hourly asc">Hourly Rate Ascending</option>
        </FormControl>
      </div>
    );
  }
}
