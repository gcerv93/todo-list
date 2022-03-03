import {allTasksDisplay} from './topNavStuff';
import './bottomNavStuff';
import './styles.css';
import pm from './projectManager.js';
import { taskFactory, projectFactory } from './factories.js';
import {displayProjectNavs} from './bottomNavStuff.js';

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

      pm.addProject(proj);
    });
  };
  displayProjectNavs();
  allTasksDisplay();
};

load();
