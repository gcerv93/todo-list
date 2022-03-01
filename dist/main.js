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
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const todoFactory = (title, description, dueDate, important, finished) => {
  return {
    title,
    description,
    dueDate,
    important,
    finished
  };
};

const projectFactory = (name) => {
  name: name;
  
  const tasks = [];

  function addTask(task) {
    this.tasks.push(task);
  };

  function getName() {
    return this.name;
  };

  function getTasks() {
    return this.tasks;
  };

  return { name, addTask, getName, getTasks };
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
const taskTemplate = (todo) => {
  const templateDiv = document.createElement('div');

  templateDiv.classList.add('task-template');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('unchecked');
  templateDiv.appendChild(imgDiv);

  const nameText = document.createElement('p');
  nameText.textContent = todo.title;
  templateDiv.appendChild(nameText);

  return templateDiv;
};

// const homePage = () => {
//   const content = document.querySelector('.content');
//   const taskContent = document.querySelector('.task-content');

//   const heading = document.querySelector('.task-heading');
//   heading.textContent = 'All Tasks';

//   const tasksDiv = document.createElement('div');

//   const taskForm = document.querySelector('.form-container');
//   taskContent.insertBefore(tasksDiv, taskForm);

//   const taskBtn = taskButtonTemplate();
//   taskContent.appendChild(taskBtn);
//   taskBtn.addEventListener('click', () => {
//     taskForm.style.display = 'flex';
//     // tasksDiv.append(taskTemplate({title: 'dude'}));
//   });

//   content.appendChild(taskContent);
// };




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

const displayProjects = () => {
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
      displayProjects();
    });
  });
};

const projectDivTemplate = (name, i) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-div');
  projectDiv.dataset.index = i;

  const projectImg = new Image();
  projectImg.src = _images_project_svg__WEBPACK_IMPORTED_MODULE_2__;
  projectDiv.appendChild(projectImg);

  const nameText = document.createElement('p');
  nameText.textContent = name;
  projectDiv.appendChild(nameText);

  const closeImg = new Image();
  closeImg.setAttribute('id', 'close');
  closeImg.src = _images_close_thick_svg__WEBPACK_IMPORTED_MODULE_3__;
  closeImg.dataset.index = i;
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
    displayProjects();
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
// MIGHT NOT NEED ANY OF THIS??? CAN MAYBE USE HOMEPAGE FUNCTIONS TO DISPLAY A PROJECT
// STILL SHOULD HAVE THIS NAME HOWEVER, CHANGE HOMEPAGE TO SOMETHING ELSE



