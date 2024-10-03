import { useState } from 'react';
import { Todolist } from './Todolist';
import './App.css';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export type FilterType = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
  ]);
  const [filter, setFilter] = useState<FilterType>('all');

  function removeTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  function changeFilter(value: FilterType) {
    setFilter(value);
  }

  let tasksForTodolist = tasks;
  if (filter === 'active') {
    tasksForTodolist = tasks.filter(t => !t.isDone);
  } else if (filter === 'completed') {
    tasksForTodolist = tasks.filter(t => t.isDone);
  }

  return (
    <div className='App'>
      <Todolist
        title='What to learn'
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
