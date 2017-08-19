import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import './styles/TutorFilter.scss';

export default class TutorFilter extends Component {
  render() {
    return (
      <div className="TutorFilter">
        <FormControl
          componentClass="select"
          placeholder="platform"
          onChange={event => {
            this.props.onPlatform(event.target.value);
          }}
        >
          <option value="BOTH">Both</option>
          <option value="LOCAL">Local</option>
          <option value="ONLINE">Online</option>
        </FormControl>
      </div>
    );
  }
}
