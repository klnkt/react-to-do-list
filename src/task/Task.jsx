import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import Control from '../control/Control';
import Input from '../input/Input';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false };
    this.showInput = this.showInput.bind(this);
    this.hideInput = this.hideInput.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  showInput() {
    this.setState({ edit: true });
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  hideInput() {
    this.setState({ edit: false });
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  editTitle(value, id) {
    this.props.editTask(value, id);
    this.hideInput();
  }

  handleOutsideClick(e) {
    if (this.taskNode.contains(e.target)) {
      return;
    }
    this.hideInput();
  }

  render() {
    const taskClass = (this.props.status === 'unchecked') ? 'task_list__item' : 'task_list__item checked';
    const id = this.props.id;
    const changeStatus = this.props.changeStatus;
    const removeTask = this.props.removeTask;
    const checkControl = (
      <Control
        name="done"
        cb={changeStatus}
        id={id}
        status="checked"
        newClass="control__hidden control__hover task_list__control"
      />
    );
    const uncheckControl = (
      <Control
        name="refresh"
        cb={changeStatus}
        id={id}
        status="unchecked"
        newClass="control__hidden control__hover task_list__control"
      />
    );
    const deleteControl = (
      <Control
        name="delete"
        cb={removeTask}
        id={id}
        newClass="control__hidden control__hover task_list__control"
      />
    );
    const editControl = (
      <Control
        name="edit"
        cb={this.showInput}
        id={id}
        status="unchecked"
        newClass="control__hidden control__hover task_list__control"
      />
    );
    let taskElement;
    if (this.state.edit) {
      taskElement = (
        <Input
          title={this.props.title}
          id={this.props.id}
          do={this.editTitle}
          undo={this.hideInput}
          newClass={`task_list__item ${taskClass}`}
        />
      );
    } else {
      taskElement = (
        <div className={taskClass}>
          <span className="title">{this.props.title}</span>
          {deleteControl}
          {editControl}
          {(this.props.status === 'unchecked') ? checkControl : uncheckControl}
        </div>
      );
    }
    return (
      <li key={this.props.id} ref={(taskNode) => { this.taskNode = taskNode; }}>
        {taskElement}
      </li>
    );
  }
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  status: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

Task.defaultProps = {
  title: 'Do something',
};

export default Task;
