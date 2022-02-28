import Plus from './images/plus-sign-rectangle.svg';

const taskButtonTemplate = () => {
  const plusSign = new Image();
  plusSign.src = Plus;

  const addTaskButton = document.createElement('div');
  addTaskButton.classList.add('default-task-button');
  addTaskButton.appendChild(plusSign);

  const text = document.createElement('p');
  text.textContent = 'Add Task';
  addTaskButton.appendChild(text);

  return addTaskButton;
};

const taskTemplate = (name) => {
  const templateDiv = document.createElement('div');
  templateDiv.classList.add('task-template');
  templateDiv.textContent = name;

  return templateDiv;
};

const mainPage = () => {
  const content = document.querySelector('.content');
  const taskContent = document.createElement('div');
  taskContent.classList.add('task-content');

  const heading = document.createElement('div');
  heading.textContent = 'All Tasks';
  heading.classList.add('task-heading');
  taskContent.appendChild(heading);

  const tasksDiv = document.createElement('div');

  // TEMP: checking the display for tasks
  tasksDiv.appendChild(taskTemplate('dude'));
  tasksDiv.appendChild(taskTemplate('bro'));
  tasksDiv.appendChild(taskTemplate('what'));

  taskContent.appendChild(tasksDiv);
  taskContent.appendChild(taskButtonTemplate());

  content.appendChild(taskContent);
};

export default mainPage;