const displayProject = (project) => {
  const projectContent = document.querySelector('.task-content');

  const projectHeading = document.querySelector('.task-heading');
  projectHeading.textContent = project.name;

  const tasksDiv = document.createElement('div');
  tasksDiv.setAttribute('id', 'tasks-div');

  const taskForm = document.querySelector('.form-container');
  taskForm.dataset.index = _projectManager__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectIndex(project);
  projectContent.insertBefore(tasksDiv, taskForm);

  const hiddenInput = document.querySelector('#project');
  hiddenInput.value = project.getName();

  const taskBtn = (0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.taskButtonTemplate)();
  projectContent.appendChild(taskBtn);
  taskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex';
  });

  const formCancel = document.querySelector('#task-form-cancel');
  formCancel.addEventListener('click', () => {
    taskForm.style.display = 'none';
  });
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

  return {
    getProjects,
    addProject, 
    deleteProject,
    getProjectIndex
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXZTdHVmZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbnQsIGZpbmlzaGVkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBpbXBvcnRhbnQsXG4gICAgZmluaXNoZWRcbiAgfTtcbn07XG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgbmFtZTogbmFtZTtcbiAgXG4gIGNvbnN0IHRhc2tzID0gW107XG5cbiAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcztcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBhZGRUYXNrLCBnZXROYW1lLCBnZXRUYXNrcyB9O1xufTtcblxuZXhwb3J0IHsgdG9kb0ZhY3RvcnksIHByb2plY3RGYWN0b3J5IH1cbiIsImltcG9ydCBQbHVzIGZyb20gJy4vaW1hZ2VzL3BsdXMtc2lnbi1yZWN0YW5nbGUuc3ZnJztcblxuLy8gdGFzayBidXR0b24gZm9yIHRoZSBtYWluIHBhZ2UsIHdpbGwgdGhpcyBiZSB1c2FibGUgZm9yIHRoZSBwcm9qZWN0IHNjcmVlbnM/XG5jb25zdCB0YXNrQnV0dG9uVGVtcGxhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsdXNTaWduID0gbmV3IEltYWdlKCk7XG4gIHBsdXNTaWduLnNyYyA9IFBsdXM7XG5cbiAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQtdGFzay1idXR0b24nKTtcbiAgdGFza0J1dHRvbi5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gIHRhc2tCdXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgcmV0dXJuIHRhc2tCdXR0b247XG59O1xuXG4vLyBhZGQgYSBkYXRlIGRpc3BsYXkgaGVyZSBpbiB0aGUgZnV0dXJlXG5jb25zdCB0YXNrVGVtcGxhdGUgPSAodG9kbykgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHRlbXBsYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGVtcGxhdGUnKTtcblxuICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nRGl2LmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZCcpO1xuICB0ZW1wbGF0ZURpdi5hcHBlbmRDaGlsZChpbWdEaXYpO1xuXG4gIGNvbnN0IG5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuYW1lVGV4dC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gIHRlbXBsYXRlRGl2LmFwcGVuZENoaWxkKG5hbWVUZXh0KTtcblxuICByZXR1cm4gdGVtcGxhdGVEaXY7XG59O1xuXG4vLyBjb25zdCBob21lUGFnZSA9ICgpID0+IHtcbi8vICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4vLyAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGVudCcpO1xuXG4vLyAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1oZWFkaW5nJyk7XG4vLyAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWxsIFRhc2tzJztcblxuLy8gICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vLyAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4vLyAgIHRhc2tDb250ZW50Lmluc2VydEJlZm9yZSh0YXNrc0RpdiwgdGFza0Zvcm0pO1xuXG4vLyAgIGNvbnN0IHRhc2tCdG4gPSB0YXNrQnV0dG9uVGVtcGxhdGUoKTtcbi8vICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0J0bik7XG4vLyAgIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbi8vICAgICAvLyB0YXNrc0Rpdi5hcHBlbmQodGFza1RlbXBsYXRlKHt0aXRsZTogJ2R1ZGUnfSkpO1xuLy8gICB9KTtcblxuLy8gICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbi8vIH07XG5cbmV4cG9ydCB7IHRhc2tUZW1wbGF0ZSwgdGFza0J1dHRvblRlbXBsYXRlIH07XG4iLCJpbXBvcnQgcG0gZnJvbSAnLi9wcm9qZWN0TWFuYWdlci5qcyc7XG5pbXBvcnQge3Byb2plY3RGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcy5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL2ltYWdlcy9wcm9qZWN0LnN2Zyc7XG5pbXBvcnQgQ2xvc2UgZnJvbSAnLi9pbWFnZXMvY2xvc2UtdGhpY2suc3ZnJztcbmltcG9ydCBkaXNwUHJvamVjdCBmcm9tICcuL3Byb2plY3REaXNwbGF5LmpzJztcblxuY29uc3QgY2xlYXJQcm9qZWN0RGl2RGlzcGxheSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtZGl2JykuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGJvdHRvbU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20tc2lkZS1uYXYnKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0nKTtcbiAgcG0uZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBwcm9qZWN0RGl2VGVtcGxhdGUocHJvamVjdC5uYW1lLCBpbmRleCk7XG4gICAgYm90dG9tTmF2Lmluc2VydEJlZm9yZShwcm9qZWN0RGl2LCBmb3JtKTtcblxuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZmF1bHQtdGFzay1idXR0b24nKTtcbiAgICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLWRpdicpO1xuICAgICAgaWYgKHRhc2tCdG4pIHRhc2tCdG4ucmVtb3ZlKCk7XG4gICAgICBpZiAodGFza3NEaXYpIHRhc2tzRGl2LnJlbW92ZSgpO1xuICAgICAgZGlzcFByb2plY3QocHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjbG9zZVtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcG0uZGVsZXRlUHJvamVjdChpbmRleCk7XG4gICAgICBjbGVhclByb2plY3REaXZEaXNwbGF5KCk7XG4gICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBwcm9qZWN0RGl2VGVtcGxhdGUgPSAobmFtZSwgaSkgPT4ge1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kaXYnKTtcbiAgcHJvamVjdERpdi5kYXRhc2V0LmluZGV4ID0gaTtcblxuICBjb25zdCBwcm9qZWN0SW1nID0gbmV3IEltYWdlKCk7XG4gIHByb2plY3RJbWcuc3JjID0gUHJvamVjdDtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcblxuICBjb25zdCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5hbWVUZXh0KTtcblxuICBjb25zdCBjbG9zZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjbG9zZUltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlJyk7XG4gIGNsb3NlSW1nLnNyYyA9IENsb3NlO1xuICBjbG9zZUltZy5kYXRhc2V0LmluZGV4ID0gaTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChjbG9zZUltZyk7XG5cbiAgcmV0dXJuIHByb2plY3REaXY7XG59O1xuXG5jb25zdCBuYXZTdHVmZiA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybScpO1xuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSk7XG5cbiAgLy8gYWRkIHRoZSBjYW5jZWwgbGlzdGVuZXIgd2hlbmV2ZXIgdGhlIGFkZFByb2plY3QgYnV0dG9uIGlzIGNsaWNrZWRcbiAgY29uc3QgZm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhbmNlbC1idG4nKTtcbiAgZm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGFkZFByb2plY3RGb3JtLnJlc2V0KCk7XG4gIH0pXG5cbiAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXN1Ym1pdC1idG4nKTtcbiAgZm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUudmFsdWUpO1xuICAgIHBtLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNsZWFyUHJvamVjdERpdkRpc3BsYXkoKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgfSk7XG59KSgpOyBcblxuZXhwb3J0IGRlZmF1bHQgbmF2U3R1ZmY7XG4iLCIvLyBNSUdIVCBOT1QgTkVFRCBBTlkgT0YgVEhJUz8/PyBDQU4gTUFZQkUgVVNFIEhPTUVQQUdFIEZVTkNUSU9OUyBUTyBESVNQTEFZIEEgUFJPSkVDVFxuLy8gU1RJTEwgU0hPVUxEIEhBVkUgVEhJUyBOQU1FIEhPV0VWRVIsIENIQU5HRSBIT01FUEFHRSBUTyBTT01FVEhJTkcgRUxTRVxuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyXCI7XG5pbXBvcnQge3Rhc2tUZW1wbGF0ZSwgdGFza0J1dHRvblRlbXBsYXRlfSBmcm9tICcuL2hvbWVQYWdlLmpzJztcblxuY29uc3QgZGlzcGxheVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRlbnQnKTtcblxuICBjb25zdCBwcm9qZWN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWhlYWRpbmcnKTtcbiAgcHJvamVjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcy1kaXYnKTtcblxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICB0YXNrRm9ybS5kYXRhc2V0LmluZGV4ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdEluZGV4KHByb2plY3QpO1xuICBwcm9qZWN0Q29udGVudC5pbnNlcnRCZWZvcmUodGFza3NEaXYsIHRhc2tGb3JtKTtcblxuICBjb25zdCBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gIGhpZGRlbklucHV0LnZhbHVlID0gcHJvamVjdC5nZXROYW1lKCk7XG5cbiAgY29uc3QgdGFza0J0biA9IHRhc2tCdXR0b25UZW1wbGF0ZSgpO1xuICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrQnRuKTtcbiAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9KTtcblxuICBjb25zdCBmb3JtQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybS1jYW5jZWwnKTtcbiAgZm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQcm9qZWN0O1xuIiwiY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIHJldHVybiBwcm9qZWN0cztcbiAgfTtcblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFByb2plY3RJbmRleChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LCBcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGdldFByb2plY3RJbmRleFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbmF2U3R1ZmYgZnJvbSAnLi9uYXZTdHVmZic7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=