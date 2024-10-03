import { FC } from 'react';
import { TaskType } from './App';

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void;
};

export const Todolist: FC<PropsType> = ({ title, tasks, removeTask }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <br />
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <button onClick={() => removeTask(task.id)}>del</button>
            <input type='checkbox' checked={task.isDone} />{' '}
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
