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
  name: name;
  
  const tasks = [];

  function addTask(task) {
    this.tasks.push(task);
  };

  function getName() {
    this.name;
  };

  return { name, addTask, getName };
};

export { todoFactory, projectFactory }
