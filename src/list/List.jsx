import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
import Task from '../task/Task';

function List(props) {
  const changeStatus = props.changeStatus;
  const removeTask = props.removeTask;
  const editTask = props.editTask;
  const editState = props.editState;
  const items = props.tasks.map(it => (
    <Task
      title={it.title}
      key={it.id}
      id={it.id}
      status={it.status}
      removeTask={removeTask}
      changeStatus={changeStatus}
      editTask={editTask}
      editState={editState}
      cardId={props.cardId}
      edit={it.edit}
    />
  ),
  );

  return (
    <div className="list_wraper">
      <ul className="task_list">
        {items}
      </ul>
    </div>
  );
}

List.propTypes = {
  changeStatus: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object),
  removeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  editState: PropTypes.func.isRequired,
  cardId: PropTypes.number.isRequired,
};

List.defaultProps = {
  tasks: [],
};

export default List;
