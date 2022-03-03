import projectManager from "./projectManager";
import {taskTemplate, taskButtonTemplate, taskDescriptionTemplate} from './templates.js';
import {taskFactory} from './factories.js';
import GreenCheck from './images/green-checkbox.svg';
import Unchecked from './images/unchecked.svg';
import StarOutline from './images/starOutline.svg';
import StarFilled from './images/starFilled.svg';
import parse from 'date-fns/parse'

const clearTasks = () => {
  const tasksDiv = document.querySelector('#tasks-div');
  while (tasksDiv.firstChild) {
    tasksDiv.removeChild(tasksDiv.firstChild);
  };
};

const displayTasks = (project) => {
  const tasksDiv = document.querySelector('#tasks-div');
  project.getTasks().forEach((task, index) => {
    const taskDiv = taskTemplate(task, index);
    tasksDiv.appendChild(taskDiv);

    const descriptionDiv = taskDescriptionTemplate(task, index);
    tasksDiv.appendChild(descriptionDiv);

    const checkImg = document.querySelector(`#check-img[data-index="${index}"]`);
    if (task.finished === true) {
      checkImg.src = GreenCheck;
    } else {
      checkImg.src = Unchecked;
    }

    const starImg = document.querySelector(`#star-img[data-index="${index}"]`);
    if (task.important === true) {
      starImg.src = StarFilled;
    } else {
      starImg.src = StarOutline;
    }

    taskDiv.addEventListener('click', () => {
      getComputedStyle(descriptionDiv).display === 'none' ? descriptionDiv.style.display = 'flex' : descriptionDiv.style.display = 'none';
    })

    checkImg.addEventListener('click', (e) => {
      e.stopPropagation();
      checkImg.src === GreenCheck ? checkImg.src = Unchecked : checkImg.src = GreenCheck;
      task.changeFinished();
    })

    starImg.addEventListener('click', (e) => {
      e.stopPropagation();
      starImg.src === StarFilled ? starImg.src = StarOutline : starImg.src = StarFilled;
      task.changeImportance();
    })

    const closeTaskImg = document.querySelector(`#close-task[data-index="${index}"]`);
    closeTaskImg.addEventListener('click', (e) => {
      e.stopPropagation();
      project.deleteTask(index);
      clearTasks();
      displayTasks(project);
    })
  });
};

const saveStorage = () => {
  let projects = JSON.stringify(projectManager.getProjects());
  localStorage.setItem('projects', projects);
};

// UNFINISHED
const handleFormSubmits = () => {
  const hiddenInput = document.querySelector('#project');
  const project = projectManager.getProject(hiddenInput.value);

  const task = taskFactory(taskName.value, desc.value, parse(dueDate.value, 'yyyy-MM-dd', new Date()), false, false);
  project.addTask(task);
  console.log(task);

  const taskFormContainer = document.querySelector('.form-container');
  taskFormContainer.style.display = 'none';
  const taskForm = document.querySelector('#task-form');
  taskForm.reset();

  clearTasks();
  displayTasks(project);
  saveStorage();
};

const displayProject = (project) => {
  const projectContent = document.querySelector('.task-content');

  const projectHeading = document.querySelector('.task-heading');
  projectHeading.textContent = project.name;

  const tasksDiv = document.createElement('div');
  tasksDiv.setAttribute('id', 'tasks-div');

  const taskFormContainer = document.querySelector('.form-container');
  taskFormContainer.style.display = 'none';
  taskFormContainer.dataset.index = projectManager.getProjectIndex(project);
  projectContent.insertBefore(tasksDiv, taskFormContainer);

  displayTasks(project);

  const hiddenInput = document.querySelector('#project');
  hiddenInput.value = project.getName();

  const taskBtn = taskButtonTemplate();
  projectContent.appendChild(taskBtn);
  taskBtn.addEventListener('click', () => {
    taskFormContainer.style.display = 'flex';
    const formDateInput = document.querySelector('#dueDate');
    const adjustedTime = new Date();
    formDateInput.valueAsDate = adjustedTime;
  });

  const taskForm = document.querySelector('#task-form');
  const formCancel = document.querySelector('#task-form-cancel');
  formCancel.addEventListener('click', () => {
    taskFormContainer.style.display = 'none';
    taskForm.reset();
  });

  const formSubmit = document.querySelector('#task-form-submit');
  formSubmit.removeEventListener('click', handleFormSubmits);
  formSubmit.addEventListener('click', handleFormSubmits);
};

export default displayProject;
