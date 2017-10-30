import React from 'react';
import PropTypes from 'prop-types';
import './Name.css';
import Control from '../control/Control';

function Name(props) {
  return (
    <div className="list_name">
      {props.title}
      <Control name="more_vert" newClass="control__more control__hidden" />
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
