/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/bottomNavStuff.js":
/*!*******************************!*\
  !*** ./src/bottomNavStuff.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
/* harmony import */ var _factories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories.js */ "./src/factories.js");
/* harmony import */ var _images_project_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/project.svg */ "./src/images/project.svg");
/* harmony import */ var _images_close_thick_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/close-thick.svg */ "./src/images/close-thick.svg");
/* harmony import */ var _projectDisplay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectDisplay.js */ "./src/projectDisplay.js");






const clearProjectDivDisplay = () => {
  document.querySelectorAll('.project-div').forEach((element) => element.remove());
};

const displayProjectNavs = () => {
  const bottomNav = document.querySelector('.bottom-side-nav');
  const form = document.querySelector('.project-form');
  _projectManager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects().forEach((project, index) => {
    // console.log(project);
    const projectDiv = projectDivTemplate(project.name, index);
    bottomNav.insertBefore(projectDiv, form);

    projectDiv.addEventListener('click', () => {
      const taskBtn = document.querySelector('.default-task-button');
      const tasksDiv = document.querySelector('#tasks-div');
      if (taskBtn) taskBtn.remove();
      if (tasksDiv) tasksDiv.remove();
      (0,_projectDisplay_js__WEBPACK_IMPORTED_MODULE_4__["default"])(project);
    });

    const closeBtn = document.querySelector(`#close[data-index="${index}"]`);
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      _projectManager_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(index);
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
  projectImg.src = _images_project_svg__WEBPACK_IMPORTED_MODULE_2__;
  projectDiv.appendChild(projectImg);

  const nameText = document.createElement('p');
  nameText.textContent = name;
  projectDiv.appendChild(nameText);

  const closeImg = new Image();
  closeImg.setAttribute('id', 'close');
  closeImg.src = _images_close_thick_svg__WEBPACK_IMPORTED_MODULE_3__;
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
    const project = (0,_factories_js__WEBPACK_IMPORTED_MODULE_1__.projectFactory)(projectName.value);
    _projectManager_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(project);
    addProjectForm.reset();
    addProjectForm.style.display = 'none';
    clearProjectDivDisplay();
    displayProjectNavs();
  });
})(); 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bottomNavStuff);


/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const taskFactory = (title, description, dueDate, important, finished) => {
  function changeFinished() {
    this.finished === true ? this.finished = false : this.finished = true;
  };

  return {
    title,
    description,
    dueDate,
    important,
    finished,
    changeFinished
  };
};

const projectFactory = (name) => {
  name: name;
  
  const tasks = [];

  function addTask(task) {
    tasks.push(task);
  };

  function getName() {
    return name;
  };

  function getTasks() {
    return tasks;
  };

  function deleteTask(index) {
    tasks.splice(index, 1);
  };

  function getTaskIndex(task) {
    return tasks.findIndex((element) => element === task);
  };

  return { name, addTask, getName, getTasks, deleteTask, getTaskIndex };
};




/***/ }),

/***/ "./src/projectDisplay.js":
/*!*******************************!*\
  !*** ./src/projectDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates.js */ "./src/templates.js");
/* harmony import */ var _factories_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories.js */ "./src/factories.js");
/* harmony import */ var _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/green-checkbox.svg */ "./src/images/green-checkbox.svg");
/* harmony import */ var _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/unchecked.svg */ "./src/images/unchecked.svg");






const clearTasks = () => {
  const tasksDiv = document.querySelector('#tasks-div');
  while (tasksDiv.firstChild) {
    tasksDiv.removeChild(tasksDiv.firstChild);
  };
};

