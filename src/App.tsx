import React, { useState } from 'react';
import Header from './Components/Header/Header';
import TodoList from './Components/TodoList/TodoList';
import './App.css';
import { ITodo } from './Interfaces/interfaces';

const App: React.FC=()=> {
  const [todoList, setTodoList]= useState<ITodo[]>([]);
  const taskFinished=(taskName: string): void =>{
    setTodoList(todoList.filter(todo=> todo.todo !== taskName))
  }
  return (
    <div className="App">
      <Header todoList={todoList} setTodoList={setTodoList} ></Header>
      <TodoList todoList={todoList} taskFinished={taskFinished}></TodoList>
    </div>
  );
}

export default App;
