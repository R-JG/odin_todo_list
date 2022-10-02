// import formatDistance from "date-fns/formatDistance";

let projectsArray = [];
/*
function editTitle(obj, input) {
    obj.title = input;
};

function editDescription(obj, input) {
    obj.description = input;
};

function editDueDate(obj, date) {
    obj.dueDate = new Date(date);
};

function editLinks(obj) {};


function aggregateLinks() {};
*/

const toDoItem = (title) => ({
    title,
});

const project = (projectTitle, projectDescription) => {
    projectTitle;
    projectDescription;
    let toDoItemList = [];

    function addItem(itemTitle) {
        const newItem = toDoItem(itemTitle);
        toDoItemList.push(newItem);
    };

    return { projectTitle, projectDescription, toDoItemList, addItem };
};

function addProject(newProject) {
    projectsArray.push(newProject);
}


const displayController = (() => {
    const projectsContainer = document.getElementById("projects-container");

    function _populateProjectsContainer(projectsArray) {
        projectsContainer.replaceChildren();
        for (let i = 0; i < projectsArray.length; i++) {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project");

            const infoSubDivider = document.createElement("div");
            infoSubDivider.classList.add("project-subdivider");

            const titleElement = document.createElement("h3");
            titleElement.textContent = projectsArray[i].projectTitle;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = projectsArray[i].projectDescription;

            const addToDoItemButton = document.createElement("button");
            addToDoItemButton.setAttribute("id", "todo-item-button")
            addToDoItemButton.textContent = "+ To Do"

            infoSubDivider.appendChild(titleElement);
            infoSubDivider.appendChild(descriptionElement);
            projectElement.appendChild(infoSubDivider);
            projectElement.appendChild(addToDoItemButton);
            projectsContainer.appendChild(projectElement);
        };
    };
    
    function setModalButtons() {
        const createProjectButton = document.getElementById("create-project-button");
        const modalContainer = document.getElementById("modal-container");
        const closeModalButton = document.getElementById("close-button");
        const openModalButton = document.getElementById("open-button");
      
        openModalButton.addEventListener("click", (e) => {
            modalContainer.classList.add("show");
            // temporary - reset the modal's input fields:
            const formPlaceholderInputs = document.querySelectorAll("#form-placeholder input")
            formPlaceholderInputs.forEach(inputField => inputField.value = "");
        });
        closeModalButton.addEventListener("click", (e) => {
            modalContainer.classList.remove("show");
        });

        // create project button event:
        createProjectButton.addEventListener("click", (event) => {
            event.preventDefault();
            const newProjectTitle = document.getElementById("project-title").value;
            const newProjectDescription = document.getElementById("project-description").value;
            const newProject = project(newProjectTitle, newProjectDescription);
            
            addProject(newProject);
            _populateProjectsContainer(projectsArray);

            modalContainer.classList.remove("show");
        });
    };

    return { setModalButtons };
})();

function main() {
    displayController.setModalButtons();
};

main();