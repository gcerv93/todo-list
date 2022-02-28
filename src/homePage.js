import Plus from './images/plus-sign-rectangle.svg';
import {todoFactory, projectFactory} from './factories.js';

const defaultProject = projectFactory('default');

// task button for the main page, will this be usable for the project screens?
const taskButtonTemplate = () => {
  const plusSign = new Image();
  plusSign.src = Plus;

  const taskButton = document.createElement('div');
  taskButton.classList.add('default-task-button');
  taskButton.appendChild(plusSign);

  const text = document.createElement('p');
  text.textContent = 'Add Task';
  taskButton.appendChild(text);

  return taskButton;
};

// add a date display here in the future
const taskTemplate = (todo) => {
  const templateDiv = document.createElement('div');

  templateDiv.classList.add('task-template');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('unchecked');
  templateDiv.appendChild(imgDiv);

  const nameText = document.createElement('p');
  nameText.textContent = todo.title;
  templateDiv.appendChild(nameText);

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

  taskContent.appendChild(tasksDiv);

  const taskBtn = taskButtonTemplate();
  taskContent.appendChild(taskBtn);
  taskBtn.addEventListener('click', () => {
    const task = todoFactory('dude', 'work', 'sunday', 'blue', false);
    defaultProject.addToDo(task);
    tasksDiv.appendChild(taskTemplate(task));
    console.log(defaultProject);
  });

  content.appendChild(taskContent);
};

export default mainPage;
