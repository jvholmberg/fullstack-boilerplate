'use strict';

import React from 'react';
import { State } from '../../constants';

export default class Set extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <div className='col col6'>
          <input
            type='text'
            onChange={this._repsOnChange.bind(this)}
            className='form-control'
            defaultValue={this.props.data.reps}
            placeholder='Reps' />
        </div>
        <div className='col col6'>
          <input
            type='text'
            onChange={this._weightOnChange.bind(this)}
            className='form-control'
            defaultValue={this.props.data.weight}
            placeholder='Weight' />
        </div>
      </div>
    );
  }

  _repsOnChange(e) {
    this.props.data.reps = e.target.value;
    this.updateComponent();
  }

  _weightOnChange(e) {
    this.props.data.weight = e.target.value;
    this.updateComponent();
  }

  updateComponent() {
    this.props.onUpdate(this.props.data);
  }
}
