import React from 'react';
import PropTypes from 'prop-types';
import './Control.css';

const emptyFunc = (() => false);

function Control(props) {
  return (
    <i
      className={`material-icons control ${props.newClass}`}
      onClick={() => props.cb(props.cardId, props.id, props.status)}
      role="button"
      tabIndex="0"
    >
      {props.name}
    </i>
  );
}

Control.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  cardId: PropTypes.number,
  name: PropTypes.string.isRequired,
  cb: PropTypes.func,
  newClass: PropTypes.string,
};

Control.defaultProps = {
  id: 0,
  status: '',
  cardId: 0,
  cb: emptyFunc,
  newClass: '',
};

export default Control;
