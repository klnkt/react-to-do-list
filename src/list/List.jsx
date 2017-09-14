import React from 'react';
import './List.css';
import Task from '../task/Task';

class List extends React.Component {
    render() {
      var items = [];
       this.props.tasks.forEach(function (it, index) {
         items.push(<Task value={it} id={index} />);
       });
      return (
        <div className="list_wraper">
          <ul className="task_list">{items}</ul>
        </div>
      );
    }
}

export default List;
