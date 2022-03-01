import React from "react";
import './App.css';
import { TodoProvider } from "../TodoContext";
import {AppUI} from './AppUI';

/* const todoList = [
  {title: 'Learn React', completed: false},
  {title: 'Create ToDo List app', completed: false},
  {title: 'Complete all tasks', completed: true},
] */

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
