import React from 'react';
import { Todolist } from './Todolist';
import './App.css';

export interface ITask {
  id: number;
  title: string;
  isDone: boolean;
}

function App() {
  const tasks1: ITask[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
  ];

  const tasks2: ITask[] = [
    { id: 1, title: 'Milk', isDone: true },
    { id: 2, title: 'Bread', isDone: false },
    { id: 3, title: 'Beer', isDone: false },
  ];
  return (
    <div className='App'>
      <Todolist title='What to learn' tasks={tasks1} />
      <Todolist title='What to buy' tasks={tasks2} />
    </div>
  );
}

export default App;
