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

/***/ "./src/navStuff.js":
/*!*************************!*\
  !*** ./src/navStuff.js ***!
  \*************************/
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

const navStuff = (() => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navStuff);


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
/* harmony import */ var _navStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navStuff */ "./src/navStuff.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXZTdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgdGFza0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbnQsIGZpbmlzaGVkKSA9PiB7XG4gIGZ1bmN0aW9uIGNoYW5nZUZpbmlzaGVkKCkge1xuICAgIHRoaXMuZmluaXNoZWQgPT09IHRydWUgPyB0aGlzLmZpbmlzaGVkID0gZmFsc2UgOiB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgaW1wb3J0YW50LFxuICAgIGZpbmlzaGVkLFxuICAgIGNoYW5nZUZpbmlzaGVkXG4gIH07XG59O1xuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gIG5hbWU6IG5hbWU7XG4gIFxuICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbmFtZTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGFza3M7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xuICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbmFtZSwgYWRkVGFzaywgZ2V0TmFtZSwgZ2V0VGFza3MsIGRlbGV0ZVRhc2sgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5LCBwcm9qZWN0RmFjdG9yeSB9XG4iLCJpbXBvcnQgUGx1cyBmcm9tICcuL2ltYWdlcy9wbHVzLXNpZ24tcmVjdGFuZ2xlLnN2Zyc7XG5pbXBvcnQgVW5jaGVja2VkIGZyb20gJy4vaW1hZ2VzL3VuY2hlY2tlZC5zdmcnO1xuaW1wb3J0IENsb3NlIGZyb20gJy4vaW1hZ2VzL2Nsb3NlLXRoaWNrLnN2Zyc7XG5cbi8vIHRhc2sgYnV0dG9uIGZvciB0aGUgbWFpbiBwYWdlLCB3aWxsIHRoaXMgYmUgdXNhYmxlIGZvciB0aGUgcHJvamVjdCBzY3JlZW5zP1xuY29uc3QgdGFza0J1dHRvblRlbXBsYXRlID0gKCkgPT4ge1xuICBjb25zdCBwbHVzU2lnbiA9IG5ldyBJbWFnZSgpO1xuICBwbHVzU2lnbi5zcmMgPSBQbHVzO1xuXG4gIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWZhdWx0LXRhc2stYnV0dG9uJyk7XG4gIHRhc2tCdXR0b24uYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICB0YXNrQnV0dG9uLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHJldHVybiB0YXNrQnV0dG9uO1xufTtcblxuLy8gYWRkIGEgZGF0ZSBkaXNwbGF5IGhlcmUgaW4gdGhlIGZ1dHVyZVxuY29uc3QgdGFza1RlbXBsYXRlID0gKHRhc2ssIGlkeCkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wbGF0ZURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRlbXBsYXRlJyk7XG4gIHRlbXBsYXRlRGl2LmRhdGFzZXQuaW5kZXggPSBpZHg7XG5cbiAgY29uc3QgdW5jaGVja2VkSW1nID0gbmV3IEltYWdlKCk7XG4gIHVuY2hlY2tlZEltZy5zcmMgPSBVbmNoZWNrZWQ7XG4gIHVuY2hlY2tlZEltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICB1bmNoZWNrZWRJbWcuc2V0QXR0cmlidXRlKCdpZCcsICdjaGVjay1pbWcnKTtcbiAgdGVtcGxhdGVEaXYuYXBwZW5kQ2hpbGQodW5jaGVja2VkSW1nKTtcblxuICBjb25zdCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICB0ZW1wbGF0ZURpdi5hcHBlbmRDaGlsZChuYW1lVGV4dCk7XG5cbiAgY29uc3QgY2xvc2VJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY2xvc2VJbWcuc3JjID0gQ2xvc2U7XG4gIGNsb3NlSW1nLmRhdGFzZXQuaW5kZXggPSBpZHg7XG4gIGNsb3NlSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtdGFzaycpO1xuICB0ZW1wbGF0ZURpdi5hcHBlbmRDaGlsZChjbG9zZUltZyk7XG5cbiAgcmV0dXJuIHRlbXBsYXRlRGl2O1xufTtcblxuZXhwb3J0IHsgdGFza1RlbXBsYXRlLCB0YXNrQnV0dG9uVGVtcGxhdGUgfTtcbiIsImltcG9ydCBwbSBmcm9tICcuL3Byb2plY3RNYW5hZ2VyLmpzJztcbmltcG9ydCB7cHJvamVjdEZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yaWVzLmpzJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vaW1hZ2VzL3Byb2plY3Quc3ZnJztcbmltcG9ydCBDbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS10aGljay5zdmcnO1xuaW1wb3J0IGRpc3BQcm9qZWN0IGZyb20gJy4vcHJvamVjdERpc3BsYXkuanMnO1xuXG5jb25zdCBjbGVhclByb2plY3REaXZEaXNwbGF5ID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1kaXYnKS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0TmF2cyA9ICgpID0+IHtcbiAgY29uc3QgYm90dG9tTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1zaWRlLW5hdicpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBwbS5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IHByb2plY3REaXZUZW1wbGF0ZShwcm9qZWN0Lm5hbWUsIGluZGV4KTtcbiAgICBib3R0b21OYXYuaW5zZXJ0QmVmb3JlKHByb2plY3REaXYsIGZvcm0pO1xuXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC10YXNrLWJ1dHRvbicpO1xuICAgICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gICAgICBpZiAodGFza0J0bikgdGFza0J0bi5yZW1vdmUoKTtcbiAgICAgIGlmICh0YXNrc0RpdikgdGFza3NEaXYucmVtb3ZlKCk7XG4gICAgICBkaXNwUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Nsb3NlW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBwbS5kZWxldGVQcm9qZWN0KGluZGV4KTtcbiAgICAgIGNsZWFyUHJvamVjdERpdkRpc3BsYXkoKTtcbiAgICAgIGRpc3BsYXlQcm9qZWN0TmF2cygpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHByb2plY3REaXZUZW1wbGF0ZSA9IChuYW1lLCBpZHgpID0+IHtcbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGl2Jyk7XG4gIHByb2plY3REaXYuZGF0YXNldC5pbmRleCA9IGlkeDtcblxuICBjb25zdCBwcm9qZWN0SW1nID0gbmV3IEltYWdlKCk7XG4gIHByb2plY3RJbWcuc3JjID0gUHJvamVjdDtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcblxuICBjb25zdCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5hbWVUZXh0KTtcblxuICBjb25zdCBjbG9zZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjbG9zZUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJyk7XG4gIGNsb3NlSW1nLnNyYyA9IENsb3NlO1xuICBjbG9zZUltZy5kYXRhc2V0LmluZGV4ID0gaWR4O1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGNsb3NlSW1nKTtcblxuICByZXR1cm4gcHJvamVjdERpdjtcbn07XG5cbmNvbnN0IG5hdlN0dWZmID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJyk7XG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJyk7XG5cbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9KTtcblxuICAvLyBhZGQgdGhlIGNhbmNlbCBsaXN0ZW5lciB3aGVuZXZlciB0aGUgYWRkUHJvamVjdCBidXR0b24gaXMgY2xpY2tlZFxuICBjb25zdCBmb3JtQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FuY2VsLWJ0bicpO1xuICBmb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgfSlcblxuICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc3VibWl0LWJ0bicpO1xuICBmb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgcG0uYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIGFkZFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2xlYXJQcm9qZWN0RGl2RGlzcGxheSgpO1xuICAgIGRpc3BsYXlQcm9qZWN0TmF2cygpO1xuICB9KTtcbn0pKCk7IFxuXG5leHBvcnQgZGVmYXVsdCBuYXZTdHVmZjtcbiIsImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlclwiO1xuaW1wb3J0IHt0YXNrVGVtcGxhdGUsIHRhc2tCdXR0b25UZW1wbGF0ZX0gZnJvbSAnLi9ob21lUGFnZS5qcyc7XG5pbXBvcnQge3Rhc2tGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcy5qcyc7XG5pbXBvcnQgR3JlZW5DaGVjayBmcm9tICcuL2ltYWdlcy9ncmVlbi1jaGVja2JveC5zdmcnO1xuaW1wb3J0IFVuY2hlY2tlZCBmcm9tICcuL2ltYWdlcy91bmNoZWNrZWQuc3ZnJztcblxuY29uc3QgY2xlYXJUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MtZGl2Jyk7XG4gIHdoaWxlICh0YXNrc0Rpdi5maXJzdENoaWxkKSB7XG4gICAgdGFza3NEaXYucmVtb3ZlQ2hpbGQodGFza3NEaXYuZmlyc3RDaGlsZCk7XG4gIH07XG59O1xuXG5jb25zdCBkaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrcy1kaXYnKTtcbiAgcHJvamVjdC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IHRhc2tUZW1wbGF0ZSh0YXNrLCBpbmRleCk7XG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICBjb25zdCBjaGVja0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGVjay1pbWdbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdYCk7XG4gICAgaWYgKHRhc2suZmluaXNoZWQgPT09IHRydWUpIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IEdyZWVuQ2hlY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrSW1nLnNyYyA9IFVuY2hlY2tlZDtcbiAgICB9XG5cbiAgICBjaGVja0ltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjaGVja0ltZy5zcmMgPT09IEdyZWVuQ2hlY2sgPyBjaGVja0ltZy5zcmMgPSBVbmNoZWNrZWQgOiBjaGVja0ltZy5zcmMgPSBHcmVlbkNoZWNrO1xuICAgICAgdGFzay5jaGFuZ2VGaW5pc2hlZCgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjbG9zZVRhc2tJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2xvc2UtdGFza1tkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICBjbG9zZVRhc2tJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgcHJvamVjdC5kZWxldGVUYXNrKGluZGV4KTtcbiAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcbiAgICB9KVxuICB9KTtcbn07XG5cbi8vIFVORklOSVNIRURcbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXRzID0gKCkgPT4ge1xuICBjb25zdCBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KGhpZGRlbklucHV0LnZhbHVlKTtcblxuICBjb25zdCB0YXNrID0gdGFza0ZhY3RvcnkodGFza05hbWUudmFsdWUsIGRlc2MudmFsdWUsIGR1ZURhdGUudmFsdWUsIGZhbHNlLCBmYWxzZSk7XG4gIGNvbnNvbGUubG9nKHRhc2spO1xuICBwcm9qZWN0LmFkZFRhc2sodGFzayk7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFza3MoKSk7XG5cbiAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJyk7XG4gIHRhc2tGb3JtLnJlc2V0KCk7XG5cbiAgY2xlYXJUYXNrcygpO1xuICBkaXNwbGF5VGFza3MocHJvamVjdCk7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGVudCcpO1xuXG4gIGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staGVhZGluZycpO1xuICBwcm9qZWN0SGVhZGluZy50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tzLWRpdicpO1xuXG4gIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHRhc2tGb3JtQ29udGFpbmVyLmRhdGFzZXQuaW5kZXggPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0SW5kZXgocHJvamVjdCk7XG4gIHByb2plY3RDb250ZW50Lmluc2VydEJlZm9yZSh0YXNrc0RpdiwgdGFza0Zvcm1Db250YWluZXIpO1xuXG4gIGRpc3BsYXlUYXNrcyhwcm9qZWN0KTtcblxuICBjb25zdCBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gIGhpZGRlbklucHV0LnZhbHVlID0gcHJvamVjdC5nZXROYW1lKCk7XG5cbiAgY29uc3QgdGFza0J0biA9IHRhc2tCdXR0b25UZW1wbGF0ZSgpO1xuICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrQnRuKTtcbiAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9KTtcblxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgY29uc3QgZm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0tY2FuY2VsJyk7XG4gIGZvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICB9KTtcblxuICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybS1zdWJtaXQnKTtcbiAgZm9ybVN1Ym1pdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZvcm1TdWJtaXRzKTtcbiAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZvcm1TdWJtaXRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQcm9qZWN0O1xuIiwiY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RJbmRleChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsIFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdEluZGV4LFxuICAgIGdldFByb2plY3RcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RNYW5hZ2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IG5hdlN0dWZmIGZyb20gJy4vbmF2U3R1ZmYnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9