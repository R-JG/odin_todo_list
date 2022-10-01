// import formatDistance from "date-fns/formatDistance";

let projects = [];
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

const project = (projectTitle) => {
    projectTitle;
    let toDoItemList = [];

    function addItem(itemTitle) {
        const newItem = toDoItem(itemTitle);
        toDoItemList.push(newItem);
    };

    return { projectTitle, toDoItems, addItem };
};

function setModalDisplay(projectsContainer) {
    const modalContainer = document.getElementById("modal-container");
    const closeModalButton = document.getElementById("close-button");
    const openModalButton = document.createElement("button");
    openModalButton.textContent = "New Project";
    openModalButton.addEventListener("click", (e) => {
        modalContainer.classList.add("show");
    });
    closeModalButton.addEventListener("click", (e) => {
        modalContainer.classList.remove("show");
    });
    projectsContainer.appendChild(openModalButton);
};

const displayController = (() => {
    const projectsContainer = document.getElementById("projects-container");

    setModalDisplay(projectsContainer);
    
})();
