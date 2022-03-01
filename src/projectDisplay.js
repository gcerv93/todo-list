// MIGHT NOT NEED ANY OF THIS??? CAN MAYBE USE HOMEPAGE FUNCTIONS TO DISPLAY A PROJECT
// STILL SHOULD HAVE THIS NAME HOWEVER, CHANGE HOMEPAGE TO SOMETHING ELSE
import projectManager from "./projectManager";
import {taskTemplate, taskButtonTemplate} from './homePage.js';

const displayProject = (project) => {
  const projectContent = document.querySelector('.task-content');

  const projectHeading = document.querySelector('.task-heading');
  projectHeading.textContent = project.name;

  const tasksDiv = document.createElement('div');
  tasksDiv.setAttribute('id', 'tasks-div');

  const taskForm = document.querySelector('.form-container');
  projectContent.insertBefore(tasksDiv, taskForm);

  const taskBtn = taskButtonTemplate();
  taskBtn.dataset.index = projectManager.getProjectIndex(project);
  projectContent.appendChild(taskBtn);
  taskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex';
  });
};

export default displayProject;
