import { taskFactory, projectFactory, projectManager } from './objStuff.js';
import { displayBottomNavDivs } from './bottomNavStuff.js';
import { allTasksDisplay } from './topNavStuff';

const clearTasks = () => {
  const tasksDiv = document.querySelector('#tasks-div');
  while (tasksDiv.firstChild) {
    tasksDiv.removeChild(tasksDiv.firstChild);
  };
};

const saveStorage = () => {
  let projects = JSON.stringify(projectManager.getProjects());
  localStorage.setItem('projects', projects);
};

const handleSelections = (e) => {
  const selected = document.querySelectorAll('.selected');

  if (selected) {
    selected.forEach((element) => element.classList.remove('selected'));
  };

  e.currentTarget.classList.add('selected');
};

const load = () => {
  if(!localStorage.getItem('projects')) {
    allTasksDisplay();
  } else {
    let projects = localStorage.getItem('projects');

    projects = JSON.parse(projects);

    projects.forEach((project) => {
      const proj = projectFactory(project.name);

      project.tasks.forEach((task) => {
        const tsk = taskFactory(task.title, task.description, new Date(task.dueDate), task.important, task.finished);
        proj.addTask(tsk);
      })

      projectManager.addProject(proj);
    });
  };
  displayBottomNavDivs();
  allTasksDisplay();
};

export { clearTasks, saveStorage, handleSelections, load };
