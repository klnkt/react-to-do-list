import React from 'react';
import './Card.css';
import List from '../list/List';
import Name from '../name/Name';

function Card() {
  return (
    <div className="card">
      <Name title="Very Important Tasks" />
      <List />
    </div>
  );
}

export default Card;
