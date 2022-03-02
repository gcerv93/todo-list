import pm from './projectManager.js';
import {projectFactory} from './factories.js';
import Project from './images/project.svg';
import Close from './images/close-thick.svg';
import dispProject from './projectDisplay.js';

const clearProjectDivDisplay = () => {
  document.querySelectorAll('.project-div').forEach((element) => element.remove());
};

const displayProjectNavs = () => {
  const bottomNav = document.querySelector('.bottom-side-nav');
  const form = document.querySelector('.project-form');
  pm.getProjects().forEach((project, index) => {
    console.log(project);
    const projectDiv = projectDivTemplate(project.name, index);
    bottomNav.insertBefore(projectDiv, form);

    projectDiv.addEventListener('click', () => {
      const taskBtn = document.querySelector('.default-task-button');
      const tasksDiv = document.querySelector('#tasks-div');
      if (taskBtn) taskBtn.remove();
      if (tasksDiv) tasksDiv.remove();
      dispProject(project);
    });

    const closeBtn = document.querySelector(`#close[data-index="${index}"]`);
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      pm.deleteProject(index);
      clearProjectDivDisplay();
      displayProjectNavs();
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

const navStuff = (() => {
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
    pm.addProject(project);
    addProjectForm.reset();
    addProjectForm.style.display = 'none';
    clearProjectDivDisplay();
    displayProjectNavs();
  });
})(); 

export default navStuff;
