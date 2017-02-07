'use strict';

import React from 'react';
import Exercise from '../Exercise/';
import { State } from '../../constants';

export default class Workout extends React.Component {

  render() {

    var title = (this.state === State.CREATE
      || this.state === State.UPDATE) ?
        <input
          type='text'
          onChange={this._titleOnChange.bind(this)}
          className='form-control'
          value={this.props.data.title}
          placeholder='Exercise' />
        : <h1>{ this.props.data.title }</h1>;

    return (
      <div>
        { title }
        { this._mapActions() }
        { this._mapExercises() }
      </div>
    );
  }

  _onChange(a) {
    console.log(a);
  }

  _titleOnChange(e) {
    this.props.data.title = e.target.value;
  }

  _mapExercises() {
    return this.props.data.exercises.map((exercise) => {
      return <Exercise
        key={exercise._id}
        data={exercise}
        onUpdate={this._onChange.bind(this)} />;
    });
  }

  _mapActions() {
    let actions = [];
    if (this.state === State.CREATE) {
      actions.push(<span
        key={actions.length}
        className='btn primary2'
        onClick={this._editWorkout.bind(this)}>Create</span>);
    } else if (this.state === State.UPDATE) {
      actions.push(<span
        key={actions.length}
        className='btn primary2'
        onClick={this._saveChanges.bind(this)}>Update</span>);
    } else {
      actions.push(<span
        key={actions.length}
        className='btn primary2'
        onClick={this._editWorkout.bind(this)}>Edit</span>);
    }
    return actions;
  }

  _createWorkout() {

  }

  _editWorkout() {
    this.state = State.UPDATE;
    this.forceUpdate();
  }

  _saveChanges() {
    console.log(this);
  }

  _cancelUpdate() {

  }

}
