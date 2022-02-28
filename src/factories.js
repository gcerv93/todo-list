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
    this.todos.push(todo);
  };

  return { todos, addToDo };
};

export { todoFactory, projectFactory }
