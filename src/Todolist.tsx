import { FC } from 'react';
import { ITask } from './App';

interface IProps {
  title: string;
  tasks: ITask[];
}

export const Todolist: FC<IProps> = ({ title, tasks }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type='checkbox' checked={task.isDone} />{' '}
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};
