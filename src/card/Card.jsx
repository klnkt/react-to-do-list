import React from 'react';
import './Card.css';
import List from '../list/List';
import Name from '../name/Name';

class Card extends React.Component {
  render () {
    return (
      <div className="card">
        <Name value={this.props.listName}/>
        <List tasks={this.props.tasks}/>
      </div>
    );
  }
}

export default Card;
