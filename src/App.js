import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card/Card';
import Name from './name/Name';

class App extends React.Component {
  render() {
    return <Card tasks={TASKS} listName="My To-Do List"/>;
  }
}

var TASKS = [
  "Wash some dishes",
  "Count stars",
  "Pet my cat",
  "Read about ES6 shortcuts"
];

export default App;
