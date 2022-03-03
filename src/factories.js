const taskFactory = (title, description, dueDate, important, finished) => {
  function changeFinished() {
    this.finished === true ? this.finished = false : this.finished = true;
  };

  function changeImportance() {
    this.important === true ? this.important = false : this.important = true;
  };

  return {
    title,
    description,
    dueDate,
    important,
    finished,
    changeFinished,
    changeImportance
  };
};

const projectFactory = (name) => {
  name: name;
  
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  };

  function getName() {
    return name;
  };

  function getTasks() {
    return tasks;
  };

  function deleteTask(index) {
    tasks.splice(index, 1);
  };

  function getTaskIndex(task) {
    return tasks.findIndex((element) => element === task);
  };

  return { name, tasks, addTask, getName, getTasks, deleteTask, getTaskIndex };
};

export { taskFactory, projectFactory }
