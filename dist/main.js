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

  const closeImg = new Image();
  closeImg.src = _images_close_thick_svg__WEBPACK_IMPORTED_MODULE_2__;
  closeImg.dataset.index = idx;
  closeImg.setAttribute('id', 'close-task');
  templateDiv.appendChild(closeImg);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2Z1QjtBQUNHO0FBQ0o7OztBQUd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/MTU1MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYm90dG9tTmF2U3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvcE5hdlN0dWZmLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHBtIGZyb20gJy4vcHJvamVjdE1hbmFnZXIuanMnO1xuaW1wb3J0IHtwcm9qZWN0RmFjdG9yeX0gZnJvbSAnLi9mYWN0b3JpZXMuanMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9pbWFnZXMvcHJvamVjdC5zdmcnO1xuaW1wb3J0IENsb3NlIGZyb20gJy4vaW1hZ2VzL2Nsb3NlLXRoaWNrLnN2Zyc7XG5pbXBvcnQgZGlzcFByb2plY3QgZnJvbSAnLi9wcm9qZWN0RGlzcGxheS5qcyc7XG5cbmNvbnN0IGNsZWFyUHJvamVjdERpdkRpc3BsYXkgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWRpdicpLmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xufTtcblxuY29uc3QgZGlzcGxheVByb2plY3ROYXZzID0gKCkgPT4ge1xuICBjb25zdCBib3R0b21OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tLXNpZGUtbmF2Jyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gIHBtLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gcHJvamVjdERpdlRlbXBsYXRlKHByb2plY3QubmFtZSwgaW5kZXgpO1xuICAgIGJvdHRvbU5hdi5pbnNlcnRCZWZvcmUocHJvamVjdERpdiwgZm9ybSk7XG5cbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LXRhc2stYnV0dG9uJyk7XG4gICAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgICAgIGlmICh0YXNrQnRuKSB0YXNrQnRuLnJlbW92ZSgpO1xuICAgICAgaWYgKHRhc2tzRGl2KSB0YXNrc0Rpdi5yZW1vdmUoKTtcbiAgICAgIGRpc3BQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2xvc2VbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHBtLmRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgICAgY2xlYXJQcm9qZWN0RGl2RGlzcGxheSgpO1xuICAgICAgZGlzcGxheVByb2plY3ROYXZzKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJvamVjdERpdlRlbXBsYXRlID0gKG5hbWUsIGlkeCkgPT4ge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kaXYnKTtcbiAgcHJvamVjdERpdi5kYXRhc2V0LmluZGV4ID0gaWR4O1xuXG4gIGNvbnN0IHByb2plY3RJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcHJvamVjdEltZy5zcmMgPSBQcm9qZWN0O1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJbWcpO1xuXG4gIGNvbnN0IG5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuYW1lVGV4dC50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmFtZVRleHQpO1xuXG4gIGNvbnN0IGNsb3NlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNsb3NlSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UnKTtcbiAgY2xvc2VJbWcuc3JjID0gQ2xvc2U7XG4gIGNsb3NlSW1nLmRhdGFzZXQuaW5kZXggPSBpZHg7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoY2xvc2VJbWcpO1xuXG4gIHJldHVybiBwcm9qZWN0RGl2O1xufTtcblxuY29uc3QgYm90dG9tTmF2U3R1ZmYgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcblxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH0pO1xuXG4gIC8vIGFkZCB0aGUgY2FuY2VsIGxpc3RlbmVyIHdoZW5ldmVyIHRoZSBhZGRQcm9qZWN0IGJ1dHRvbiBpcyBjbGlja2VkXG4gIGNvbnN0IGZvcm1DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYW5jZWwtYnRuJyk7XG4gIGZvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICB9KVxuXG4gIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zdWJtaXQtYnRuJyk7XG4gIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICBwbS5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIGFkZFByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgYWRkUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjbGVhclByb2plY3REaXZEaXNwbGF5KCk7XG4gICAgZGlzcGxheVByb2plY3ROYXZzKCk7XG4gIH0pO1xufSkoKTsgXG5cbmV4cG9ydCBkZWZhdWx0IGJvdHRvbU5hdlN0dWZmO1xuIiwiY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbnQsIGZpbmlzaGVkKSA9PiB7XG4gIGZ1bmN0aW9uIGNoYW5nZUZpbmlzaGVkKCkge1xuICAgIHRoaXMuZmluaXNoZWQgPT09IHRydWUgPyB0aGlzLmZpbmlzaGVkID0gZmFsc2UgOiB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgaW1wb3J0YW50LFxuICAgIGZpbmlzaGVkLFxuICAgIGNoYW5nZUZpbmlzaGVkXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIG5hbWU6IG5hbWU7XG4gIFxuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xuICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VGFza0luZGV4KHRhc2spIHtcbiAgICByZXR1cm4gdGFza3MuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50ID09PSB0YXNrKTtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBhZGRUYXNrLCBnZXROYW1lLCBnZXRUYXNrcywgZGVsZXRlVGFzaywgZ2V0VGFza0luZGV4IH07XG59O1xuXG5leHBvcnQgeyB0YXNrRmFjdG9yeSwgcHJvamVjdEZhY3RvcnkgfVxuIiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQge3Rhc2tUZW1wbGF0ZSwgdGFza0J1dHRvblRlbXBsYXRlfSBmcm9tICcuL3RlbXBsYXRlcy5qcyc7XG5pbXBvcnQge3Rhc2tGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcy5qcyc7XG5pbXBvcnQgR3JlZW5DaGVjayBmcm9tICcuL2ltYWdlcy9ncmVlbi1jaGVja2JveC5zdmcnO1xuaW1wb3J0IFVuY2hlY2tlZCBmcm9tICcuL2ltYWdlcy91bmNoZWNrZWQuc3ZnJztcblxuY29uc3QgY2xlYXJUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gIHdoaWxlICh0YXNrc0Rpdi5maXJzdENoaWxkKSB7XG4gICAgdGFza3NEaXYucmVtb3ZlQ2hpbGQodGFza3NEaXYuZmlyc3RDaGlsZCk7XG4gIH07XG59O1xuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IHRhc2tUZW1wbGF0ZSh0YXNrLCBpbmRleCk7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCBjaGVja0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGVjay1pbWdbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgaWYgKHRhc2suZmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBjaGVja0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9PT0gR3JlZW5DaGVjayA/IGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZCA6IGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgICB0YXNrLmNoYW5nZUZpbmlzaGVkKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGNsb3NlVGFza0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjbG9zZS10YXNrW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGNsb3NlVGFza0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG4gICAgICBjbGVhclRhc2tzKCk7XG4gICAgICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG4gICAgfSlcbiAgfSk7XG59O1xuXG4vLyBVTkZJTklTSEVEXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0cyA9ICgpID0+IHtcbiAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChoaWRkZW5JbnB1dC52YWx1ZSk7XG5cbiAgY29uc3QgdGFzayA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLnZhbHVlLCBkZXNjLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBmYWxzZSwgZmFsc2UpO1xuICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgcHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2tzKCkpO1xuXG4gIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xuICB0YXNrRm9ybS5yZXNldCgpO1xuXG4gIGNsZWFyVGFza3MoKTtcbiAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xufTtcblxuY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcblxuICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRpbmcnKTtcbiAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcy1kaXYnKTtcblxuICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0YXNrRm9ybUNvbnRhaW5lci5kYXRhc2V0LmluZGV4ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdEluZGV4KHByb2plY3QpO1xuICBwcm9qZWN0Q29udGVudC5pbnNlcnRCZWZvcmUodGFza3NEaXYsIHRhc2tGb3JtQ29udGFpbmVyKTtcblxuICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG5cbiAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICBoaWRkZW5JbnB1dC52YWx1ZSA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXG4gIGNvbnN0IHRhc2tCdG4gPSB0YXNrQnV0dG9uVGVtcGxhdGUoKTtcbiAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0J0bik7XG4gIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSk7XG5cbiAgY29uc3QgZm9ybURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gIGNvbnN0IGFkanVzdGVkVGltZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudmFsdWVPZigpIC0gODY0MDAwMDAgKyAobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcbiAgZm9ybURhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9IGFkanVzdGVkVGltZTtcblxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgY29uc3QgZm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0tY2FuY2VsJyk7XG4gIGZvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICB9KTtcblxuICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybS1zdWJtaXQnKTtcbiAgZm9ybVN1Ym1pdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZvcm1TdWJtaXRzKTtcbiAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZvcm1TdWJtaXRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQcm9qZWN0O1xuIiwiY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RJbmRleChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsIFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdEluZGV4LFxuICAgIGdldFByb2plY3RcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNYW5hZ2VyO1xuIiwiaW1wb3J0IFBsdXMgZnJvbSAnLi9pbWFnZXMvcGx1cy1zaWduLXJlY3RhbmdsZS5zdmcnO1xuaW1wb3J0IFVuY2hlY2tlZCBmcm9tICcuL2ltYWdlcy91bmNoZWNrZWQuc3ZnJztcbmltcG9ydCBDbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS10aGljay5zdmcnO1xuXG4vLyB0YXNrIGJ1dHRvbiBmb3IgdGhlIG1haW4gcGFnZSwgd2lsbCB0aGlzIGJlIHVzYWJsZSBmb3IgdGhlIHByb2plY3Qgc2NyZWVucz9cbmNvbnN0IHRhc2tCdXR0b25UZW1wbGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgcGx1c1NpZ24gPSBuZXcgSW1hZ2UoKTtcbiAgcGx1c1NpZ24uc3JjID0gUGx1cztcblxuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVmYXVsdC10YXNrLWJ1dHRvbicpO1xuICB0YXNrQnV0dG9uLmFwcGVuZENoaWxkKHBsdXNTaWduKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgdGFza0J1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4gdGFza0J1dHRvbjtcbn07XG5cbi8vIGFkZCBhIGRhdGUgZGlzcGxheSBoZXJlIGluIHRoZSBmdXR1cmVcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9ICh0YXNrLCBpZHgpID0+IHtcbiAgY29uc3QgdGVtcGxhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcGxhdGVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay10ZW1wbGF0ZScpO1xuICB0ZW1wbGF0ZURpdi5kYXRhc2V0LmluZGV4ID0gaWR4O1xuXG4gIGNvbnN0IHVuY2hlY2tlZEltZyA9IG5ldyBJbWFnZSgpO1xuICB1bmNoZWNrZWRJbWcuc3JjID0gVW5jaGVja2VkO1xuICB1bmNoZWNrZWRJbWcuZGF0YXNldC5pbmRleCA9IGlkeDtcbiAgdW5jaGVja2VkSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2staW1nJyk7XG4gIHRlbXBsYXRlRGl2LmFwcGVuZENoaWxkKHVuY2hlY2tlZEltZyk7XG5cbiAgY29uc3QgbmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWVUZXh0LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgdGVtcGxhdGVEaXYuYXBwZW5kQ2hpbGQobmFtZVRleHQpO1xuXG4gIGNvbnN0IGNsb3NlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNsb3NlSW1nLnNyYyA9IENsb3NlO1xuICBjbG9zZUltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICBjbG9zZUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlLXRhc2snKTtcbiAgdGVtcGxhdGVEaXYuYXBwZW5kQ2hpbGQoY2xvc2VJbWcpO1xuXG4gIHJldHVybiB0ZW1wbGF0ZURpdjtcbn07XG5cbmV4cG9ydCB7IHRhc2tUZW1wbGF0ZSwgdGFza0J1dHRvblRlbXBsYXRlIH07XG4iLCJpbXBvcnQgcG0gZnJvbSAnLi9wcm9qZWN0TWFuYWdlci5qcyc7XG5pbXBvcnQge3Byb2plY3RGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcy5qcyc7XG5pbXBvcnQge3Rhc2tUZW1wbGF0ZX0gZnJvbSAnLi90ZW1wbGF0ZXMuanMnO1xuaW1wb3J0IEdyZWVuQ2hlY2sgZnJvbSAnLi9pbWFnZXMvZ3JlZW4tY2hlY2tib3guc3ZnJztcbmltcG9ydCBVbmNoZWNrZWQgZnJvbSAnLi9pbWFnZXMvdW5jaGVja2VkLnN2Zyc7XG5cbmNvbnN0IGNsZWFyVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWRpdicpO1xuICB3aGlsZSAodGFza3NEaXYuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tzRGl2LnJlbW92ZUNoaWxkKHRhc2tzRGl2LmZpcnN0Q2hpbGQpO1xuICB9O1xufTtcblxuY29uc3QgdG9wTmF2VGFza0Rpc3BsYXkgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IHRhc2tUZW1wbGF0ZSh0YXNrLCBpbmRleCk7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCBjaGVja0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGVjay1pbWdbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgaWYgKHRhc2suZmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBjaGVja0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9PT0gR3JlZW5DaGVjayA/IGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZCA6IGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgICB0YXNrLmNoYW5nZUZpbmlzaGVkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZVRhc2tJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2xvc2UtdGFza1tkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICBjbG9zZVRhc2tJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwbVByb2plY3QpID0+IHtcbiAgICAgICAgcG1Qcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgocHJvalRhc2spID0+IHtcbiAgICAgICAgICBpZiAocHJvalRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgIHBtUHJvamVjdC5kZWxldGVUYXNrKHBtUHJvamVjdC5nZXRUYXNrSW5kZXgocHJvalRhc2spKTtcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG4gICAgICAgICAgICB0b3BOYXZUYXNrRGlzcGxheShwcm9qZWN0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvcE5hdkRpdkRpc3BsYXlzID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkaW5nJykudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcy1kaXYnKTtcblxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKHRhc2tzRGl2LCBmb3JtQ29udGFpbmVyKTtcblxuICB0b3BOYXZUYXNrRGlzcGxheShwcm9qZWN0KTtcbn07XG5cbmNvbnN0IGFsbFRhc2tzRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgYWxsVGFza3NQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoJ2FsbFRhc2tzJyk7XG5cbiAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IGFsbFRhc2tzUHJvamVjdC5hZGRUYXNrKHRhc2spKTtcbiAgfSk7XG5cbiAgdG9wTmF2RGl2RGlzcGxheXMoYWxsVGFza3NQcm9qZWN0KTtcbn07XG5cbmNvbnN0IHRvcE5hdlN0dWZmID0gKCgpID0+IHtcbiAgY29uc3QgYWxsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MnKTtcbiAgY29uc3QgdG9kYXlUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG4gIGNvbnN0IHdlZWtUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWsnKTtcblxuICBhbGxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgICBpZiAodGFza3NEaXYpIHRhc2tzRGl2LnJlbW92ZSgpXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LXRhc2stYnV0dG9uJyk7XG4gICAgaWYgKGFkZFRhc2tCdXR0b24pIGFkZFRhc2tCdXR0b24ucmVtb3ZlKCk7XG4gICAgYWxsVGFza3NEaXNwbGF5KCk7XG4gIH0pO1xuXG4gIHRvZGF5VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9KTtcblxuICB3ZWVrVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9KTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vdG9wTmF2U3R1ZmYnO1xuaW1wb3J0ICcuL2JvdHRvbU5hdlN0dWZmJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG4vLyBcbi8vIGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIGV4aXN0aW5nTm9kZSkge1xuLy8gICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbi8vIH1cbi8vIFxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=