
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const deletedTasksList = document.getElementById('deleted-tasks-list');

// Arrays to hold tasks
let todoTasks = [];
let deletedTasks = [];


function renderTodoList() {
    todoList.innerHTML = '';
    todoTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to render the deleted tasks list
function renderDeletedTasks() {
    deletedTasksList.innerHTML = '';
    deletedTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <button onclick="restoreTask(${index})">Restore</button>
        `;
        deletedTasksList.appendChild(li);
    });
}

// Function to add a task to the list
addBtn.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task) {
        todoTasks.push(task);
        todoInput.value = '';
        renderTodoList();
    }
});

// Function to delete a task
function deleteTask(index) {
    const deletedTask = todoTasks.splice(index, 1)[0];
    deletedTasks.push(deletedTask);
    renderTodoList();
    renderDeletedTasks();
}

// Function to restore a task from the deleted list
function restoreTask(index) {
    const restoredTask = deletedTasks.splice(index, 1)[0];
    todoTasks.push(restoredTask);
    renderTodoList();
    renderDeletedTasks();
}

// Initial render
renderTodoList();
renderDeletedTasks();