const displayTasks = (project) => {
  const tasksDiv = document.querySelector('#tasks-div');
  project.getTasks().forEach((task, index) => {
    const taskDiv = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.taskTemplate)(task, index);
    tasksDiv.appendChild(taskDiv);

    const descriptionDiv = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionTemplate)(task, index);
    tasksDiv.appendChild(descriptionDiv);

    const checkImg = document.querySelector(`#check-img[data-index="${index}"]`);
    if (task.finished === true) {
      checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
    } else {
      checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__;
    }

    taskDiv.addEventListener('click', () => {
      getComputedStyle(descriptionDiv).display === 'none' ? descriptionDiv.style.display = 'flex' : descriptionDiv.style.display = 'none';
    })

    checkImg.addEventListener('click', (e) => {
      e.stopPropagation();
      checkImg.src === _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ ? checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__ : checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
      task.changeFinished();
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

// UNFINISHED
const handleFormSubmits = () => {
  const hiddenInput = document.querySelector('#project');
  const project = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(hiddenInput.value);

  const task = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.taskFactory)(taskName.value, desc.value, dueDate.value, false, false);
  project.addTask(task);
  // console.log(project.getTasks());

  const taskFormContainer = document.querySelector('.form-container');
  taskFormContainer.style.display = 'none';
  const taskForm = document.querySelector('#task-form');
  taskForm.reset();

  clearTasks();
  displayTasks(project);
};

const displayProject = (project) => {
  const projectContent = document.querySelector('.task-content');

  const projectHeading = document.querySelector('.task-heading');
  projectHeading.textContent = project.name;

  const tasksDiv = document.createElement('div');
  tasksDiv.setAttribute('id', 'tasks-div');

  const taskFormContainer = document.querySelector('.form-container');
  taskFormContainer.style.display = 'none';
  taskFormContainer.dataset.index = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectIndex(project);
  projectContent.insertBefore(tasksDiv, taskFormContainer);

  displayTasks(project);

  const hiddenInput = document.querySelector('#project');
  hiddenInput.value = project.getName();

  const taskBtn = (0,_templates_js__WEBPACK_IMPORTED_MODULE_1__.taskButtonTemplate)();
  projectContent.appendChild(taskBtn);
  taskBtn.addEventListener('click', () => {
    taskFormContainer.style.display = 'flex';
    const formDateInput = document.querySelector('#dueDate');
    const adjustedTime = new Date(new Date().valueOf() - 86400000 + (new Date().getTimezoneOffset() * 60000));
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProject);


/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectManager = (() => {
  const projects = [];

  function getProjects() {
    return projects;
  };

  function addProject(project) {
    projects.push(project);
  };

  function deleteProject(index) {
    projects.splice(index, 1);
  };

  function getProjectIndex(project) {
    return projects.indexOf(project);
  };

  function getProject(projectName) {
    return projects.find(project => project.getName() === projectName);
  };

  return {
    getProjects,
    addProject, 
    deleteProject,
    getProjectIndex,
    getProject
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);


/***/ }),

/***/ "./src/templates.js":
/*!**************************!*\
  !*** ./src/templates.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskTemplate": () => (/* binding */ taskTemplate),
/* harmony export */   "taskButtonTemplate": () => (/* binding */ taskButtonTemplate),
/* harmony export */   "taskDescriptionTemplate": () => (/* binding */ taskDescriptionTemplate)
/* harmony export */ });
/* harmony import */ var _images_plus_sign_rectangle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/plus-sign-rectangle.svg */ "./src/images/plus-sign-rectangle.svg");
/* harmony import */ var _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/unchecked.svg */ "./src/images/unchecked.svg");
/* harmony import */ var _images_close_thick_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/close-thick.svg */ "./src/images/close-thick.svg");




// task button for the main page, will this be usable for the project screens?
const taskButtonTemplate = () => {
  const plusSign = new Image();
  plusSign.src = _images_plus_sign_rectangle_svg__WEBPACK_IMPORTED_MODULE_0__;

  const taskButton = document.createElement('div');
  taskButton.classList.add('default-task-button');
  taskButton.appendChild(plusSign);

  const text = document.createElement('p');
  text.textContent = 'Add Task';
  taskButton.appendChild(text);

  return taskButton;
};

