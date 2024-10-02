import React from 'react';
import { Todolist } from './Todolist';
import './App.css';

export interface ITask {
  id: number;
  title: string;
  isDone: boolean;
}

function App() {
  const tasks: ITask[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
  ];

  return (
    <div className='App'>
      <Todolist title='What to learn' tasks={tasks} />
    </div>
  );
}

export default App;
