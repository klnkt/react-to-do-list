import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import Control from '../control/Control';
import Input from '../input/Input';

function Task(props) {
  const taskClass = (props.status === 'unchecked') ? 'task_list__item' : 'task_list__item checked';
  const id = props.id;
  const changeStatus = props.changeStatus;
  const removeTask = props.removeTask;
  const editTitle = props.editTask;
  const editState = props.editState;
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
      cb={() => editState(props.edit, 'task', props.cardId, props.id)}
      id={id}
      status="unchecked"
      newClass="control__hidden control__hover task_list__control"
    />
  );
  let taskElement;
  if (props.edit) {
    taskElement = (
      <Input
        title={props.title}
        id={props.id}
        do={editTitle}
        undo={() => editState(props.edit, 'task', props.cardId, props.id)}
        newClass={`task_list__item ${taskClass}`}
      />
    );
  } else {
    taskElement = (
      <div className={taskClass}>
        <span className="title">{props.title}</span>
        {deleteControl}
        {editControl}
        {(props.status === 'unchecked') ? checkControl : uncheckControl}
      </div>
    );
  }
  return (
    <li id={props.id}>
      {taskElement}
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  status: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  editState: PropTypes.func.isRequired,
  cardId: PropTypes.number.isRequired,
  edit: PropTypes.bool.isRequired,
};

Task.defaultProps = {
  title: 'Do something',
};

export default Task;
