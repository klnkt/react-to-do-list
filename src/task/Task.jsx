import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

function createControl(name, cb, id, status) {
  const control = (
    <i
      className="material-icons control"
      onClick={() => cb(id, status)}
      role="button"
      tabIndex="0"
    >
      {name}
    </i>
  );
  return control;
}

function Task(props) {
  const taskClass = (props.status === 'unchecked') ? 'task_list__item' : 'task_list__item checked';
  const id = props.id;
  const changeStatus = props.changeStatus;
  const removeTask = props.removeTask;
  const checkControl = createControl('done', changeStatus, id, 'checked');
  const uncheckControl = createControl('refresh', changeStatus, id, 'unchecked');
  const deleteControl = createControl('delete', removeTask, id, '');
  return (
    <li className={taskClass} key={props.id}>
      <span className="title">{props.title}</span>
      {deleteControl}
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
