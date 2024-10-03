import { FC } from 'react';
import { FilterType } from './App';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: number) => void;
  changeFilter: (value: FilterType) => void;
};

export const Todolist: FC<PropsType> = ({
  title,
  tasks,
  removeTask,
  changeFilter,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <br />
      <div>
        <button onClick={() => changeFilter('all')}>All</button>
        <button onClick={() => changeFilter('active')}>Active</button>
        <button onClick={() => changeFilter('completed')}>Completed</button>
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
