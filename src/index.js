import './styles.css';

const todoFactory = (title, description, dueDate, priority, finished) => {
  return {
    title,
    description,
    dueDate,
    priority,
    finished
  };
};

const projectFactory = (name) => {
  const todos = [];

  function addToDo(todo) {
    todos.push(todo);
  };

  return { todos, addToDo };
};
