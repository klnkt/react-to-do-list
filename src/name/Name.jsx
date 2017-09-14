import React from 'react';
import './Name.css';

class Name extends React.Component {
  render() {
    return (
      <div className="list_name">{this.props.value}</div>
    )
  }
}

export default Name;
