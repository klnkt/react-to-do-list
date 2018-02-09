import React from 'react';
import PropTypes from 'prop-types';
import './Name.css';
import Control from '../control/Control';
import Input from '../input/Input';

function Name(props) {
  let element;
  if (props.edit) {
    element = (
      <div>
        <Input
          id={props.cardId}
          title={props.title}
          do={props.editName}
          undo={() => props.editState(props.edit, 'name', props.cardId)}
          newClass="list_name__input"
        />
      </div>
    );
  } else {
    element = (
      <div>
        <div
          className="list_name__title"
          onClick={() => props.editState(props.edit, 'name', props.cardId)}
          role="button"
          tabIndex="0"
        >
          {props.title}
        </div>
        <Control name="more_vert" newClass="control__more control__hidden" />
      </div>
    );
  }
  return (
    <div className="list_name">
      {element}
    </div>
  );
}

Name.propTypes = {
  title: PropTypes.string,
  editName: PropTypes.func.isRequired,
  editState: PropTypes.func.isRequired,
  cardId: PropTypes.number.isRequired,
  edit: PropTypes.bool.isRequired,
};

Name.defaultProps = {
  title: 'List of things to do',
};

export default Name;
