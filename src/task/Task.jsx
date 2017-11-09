import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import Control from '../control/Control';

function Task(props) {
  const taskClass = (props.status === 'unchecked') ? 'task_list__item' : 'task_list__item checked';
  const id = props.id;
  const changeStatus = props.changeStatus;
  const removeTask = props.removeTask;
  const checkControl = (
    <Control
      name="done"
      cb={changeStatus}
      id={id}
      status="checked"
      newClass="control__hidden control__hover"
    />
  );
  const uncheckControl = (
    <Control
      name="refresh"
      cb={changeStatus}
      id={id}
      status="unchecked"
      newClass="control__hidden control__hover"
    />
  );
  const deleteControl = (
    <Control
      name="delete"
      cb={removeTask}
      id={id}
      newClass="control__hidden control__hover"
    />
  );
  return (
    <li className={taskClass} key={props.id}>
      <span className="title">{props.title}</span>
      {deleteControl}
      <Control
        name="edit"
        cb={changeStatus}
        id={id}
        status="unchecked"
        newClass="control__hidden control__hover"
      />
      {(props.status === 'unchecked') ? checkControl : uncheckControl}
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  status: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

Task.defaultProps = {
  title: 'Do something',
};

export default Task;