const taskDescriptionTemplate = (task, idx) => {
  const taskDescription = document.createElement('div');
  taskDescription.classList.add('task-description');
  taskDescription.dataset.index = idx;

  const title = document.createElement('p');
  title.textContent = 'Description: '

  const desc = document.createElement('p');
  desc.textContent = task.description;
  desc.classList.add('description-para');

  taskDescription.appendChild(title);
  taskDescription.appendChild(desc);

  return taskDescription;
};

// add a date display here in the future
const taskTemplate = (task, idx) => {
  const templateDiv = document.createElement('div');
  templateDiv.classList.add('task-template');
  templateDiv.dataset.index = idx;

  const uncheckedImg = new Image();
  uncheckedImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_1__;
  uncheckedImg.dataset.index = idx;
  uncheckedImg.setAttribute('id', 'check-img');
  templateDiv.appendChild(uncheckedImg);

  const nameText = document.createElement('p');
  nameText.textContent = task.title;
  templateDiv.appendChild(nameText);

  const rightSide = document.createElement('div');
  rightSide.classList.add('right-task');

  const date = document.createElement('p');
  date.setAttribute('id', 'dateDisplay');
  if (task.dueDate === '') {
    date.textContent = ''
  } else {
    date.textContent = `Due: ${task.dueDate}`;
  }
  rightSide.appendChild(date);

  const closeImg = new Image();
  closeImg.src = _images_close_thick_svg__WEBPACK_IMPORTED_MODULE_2__;
  closeImg.dataset.index = idx;
  closeImg.setAttribute('id', 'close-task');
  rightSide.appendChild(closeImg);

  templateDiv.appendChild(rightSide);

  return templateDiv;
};




/***/ }),

/***/ "./src/topNavStuff.js":
/*!****************************!*\
  !*** ./src/topNavStuff.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
/* harmony import */ var _factories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories.js */ "./src/factories.js");
/* harmony import */ var _templates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates.js */ "./src/templates.js");
/* harmony import */ var _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/green-checkbox.svg */ "./src/images/green-checkbox.svg");
/* harmony import */ var _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/unchecked.svg */ "./src/images/unchecked.svg");






const clearTasks = () => {
  const tasksDiv = document.querySelector('#tasks-div');
  while (tasksDiv.firstChild) {
    tasksDiv.removeChild(tasksDiv.firstChild);
  };
};

