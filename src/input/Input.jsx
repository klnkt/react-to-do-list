import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import Control from '../control/Control';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  clearValue() {
    this.setState({ value: '' });
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  render() {
    return (
      <form className="task_add">
        <textarea
          maxLength="150"
          placeholder="What to do?.."
          rows="1"
          className="task_input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Control
          name="add"
          cb={this.props.addTask}
          id={this.state.value}
          status="unchecked"
          newClass="control__add-task control__hover"
        />
        <Control
          name="close"
          cb={this.props.hideInput}
          status="unchecked"
          newClass="control__add-task control__hover"
        />
      </form>
    );
  }
}

Input.propTypes = {
  addTask: PropTypes.func.isRequired,
  hideInput: PropTypes.func.isRequired,
};

export default Input;
