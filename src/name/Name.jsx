import React from 'react';
import './Name.css';
import Control from '../control/Control';

class Name extends React.Component {
  render() {
    return (
      <div className="list_name">
        {this.props.value}
        <Control type="delete" />
      </div>
    )
  }
}

export default Name;
