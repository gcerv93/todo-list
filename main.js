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

  const taskBtn = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.taskButtonTemplate)();
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

/***/ "./src/topNavStuff.js":
/*!****************************!*\
  !*** ./src/topNavStuff.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
/* harmony import */ var _factories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories.js */ "./src/factories.js");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
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
    const taskDiv = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_2__.taskTemplate)(task, index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnVCO0FBQ0c7QUFDSjs7O0FBR3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYm90dG9tTmF2U3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3REaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9wTmF2U3R1ZmYuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgcG0gZnJvbSAnLi9wcm9qZWN0TWFuYWdlci5qcyc7XG5pbXBvcnQge3Byb2plY3RGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcy5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL2ltYWdlcy9wcm9qZWN0LnN2Zyc7XG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi9pbWFnZXMvY2xvc2UtdGhpY2suc3ZnJztcbmltcG9ydCBkaXNwUHJvamVjdCBmcm9tICcuL3Byb2plY3REaXNwbGF5LmpzJztcblxuY29uc3QgY2xlYXJQcm9qZWN0RGl2RGlzcGxheSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZGl2JykuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdE5hdnMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvdHRvbU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tc2lkZS1uYXYnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBwcm9qZWN0RGl2VGVtcGxhdGUocHJvamVjdC5uYW1lLCBpbmRleCk7XG4gICAgYm90dG9tTmF2Lmluc2VydEJlZm9yZShwcm9qZWN0RGl2LCBmb3JtKTtcblxuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtdGFzay1idXR0b24nKTtcbiAgICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWRpdicpO1xuICAgICAgaWYgKHRhc2tCdG4pIHRhc2tCdG4ucmVtb3ZlKCk7XG4gICAgICBpZiAodGFza3NEaXYpIHRhc2tzRGl2LnJlbW92ZSgpO1xuICAgICAgZGlzcFByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjbG9zZVtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcG0uZGVsZXRlUHJvamVjdChpbmRleCk7XG4gICAgICBjbGVhclByb2plY3REaXZEaXNwbGF5KCk7XG4gICAgICBkaXNwbGF5UHJvamVjdE5hdnMoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBwcm9qZWN0RGl2VGVtcGxhdGUgPSAobmFtZSwgaWR4KSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpdicpO1xuICBwcm9qZWN0RGl2LmRhdGFzZXQuaW5kZXggPSBpZHg7XG5cbiAgY29uc3QgcHJvamVjdEltZyA9IG5ldyBJbWFnZSgpO1xuICBwcm9qZWN0SW1nLnNyYyA9IFByb2plY3Q7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEltZyk7XG5cbiAgY29uc3QgbmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWVUZXh0LnRleHRDb250ZW50ID0gbmFtZTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuYW1lVGV4dCk7XG5cbiAgY29uc3QgY2xvc2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY2xvc2VJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZScpO1xuICBjbG9zZUltZy5zcmMgPSBDbG9zZTtcbiAgY2xvc2VJbWcuZGF0YXNldC5pbmRleCA9IGlkeDtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChjbG9zZUltZyk7XG5cbiAgcmV0dXJuIHByb2plY3REaXY7XG59O1xuXG5jb25zdCBib3R0b21OYXZTdHVmZiA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSk7XG5cbiAgLy8gYWRkIHRoZSBjYW5jZWwgbGlzdGVuZXIgd2hlbmV2ZXIgdGhlIGFkZFByb2plY3QgYnV0dG9uIGlzIGNsaWNrZWRcbiAgY29uc3QgZm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhbmNlbC1idG4nKTtcbiAgZm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGFkZFByb2plY3RGb3JtLnJlc2V0KCk7XG4gIH0pXG5cbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdC1idG4nKTtcbiAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUudmFsdWUpO1xuICAgIHBtLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyUHJvamVjdERpdkRpc3BsYXkoKTtcbiAgICBkaXNwbGF5UHJvamVjdE5hdnMoKTtcbiAgfSk7XG59KSgpOyBcblxuZXhwb3J0IGRlZmF1bHQgYm90dG9tTmF2U3R1ZmY7XG4iLCJjb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGltcG9ydGFudCwgZmluaXNoZWQpID0+IHtcbiAgZnVuY3Rpb24gY2hhbmdlRmluaXNoZWQoKSB7XG4gICAgdGhpcy5maW5pc2hlZCA9PT0gdHJ1ZSA/IHRoaXMuZmluaXNoZWQgPSBmYWxzZSA6IHRoaXMuZmluaXNoZWQgPSB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBpbXBvcnRhbnQsXG4gICAgZmluaXNoZWQsXG4gICAgY2hhbmdlRmluaXNoZWRcbiAgfTtcbn07XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgbmFtZTogbmFtZTtcbiAgXG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXROYW1lKCkge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrcztcbiAgfTtcblxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGluZGV4KSB7XG4gICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRUYXNrSW5kZXgodGFzaykge1xuICAgIHJldHVybiB0YXNrcy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IHRhc2spO1xuICB9O1xuXG4gIHJldHVybiB7IG5hbWUsIGFkZFRhc2ssIGdldE5hbWUsIGdldFRhc2tzLCBkZWxldGVUYXNrLCBnZXRUYXNrSW5kZXggfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5LCBwcm9qZWN0RmFjdG9yeSB9XG4iLCJpbXBvcnQgUGx1cyBmcm9tICcuL2ltYWdlcy9wbHVzLXNpZ24tcmVjdGFuZ2xlLnN2Zyc7XG5pbXBvcnQgVW5jaGVja2VkIGZyb20gJy4vaW1hZ2VzL3VuY2hlY2tlZC5zdmcnO1xuaW1wb3J0IENsb3NlIGZyb20gJy4vaW1hZ2VzL2Nsb3NlLXRoaWNrLnN2Zyc7XG5cbi8vIHRhc2sgYnV0dG9uIGZvciB0aGUgbWFpbiBwYWdlLCB3aWxsIHRoaXMgYmUgdXNhYmxlIGZvciB0aGUgcHJvamVjdCBzY3JlZW5zP1xuY29uc3QgdGFza0J1dHRvblRlbXBsYXRlID0gKCkgPT4ge1xuICBjb25zdCBwbHVzU2lnbiA9IG5ldyBJbWFnZSgpO1xuICBwbHVzU2lnbi5zcmMgPSBQbHVzO1xuXG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0LXRhc2stYnV0dG9uJyk7XG4gIHRhc2tCdXR0b24uYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICB0YXNrQnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHJldHVybiB0YXNrQnV0dG9uO1xufTtcblxuLy8gYWRkIGEgZGF0ZSBkaXNwbGF5IGhlcmUgaW4gdGhlIGZ1dHVyZVxuY29uc3QgdGFza1RlbXBsYXRlID0gKHRhc2ssIGlkeCkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wbGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRlbXBsYXRlJyk7XG4gIHRlbXBsYXRlRGl2LmRhdGFzZXQuaW5kZXggPSBpZHg7XG5cbiAgY29uc3QgdW5jaGVja2VkSW1nID0gbmV3IEltYWdlKCk7XG4gIHVuY2hlY2tlZEltZy5zcmMgPSBVbmNoZWNrZWQ7XG4gIHVuY2hlY2tlZEltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICB1bmNoZWNrZWRJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdjaGVjay1pbWcnKTtcbiAgdGVtcGxhdGVEaXYuYXBwZW5kQ2hpbGQodW5jaGVja2VkSW1nKTtcblxuICBjb25zdCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICB0ZW1wbGF0ZURpdi5hcHBlbmRDaGlsZChuYW1lVGV4dCk7XG5cbiAgY29uc3QgY2xvc2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY2xvc2VJbWcuc3JjID0gQ2xvc2U7XG4gIGNsb3NlSW1nLmRhdGFzZXQuaW5kZXggPSBpZHg7XG4gIGNsb3NlSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtdGFzaycpO1xuICB0ZW1wbGF0ZURpdi5hcHBlbmRDaGlsZChjbG9zZUltZyk7XG5cbiAgcmV0dXJuIHRlbXBsYXRlRGl2O1xufTtcblxuZXhwb3J0IHsgdGFza1RlbXBsYXRlLCB0YXNrQnV0dG9uVGVtcGxhdGUgfTtcbiIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHt0YXNrVGVtcGxhdGUsIHRhc2tCdXR0b25UZW1wbGF0ZX0gZnJvbSAnLi9ob21lUGFnZS5qcyc7XG5pbXBvcnQge3Rhc2tGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcy5qcyc7XG5pbXBvcnQgR3JlZW5DaGVjayBmcm9tICcuL2ltYWdlcy9ncmVlbi1jaGVja2JveC5zdmcnO1xuaW1wb3J0IFVuY2hlY2tlZCBmcm9tICcuL2ltYWdlcy91bmNoZWNrZWQuc3ZnJztcblxuY29uc3QgY2xlYXJUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gIHdoaWxlICh0YXNrc0Rpdi5maXJzdENoaWxkKSB7XG4gICAgdGFza3NEaXYucmVtb3ZlQ2hpbGQodGFza3NEaXYuZmlyc3RDaGlsZCk7XG4gIH07XG59O1xuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IHRhc2tUZW1wbGF0ZSh0YXNrLCBpbmRleCk7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCBjaGVja0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGVjay1pbWdbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgaWYgKHRhc2suZmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBjaGVja0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9PT0gR3JlZW5DaGVjayA/IGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZCA6IGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgICB0YXNrLmNoYW5nZUZpbmlzaGVkKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGNsb3NlVGFza0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjbG9zZS10YXNrW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGNsb3NlVGFza0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG4gICAgICBjbGVhclRhc2tzKCk7XG4gICAgICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG4gICAgfSlcbiAgfSk7XG59O1xuXG4vLyBVTkZJTklTSEVEXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0cyA9ICgpID0+IHtcbiAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChoaWRkZW5JbnB1dC52YWx1ZSk7XG5cbiAgY29uc3QgdGFzayA9IHRhc2tGYWN0b3J5KHRhc2tOYW1lLnZhbHVlLCBkZXNjLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBmYWxzZSwgZmFsc2UpO1xuICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgcHJvamVjdC5hZGRUYXNrKHRhc2spO1xuICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2tzKCkpO1xuXG4gIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xuICB0YXNrRm9ybS5yZXNldCgpO1xuXG4gIGNsZWFyVGFza3MoKTtcbiAgZGlzcGxheVRhc2tzKHByb2plY3QpO1xufTtcblxuY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcblxuICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRpbmcnKTtcbiAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcy1kaXYnKTtcblxuICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB0YXNrRm9ybUNvbnRhaW5lci5kYXRhc2V0LmluZGV4ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdEluZGV4KHByb2plY3QpO1xuICBwcm9qZWN0Q29udGVudC5pbnNlcnRCZWZvcmUodGFza3NEaXYsIHRhc2tGb3JtQ29udGFpbmVyKTtcblxuICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG5cbiAgY29uc3QgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICBoaWRkZW5JbnB1dC52YWx1ZSA9IHByb2plY3QuZ2V0TmFtZSgpO1xuXG4gIGNvbnN0IHRhc2tCdG4gPSB0YXNrQnV0dG9uVGVtcGxhdGUoKTtcbiAgcHJvamVjdENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0J0bik7XG4gIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSk7XG5cbiAgY29uc3QgZm9ybURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJyk7XG4gIGNvbnN0IGFkanVzdGVkVGltZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudmFsdWVPZigpIC0gODY0MDAwMDAgKyAobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcbiAgZm9ybURhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9IGFkanVzdGVkVGltZTtcblxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgY29uc3QgZm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0tY2FuY2VsJyk7XG4gIGZvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICB9KTtcblxuICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybS1zdWJtaXQnKTtcbiAgZm9ybVN1Ym1pdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZvcm1TdWJtaXRzKTtcbiAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZvcm1TdWJtaXRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQcm9qZWN0O1xuIiwiY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RJbmRleChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsIFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdEluZGV4LFxuICAgIGdldFByb2plY3RcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNYW5hZ2VyO1xuIiwiaW1wb3J0IHBtIGZyb20gJy4vcHJvamVjdE1hbmFnZXIuanMnO1xuaW1wb3J0IHtwcm9qZWN0RmFjdG9yeX0gZnJvbSAnLi9mYWN0b3JpZXMuanMnO1xuaW1wb3J0IHt0YXNrVGVtcGxhdGV9IGZyb20gJy4vaG9tZVBhZ2UuanMnO1xuaW1wb3J0IEdyZWVuQ2hlY2sgZnJvbSAnLi9pbWFnZXMvZ3JlZW4tY2hlY2tib3guc3ZnJztcbmltcG9ydCBVbmNoZWNrZWQgZnJvbSAnLi9pbWFnZXMvdW5jaGVja2VkLnN2Zyc7XG5cbmNvbnN0IGNsZWFyVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWRpdicpO1xuICB3aGlsZSAodGFza3NEaXYuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tzRGl2LnJlbW92ZUNoaWxkKHRhc2tzRGl2LmZpcnN0Q2hpbGQpO1xuICB9O1xufTtcblxuY29uc3QgdG9wTmF2VGFza0Rpc3BsYXkgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IHRhc2tUZW1wbGF0ZSh0YXNrLCBpbmRleCk7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCBjaGVja0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGVjay1pbWdbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgaWYgKHRhc2suZmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBjaGVja0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9PT0gR3JlZW5DaGVjayA/IGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZCA6IGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgICB0YXNrLmNoYW5nZUZpbmlzaGVkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZVRhc2tJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2xvc2UtdGFza1tkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICBjbG9zZVRhc2tJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwbVByb2plY3QpID0+IHtcbiAgICAgICAgcG1Qcm9qZWN0LmdldFRhc2tzKCkuZm9yRWFjaCgocHJvalRhc2spID0+IHtcbiAgICAgICAgICBpZiAocHJvalRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgIHBtUHJvamVjdC5kZWxldGVUYXNrKHBtUHJvamVjdC5nZXRUYXNrSW5kZXgocHJvalRhc2spKTtcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgICAgICAgIHByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG4gICAgICAgICAgICB0b3BOYXZUYXNrRGlzcGxheShwcm9qZWN0KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvcE5hdkRpdkRpc3BsYXlzID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkaW5nJykudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcy1kaXYnKTtcblxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKHRhc2tzRGl2LCBmb3JtQ29udGFpbmVyKTtcblxuICB0b3BOYXZUYXNrRGlzcGxheShwcm9qZWN0KTtcbn07XG5cbmNvbnN0IGFsbFRhc2tzRGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgYWxsVGFza3NQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoJ2FsbFRhc2tzJyk7XG5cbiAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spID0+IGFsbFRhc2tzUHJvamVjdC5hZGRUYXNrKHRhc2spKTtcbiAgfSk7XG5cbiAgdG9wTmF2RGl2RGlzcGxheXMoYWxsVGFza3NQcm9qZWN0KTtcbn07XG5cbmNvbnN0IHRvcE5hdlN0dWZmID0gKCgpID0+IHtcbiAgY29uc3QgYWxsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtdGFza3MnKTtcbiAgY29uc3QgdG9kYXlUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG4gIGNvbnN0IHdlZWtUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlZWsnKTtcblxuICBhbGxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgICBpZiAodGFza3NEaXYpIHRhc2tzRGl2LnJlbW92ZSgpXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LXRhc2stYnV0dG9uJyk7XG4gICAgaWYgKGFkZFRhc2tCdXR0b24pIGFkZFRhc2tCdXR0b24ucmVtb3ZlKCk7XG4gICAgYWxsVGFza3NEaXNwbGF5KCk7XG4gIH0pO1xuXG4gIHRvZGF5VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9KTtcblxuICB3ZWVrVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICB9KTtcbn0pKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vdG9wTmF2U3R1ZmYnO1xuaW1wb3J0ICcuL2JvdHRvbU5hdlN0dWZmJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG4vLyBcbi8vIGZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIGV4aXN0aW5nTm9kZSkge1xuLy8gICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbi8vIH1cbi8vIFxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=