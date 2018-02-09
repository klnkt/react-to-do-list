import React from 'react';
import PropTypes from 'prop-types';
import './List.css';
import Task from '../task/Task';

function List(props) {
  const changeStatus = props.changeStatus;
  const removeTask = props.removeTask;
  const editTask = props.editTask;
  const editState = props.editState;
  const cardId = props.cardId;
  const items = props.tasks.map((it, index) => (
    <div>
      <Task
        tasks={props.tasks}
        title={props.tasks[index].title}
        key={props.tasks[index].id}
        id={props.tasks[index].id}
        status={props.tasks[index].status}
        removeTask={removeTask}
        changeStatus={changeStatus}
        editTask={editTask}
        editState={editState}
        cardId={cardId}
        edit={props.tasks[index].edit}
      />
    </div>
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
