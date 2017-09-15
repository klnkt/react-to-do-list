import React from 'react';
import './List.css';
import Task from '../task/Task';

const TASKS = [
  { id: 1, title: 'Wash some dishes', status: 'unchecked' },
  { id: 2, title: 'Pet my cat', status: 'unchecked' },
  { id: 3, title: 'Read about ES6 shortcuts and spreads', status: 'unchecked' },
  { id: 4, title: 'Fix all typos and sintax errors so linter finally leaves me alone', status: 'unchecked' },
];

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: TASKS,
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

  addTask(task) {
    const modifiedTasks = this.state.tasks.slice().push(task);
    this.setState({ tasks: modifiedTasks });
  }

  removeTask(taskId) {
    const modifiedTasks = this.state.tasks.filter(it => !(it.id === taskId));
    this.setState({ tasks: modifiedTasks });
  }

  render() {
    const items = [];
    this.state.tasks.forEach((it, index) => (
      items.push(
        <Task
          title={this.state.tasks[index].title}
          id={this.state.tasks[index].id}
          status={this.state.tasks[index].status}
          changeStatus={this.changeStatus}
          removeTask={this.removeTask}
        />,
      )
    ));
    return (
      <div className="list_wraper">
        <ul className="task_list">
          {items}
        </ul>
      </div>
    );
  }
}

export default List;
