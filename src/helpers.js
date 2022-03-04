import { taskFactory, projectFactory, projectManager } from './objStuff.js';
import { displayBottomNavDivs } from './bottomNavStuff.js';
import { allTasksDisplay } from './topNavStuff';

// a new tasks-div and add task button is created every time a new project is rendered, this function
// removes the last tasks div and task buttons from the display before a new one is
// rendered
const removeNotNeeded = () => {
  const tasksDiv = document.querySelector('#tasks-div');
  if (tasksDiv) tasksDiv.remove()

  const addTaskButton = document.querySelector('.default-task-button');
  if (addTaskButton) addTaskButton.remove();
};


// when adding a new task to a project, the entire tasks div is filled in again
// run this after every new task to clear the tasks div
const clearTasks = () => {
  const tasksDiv = document.querySelector('#tasks-div');
  while (tasksDiv.firstChild) {
    tasksDiv.removeChild(tasksDiv.firstChild);
  };
};


// clear the bottom nav of project name divs, ran whenever a new project is created
// and rendered
const clearBottomNavDivDisplay = () => {
  document.querySelectorAll('.project-div').forEach((element) => element.remove());
};


// ran whenever a new nav div is clicked. this find all classes that currently
// have a selected class and removes it, so that only the clicked nav ends up
// with the selected class
const handleSelections = (e) => {
  const selected = document.querySelectorAll('.selected');

  if (selected) {
    selected.forEach((element) => element.classList.remove('selected'));
  };

  e.currentTarget.classList.add('selected');
};


const saveStorage = () => {
  let projects = JSON.stringify(projectManager.getProjects());
  localStorage.setItem('projects', projects);
};


// projects in local storage are first created using the projectFactory, then each
// of their tasks are created, then finally they are added to the project manager and
// their nav divs rendered as well as the all tasks homepage
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

export {
  clearTasks,
  saveStorage,
  handleSelections,
  load,
  removeNotNeeded,
  clearBottomNavDivDisplay
};
