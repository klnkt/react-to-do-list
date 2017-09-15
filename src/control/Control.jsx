import React from 'react';
import PropTypes from 'prop-types';
import './Control.css';

function Control(props) {
  return (
    <i
      className={`material-icons ${props.newClass}`}
      onClick={() => props.cb(props.id, props.status)}
      role="button"
      tabIndex="0"
    >
      {props.name}
    </i>
  );
}

Control.propTypes = {
  id: PropTypes.s,
  status: PropTypes.string,
  name: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
  newClass: PropTypes.string,
};

Control.defaultProps = {
  id: '',
  status: '',
  newClass: '',
};

export default Control;
