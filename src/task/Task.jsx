import React from 'react';
import './Task.css';
import Control from '../control/Control';

class Task extends React.Component {
  constructor () {

  }
  
  render() {
    return (
      <li className="task_list__item" key={this.props.id}>
        {this.props.value}
        <Control type="delete" />
        <Control type="done" />
      </li>
    )
  }
}

export default Task;
