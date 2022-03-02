// MIGHT NOT NEED ANY OF THIS??? CAN MAYBE USE HOMEPAGE FUNCTIONS TO DISPLAY A PROJECT
// STILL SHOULD HAVE THIS NAME HOWEVER, CHANGE HOMEPAGE TO SOMETHING ELSE
import projectManager from "./projectManager";
import {taskTemplate, taskButtonTemplate} from './homePage.js';
import taskFactory from './factories.js';

const handleFormSubmits = () => {
  const hiddenInput = document.querySelector('#project');
  const project = projectManager.getProject(hiddenInput.value);
  console.log(project);
};

const displayProject = (project) => {
  const projectContent = document.querySelector('.task-content');

  const projectHeading = document.querySelector('.task-heading');
  projectHeading.textContent = project.name;

  const tasksDiv = document.createElement('div');
  tasksDiv.setAttribute('id', 'tasks-div');

  const taskForm = document.querySelector('.form-container');
  taskForm.dataset.index = projectManager.getProjectIndex(project);
  projectContent.insertBefore(tasksDiv, taskForm);

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
