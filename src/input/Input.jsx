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
      <form
        className="task_add"
        id="addTask"
        onSubmit={
          (evt) => {
            if (evt.target.checkValidity()) {
              this.props.addTask(this.state.value, 'unchecked');
            }
          }
        }
      >
        <textarea
          maxLength="150"
          placeholder="What to do?.."
          rows="1"
          className="task_input"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
        <button type="submit" className="button__icon" form="addTask">
          <Control
            name="add"
            cb={() => false}
            newClass="control__add-task control__hover"
          />
        </button>
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