const topNavTaskDisplay = (project) => {
  const tasksDiv = document.querySelector('#tasks-div');
  project.getTasks().forEach((task, index) => {
    const taskDiv = (0,_templates_js__WEBPACK_IMPORTED_MODULE_2__.taskTemplate)(task, index);
    tasksDiv.appendChild(taskDiv);

    const descriptionDiv = (0,_templates_js__WEBPACK_IMPORTED_MODULE_2__.taskDescriptionTemplate)(task, index);
    tasksDiv.appendChild(descriptionDiv);

    const checkImg = document.querySelector(`#check-img[data-index="${index}"]`);
    if (task.finished === true) {
      checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
    } else {
      checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__;
    }

    taskDiv.addEventListener('click', () => {
      getComputedStyle(descriptionDiv).display === 'none' ? descriptionDiv.style.display = 'flex' : descriptionDiv.style.display = 'none';
    })

    checkImg.addEventListener('click', (e) => {
      e.stopPropagation();
      checkImg.src === _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ ? checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__ : checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
      task.changeFinished();
    });

    const closeTaskImg = document.querySelector(`#close-task[data-index="${index}"]`);
    closeTaskImg.addEventListener('click', (e) => {
      e.stopPropagation();
      _projectManager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects().forEach((pmProject) => {
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

const topNavDivDisplays = (project) => {
  const content = document.querySelector('.task-content');

  document.querySelector('.task-heading').textContent = project.name;

  const tasksDiv = document.createElement('div');
  tasksDiv.setAttribute('id', 'tasks-div');

  const formContainer = document.querySelector('.form-container');
  content.insertBefore(tasksDiv, formContainer);

  topNavTaskDisplay(project);
};

const allTasksDisplay = () => {
  const allTasksProject = (0,_factories_js__WEBPACK_IMPORTED_MODULE_1__.projectFactory)('allTasks');

  _projectManager_js__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects().forEach((project) => {
    project.getTasks().forEach((task) => allTasksProject.addTask(task));
  });

  topNavDivDisplays(allTasksProject);
};

const topNavStuff = (() => {
  const allTaskBtn = document.querySelector('.all-tasks');
  const todayTaskBtn = document.querySelector('.today');
  const weekTaskBtn = document.querySelector('.week');

  allTaskBtn.addEventListener('click', (e) => {
    const tasksDiv = document.querySelector('#tasks-div');
    if (tasksDiv) tasksDiv.remove()
    const addTaskButton = document.querySelector('.default-task-button');
    if (addTaskButton) addTaskButton.remove();
    allTasksDisplay();
  });

  todayTaskBtn.addEventListener('click', (e) => {
    console.log(e.target);
  });

  weekTaskBtn.addEventListener('click', (e) => {
    console.log(e.target);
  });
})();


/***/ }),

/***/ "./src/images/close-thick.svg":
/*!************************************!*\
  !*** ./src/images/close-thick.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b202133296453e1faae6.svg";

/***/ }),

/***/ "./src/images/green-checkbox.svg":
/*!***************************************!*\
  !*** ./src/images/green-checkbox.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64d1a240bb55cb99c56b.svg";

/***/ }),

/***/ "./src/images/plus-sign-rectangle.svg":
/*!********************************************!*\
  !*** ./src/images/plus-sign-rectangle.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b8a18b96169e6ebff0e.svg";

/***/ }),

/***/ "./src/images/project.svg":
/*!********************************!*\
  !*** ./src/images/project.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39d9081cf1aa8bea4512.svg";

/***/ }),

/***/ "./src/images/unchecked.svg":
/*!**********************************!*\
  !*** ./src/images/unchecked.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11fd3326694f4582eab9.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topNavStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topNavStuff */ "./src/topNavStuff.js");
