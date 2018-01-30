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
  { id: 4, title: 'Fix all typos', status: 'unchecked' },
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
    this.editTask = this.editTask.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.showInput = this.showInput.bind(this);
    this.hideInput = this.hideInput.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  changeStatus(taskId, taskStatus) {
    const modifiedTasks = this.state.tasks.map((it) => {
      if (it.id === taskId) {
        const obj = { status: taskStatus };
        return { ...it, ...obj };
      }
      return it;
    });
    this.setState({
      tasks: modifiedTasks,
      showInput: false,
    });
  }

  showInput() {
    const modifiedTasks = {
      tasks: this.state.tasks,
      showInput: true,
    };
    this.setState(modifiedTasks);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  hideInput() {
    const modifiedTasks = {
      tasks: this.state.tasks,
      showInput: false,
    };
    this.setState(modifiedTasks);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick(e) {
    if (this.inputNode.contains(e.target)) {
      return;
    }
    this.hideInput();
  }

  addTask(newTitle) {
    const modifiedTasks = this.state.tasks.slice();
    const idArr = modifiedTasks.map(it => it.id);
    const newId = Math.max.apply(null, idArr) + 1;
    const newTask = {
      id: newId,
      title: newTitle,
      status: 'unchecked',
    };
    modifiedTasks.push(newTask);
    this.setState({
      tasks: modifiedTasks,
      showInput: false,
    });
  }

  editTask(taskTitle, taskId) {
    const modifiedTasks = this.state.tasks.map((it) => {
      if (it.id === taskId) {
        const obj = { title: taskTitle };
        return { ...it, ...obj };
      }
      return it;
    });
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
      inputElement = (
        <div ref={(inputNode) => { this.inputNode = inputNode; }}>
          <Input do={this.addTask} undo={this.hideInput} newClass="card__input" />
        </div>
      );
    }
    return inputElement;
  }

  renderAddButton() {
    let buttonElement = '';
    if (this.state.showInput === false) {
      buttonElement = <Control name="add" cb={this.showInput} newClass="button card__add" />;
    }
    return buttonElement;
  }

  render() {
    return (
      <div className="card">
        <Name title="Very Important Tasks" />
        <List
          tasks={this.state.tasks}
          changeStatus={this.changeStatus}
          removeTask={this.removeTask}
          editTask={this.editTask}
        />
        {this.renderInput()}
        {this.renderAddButton()}
      </div>
    );
  }
}

export default Card;
