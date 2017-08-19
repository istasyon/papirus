import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import ReactSlider from 'react-slider';
import './styles/TutorFilter.scss';

export default class TutorFilter extends Component {
  state = {
    slider: [20, 60]
  };
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
        <ReactSlider
          className="horizontal-slider"
          min={20}
          max={60}
          minDistance={6}
          defaultValue={[20, 60]}
          pearling
          withBars
          onAfterChange={val => this.props.onHourlyRate(val)}
          onChange={val => this.setState({ slider: val })}
        >
          <div className="TutorFilter__handle">
            {this.state.slider[0]}
          </div>
          <div className="TutorFilter__handle">
            {this.state.slider[1]}
          </div>
        </ReactSlider>
      </div>
    );
  }
}
