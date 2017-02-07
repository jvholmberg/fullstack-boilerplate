'use strict';

import React from 'react';
import { State } from '../../constants';

export default class AddSet extends React.Component {

  render() {
    return (
      <div>
        <div className='col col6'>
          <input
            type='text'
            name='reps'
            onChange={this._onChange.bind(this)}
            className='form-control'
            value={this.props.data.reps}
            placeholder='Reps' />
        </div>
        <div className='col col6'>
          <input
            type='text'
            name='weight'
            onChange={this._onChange.bind(this)}
            className='form-control'
            value={this.props.data.weight}
            placeholder='Weight' />
        </div>
      </div>
    );
  }

  _onChange(e) {
    if (e.target.name === 'reps') {
      this.props.data.reps = e.target.value;
    } else {
      this.props.data.weight = e.target.value;
    }
    this.props.onUpdate(this.props.index, this.props.data);
  }
}
AddSet.defaultProps = {
  index: null,
  data: {
    reps: '',
    weight: ''
  }
};
