import projectManager from "./projectManager";
import {taskTemplate, taskButtonTemplate} from './homePage.js';
import {taskFactory} from './factories.js';

const clearTasks = () => {
  const tasksDiv = document.querySelector('#tasks-div');
  while (tasksDiv.firstChild) {
    tasksDiv.removeChild(tasksDiv.firstChild);
  };
};

const displayTasks = (project) => {
  const tasksDiv = document.querySelector('#tasks-div');
  console.log(tasksDiv);
  console.log(project);
  project.getTasks().forEach((task) => {
    const taskDiv = taskTemplate(task);
    tasksDiv.appendChild(taskDiv);
  });
};

// UNFINISHED
const handleFormSubmits = () => {
  const hiddenInput = document.querySelector('#project');
  const project = projectManager.getProject(hiddenInput.value);

  const task = taskFactory(taskName.value, desc.value);
  // console.log(task);
  project.addTask(task);
  console.log(project.getTasks());

  clearTasks();
  displayTasks(project);
};

const displayProject = (project) => {
  const projectContent = document.querySelector('.task-content');

  const projectHeading = document.querySelector('.task-heading');
  projectHeading.textContent = project.name;

  const tasksDiv = document.createElement('div');
  tasksDiv.setAttribute('id', 'tasks-div');

  const taskForm = document.querySelector('.form-container');
  taskForm.style.display = 'none';
  taskForm.dataset.index = projectManager.getProjectIndex(project);
  projectContent.insertBefore(tasksDiv, taskForm);

  displayTasks(project);

  const hiddenInput = document.querySelector('#project');
  hiddenInput.value = project.getName();

  const taskBtn = taskButtonTemplate();
  projectContent.appendChild(taskBtn);
  taskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex';
  });

  const formCancel = document.querySelector('#task-form-cancel');
  formCancel.addEventListener('click', () => {
    taskForm.style.display = 'none';
  });

  const formSubmit = document.querySelector('#task-form-submit');
  formSubmit.removeEventListener('click', handleFormSubmits);
  formSubmit.addEventListener('click', handleFormSubmits);
};

export default displayProject;
