import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';
import Control from '../control/Control';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.title };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.textarea.focus();
  }

  clearValue() {
    this.setState({ value: '', show: false });
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }

  resizeTextarea() {
    const title = this.state.value;
    return Math.ceil(title.length / 30);
  }

  render() {
    return (
      <div className={this.props.newClass}>
        <form
          className="task_add"
          id={this.props.id}
          onSubmit={
            (evt) => {
              evt.preventDefault();
              if (evt.target.checkValidity()) {
                this.props.do(this.state.value, this.props.id, this.props.cardId);
              }
            }
          }
        >
          <textarea
            maxLength="150"
            placeholder="What to do?.."
            rows={this.resizeTextarea()}
            className="task_input__textarea"
            value={this.state.value}
            onChange={this.handleChange}
            ref={(e) => { this.textarea = e; }}
            required
          />
          <Control
            name="close"
            cb={this.props.undo}
            status="unchecked"
            newClass="control__input control__hover"
          />
          <button type="submit" className="button__icon">
            <Control
              name="add"
              cb={() => {}}
              newClass="control__input control__hover"
            />
          </button>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  cardId: PropTypes.number,
  do: PropTypes.func.isRequired,
  undo: PropTypes.func.isRequired,
  newClass: PropTypes.string,
};

Input.defaultProps = {
  title: '',
  id: 0,
  cardId: 0,
  newClass: '',
};

export default Input;
