const todoFactory = (title, description, dueDate, priority, finished) => {
  return {
    title,
    description,
    dueDate,
    important,
    finished
  };
};

const projectFactory = (name) => {
  const tasks = [];

  function addTask(task) {
    this.tasks.push(task);
  };

  return { addTask };
};

export { todoFactory, projectFactory }
