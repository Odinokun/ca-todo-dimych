import { useState } from 'react';
import { Todolist } from './Todolist';
import './App.css';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
  ]);

  function removeTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <div className='App'>
      <Todolist title='What to learn' tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
