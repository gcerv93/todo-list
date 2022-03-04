import { projectFactory, projectManager } from './objStuff.js';
import { taskTemplate, taskDescriptionTemplate } from './divTemplates.js';
import { clearTasks, handleSelections } from './helpers.js';
import GreenCheck from './images/green-checkbox.svg';
import Unchecked from './images/unchecked.svg';
import isSameDay from 'date-fns/isSameDay';
import isSameWeek from 'date-fns/isSameWeek';
import StarOutline from './images/starOutline.svg';
import StarFilled from './images/starFilled.svg';

const topNavTaskDisplay = (project) => {
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

    starImg.addEventListener('click', (e) => {
      e.stopPropagation();
      starImg.src === StarFilled ? starImg.src = StarOutline : starImg.src = StarFilled;
      task.changeImportance();
    })

    checkImg.addEventListener('click', (e) => {
      e.stopPropagation();
      checkImg.src === GreenCheck ? checkImg.src = Unchecked : checkImg.src = GreenCheck;
      task.changeFinished();
    });

    const closeTaskImg = document.querySelector(`#close-task[data-index="${index}"]`);
    closeTaskImg.addEventListener('click', (e) => {
      e.stopPropagation();
      projectManager.getProjects().forEach((pmProject) => {
        pmProject.getTasks().forEach((projTask) => {
          if (projTask === task) {
            pmProject.deleteTask(pmProject.getTaskIndex(projTask));
            clearTasks();
            project.deleteTask(index);
            topNavTaskDisplay(project);
          };
        });
      });
    });
  });
};

const topNavDisplayHandler = (project) => {
  const content = document.querySelector('.task-content');

  document.querySelector('.task-heading').textContent = project.name;

  const tasksDiv = document.createElement('div');
  tasksDiv.setAttribute('id', 'tasks-div');

  const formContainer = document.querySelector('.form-container');
  content.insertBefore(tasksDiv, formContainer);

  topNavTaskDisplay(project);
};

const allTasksDisplay = () => {
  const allTasksProject = projectFactory('allTasks');

  projectManager.getProjects().forEach((project) => {
    project.getTasks().forEach((task) => allTasksProject.addTask(task));
  });

  topNavDisplayHandler(allTasksProject);
};

const todayTasksDisplay = () => {
  const today = new Date();
  const todayTasksProject = projectFactory('Today');

  projectManager.getProjects().forEach((project) => {
    project.getTasks().forEach((task) => {
      if (isSameDay(today, task.dueDate)) {
        todayTasksProject.addTask(task);
      }
    })
  })

  topNavDisplayHandler(todayTasksProject);
};

const thisWeeksDisplay = () => {
  const today = new Date()
  const thisWeeksProject = projectFactory('This Week');

  projectManager.getProjects().forEach((project) => {
    project.getTasks().forEach((task) => {
      if (isSameWeek(today, task.dueDate)) {
        thisWeeksProject.addTask(task);
      }
    })
  })

  topNavDisplayHandler(thisWeeksProject);
};

const importantTasksDisplay = () => {
  const importantTasksProject = projectFactory('Important');

  projectManager.getProjects().forEach((project) => {
    project.getTasks().forEach((task) => {
      if (task.important === true) {
        importantTasksProject.addTask(task);
      };
    });
  });

  topNavDisplayHandler(importantTasksProject);
};

const topNavStuff = (() => {
  const allTaskBtn = document.querySelector('.all-tasks');
  const todayTaskBtn = document.querySelector('.today');
  const weekTaskBtn = document.querySelector('.week');
  const importantTaskBtn = document.querySelector('.important');

  allTaskBtn.addEventListener('click', (e) => {
    const tasksDiv = document.querySelector('#tasks-div');
    if (tasksDiv) tasksDiv.remove()
    const addTaskButton = document.querySelector('.default-task-button');
    if (addTaskButton) addTaskButton.remove();
    allTasksDisplay();
    handleSelections(e);
  });

  todayTaskBtn.addEventListener('click', (e) => {
    const tasksDiv = document.querySelector('#tasks-div');
    if (tasksDiv) tasksDiv.remove()
    const addTaskButton = document.querySelector('.default-task-button');
    if (addTaskButton) addTaskButton.remove();

    todayTasksDisplay();
    handleSelections(e);
  });

  weekTaskBtn.addEventListener('click', (e) => {
    const tasksDiv = document.querySelector('#tasks-div');
    if (tasksDiv) tasksDiv.remove()
    const addTaskButton = document.querySelector('.default-task-button');
    if (addTaskButton) addTaskButton.remove();

    thisWeeksDisplay();
    handleSelections(e);
  });

  importantTaskBtn.addEventListener('click', (e) => {
    const tasksDiv = document.querySelector('#tasks-div');
    if (tasksDiv) tasksDiv.remove()
    const addTaskButton = document.querySelector('.default-task-button');
    if (addTaskButton) addTaskButton.remove();

    importantTasksDisplay();
    handleSelections(e);
  });
})();

export { topNavStuff, allTasksDisplay };
