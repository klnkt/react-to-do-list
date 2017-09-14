import React from 'react';
import './Task.css';

class Task extends React.Component {
  render() {
    return (
      <li className="task_list__item" key={this.props.id}>
        {this.props.value}
        <i className="material-icons">delete</i>
        <i className="material-icons">done</i>        
      </li>
    )
  }
}

export default Task;
