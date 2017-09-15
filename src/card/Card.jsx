import React from 'react';
import './Card.css';
import List from '../list/List';
import Name from '../name/Name';
import Control from '../control/Control';

const TASKS = [
  { id: 1, title: 'Wash some dishes', status: 'unchecked' },
  { id: 2, title: 'Pet my cat', status: 'unchecked' },
  { id: 3, title: 'Read about ES6 shortcuts and spreads', status: 'unchecked' },
  { id: 4, title: 'Fix all typos and sintax errors so linter finally leaves me alone', status: 'unchecked' },
];

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: TASKS,
      hidden: true,
    };
    this.changeStatus = this.changeStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  changeStatus(taskId, taskStatus) {
    const modifiedTasks = this.state.tasks.map((it) => {
      if (it.id === taskId) {
        const obj = { status: taskStatus };
        return { ...it, ...obj };
      }
      return it;
    });
    this.setState({ tasks: modifiedTasks });
  }

  // showInput() {
  //
  // }

  addTask(task) {
    const modifiedTasks = this.state.tasks.slice();
    modifiedTasks.push(task);
    this.setState({ tasks: modifiedTasks });
  }

  removeTask(taskId) {
    const modifiedTasks = this.state.tasks.filter(it => !(it.id === taskId));
    this.setState({ tasks: modifiedTasks });
  }

  render() {
    return (
      <div className="card">
        <Name title="Very Important Tasks" />
        <List
          tasks={this.state.tasks}
          changeStatus={this.changeStatus}
          removeTask={this.removeTask}
        />
        <Control name="add" cb={this.showInput} newClass="button control__add" />
      </div>
    );
  }
}

export default Card;
