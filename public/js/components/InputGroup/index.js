'use strict';

import React from 'react';

export default class Exercise extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='component_input_group_root'>
        <label className='component_input_group_label'>
          { this.props.title }
          <input
            className='component_input_group_input form-control'
            type='text'
            name={this.props.name}/>
        </label>
      </div>
    );
  }
}
