import React from 'react';
import './Card.css';
import List from '../list/List';
import Name from '../name/Name';
import Control from '../control/Control';
import Input from '../input/Input';

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
      showInput: false,
    };
    this.changeStatus = this.changeStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.showInput = this.showInput.bind(this);
    this.hideInput = this.hideInput.bind(this);
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

  showInput() {
    const modifiedTasks = {
      tasks: this.state.tasks,
      showInput: true,
    };
    this.setState(modifiedTasks);
  }

  hideInput() {
    const modifiedTasks = {
      tasks: this.state.tasks,
      showInput: false,
    };
    this.setState(modifiedTasks);
  }

  addTask(newTitle, newStatus) {
    const modifiedTasks = this.state.tasks.slice();
    const idArr = modifiedTasks.map(it => it.id);
    const newId = Math.max.apply(null, idArr) + 1;
    const newTask = {
      id: newId,
      title: newTitle,
      status: newStatus,
    };
    modifiedTasks.push(newTask);
    this.setState({
      tasks: modifiedTasks,
      showInput: false,
    });
  }

  removeTask(taskId) {
    const modifiedTasks = this.state.tasks.filter(it => !(it.id === taskId));
    this.setState({ tasks: modifiedTasks });
  }

  renderInput() {
    let inputElement = '';
    if (this.state.showInput === true) {
      inputElement = <Input addTask={this.addTask} hideInput={this.hideInput} />;
    }
    return inputElement;
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
        {this.renderInput()}
        <Control name="add" cb={this.showInput} newClass="button control__add" />
      </div>
    );
  }
}

export default Card;
