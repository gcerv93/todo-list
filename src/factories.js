const todoFactory = (title, description, dueDate, important, finished) => {
  return {
    title,
    description,
    dueDate,
    important,
    finished
  };
};

const projectFactory = (name) => {
  name: name;
  
  const tasks = [];

  function addTask(task) {
    this.tasks.push(task);
  };

  function getName() {
    return this.name;
  };

  return { name, addTask, getName };
};

export { todoFactory, projectFactory }
