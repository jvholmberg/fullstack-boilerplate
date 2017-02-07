'use strict';

import React from 'react';
import { ClassNames } from '../../constants';
import { generateUUID } from '../../helpers';
import AddSet from '../Set/add';

export default class AddExercise extends React.Component {

  render() {
    return (
      <div className={ClassNames.Exercise.Wrapper}>
        <div className={ClassNames.Exercise.Root}>
          <div className={ClassNames.Exercise.Header + ' pad-s'}>
            <div className='col col8'>
              <input
                type='text'
                className='form-control'
                placeholder='Exercise'
                defaultValue={this.props.data.title}
                onChange={this._onChange.bind(this)} />
            </div>
            <div className='grid grid4'>
              <button className='btn danger lmar-s' onClick={this._removeExercise.bind(this)}>
                  Remove
              </button>
              <button className='btn primary lmar-s' onClick={this._addSet.bind(this)}>
                  + Set
              </button>
            </div>
          </div>
          <div className={ClassNames.Exercise.Body}>
            <div className={ClassNames.Exercise.Section}>
              { this._mapSets() }
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChange(e) {
    this.props.data.title = e.target.value;
  }

  _onUpdate(index, data) {
    this.props.data.sets[index] = data;
    console.log(this.props.data);
  }

  _removeExercise(e) {

  }

  _mapSets() {
    return this.props.data.sets.map((set, index) => {
      return <AddSet
        key={generateUUID()}
        index={index}
        data={set}
        onUpdate={this._onUpdate.bind(this)} />
    });
  }

  _addSet() {
    this.props.data.sets.push({});
    this.forceUpdate();
  }
}

AddExercise.defaultProps = {
  data: {
    title: '',
    sets: []
  }
};
