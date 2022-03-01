import Plus from './images/plus-sign-rectangle.svg';

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

const homePage = () => {
  const content = document.querySelector('.content');
  const taskContent = document.querySelector('.task-content');

  const heading = document.querySelector('.task-heading');
  heading.textContent = 'All Tasks';

  const tasksDiv = document.createElement('div');

  const taskForm = document.querySelector('.form-container');
  taskContent.insertBefore(tasksDiv, taskForm);

  const taskBtn = taskButtonTemplate();
  taskContent.appendChild(taskBtn);
  taskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex';
    // tasksDiv.append(taskTemplate({title: 'dude'}));
  });

  content.appendChild(taskContent);
};

export default homePage;
