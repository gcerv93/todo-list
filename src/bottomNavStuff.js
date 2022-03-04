import { taskTemplate, taskButtonTemplate, taskDescriptionTemplate } from './divTemplates.js';
import { clearTasks, saveStorage, handleSelections } from './helpers.js';
import { taskFactory, projectFactory, projectManager } from './objStuff.js';
import Project from './images/project.svg';
import Close from './images/close-thick.svg';
import GreenCheck from './images/green-checkbox.svg';
import Unchecked from './images/unchecked.svg';
import StarOutline from './images/starOutline.svg';
import StarFilled from './images/starFilled.svg';
import parse from 'date-fns/parse'

const handleTaskFormSubmits = () => {
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
  displayBottomNavTasks(project);
  saveStorage();
};

const displayBottomNavTasks = (project) => {
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
      displayBottomNavTasks(project);
    })
  });
};

const displayBottomNavProjects = (project) => {
  const projectContent = document.querySelector('.task-content');

  const projectHeading = document.querySelector('.task-heading');
  projectHeading.textContent = project.name;

  const tasksDiv = document.createElement('div');
  tasksDiv.setAttribute('id', 'tasks-div');

  const taskFormContainer = document.querySelector('.form-container');
  taskFormContainer.style.display = 'none';
  taskFormContainer.dataset.index = projectManager.getProjectIndex(project);
  projectContent.insertBefore(tasksDiv, taskFormContainer);

  displayBottomNavTasks(project);

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
  formSubmit.removeEventListener('click', handleTaskFormSubmits);
  formSubmit.addEventListener('click', handleTaskFormSubmits);
};

const clearProjectDivDisplay = () => {
  document.querySelectorAll('.project-div').forEach((element) => element.remove());
};

const displayBottomNavDivs = () => {
  const bottomNav = document.querySelector('.bottom-side-nav');
  const form = document.querySelector('.project-form');

  projectManager.getProjects().forEach((project, index) => {
    const projectDiv = projectDivTemplate(project.name, index);
    bottomNav.insertBefore(projectDiv, form);

    projectDiv.addEventListener('click', (e) => {
      const taskBtn = document.querySelector('.default-task-button');
      const tasksDiv = document.querySelector('#tasks-div');
      if (taskBtn) taskBtn.remove();
      if (tasksDiv) tasksDiv.remove();
      displayBottomNavProjects(project);
      handleSelections(e);
    });

    const closeBtn = document.querySelector(`#close[data-index="${index}"]`);
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      projectManager.deleteProject(index);
      clearProjectDivDisplay();
      displayBottomNavDivs();
    });
  });
};

const projectDivTemplate = (name, idx) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-div');
  projectDiv.dataset.index = idx;

  const projectImg = new Image();
  projectImg.src = Project;
  projectDiv.appendChild(projectImg);

  const nameText = document.createElement('p');
  nameText.textContent = name;
  projectDiv.appendChild(nameText);

  const closeImg = new Image();
  closeImg.setAttribute('id', 'close');
  closeImg.src = Close;
  closeImg.dataset.index = idx;
  projectDiv.appendChild(closeImg);

  return projectDiv;
};

const bottomNavStuff = (() => {
  const addProjectForm = document.querySelector('.project-form');
  const addProjectBtn = document.querySelector('.add-project-btn');

  addProjectBtn.addEventListener('click', () => {
    addProjectForm.style.display = 'flex';
  });

  // add the cancel listener whenever the addProject button is clicked
  const formCancel = document.querySelector('.project-cancel-btn');
  formCancel.addEventListener('click', () => {
    addProjectForm.style.display = 'none';
    addProjectForm.reset();
  })

  const formSubmit = document.querySelector('.project-submit-btn');
  formSubmit.addEventListener('click', () => {
    const project = projectFactory(projectName.value);
    projectManager.addProject(project);
    addProjectForm.reset();
    addProjectForm.style.display = 'none';
    clearProjectDivDisplay();
    displayBottomNavDivs();
  });
})(); 

export { displayBottomNavDivs, bottomNavStuff };
