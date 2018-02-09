import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import List from '../list/List';
import Name from '../name/Name';
import Control from '../control/Control';
import Input from '../input/Input';

function Card(props) {
  const cardId = props.id;
  let element = '';
  if (props.edit === true) {
    element = (
      <div>
        <Input do={props.addTask} undo={() => props.editState(props.edit, 'card', cardId)} newClass="card__input" />
      </div>
    );
  } else {
    element = <Control name="add" cb={() => props.editState(props.edit, 'card', cardId)} newClass="button card__add" />;
  }

  return (
    <div className="card">
      <Name
        title={props.name.title}
        editName={props.editName}
        editState={props.editState}
        cardId={props.id}
        edit={props.name.edit}
      />
      <List
        tasks={props.tasks}
        changeStatus={props.changeStatus}
        removeTask={props.removeTask}
        editTask={props.editTask}
        editState={props.editState}
        cardId={props.id}
      />
      {element}
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.arrayOf(PropTypes.object),
  changeStatus: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  editName: PropTypes.func.isRequired,
  editState: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  tasks: [],
  name: {
    title: 'TO-DO',
    edit: false,
  },
};

export default Card;
