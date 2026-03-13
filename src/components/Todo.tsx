import Button from './Button.js';
import Field from './Field.js';
import Tabs from './Tabs.js';

const Todo = () => {
  return (
    <div className="todo">
      <form className="todo__form">
        <Field id="new-task" label="Введите текст" type="text" />
        <Button>Add</Button>
      </form>
      <Tabs />

      <form className="todo__form">
        <Field id="search-task" label="Поиск" type="search" />
      </form>
      <div className="todo__info">
        <div className="todo__total-tasks">
          Total tasks: <span>0</span>
        </div>
        <button className="todo__delete-all-button" type="button">
          Delete all
        </button>
      </div>
      <ul className="todo__list">
        <li className="todo__item todo-item">
          <input
            className="todo-item__checkbox"
            id="task-1"
            type="checkbox"
            checked
          />
          <label className="todo-item__label" htmlFor="task-1">
            Task 1
          </label>
          <button
            className="todo-item__delete-button"
            aria-label="Delete"
            title="Delete"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
        <li className="todo__item todo-item">
          <input className="todo-item__checkbox" id="task-2" type="checkbox" />
          <label className="todo-item__label" htmlFor="task-2">
            Task 2
          </label>
          <button
            className="todo-item__delete-button"
            aria-label="Delete"
            title="Delete"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="#757575"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div className="todo__empty-message"></div>
    </div>
  );
};

export default Todo;
