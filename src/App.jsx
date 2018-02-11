import React from 'react';
import './App.css';
import Card from './card/Card';

const TASKS = [
  { id: 1, title: 'Important task #1', status: 'unchecked', edit: false },
  { id: 2, title: 'Very important task #2', status: 'unchecked', edit: false },
  { id: 3, title: 'Not so important task #3', status: 'unchecked', edit: false },
  { id: 4, title: 'Unimportant task #4', status: 'unchecked', edit: false },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          name: {
            title: 'My important tasks',
            edit: false,
          },
          tasks: TASKS,
          edit: false,
        },
      ],
    };
    this.saveData = this.saveData.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.editName = this.editName.bind(this);
    this.editState = this.editState.bind(this);
    this.clearEdit = this.clearEdit.bind(this);
  }

  componentWillMount() {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      this.setState({ cards: JSON.parse(savedData) });
    }
  }

  saveData(newState) {
    this.setState({ cards: newState });
    localStorage.setItem('data', JSON.stringify(this.state.cards));
  }

  changeStatus(cardId, taskId, taskStatus) {
    const modifiedState = this.state.cards.map((card) => {
      if (card.id === cardId) {
        card.tasks.map((it) => {
          if (it.id === taskId) {
            it.status = taskStatus;
          }
          return it;
        });
      }
      return card;
    });
    this.saveData(modifiedState);
    this.clearEdit();
  }

  addTask(newTitle, cardId) {
    const modifiedState = this.state.cards.map((card) => {
      if (card.id === cardId) {
        const l = (card.tasks.length === 0);
        const idArr = card.tasks.map(it => it.id);
        const newId = l ? 1 : Math.max.apply(null, idArr) + 1;
        const newTask = {
          id: newId,
          title: newTitle,
          status: 'unchecked',
        };
        card.tasks.push(newTask);
      }
      return card;
    });
    this.saveData(modifiedState);
    this.clearEdit();
  }

  editTask(taskTitle, taskId, cardId) {
    const modifiedState = this.state.cards.map((card) => {
      if (card.id === cardId) {
        card.tasks.map((it) => {
          if (it.id === taskId) {
            it.title = taskTitle;
          }
          return it;
        });
      }
      return card;
    });
    this.saveData(modifiedState);
    this.clearEdit();
  }

  editName(title, id) {
    const modifiedState = this.state.cards.map((it) => {
      if (it.id === id) {
        it.name.title = title;
      }
      return it;
    });
    this.saveData(modifiedState);
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
    this.saveData(modifiedState);
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
    this.saveData(modifiedState);
  }

  removeTask(cardId, taskId) {
    const modifiedState = this.state.cards.map((card) => {
      if (card.id === cardId) {
        const newTasks = card.tasks.filter(it => !(it.id === taskId));
        card.tasks = newTasks;
      }
      return card;
    });
    this.saveData(modifiedState);
    this.clearEdit();
  }

  render() {
    const items = this.state.cards.map(it => (
      <Card
        key={it.id}
        id={it.id}
        tasks={it.tasks}
        name={it.name}
        changeStatus={this.changeStatus}
        addTask={this.addTask}
        removeTask={this.removeTask}
        editTask={this.editTask}
        editName={this.editName}
        editState={this.editState}
        edit={it.edit}
      />
    ),
    );
    return (
      <div className="cards_wraper">
        {items}
      </div>
    );
  }
}

export default App;
