'use strict';

import React from 'react';
import { State } from '../../constants';
import Set from '../Set/';

export default class Exercise extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <div className='exercise_root'>
        <div className='exercise_section'>
          <input
            type='text'
            className='form-control'
            placeholder='Exercise'
            defaultValue={this.props.data.title}
            onChange={this._titleOnChange.bind(this)} />
        </div>
        <div className='exercise_section'>
          { this._mapSets() }
        </div>
      </div>
    );
  }

  _mapSets() {
    return this.props.data.sets.map((set) => {
      return <Set
        key={set._id}
        data={set}
        onUpdate={this._setOnChange.bind(this)} />
    });
  }

  _titleOnChange(e) {
    this.props.data.title = e.target.value;
    this.updateComponent();
  }

  _setOnChange(a) {
    let self = this;
    this.props.data.sets.find((b) => {
      if (a._id === b._id) {
        b = a;
        self.updateComponent();
      }
    });
  }

  updateComponent() {
    this.props.onUpdate(this.props.data);
  }
}
