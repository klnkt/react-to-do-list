import React from 'react';
import './Control.css';

class Control extends React.Component {
  render() {
    return <i className="material-icons">{this.props.type}</i>
  }
}

export default Control;
