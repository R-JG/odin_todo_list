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

eval("// import formatDistance from \"date-fns/formatDistance\";\n\nlet projectsArray = [];\n/*\nfunction editTitle(obj, input) {\n    obj.title = input;\n};\n\nfunction editDescription(obj, input) {\n    obj.description = input;\n};\n\nfunction editDueDate(obj, date) {\n    obj.dueDate = new Date(date);\n};\n\nfunction editLinks(obj) {};\n\n\nfunction aggregateLinks() {};\n*/\n\nconst toDoItem = (title) => ({\n    title,\n});\n\nconst project = (projectTitle, projectDescription) => {\n    projectTitle;\n    projectDescription;\n    let toDoItemList = [];\n\n    function addItem(itemTitle) {\n        const newItem = toDoItem(itemTitle);\n        toDoItemList.push(newItem);\n    };\n\n    return { projectTitle, projectDescription, toDoItemList, addItem };\n};\n\nfunction addProject(newProject) {\n    projectsArray.push(newProject);\n}\n\n\nconst displayController = (() => {\n    const projectsContainer = document.getElementById(\"projects-container\");\n\n    function _populateProjectsContainer(projectsArray) {\n        projectsContainer.replaceChildren();\n        for (let i = 0; i < projectsArray.length; i++) {\n            const projectElement = document.createElement(\"div\");\n            projectElement.classList.add(\"project\");\n\n            const infoSubDivider = document.createElement(\"div\");\n            infoSubDivider.classList.add(\"project-subdivider\");\n\n            const titleElement = document.createElement(\"h3\");\n            titleElement.textContent = projectsArray[i].projectTitle;\n\n            const descriptionElement = document.createElement(\"p\");\n            descriptionElement.textContent = projectsArray[i].projectDescription;\n\n            const addToDoItemButton = document.createElement(\"button\");\n            addToDoItemButton.setAttribute(\"id\", \"todo-item-button\")\n            addToDoItemButton.textContent = \"+ To Do\"\n\n            infoSubDivider.appendChild(titleElement);\n            infoSubDivider.appendChild(descriptionElement);\n            projectElement.appendChild(infoSubDivider);\n            projectElement.appendChild(addToDoItemButton);\n            projectsContainer.appendChild(projectElement);\n        };\n    };\n    \n    function setModalButtons() {\n        const createProjectButton = document.getElementById(\"create-project-button\");\n        const modalContainer = document.getElementById(\"modal-container\");\n        const closeModalButton = document.getElementById(\"close-button\");\n        const openModalButton = document.getElementById(\"open-button\");\n      \n        openModalButton.addEventListener(\"click\", (e) => {\n            modalContainer.classList.add(\"show\");\n            // temporary - reset the modal's input fields:\n            const formPlaceholderInputs = document.querySelectorAll(\"#form-placeholder input\")\n            formPlaceholderInputs.forEach(inputField => inputField.value = \"\");\n        });\n        closeModalButton.addEventListener(\"click\", (e) => {\n            modalContainer.classList.remove(\"show\");\n        });\n\n        // create project button event:\n        createProjectButton.addEventListener(\"click\", (event) => {\n            event.preventDefault();\n            const newProjectTitle = document.getElementById(\"project-title\").value;\n            const newProjectDescription = document.getElementById(\"project-description\").value;\n            const newProject = project(newProjectTitle, newProjectDescription);\n            \n            addProject(newProject);\n            _populateProjectsContainer(projectsArray);\n\n            modalContainer.classList.remove(\"show\");\n        });\n    };\n\n    return { setModalButtons };\n})();\n\nfunction main() {\n    displayController.setModalButtons();\n};\n\nmain();\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

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