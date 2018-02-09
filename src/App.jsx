import React from 'react';
import './App.css';
import Card from './card/Card';

const TASKS = [
  { id: 1, title: 'Wash some dishes', status: 'unchecked', edit: false },
  { id: 2, title: 'Pet my cat', status: 'unchecked', edit: false },
  { id: 3, title: 'Read about ES6 shortcuts and spreads', status: 'unchecked', edit: false },
  { id: 4, title: 'Fix all typos', status: 'unchecked', edit: false },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          name: {
            title: 'Important tasks',
            edit: false,
          },
          tasks: TASKS,
          edit: false,
        },
      ],
    };
    this.changeStatus = this.changeStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.editName = this.editName.bind(this);
    this.editState = this.editState.bind(this);
    this.clearEdit = this.clearEdit.bind(this);
  }

  changeStatus(taskId, taskStatus) {
    const modifiedTasks = this.state.cards[0].tasks.map((it) => {
      if (it.id === taskId) {
        const obj = { status: taskStatus };
        return { ...it, ...obj };
      }
      return it;
    });
    const modifiedState = this.state.cards.slice();
    modifiedState[0].tasks = modifiedTasks;
    this.setState({ cards: modifiedState });
    this.clearEdit();
  }

  addTask(newTitle) {
    const modifiedTasks = this.state.cards[0].tasks.slice();
    const idArr = modifiedTasks.map(it => it.id);
    const newId = Math.max.apply(null, idArr) + 1;
    const newTask = {
      id: newId,
      title: newTitle,
      status: 'unchecked',
    };
    modifiedTasks.push(newTask);
    const modifiedState = this.state.cards.slice();
    modifiedState[0].tasks = modifiedTasks;
    this.setState({ cards: modifiedState });
    this.clearEdit();
  }

  editTask(taskTitle, taskId) {
    const modifiedTasks = this.state.cards[0].tasks.map((it) => {
      if (it.id === taskId) {
        const obj = { title: taskTitle };
        return { ...it, ...obj };
      }
      return it;
    });
    const modifiedState = this.state.cards.slice();
    modifiedState[0].tasks = modifiedTasks;
    this.setState({ cards: modifiedState });
    this.clearEdit();
  }

  editName(title, id) {
    const modifiedState = this.state.cards.slice();
    modifiedState.map((it) => {
      if (it.id === id) {
        it.name.title = title;
      }
      return it;
    });
    this.setState({ cards: modifiedState });
    this.clearEdit();
  }

  editState(value, elementType, cardId, elementId) {
    this.clearEdit();
    const modifiedState = this.state.cards.slice();
    switch (elementType) {
      case 'card':
        modifiedState.map((it) => {
          if (it.id === cardId) {
            it.edit = !value;
          }
          return it;
        });
        break;
      case 'task':
        modifiedState.map((card) => {
          if (card.id === cardId) {
            card.tasks.map((task) => {
              if (task.id === elementId) {
                task.edit = !value;
              }
              return task;
            });
            return card;
          }
          return card;
        });
        break;
      case 'name':
        modifiedState.map((it) => {
          if (it.id === cardId) {
            it.name.edit = !value;
          }
          return it;
        });
        break;
      default:
        break;
    }
    this.setState({ cards: modifiedState });
  }

  clearEdit() {
    const modifiedState = this.state.cards.slice();
    modifiedState.map((card) => {
      card.name.edit = false;
      card.tasks.map((task) => {
        task.edit = false;
        return task;
      });
      card.edit = false;
      return card;
    });
    this.setState({ cards: modifiedState });
  }

  removeTask(taskId) {
    const modifiedTasks = this.state.cards[0].tasks.filter(it => !(it.id === taskId));
    const modifiedState = this.state.cards.slice();
    modifiedState[0].tasks = modifiedTasks;
    this.setState({ cards: modifiedState });
    this.clearEdit();
  }

  render() {
    return (
      <Card
        id={this.state.cards[0].id}
        tasks={this.state.cards[0].tasks}
        name={this.state.cards[0].name}
        changeStatus={this.changeStatus}
        addTask={this.addTask}
        removeTask={this.removeTask}
        editTask={this.editTask}
        editName={this.editName}
        editState={this.editState}
        edit={this.state.cards[0].edit}
      />
    );
  }
}

export default App;
