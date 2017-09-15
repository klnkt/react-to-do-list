import React from 'react';
import PropTypes from 'prop-types';
import './Name.css';

function Name(props) {
  return (
    <div className="list_name">
      {props.title}
      <i className="material-icons control__more">more_vert</i>
    </div>
  );
}

Name.propTypes = {
  title: PropTypes.string,
};

Name.defaultProps = {
  title: 'List of things to do',
};

export default Name;
