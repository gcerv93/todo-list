import pm from './projectManager.js';
import {projectFactory} from './factories.js';
import Project from './images/project.svg';
import Close from './images/close-thick.svg';

const projectDivTemplate = (name) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-div');

  const projectImg = new Image();
  projectImg.src = Project;
  projectDiv.appendChild(projectImg);

  const nameText = document.createElement('p');
  nameText.textContent = name;
  projectDiv.appendChild(nameText);

  const closeImg = new Image();
  closeImg.setAttribute('id', 'close');
  closeImg.src = Close;
  projectDiv.appendChild(closeImg);

  return projectDiv;
};

const navStuff = (() => {
  const bottomNav = document.querySelector('.bottom-side-nav');
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
    const projectDiv = projectDivTemplate(project.name);
    bottomNav.insertBefore(projectDiv, addProjectForm);
    addProjectForm.reset();
    addProjectForm.style.display = 'none';
  });
})(); 

export default navStuff;
