/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import formatDistance from \"date-fns/formatDistance\";\n\nlet projects = [];\n/*\nfunction editTitle(obj, input) {\n    obj.title = input;\n};\n\nfunction editDescription(obj, input) {\n    obj.description = input;\n};\n\nfunction editDueDate(obj, date) {\n    obj.dueDate = new Date(date);\n};\n\nfunction editLinks(obj) {};\n\n\nfunction aggregateLinks() {};\n*/\n\nconst toDoItem = (title) => ({\n    title,\n});\n\nconst project = (projectTitle) => {\n    projectTitle;\n    let toDoItemList = [];\n\n    function addItem(itemTitle) {\n        const newItem = toDoItem(itemTitle);\n        toDoItemList.push(newItem);\n    };\n\n    return { projectTitle, toDoItems, addItem };\n};\n\nfunction setModalDisplay(projectsContainer) {\n    const modalContainer = document.getElementById(\"modal-container\");\n    const closeModalButton = document.getElementById(\"close-button\");\n    const openModalButton = document.createElement(\"button\");\n    openModalButton.textContent = \"New Project\";\n    openModalButton.addEventListener(\"click\", (e) => {\n        modalContainer.classList.add(\"show\");\n    });\n    closeModalButton.addEventListener(\"click\", (e) => {\n        modalContainer.classList.remove(\"show\");\n    });\n    projectsContainer.appendChild(openModalButton);\n};\n\nconst displayController = (() => {\n    const projectsContainer = document.getElementById(\"projects-container\");\n\n    setModalDisplay(projectsContainer);\n    \n})();\n\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;