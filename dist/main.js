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
    console.log(project);
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

  return { name, addTask, getName, getTasks, deleteTask };
};




/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
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
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
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
    const taskDiv = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.taskTemplate)(task, index);
    tasksDiv.appendChild(taskDiv);

    const checkImg = document.querySelector(`#check-img[data-index="${index}"]`);
    if (task.finished === true) {
      checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
    } else {
      checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__;
    }

    checkImg.addEventListener('click', (e) => {
      checkImg.src === _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ ? checkImg.src = _images_unchecked_svg__WEBPACK_IMPORTED_MODULE_4__ : checkImg.src = _images_green_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__;
      task.changeFinished();
    })

    const closeTaskImg = document.querySelector(`#close-task[data-index="${index}"]`);
    closeTaskImg.addEventListener('click', (e) => {
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

  const taskBtn = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.taskButtonTemplate)();
  projectContent.appendChild(taskBtn);
  taskBtn.addEventListener('click', () => {
    taskFormContainer.style.display = 'flex';
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
/* harmony import */ var _bottomNavStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottomNavStuff */ "./src/bottomNavStuff.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQzlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZnlCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYm90dG9tTmF2U3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3REaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBwbSBmcm9tICcuL3Byb2plY3RNYW5hZ2VyLmpzJztcbmltcG9ydCB7cHJvamVjdEZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yaWVzLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vaW1hZ2VzL3Byb2plY3Quc3ZnJztcbmltcG9ydCBDbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS10aGljay5zdmcnO1xuaW1wb3J0IGRpc3BQcm9qZWN0IGZyb20gJy4vcHJvamVjdERpc3BsYXkuanMnO1xuXG5jb25zdCBjbGVhclByb2plY3REaXZEaXNwbGF5ID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0TmF2cyA9ICgpID0+IHtcbiAgY29uc3QgYm90dG9tTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1zaWRlLW5hdicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBwbS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IHByb2plY3REaXZUZW1wbGF0ZShwcm9qZWN0Lm5hbWUsIGluZGV4KTtcbiAgICBib3R0b21OYXYuaW5zZXJ0QmVmb3JlKHByb2plY3REaXYsIGZvcm0pO1xuXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC10YXNrLWJ1dHRvbicpO1xuICAgICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gICAgICBpZiAodGFza0J0bikgdGFza0J0bi5yZW1vdmUoKTtcbiAgICAgIGlmICh0YXNrc0RpdikgdGFza3NEaXYucmVtb3ZlKCk7XG4gICAgICBkaXNwUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Nsb3NlW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwbS5kZWxldGVQcm9qZWN0KGluZGV4KTtcbiAgICAgIGNsZWFyUHJvamVjdERpdkRpc3BsYXkoKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0TmF2cygpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHByb2plY3REaXZUZW1wbGF0ZSA9IChuYW1lLCBpZHgpID0+IHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG4gIHByb2plY3REaXYuZGF0YXNldC5pbmRleCA9IGlkeDtcblxuICBjb25zdCBwcm9qZWN0SW1nID0gbmV3IEltYWdlKCk7XG4gIHByb2plY3RJbWcuc3JjID0gUHJvamVjdDtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcblxuICBjb25zdCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5hbWVUZXh0KTtcblxuICBjb25zdCBjbG9zZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjbG9zZUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJyk7XG4gIGNsb3NlSW1nLnNyYyA9IENsb3NlO1xuICBjbG9zZUltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNsb3NlSW1nKTtcblxuICByZXR1cm4gcHJvamVjdERpdjtcbn07XG5cbmNvbnN0IGJvdHRvbU5hdlN0dWZmID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9KTtcblxuICAvLyBhZGQgdGhlIGNhbmNlbCBsaXN0ZW5lciB3aGVuZXZlciB0aGUgYWRkUHJvamVjdCBidXR0b24gaXMgY2xpY2tlZFxuICBjb25zdCBmb3JtQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FuY2VsLWJ0bicpO1xuICBmb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgfSlcblxuICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc3VibWl0LWJ0bicpO1xuICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgcG0uYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJQcm9qZWN0RGl2RGlzcGxheSgpO1xuICAgIGRpc3BsYXlQcm9qZWN0TmF2cygpO1xuICB9KTtcbn0pKCk7IFxuXG5leHBvcnQgZGVmYXVsdCBib3R0b21OYXZTdHVmZjtcbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW1wb3J0YW50LCBmaW5pc2hlZCkgPT4ge1xuICBmdW5jdGlvbiBjaGFuZ2VGaW5pc2hlZCgpIHtcbiAgICB0aGlzLmZpbmlzaGVkID09PSB0cnVlID8gdGhpcy5maW5pc2hlZCA9IGZhbHNlIDogdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIGltcG9ydGFudCxcbiAgICBmaW5pc2hlZCxcbiAgICBjaGFuZ2VGaW5pc2hlZFxuICB9O1xufTtcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICBuYW1lOiBuYW1lO1xuICBcbiAgY29uc3QgdGFza3MgPSBbXTtcblxuICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7IG5hbWUsIGFkZFRhc2ssIGdldE5hbWUsIGdldFRhc2tzLCBkZWxldGVUYXNrIH07XG59O1xuXG5leHBvcnQgeyB0YXNrRmFjdG9yeSwgcHJvamVjdEZhY3RvcnkgfVxuIiwiaW1wb3J0IFBsdXMgZnJvbSAnLi9pbWFnZXMvcGx1cy1zaWduLXJlY3RhbmdsZS5zdmcnO1xuaW1wb3J0IFVuY2hlY2tlZCBmcm9tICcuL2ltYWdlcy91bmNoZWNrZWQuc3ZnJztcbmltcG9ydCBDbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS10aGljay5zdmcnO1xuXG4vLyB0YXNrIGJ1dHRvbiBmb3IgdGhlIG1haW4gcGFnZSwgd2lsbCB0aGlzIGJlIHVzYWJsZSBmb3IgdGhlIHByb2plY3Qgc2NyZWVucz9cbmNvbnN0IHRhc2tCdXR0b25UZW1wbGF0ZSA9ICgpID0+IHtcbiAgY29uc3QgcGx1c1NpZ24gPSBuZXcgSW1hZ2UoKTtcbiAgcGx1c1NpZ24uc3JjID0gUGx1cztcblxuICBjb25zdCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVmYXVsdC10YXNrLWJ1dHRvbicpO1xuICB0YXNrQnV0dG9uLmFwcGVuZENoaWxkKHBsdXNTaWduKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgdGFza0J1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICByZXR1cm4gdGFza0J1dHRvbjtcbn07XG5cbi8vIGFkZCBhIGRhdGUgZGlzcGxheSBoZXJlIGluIHRoZSBmdXR1cmVcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9ICh0YXNrLCBpZHgpID0+IHtcbiAgY29uc3QgdGVtcGxhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcGxhdGVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay10ZW1wbGF0ZScpO1xuICB0ZW1wbGF0ZURpdi5kYXRhc2V0LmluZGV4ID0gaWR4O1xuXG4gIGNvbnN0IHVuY2hlY2tlZEltZyA9IG5ldyBJbWFnZSgpO1xuICB1bmNoZWNrZWRJbWcuc3JjID0gVW5jaGVja2VkO1xuICB1bmNoZWNrZWRJbWcuZGF0YXNldC5pbmRleCA9IGlkeDtcbiAgdW5jaGVja2VkSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hlY2staW1nJyk7XG4gIHRlbXBsYXRlRGl2LmFwcGVuZENoaWxkKHVuY2hlY2tlZEltZyk7XG5cbiAgY29uc3QgbmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWVUZXh0LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgdGVtcGxhdGVEaXYuYXBwZW5kQ2hpbGQobmFtZVRleHQpO1xuXG4gIGNvbnN0IGNsb3NlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNsb3NlSW1nLnNyYyA9IENsb3NlO1xuICBjbG9zZUltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICBjbG9zZUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlLXRhc2snKTtcbiAgdGVtcGxhdGVEaXYuYXBwZW5kQ2hpbGQoY2xvc2VJbWcpO1xuXG4gIHJldHVybiB0ZW1wbGF0ZURpdjtcbn07XG5cbmV4cG9ydCB7IHRhc2tUZW1wbGF0ZSwgdGFza0J1dHRvblRlbXBsYXRlIH07XG4iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcbmltcG9ydCB7dGFza1RlbXBsYXRlLCB0YXNrQnV0dG9uVGVtcGxhdGV9IGZyb20gJy4vaG9tZVBhZ2UuanMnO1xuaW1wb3J0IHt0YXNrRmFjdG9yeX0gZnJvbSAnLi9mYWN0b3JpZXMuanMnO1xuaW1wb3J0IEdyZWVuQ2hlY2sgZnJvbSAnLi9pbWFnZXMvZ3JlZW4tY2hlY2tib3guc3ZnJztcbmltcG9ydCBVbmNoZWNrZWQgZnJvbSAnLi9pbWFnZXMvdW5jaGVja2VkLnN2Zyc7XG5cbmNvbnN0IGNsZWFyVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWRpdicpO1xuICB3aGlsZSAodGFza3NEaXYuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tzRGl2LnJlbW92ZUNoaWxkKHRhc2tzRGl2LmZpcnN0Q2hpbGQpO1xuICB9O1xufTtcblxuY29uc3QgZGlzcGxheVRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gIHByb2plY3QuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRhc2tEaXYgPSB0YXNrVGVtcGxhdGUodGFzaywgaW5kZXgpO1xuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuXG4gICAgY29uc3QgY2hlY2tJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hlY2staW1nW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGlmICh0YXNrLmZpbmlzaGVkID09PSB0cnVlKSB7XG4gICAgICBjaGVja0ltZy5zcmMgPSBHcmVlbkNoZWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGVja0ltZy5zcmMgPSBVbmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgY2hlY2tJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY2hlY2tJbWcuc3JjID09PSBHcmVlbkNoZWNrID8gY2hlY2tJbWcuc3JjID0gVW5jaGVja2VkIDogY2hlY2tJbWcuc3JjID0gR3JlZW5DaGVjaztcbiAgICAgIHRhc2suY2hhbmdlRmluaXNoZWQoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY2xvc2VUYXNrSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Nsb3NlLXRhc2tbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgY2xvc2VUYXNrSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG4gICAgICBjbGVhclRhc2tzKCk7XG4gICAgICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG4gICAgfSlcbiAgfSk7XG59O1xuXG4vLyBVTkZJTklTSEVEXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0cyA9ICgpID0+IHtcbiAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChoaWRkZW5JbnB1dC52YWx1ZSk7XG5cbiAgY29uc3QgdGFzayA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLnZhbHVlLCBkZXNjLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBmYWxzZSwgZmFsc2UpO1xuICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgcHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2tzKCkpO1xuXG4gIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xuICB0YXNrRm9ybS5yZXNldCgpO1xuXG4gIGNsZWFyVGFza3MoKTtcbiAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xufTtcblxuY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcblxuICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRpbmcnKTtcbiAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcy1kaXYnKTtcblxuICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0YXNrRm9ybUNvbnRhaW5lci5kYXRhc2V0LmluZGV4ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdEluZGV4KHByb2plY3QpO1xuICBwcm9qZWN0Q29udGVudC5pbnNlcnRCZWZvcmUodGFza3NEaXYsIHRhc2tGb3JtQ29udGFpbmVyKTtcblxuICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG5cbiAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICBoaWRkZW5JbnB1dC52YWx1ZSA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXG4gIGNvbnN0IHRhc2tCdG4gPSB0YXNrQnV0dG9uVGVtcGxhdGUoKTtcbiAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0J0bik7XG4gIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSk7XG5cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJyk7XG4gIGNvbnN0IGZvcm1DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtLWNhbmNlbCcpO1xuICBmb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgfSk7XG5cbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0tc3VibWl0Jyk7XG4gIGZvcm1TdWJtaXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVGb3JtU3VibWl0cyk7XG4gIGZvcm1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVGb3JtU3VibWl0cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UHJvamVjdDtcbiIsImNvbnN0IHByb2plY3RNYW5hZ2VyID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH07XG5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGluZGV4KSB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRQcm9qZWN0SW5kZXgocHJvamVjdCkge1xuICAgIHJldHVybiBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LCBcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGdldFByb2plY3RJbmRleCxcbiAgICBnZXRQcm9qZWN0XG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWFuYWdlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCcuL2JvdHRvbU5hdlN0dWZmJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==