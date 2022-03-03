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

    const checkImg = document.querySelector(`#check-img[data-index="${index}"]`);
    if (task.finished === true) {
      checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
    } else {
      checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__;
    }

    checkImg.addEventListener('click', () => {
      checkImg.src === _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ ? checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__ : checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
      task.changeFinished();
    })

    const closeTaskImg = document.querySelector(`#close-task[data-index="${index}"]`);
    closeTaskImg.addEventListener('click', () => {
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
  console.log(task);
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
  });

  // find a way to keep this constant every time even if the form is reset
  const formDateInput = document.querySelector('#dueDate');
  const adjustedTime = new Date(new Date().valueOf() - 86400000 + (new Date().getTimezoneOffset() * 60000));
  formDateInput.valueAsDate = adjustedTime;

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
/* harmony export */   "taskButtonTemplate": () => (/* binding */ taskButtonTemplate)
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

    const checkImg = document.querySelector(`#check-img[data-index="${index}"]`);
    if (task.finished === true) {
      checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
    } else {
      checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__;
    }

    checkImg.addEventListener('click', () => {
      checkImg.src === _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ ? checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__ : checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
      task.changeFinished();
    });

    const closeTaskImg = document.querySelector(`#close-task[data-index="${index}"]`);
    closeTaskImg.addEventListener('click', (e) => {
      console.log(e.target);
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





// 
// function insertAfter(newNode, existingNode) {
//   existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
// }
// 


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2Z1QjtBQUNHO0FBQ0o7OztBQUd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2JvdHRvbU5hdlN0dWZmLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3REaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b3BOYXZTdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBwbSBmcm9tICcuL3Byb2plY3RNYW5hZ2VyLmpzJztcbmltcG9ydCB7cHJvamVjdEZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yaWVzLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vaW1hZ2VzL3Byb2plY3Quc3ZnJztcbmltcG9ydCBDbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS10aGljay5zdmcnO1xuaW1wb3J0IGRpc3BQcm9qZWN0IGZyb20gJy4vcHJvamVjdERpc3BsYXkuanMnO1xuXG5jb25zdCBjbGVhclByb2plY3REaXZEaXNwbGF5ID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0TmF2cyA9ICgpID0+IHtcbiAgY29uc3QgYm90dG9tTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1zaWRlLW5hdicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBwbS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IHByb2plY3REaXZUZW1wbGF0ZShwcm9qZWN0Lm5hbWUsIGluZGV4KTtcbiAgICBib3R0b21OYXYuaW5zZXJ0QmVmb3JlKHByb2plY3REaXYsIGZvcm0pO1xuXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC10YXNrLWJ1dHRvbicpO1xuICAgICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gICAgICBpZiAodGFza0J0bikgdGFza0J0bi5yZW1vdmUoKTtcbiAgICAgIGlmICh0YXNrc0RpdikgdGFza3NEaXYucmVtb3ZlKCk7XG4gICAgICBkaXNwUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Nsb3NlW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwbS5kZWxldGVQcm9qZWN0KGluZGV4KTtcbiAgICAgIGNsZWFyUHJvamVjdERpdkRpc3BsYXkoKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0TmF2cygpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHByb2plY3REaXZUZW1wbGF0ZSA9IChuYW1lLCBpZHgpID0+IHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG4gIHByb2plY3REaXYuZGF0YXNldC5pbmRleCA9IGlkeDtcblxuICBjb25zdCBwcm9qZWN0SW1nID0gbmV3IEltYWdlKCk7XG4gIHByb2plY3RJbWcuc3JjID0gUHJvamVjdDtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcblxuICBjb25zdCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5hbWVUZXh0KTtcblxuICBjb25zdCBjbG9zZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjbG9zZUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJyk7XG4gIGNsb3NlSW1nLnNyYyA9IENsb3NlO1xuICBjbG9zZUltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNsb3NlSW1nKTtcblxuICByZXR1cm4gcHJvamVjdERpdjtcbn07XG5cbmNvbnN0IGJvdHRvbU5hdlN0dWZmID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9KTtcblxuICAvLyBhZGQgdGhlIGNhbmNlbCBsaXN0ZW5lciB3aGVuZXZlciB0aGUgYWRkUHJvamVjdCBidXR0b24gaXMgY2xpY2tlZFxuICBjb25zdCBmb3JtQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FuY2VsLWJ0bicpO1xuICBmb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgfSlcblxuICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc3VibWl0LWJ0bicpO1xuICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgcG0uYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJQcm9qZWN0RGl2RGlzcGxheSgpO1xuICAgIGRpc3BsYXlQcm9qZWN0TmF2cygpO1xuICB9KTtcbn0pKCk7IFxuXG5leHBvcnQgZGVmYXVsdCBib3R0b21OYXZTdHVmZjtcbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW1wb3J0YW50LCBmaW5pc2hlZCkgPT4ge1xuICBmdW5jdGlvbiBjaGFuZ2VGaW5pc2hlZCgpIHtcbiAgICB0aGlzLmZpbmlzaGVkID09PSB0cnVlID8gdGhpcy5maW5pc2hlZCA9IGZhbHNlIDogdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIGltcG9ydGFudCxcbiAgICBmaW5pc2hlZCxcbiAgICBjaGFuZ2VGaW5pc2hlZFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICBuYW1lOiBuYW1lO1xuICBcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFRhc2tJbmRleCh0YXNrKSB7XG4gICAgcmV0dXJuIHRhc2tzLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gdGFzayk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbmFtZSwgYWRkVGFzaywgZ2V0TmFtZSwgZ2V0VGFza3MsIGRlbGV0ZVRhc2ssIGdldFRhc2tJbmRleCB9O1xufTtcblxuZXhwb3J0IHsgdGFza0ZhY3RvcnksIHByb2plY3RGYWN0b3J5IH1cbiIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHt0YXNrVGVtcGxhdGUsIHRhc2tCdXR0b25UZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IHt0YXNrRmFjdG9yeX0gZnJvbSAnLi9mYWN0b3JpZXMuanMnO1xuaW1wb3J0IEdyZWVuQ2hlY2sgZnJvbSAnLi9pbWFnZXMvZ3JlZW4tY2hlY2tib3guc3ZnJztcbmltcG9ydCBVbmNoZWNrZWQgZnJvbSAnLi9pbWFnZXMvdW5jaGVja2VkLnN2Zyc7XG5cbmNvbnN0IGNsZWFyVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWRpdicpO1xuICB3aGlsZSAodGFza3NEaXYuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tzRGl2LnJlbW92ZUNoaWxkKHRhc2tzRGl2LmZpcnN0Q2hpbGQpO1xuICB9O1xufTtcblxuY29uc3QgZGlzcGxheVRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRhc2tEaXYgPSB0YXNrVGVtcGxhdGUodGFzaywgaW5kZXgpO1xuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgY29uc3QgY2hlY2tJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hlY2staW1nW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGlmICh0YXNrLmZpbmlzaGVkID09PSB0cnVlKSB7XG4gICAgICBjaGVja0ltZy5zcmMgPSBHcmVlbkNoZWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja0ltZy5zcmMgPSBVbmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgY2hlY2tJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjaGVja0ltZy5zcmMgPT09IEdyZWVuQ2hlY2sgPyBjaGVja0ltZy5zcmMgPSBVbmNoZWNrZWQgOiBjaGVja0ltZy5zcmMgPSBHcmVlbkNoZWNrO1xuICAgICAgdGFzay5jaGFuZ2VGaW5pc2hlZCgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjbG9zZVRhc2tJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2xvc2UtdGFza1tkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICBjbG9zZVRhc2tJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0LmRlbGV0ZVRhc2soaW5kZXgpO1xuICAgICAgY2xlYXJUYXNrcygpO1xuICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xuICAgIH0pXG4gIH0pO1xufTtcblxuLy8gVU5GSU5JU0hFRFxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGhpZGRlbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3QoaGlkZGVuSW5wdXQudmFsdWUpO1xuXG4gIGNvbnN0IHRhc2sgPSB0YXNrRmFjdG9yeSh0YXNrTmFtZS52YWx1ZSwgZGVzYy52YWx1ZSwgZHVlRGF0ZS52YWx1ZSwgZmFsc2UsIGZhbHNlKTtcbiAgY29uc29sZS5sb2codGFzayk7XG4gIHByb2plY3QuYWRkVGFzayh0YXNrKTtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdC5nZXRUYXNrcygpKTtcblxuICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgdGFza0Zvcm0ucmVzZXQoKTtcblxuICBjbGVhclRhc2tzKCk7XG4gIGRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250ZW50Jyk7XG5cbiAgY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkaW5nJyk7XG4gIHByb2plY3RIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3MtZGl2Jyk7XG5cbiAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdGFza0Zvcm1Db250YWluZXIuZGF0YXNldC5pbmRleCA9IHByb2plY3RNYW5hZ2VyLmdldFByb2plY3RJbmRleChwcm9qZWN0KTtcbiAgcHJvamVjdENvbnRlbnQuaW5zZXJ0QmVmb3JlKHRhc2tzRGl2LCB0YXNrRm9ybUNvbnRhaW5lcik7XG5cbiAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xuXG4gIGNvbnN0IGhpZGRlbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKTtcbiAgaGlkZGVuSW5wdXQudmFsdWUgPSBwcm9qZWN0LmdldE5hbWUoKTtcblxuICBjb25zdCB0YXNrQnRuID0gdGFza0J1dHRvblRlbXBsYXRlKCk7XG4gIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHRhc2tCdG4pO1xuICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH0pO1xuXG4gIC8vIGZpbmQgYSB3YXkgdG8ga2VlcCB0aGlzIGNvbnN0YW50IGV2ZXJ5IHRpbWUgZXZlbiBpZiB0aGUgZm9ybSBpcyByZXNldFxuICBjb25zdCBmb3JtRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKTtcbiAgY29uc3QgYWRqdXN0ZWRUaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS52YWx1ZU9mKCkgLSA4NjQwMDAwMCArIChuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMCkpO1xuICBmb3JtRGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gYWRqdXN0ZWRUaW1lO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xuICBjb25zdCBmb3JtQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybS1jYW5jZWwnKTtcbiAgZm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtLXN1Ym1pdCcpO1xuICBmb3JtU3VibWl0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRm9ybVN1Ym1pdHMpO1xuICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRm9ybVN1Ym1pdHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVByb2plY3Q7XG4iLCJjb25zdCBwcm9qZWN0TWFuYWdlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChpbmRleCkge1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdEluZGV4KHByb2plY3QpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCwgXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0SW5kZXgsXG4gICAgZ2V0UHJvamVjdFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXI7XG4iLCJpbXBvcnQgUGx1cyBmcm9tICcuL2ltYWdlcy9wbHVzLXNpZ24tcmVjdGFuZ2xlLnN2Zyc7XG5pbXBvcnQgVW5jaGVja2VkIGZyb20gJy4vaW1hZ2VzL3VuY2hlY2tlZC5zdmcnO1xuaW1wb3J0IENsb3NlIGZyb20gJy4vaW1hZ2VzL2Nsb3NlLXRoaWNrLnN2Zyc7XG5cbi8vIHRhc2sgYnV0dG9uIGZvciB0aGUgbWFpbiBwYWdlLCB3aWxsIHRoaXMgYmUgdXNhYmxlIGZvciB0aGUgcHJvamVjdCBzY3JlZW5zP1xuY29uc3QgdGFza0J1dHRvblRlbXBsYXRlID0gKCkgPT4ge1xuICBjb25zdCBwbHVzU2lnbiA9IG5ldyBJbWFnZSgpO1xuICBwbHVzU2lnbi5zcmMgPSBQbHVzO1xuXG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0LXRhc2stYnV0dG9uJyk7XG4gIHRhc2tCdXR0b24uYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICB0YXNrQnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHJldHVybiB0YXNrQnV0dG9uO1xufTtcblxuLy8gYWRkIGEgZGF0ZSBkaXNwbGF5IGhlcmUgaW4gdGhlIGZ1dHVyZVxuY29uc3QgdGFza1RlbXBsYXRlID0gKHRhc2ssIGlkeCkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wbGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRlbXBsYXRlJyk7XG4gIHRlbXBsYXRlRGl2LmRhdGFzZXQuaW5kZXggPSBpZHg7XG5cbiAgY29uc3QgdW5jaGVja2VkSW1nID0gbmV3IEltYWdlKCk7XG4gIHVuY2hlY2tlZEltZy5zcmMgPSBVbmNoZWNrZWQ7XG4gIHVuY2hlY2tlZEltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICB1bmNoZWNrZWRJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdjaGVjay1pbWcnKTtcbiAgdGVtcGxhdGVEaXYuYXBwZW5kQ2hpbGQodW5jaGVja2VkSW1nKTtcblxuICBjb25zdCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICB0ZW1wbGF0ZURpdi5hcHBlbmRDaGlsZChuYW1lVGV4dCk7XG5cbiAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKCdyaWdodC10YXNrJyk7XG5cbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGVEaXNwbGF5Jyk7XG4gIGlmICh0YXNrLmR1ZURhdGUgPT09ICcnKSB7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9ICcnXG4gIH0gZWxzZSB7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7dGFzay5kdWVEYXRlfWA7XG4gIH1cbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gIGNvbnN0IGNsb3NlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNsb3NlSW1nLnNyYyA9IENsb3NlO1xuICBjbG9zZUltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICBjbG9zZUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlLXRhc2snKTtcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGNsb3NlSW1nKTtcblxuICB0ZW1wbGF0ZURpdi5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuXG4gIHJldHVybiB0ZW1wbGF0ZURpdjtcbn07XG5cbmV4cG9ydCB7IHRhc2tUZW1wbGF0ZSwgdGFza0J1dHRvblRlbXBsYXRlIH07XG4iLCJpbXBvcnQgcG0gZnJvbSAnLi9wcm9qZWN0TWFuYWdlci5qcyc7XG5pbXBvcnQge3Byb2plY3RGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcy5qcyc7XG5pbXBvcnQge3Rhc2tUZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IEdyZWVuQ2hlY2sgZnJvbSAnLi9pbWFnZXMvZ3JlZW4tY2hlY2tib3guc3ZnJztcbmltcG9ydCBVbmNoZWNrZWQgZnJvbSAnLi9pbWFnZXMvdW5jaGVja2VkLnN2Zyc7XG5cbmNvbnN0IGNsZWFyVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWRpdicpO1xuICB3aGlsZSAodGFza3NEaXYuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tzRGl2LnJlbW92ZUNoaWxkKHRhc2tzRGl2LmZpcnN0Q2hpbGQpO1xuICB9O1xufTtcblxuY29uc3QgdG9wTmF2VGFza0Rpc3BsYXkgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IHRhc2tUZW1wbGF0ZSh0YXNrLCBpbmRleCk7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCBjaGVja0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGVjay1pbWdbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgaWYgKHRhc2suZmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBjaGVja0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9PT0gR3JlZW5DaGVjayA/IGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZCA6IGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgICB0YXNrLmNoYW5nZUZpbmlzaGVkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZVRhc2tJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2xvc2UtdGFza1tkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICBjbG9zZVRhc2tJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwbVByb2plY3QpID0+IHtcbiAgICAgICAgcG1Qcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgocHJvalRhc2spID0+IHtcbiAgICAgICAgICBpZiAocHJvalRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgIHBtUHJvamVjdC5kZWxldGVUYXNrKHBtUHJvamVjdC5nZXRUYXNrSW5kZXgocHJvalRhc2spKTtcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG4gICAgICAgICAgICB0b3BOYXZUYXNrRGlzcGxheShwcm9qZWN0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvcE5hdkRpdkRpc3BsYXlzID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkaW5nJykudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcy1kaXYnKTtcblxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKHRhc2tzRGl2LCBmb3JtQ29udGFpbmVyKTtcblxuICB0b3BOYXZUYXNrRGlzcGxheShwcm9qZWN0KTtcbn07XG5cbmNvbnN0IGFsbFRhc2tzRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgYWxsVGFza3NQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoJ2FsbFRhc2tzJyk7XG5cbiAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IGFsbFRhc2tzUHJvamVjdC5hZGRUYXNrKHRhc2spKTtcbiAgfSk7XG5cbiAgdG9wTmF2RGl2RGlzcGxheXMoYWxsVGFza3NQcm9qZWN0KTtcbn07XG5cbmNvbnN0IHRvcE5hdlN0dWZmID0gKCgpID0+IHtcbiAgY29uc3QgYWxsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MnKTtcbiAgY29uc3QgdG9kYXlUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG4gIGNvbnN0IHdlZWtUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWsnKTtcblxuICBhbGxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgICBpZiAodGFza3NEaXYpIHRhc2tzRGl2LnJlbW92ZSgpXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LXRhc2stYnV0dG9uJyk7XG4gICAgaWYgKGFkZFRhc2tCdXR0b24pIGFkZFRhc2tCdXR0b24ucmVtb3ZlKCk7XG4gICAgYWxsVGFza3NEaXNwbGF5KCk7XG4gIH0pO1xuXG4gIHRvZGF5VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9KTtcblxuICB3ZWVrVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9KTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vdG9wTmF2U3R1ZmYnO1xuaW1wb3J0ICcuL2JvdHRvbU5hdlN0dWZmJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG4vLyBcbi8vIGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIGV4aXN0aW5nTm9kZSkge1xuLy8gICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbi8vIH1cbi8vIFxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=