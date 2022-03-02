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

// add a date display here in the future
const taskTemplate = (task, idx) => {
  const templateDiv = document.createElement('div');
  templateDiv.classList.add('task-template');
  templateDiv.dataset.index = idx;

  const uncheckedImg = new Image();
  uncheckedImg.src = Unchecked;
  uncheckedImg.dataset.index = idx;
  templateDiv.appendChild(uncheckedImg);

  const nameText = document.createElement('p');
  nameText.textContent = task.title;
  templateDiv.appendChild(nameText);

  const closeImg = new Image();
  closeImg.src = Close;
  closeImg.dataset.index = idx;
  templateDiv.appendChild(closeImg);

  return templateDiv;
};

export { taskTemplate, taskButtonTemplate };