/* harmony import */ var _bottomNavStuff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottomNavStuff */ "./src/bottomNavStuff.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3BHRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmdUI7QUFDRztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JvdHRvbU5hdlN0dWZmLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3REaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b3BOYXZTdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBwbSBmcm9tICcuL3Byb2plY3RNYW5hZ2VyLmpzJztcbmltcG9ydCB7cHJvamVjdEZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yaWVzLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vaW1hZ2VzL3Byb2plY3Quc3ZnJztcbmltcG9ydCBDbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS10aGljay5zdmcnO1xuaW1wb3J0IGRpc3BQcm9qZWN0IGZyb20gJy4vcHJvamVjdERpc3BsYXkuanMnO1xuXG5jb25zdCBjbGVhclByb2plY3REaXZEaXNwbGF5ID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0TmF2cyA9ICgpID0+IHtcbiAgY29uc3QgYm90dG9tTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1zaWRlLW5hdicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBwbS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IHByb2plY3REaXZUZW1wbGF0ZShwcm9qZWN0Lm5hbWUsIGluZGV4KTtcbiAgICBib3R0b21OYXYuaW5zZXJ0QmVmb3JlKHByb2plY3REaXYsIGZvcm0pO1xuXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC10YXNrLWJ1dHRvbicpO1xuICAgICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gICAgICBpZiAodGFza0J0bikgdGFza0J0bi5yZW1vdmUoKTtcbiAgICAgIGlmICh0YXNrc0RpdikgdGFza3NEaXYucmVtb3ZlKCk7XG4gICAgICBkaXNwUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Nsb3NlW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwbS5kZWxldGVQcm9qZWN0KGluZGV4KTtcbiAgICAgIGNsZWFyUHJvamVjdERpdkRpc3BsYXkoKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0TmF2cygpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHByb2plY3REaXZUZW1wbGF0ZSA9IChuYW1lLCBpZHgpID0+IHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG4gIHByb2plY3REaXYuZGF0YXNldC5pbmRleCA9IGlkeDtcblxuICBjb25zdCBwcm9qZWN0SW1nID0gbmV3IEltYWdlKCk7XG4gIHByb2plY3RJbWcuc3JjID0gUHJvamVjdDtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcblxuICBjb25zdCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5hbWVUZXh0KTtcblxuICBjb25zdCBjbG9zZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjbG9zZUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJyk7XG4gIGNsb3NlSW1nLnNyYyA9IENsb3NlO1xuICBjbG9zZUltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNsb3NlSW1nKTtcblxuICByZXR1cm4gcHJvamVjdERpdjtcbn07XG5cbmNvbnN0IGJvdHRvbU5hdlN0dWZmID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9KTtcblxuICAvLyBhZGQgdGhlIGNhbmNlbCBsaXN0ZW5lciB3aGVuZXZlciB0aGUgYWRkUHJvamVjdCBidXR0b24gaXMgY2xpY2tlZFxuICBjb25zdCBmb3JtQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FuY2VsLWJ0bicpO1xuICBmb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgfSlcblxuICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc3VibWl0LWJ0bicpO1xuICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgcG0uYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJQcm9qZWN0RGl2RGlzcGxheSgpO1xuICAgIGRpc3BsYXlQcm9qZWN0TmF2cygpO1xuICB9KTtcbn0pKCk7IFxuXG5leHBvcnQgZGVmYXVsdCBib3R0b21OYXZTdHVmZjtcbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW1wb3J0YW50LCBmaW5pc2hlZCkgPT4ge1xuICBmdW5jdGlvbiBjaGFuZ2VGaW5pc2hlZCgpIHtcbiAgICB0aGlzLmZpbmlzaGVkID09PSB0cnVlID8gdGhpcy5maW5pc2hlZCA9IGZhbHNlIDogdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIGltcG9ydGFudCxcbiAgICBmaW5pc2hlZCxcbiAgICBjaGFuZ2VGaW5pc2hlZFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICBuYW1lOiBuYW1lO1xuICBcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFRhc2tJbmRleCh0YXNrKSB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gdGFzayk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbmFtZSwgYWRkVGFzaywgZ2V0TmFtZSwgZ2V0VGFza3MsIGRlbGV0ZVRhc2ssIGdldFRhc2tJbmRleCB9O1xufTtcblxuZXhwb3J0IHsgdGFza0ZhY3RvcnksIHByb2plY3RGYWN0b3J5IH1cbiIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHt0YXNrVGVtcGxhdGUsIHRhc2tCdXR0b25UZW1wbGF0ZSwgdGFza0Rlc2NyaXB0aW9uVGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCB7dGFza0ZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yaWVzLmpzJztcbmltcG9ydCBHcmVlbkNoZWNrIGZyb20gJy4vaW1hZ2VzL2dyZWVuLWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgVW5jaGVja2VkIGZyb20gJy4vaW1hZ2VzL3VuY2hlY2tlZC5zdmcnO1xuXG5jb25zdCBjbGVhclRhc2tzID0gKCkgPT4ge1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgd2hpbGUgKHRhc2tzRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrc0Rpdi5yZW1vdmVDaGlsZCh0YXNrc0Rpdi5maXJzdENoaWxkKTtcbiAgfTtcbn07XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWRpdicpO1xuICBwcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICBjb25zdCB0YXNrRGl2ID0gdGFza1RlbXBsYXRlKHRhc2ssIGluZGV4KTtcbiAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gdGFza0Rlc2NyaXB0aW9uVGVtcGxhdGUodGFzaywgaW5kZXgpO1xuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgIGNvbnN0IGNoZWNrSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NoZWNrLWltZ1tkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICBpZiAodGFzay5maW5pc2hlZCA9PT0gdHJ1ZSkge1xuICAgICAgY2hlY2tJbWcuc3JjID0gR3JlZW5DaGVjaztcbiAgICB9IGVsc2Uge1xuICAgICAgY2hlY2tJbWcuc3JjID0gVW5jaGVja2VkO1xuICAgIH1cblxuICAgIHRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBnZXRDb21wdXRlZFN0eWxlKGRlc2NyaXB0aW9uRGl2KS5kaXNwbGF5ID09PSAnbm9uZScgPyBkZXNjcmlwdGlvbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnIDogZGVzY3JpcHRpb25EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxuXG4gICAgY2hlY2tJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNoZWNrSW1nLnNyYyA9PT0gR3JlZW5DaGVjayA/IGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZCA6IGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgICB0YXNrLmNoYW5nZUZpbmlzaGVkKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGNsb3NlVGFza0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjbG9zZS10YXNrW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGNsb3NlVGFza0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcHJvamVjdC5kZWxldGVUYXNrKGluZGV4KTtcbiAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcbiAgICB9KVxuICB9KTtcbn07XG5cbi8vIFVORklOSVNIRURcbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXRzID0gKCkgPT4ge1xuICBjb25zdCBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KGhpZGRlbklucHV0LnZhbHVlKTtcblxuICBjb25zdCB0YXNrID0gdGFza0ZhY3RvcnkodGFza05hbWUudmFsdWUsIGRlc2MudmFsdWUsIGR1ZURhdGUudmFsdWUsIGZhbHNlLCBmYWxzZSk7XG4gIHByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdC5nZXRUYXNrcygpKTtcblxuICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgdGFza0Zvcm0ucmVzZXQoKTtcblxuICBjbGVhclRhc2tzKCk7XG4gIGRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250ZW50Jyk7XG5cbiAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkaW5nJyk7XG4gIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3MtZGl2Jyk7XG5cbiAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdGFza0Zvcm1Db250YWluZXIuZGF0YXNldC5pbmRleCA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RJbmRleChwcm9qZWN0KTtcbiAgcHJvamVjdENvbnRlbnQuaW5zZXJ0QmVmb3JlKHRhc2tzRGl2LCB0YXNrRm9ybUNvbnRhaW5lcik7XG5cbiAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xuXG4gIGNvbnN0IGhpZGRlbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbiAgaGlkZGVuSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldE5hbWUoKTtcblxuICBjb25zdCB0YXNrQnRuID0gdGFza0J1dHRvblRlbXBsYXRlKCk7XG4gIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHRhc2tCdG4pO1xuICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgY29uc3QgZm9ybURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gICAgY29uc3QgYWRqdXN0ZWRUaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS52YWx1ZU9mKCkgLSA4NjQwMDAwMCArIChuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuICAgIGZvcm1EYXRlSW5wdXQudmFsdWVBc0RhdGUgPSBhZGp1c3RlZFRpbWU7XG4gIH0pO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xuICBjb25zdCBmb3JtQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybS1jYW5jZWwnKTtcbiAgZm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtLXN1Ym1pdCcpO1xuICBmb3JtU3VibWl0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRm9ybVN1Ym1pdHMpO1xuICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRm9ybVN1Ym1pdHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVByb2plY3Q7XG4iLCJjb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpbmRleCkge1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KHByb2plY3QpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCwgXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0SW5kZXgsXG4gICAgZ2V0UHJvamVjdFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXI7XG4iLCJpbXBvcnQgUGx1cyBmcm9tICcuL2ltYWdlcy9wbHVzLXNpZ24tcmVjdGFuZ2xlLnN2Zyc7XG5pbXBvcnQgVW5jaGVja2VkIGZyb20gJy4vaW1hZ2VzL3VuY2hlY2tlZC5zdmcnO1xuaW1wb3J0IENsb3NlIGZyb20gJy4vaW1hZ2VzL2Nsb3NlLXRoaWNrLnN2Zyc7XG5cbi8vIHRhc2sgYnV0dG9uIGZvciB0aGUgbWFpbiBwYWdlLCB3aWxsIHRoaXMgYmUgdXNhYmxlIGZvciB0aGUgcHJvamVjdCBzY3JlZW5zP1xuY29uc3QgdGFza0J1dHRvblRlbXBsYXRlID0gKCkgPT4ge1xuICBjb25zdCBwbHVzU2lnbiA9IG5ldyBJbWFnZSgpO1xuICBwbHVzU2lnbi5zcmMgPSBQbHVzO1xuXG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0LXRhc2stYnV0dG9uJyk7XG4gIHRhc2tCdXR0b24uYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICB0YXNrQnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHJldHVybiB0YXNrQnV0dG9uO1xufTtcblxuY29uc3QgdGFza0Rlc2NyaXB0aW9uVGVtcGxhdGUgPSAodGFzaywgaWR4KSA9PiB7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5pbmRleCA9IGlkeDtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICdcblxuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1wYXJhJyk7XG5cbiAgdGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gIHJldHVybiB0YXNrRGVzY3JpcHRpb247XG59O1xuXG4vLyBhZGQgYSBkYXRlIGRpc3BsYXkgaGVyZSBpbiB0aGUgZnV0dXJlXG5jb25zdCB0YXNrVGVtcGxhdGUgPSAodGFzaywgaWR4KSA9PiB7XG4gIGNvbnN0IHRlbXBsYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRlbXBsYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGVtcGxhdGUnKTtcbiAgdGVtcGxhdGVEaXYuZGF0YXNldC5pbmRleCA9IGlkeDtcblxuICBjb25zdCB1bmNoZWNrZWRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgdW5jaGVja2VkSW1nLnNyYyA9IFVuY2hlY2tlZDtcbiAgdW5jaGVja2VkSW1nLmRhdGFzZXQuaW5kZXggPSBpZHg7XG4gIHVuY2hlY2tlZEltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrLWltZycpO1xuICB0ZW1wbGF0ZURpdi5hcHBlbmRDaGlsZCh1bmNoZWNrZWRJbWcpO1xuXG4gIGNvbnN0IG5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuYW1lVGV4dC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIHRlbXBsYXRlRGl2LmFwcGVuZENoaWxkKG5hbWVUZXh0KTtcblxuICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXRhc2snKTtcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZURpc3BsYXknKTtcbiAgaWYgKHRhc2suZHVlRGF0ZSA9PT0gJycpIHtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gJydcbiAgfSBlbHNlIHtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gYER1ZTogJHt0YXNrLmR1ZURhdGV9YDtcbiAgfVxuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgY29uc3QgY2xvc2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY2xvc2VJbWcuc3JjID0gQ2xvc2U7XG4gIGNsb3NlSW1nLmRhdGFzZXQuaW5kZXggPSBpZHg7XG4gIGNsb3NlSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtdGFzaycpO1xuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoY2xvc2VJbWcpO1xuXG4gIHRlbXBsYXRlRGl2LmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgcmV0dXJuIHRlbXBsYXRlRGl2O1xufTtcblxuZXhwb3J0IHsgdGFza1RlbXBsYXRlLCB0YXNrQnV0dG9uVGVtcGxhdGUsIHRhc2tEZXNjcmlwdGlvblRlbXBsYXRlIH07XG4iLCJpbXBvcnQgcG0gZnJvbSAnLi9wcm9qZWN0TWFuYWdlci5qcyc7XG5pbXBvcnQge3Byb2plY3RGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcy5qcyc7XG5pbXBvcnQge3Rhc2tUZW1wbGF0ZSwgdGFza0Rlc2NyaXB0aW9uVGVtcGxhdGV9IGZyb20gJy4vdGVtcGxhdGVzLmpzJztcbmltcG9ydCBHcmVlbkNoZWNrIGZyb20gJy4vaW1hZ2VzL2dyZWVuLWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgVW5jaGVja2VkIGZyb20gJy4vaW1hZ2VzL3VuY2hlY2tlZC5zdmcnO1xuXG5jb25zdCBjbGVhclRhc2tzID0gKCkgPT4ge1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgd2hpbGUgKHRhc2tzRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrc0Rpdi5yZW1vdmVDaGlsZCh0YXNrc0Rpdi5maXJzdENoaWxkKTtcbiAgfTtcbn07XG5cbmNvbnN0IHRvcE5hdlRhc2tEaXNwbGF5ID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRhc2tEaXYgPSB0YXNrVGVtcGxhdGUodGFzaywgaW5kZXgpO1xuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSB0YXNrRGVzY3JpcHRpb25UZW1wbGF0ZSh0YXNrLCBpbmRleCk7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgY29uc3QgY2hlY2tJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hlY2staW1nW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGlmICh0YXNrLmZpbmlzaGVkID09PSB0cnVlKSB7XG4gICAgICBjaGVja0ltZy5zcmMgPSBHcmVlbkNoZWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja0ltZy5zcmMgPSBVbmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgdGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdldENvbXB1dGVkU3R5bGUoZGVzY3JpcHRpb25EaXYpLmRpc3BsYXkgPT09ICdub25lJyA/IGRlc2NyaXB0aW9uRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCcgOiBkZXNjcmlwdGlvbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pXG5cbiAgICBjaGVja0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY2hlY2tJbWcuc3JjID09PSBHcmVlbkNoZWNrID8gY2hlY2tJbWcuc3JjID0gVW5jaGVja2VkIDogY2hlY2tJbWcuc3JjID0gR3JlZW5DaGVjaztcbiAgICAgIHRhc2suY2hhbmdlRmluaXNoZWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlVGFza0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjbG9zZS10YXNrW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGNsb3NlVGFza0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwbVByb2plY3QpID0+IHtcbiAgICAgICAgcG1Qcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgocHJvalRhc2spID0+IHtcbiAgICAgICAgICBpZiAocHJvalRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgIHBtUHJvamVjdC5kZWxldGVUYXNrKHBtUHJvamVjdC5nZXRUYXNrSW5kZXgocHJvalRhc2spKTtcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG4gICAgICAgICAgICB0b3BOYXZUYXNrRGlzcGxheShwcm9qZWN0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvcE5hdkRpdkRpc3BsYXlzID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkaW5nJykudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcy1kaXYnKTtcblxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKHRhc2tzRGl2LCBmb3JtQ29udGFpbmVyKTtcblxuICB0b3BOYXZUYXNrRGlzcGxheShwcm9qZWN0KTtcbn07XG5cbmNvbnN0IGFsbFRhc2tzRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgYWxsVGFza3NQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoJ2FsbFRhc2tzJyk7XG5cbiAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IGFsbFRhc2tzUHJvamVjdC5hZGRUYXNrKHRhc2spKTtcbiAgfSk7XG5cbiAgdG9wTmF2RGl2RGlzcGxheXMoYWxsVGFza3NQcm9qZWN0KTtcbn07XG5cbmNvbnN0IHRvcE5hdlN0dWZmID0gKCgpID0+IHtcbiAgY29uc3QgYWxsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MnKTtcbiAgY29uc3QgdG9kYXlUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG4gIGNvbnN0IHdlZWtUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWsnKTtcblxuICBhbGxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgICBpZiAodGFza3NEaXYpIHRhc2tzRGl2LnJlbW92ZSgpXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LXRhc2stYnV0dG9uJyk7XG4gICAgaWYgKGFkZFRhc2tCdXR0b24pIGFkZFRhc2tCdXR0b24ucmVtb3ZlKCk7XG4gICAgYWxsVGFza3NEaXNwbGF5KCk7XG4gIH0pO1xuXG4gIHRvZGF5VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9KTtcblxuICB3ZWVrVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9KTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vdG9wTmF2U3R1ZmYnO1xuaW1wb3J0ICcuL2JvdHRvbU5hdlN0dWZmJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==