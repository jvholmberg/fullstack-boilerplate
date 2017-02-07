'use strict';

import React from 'react';
import AddExercise from '../Exercise/add';
import { ClassNames } from '../../constants';
import { generateUUID } from '../../helpers';

export default class AddWorkout extends React.Component {

  render() {
    return (
      <div>
        <div className={ClassNames.Workout.Header}>
          <button className='btn primary' onClick={this._addExercise.bind(this)}>
              Add Exercise
          </button>
          <button className='btn success' onClick={this._onSubmit.bind(this)}>
              Save
          </button>
          <button className='btn danger' onClick={this._onCancel.bind(this)}>
              Cancel
          </button>
        </div>
        <div className={ClassNames.Workout.Body}>
          <div className={ClassNames.Workout.Section}>
            <input
              type='text'
              className='form-control'
              placeholder='Title'
              value={this.props.data.title}
              onChange={this._onChange.bind(this)}/>
          </div>
          <div className={ClassNames.Workout.Section}>
            { this._mapExercises() }
          </div>
        </div>
      </div>
    );
  }

  _onChange(e) {
    this.props.data.title = e.target.value;
  }

  _onSubmit() {
    console.log('_onSubmit');
  }

  _onCancel() {
    console.log('_onCancel');
  }

  _addExercise() {
    this.props.data.exercises.push({
      title: '',
      sets: []
    });
    this.forceUpdate();
  }

  _mapExercises() {
    return this.props.data.exercises.map((exercise, index) => {
      return <AddExercise
        key={generateUUID()}
        data={exercise}
        onUpdate={this._onCancel.bind(this)} />;
    });
  }
}
AddWorkout.defaultProps = {
  data: {
    title: '',
    exercises: []
  }
};
