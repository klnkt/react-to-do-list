import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  render() {
    return (
      <form className={this.props.hidden ? 'task_add hidden' : 'task_add'}>
        <textarea
          maxLength="150"
          placeholder="What to do?.."
          rows="3"
          className="task_input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add" onClick={() => this.props.addTask(this.state.value)} />
      </form>
    );
  }
}

Input.propTypes = {
  addTask: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default Input;
