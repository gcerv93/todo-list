import { format } from 'date-fns';
import parse from 'date-fns/parse'
import Plus from './images/plus-sign-rectangle.svg';
import Unchecked from './images/unchecked.svg';
import Close from './images/close-thick.svg';

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

const taskDescriptionTemplate = (task, idx) => {
  const taskDescription = document.createElement('div');
  taskDescription.classList.add('task-description');
  taskDescription.dataset.index = idx;

  const title = document.createElement('p');
  title.textContent = 'Description: '

  const desc = document.createElement('p');
  desc.textContent = task.description;
  desc.classList.add('description-para');

  taskDescription.appendChild(title);
  taskDescription.appendChild(desc);

  return taskDescription;
};

// add a date display here in the future
const taskTemplate = (task, idx) => {
  const templateDiv = document.createElement('div');
  templateDiv.classList.add('task-template');
  templateDiv.dataset.index = idx;

  const uncheckedImg = new Image();
  uncheckedImg.src = Unchecked;
  uncheckedImg.dataset.index = idx;
  uncheckedImg.setAttribute('id', 'check-img');
  templateDiv.appendChild(uncheckedImg);

  const nameText = document.createElement('p');
  nameText.textContent = task.title;
  templateDiv.appendChild(nameText);

  const rightSide = document.createElement('div');
  rightSide.classList.add('right-task');

  const date = document.createElement('p');
  date.setAttribute('id', 'dateDisplay');
  if (task.dueDate === '') {
    date.textContent = ''
  } else {
    date.textContent = `Due: ${format(task.dueDate, 'MM-dd-yyyy')}`;
  }
  rightSide.appendChild(date);

  const closeImg = new Image();
  closeImg.src = Close;
  closeImg.dataset.index = idx;
  closeImg.setAttribute('id', 'close-task');
  rightSide.appendChild(closeImg);

  templateDiv.appendChild(rightSide);

  return templateDiv;
};

export { taskTemplate, taskButtonTemplate, taskDescriptionTemplate };
