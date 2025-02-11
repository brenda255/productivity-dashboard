const timeElement = document.getElementById("clock");

//Digital Clock Function
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    timeElement.innerText = `${hours}:${minutes}:${seconds} ${amPm}`
}

setInterval(updateClock, 1000);
updateClock();


//Background Color Changer
let bgChanger = document.querySelector(".bg-color-changer");

bgChanger.addEventListener('click', function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let redHex = red.toString(16).padStart(2, '0');
    let greenHex = green.toString(16).padStart(2, '0');
    let blueHex = blue.toString(16).padStart(2, '0');

    let hexColor = `#${redHex}${greenHex}${blueHex}`;
    document.body.style.backgroundColor = hexColor;
})

//Menu Toggle Button
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle("active");
})

//Switch Between Sections

let todoBtn = document.getElementById("to-do-list-btn");
let counterBtn = document.getElementById("counter-btn");
let tipCalcBtn = document.getElementById("tip-calculator-btn");
let passGenBtn = document.getElementById("pass-generator-btn");
let guessGameBtn = document.getElementById("guess-game-btn");

let todoSection = document.getElementById("todo-list");
let counterSection = document.getElementById("counter");
let tipCalculatorSection = document.getElementById("tip-calculator");
let passGenSection = document.getElementById("pass-generator");
let guessGameSection = document.getElementById("guess-game");

//hide all sections
function hideAllSections() {
    todoSection.classList.remove('active');
    counterSection.classList.remove('active');
    tipCalculatorSection.classList.remove('active');
    passGenSection.classList.remove('active');
    guessGameSection.classList.remove('active');
}

function setActiveButton(button) {
    todoBtn.classList.remove('active');
    counterBtn.classList.remove('active');
    tipCalcBtn.classList.remove('active');
    passGenBtn.classList.remove('active');
    guessGameBtn.classList.remove('active');

    button.classList.add('active');
}

todoBtn.addEventListener("click", function () {
    hideAllSections();
    todoSection.classList.add('active');
    setActiveButton(todoBtn);
});

counterBtn.addEventListener("click", function () {
    hideAllSections();
    counterSection.classList.add('active');
    setActiveButton(counterBtn);
});

tipCalcBtn.addEventListener("click", function () {
    hideAllSections();
    tipCalculatorSection.classList.add('active');
    setActiveButton(tipCalcBtn);
});

passGenBtn.addEventListener("click", function () {
    hideAllSections();
    passGenSection.classList.add('active');
    setActiveButton(passGenBtn);
});

guessGameBtn.addEventListener("click", function () {
    hideAllSections();
    guessGameSection.classList.add('active');
    setActiveButton(guessGameBtn);
});


//to do list date
function updateDate(){
    let now = new Date();
    let options = {month: 'short', day: 'numeric'};
    let formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById('todo-date').innerText = formattedDate;
}
updateDate();

//add task function
function addTask(){
    let taskInput = document.getElementById("taskInput").value;
        alert(taskInput);
}

//To Do List Section 
const listsContainer = document.querySelector('[data-lists');
const newListForm = document.querySelector('[data-new-list-form');
const newListInput = document.querySelector('[data-new-list-input');

const LOCAL_STORAGE_LIST_KEY  ='task.lists';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newListInput.value
    if (listName == null || listName === '') return
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    saveAndRender();
})

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: []}
}

function saveAndRender() {
    save();
    render();
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
}



function render (){
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name");
        listElement.innerText = list.name;
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element){
 while (element.firstChild) {
    element.removeChild(element.firstChild)
 }
}

render();