import { KeyboardEvent, ChangeEvent, FC, useState } from 'react';
import { FilterType } from './App';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (id: string) => void;
  addTask: (title: string) => void;
  changeFilter: (value: FilterType) => void;
};

export const Todolist: FC<PropsType> = ({
  title,
  tasks,
  removeTask,
  addTask,
  changeFilter,
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskTitle) {
      addTaskHandler();
    }
  };
  const addTaskHandler = () => {
    addTask(newTaskTitle);
    setNewTaskTitle('');
  };
  const onAllClickHandler = () => changeFilter('all');
  const onActiveClickHandler = () => changeFilter('active');
  const onCompletedClickHandler = () => changeFilter('completed');

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={newTaskTitle}
          onChange={onNewTitleChangeHandler}
          onKeyDown={onKeyPressHandler}
        />
        <button onClick={addTaskHandler}>+</button>
      </div>
      <br />
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>

      <ul>
        {tasks.map(t => {
          const onRemoveHandler = () => removeTask(t.id);

          return (
            <li key={t.id}>
              <button onClick={onRemoveHandler}>del</button>
              <input type='checkbox' checked={t.isDone} />{' '}
              <span>{t.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
