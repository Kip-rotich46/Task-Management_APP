
## Task Management Application

This project is a simple task management application that allows users to create, read, update, and delete tasks. The application stores tasks in the browser's local storage, making it persistent across page reloads.

## Features

1. **Add Task**: Users can add tasks with a title, date, and description.
2. **Edit Task**: Users can edit existing tasks.
3. **Delete Task**: Users can delete tasks.
4. **Persistent Storage**: Tasks are stored in the browser's local storage.

## Code Explanation

### HTML Element References

The following variables reference HTML elements in the document:

### javascript
let form = document.getElementById('form');
let textInput = document.getElementById('textInput');
let msg = document.getElementById('msg');
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea');
let tasks = document.getElementById('tasks');
let add = document.getElementById('add');


### Event Listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});


### Functions

#### `formValidation`
Validates the form input:

```javascript
let formValidation = () => {
    if (textInput.value === '') {
        msg.innerHTML = 'An input is required';
    } else {
        msg.innerHTML = '';
        acceptData();
        add.setAttribute('data-bs-dismiss', 'modal');
        add.click();

        (() => {
            add.setAttribute('data-bs-dismiss', '');
        })();
    }
};
```

#### `acceptData`
Saves the task data:

```javascript
let data = [];

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    });
  
    localStorage.setItem('data', JSON.stringify(data));
    createTasks();
    console.log(data);
};
```

#### `createTasks`
Updates the task list display:

```javascript
let createTasks = () => {
    tasks.innerHTML = '';
    data.map((x, y) => {
        return tasks.innerHTML += `
        <div id=${y}>
            <span class='fw-bold'>${x.text}</span>
            <span class='small text-secondary'>${x.date}</span>
            <p>${x.description}</p>
    
            <span class='options'>
                <i onClick='editTask(this)' data-bs-toggle="modal" data-bs-target="#form" class="fa-regular fa-pen-to-square"></i>
                <i onClick='deleteTask(this);createTasks()' class="fas fa-trash-alt"></i>
            </span>
        </div>
        `;
    });

    resetForm();
};
```

#### `deleteTask`
Deletes a task:

```javascript
let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem('data', JSON.stringify(data));
};
```

#### `editTask`
Edits a task:

```javascript
let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;

    deleteTask(e);
};
```

#### `resetForm`
Resets the form inputs:

```javascript
let resetForm = () => {
    textInput.value = '';
    dateInput.value = '';
    textarea.value = '';
};
```

### Initialization

An Immediately Invoked Function Expression (IIFE) initializes the application:

```javascript
(() => {
    data = JSON.parse(localStorage.getItem('data')) || [];
    createTasks();
    console.log(data);
})();
```

## Local Storage Structure

Tasks are stored as an array of objects in local storage under the key `data`. Each task object contains:
- `text`: The task title.
- `date`: The task date.
- `description`: The task description.

## Usage

1. **Add Task**: Fill in the task title, date, and description, then submit the form.
2. **Edit Task**: Click the edit icon (pencil) on a task to load it into the form, make changes, and submit the form.
3. **Delete Task**: Click the delete icon (trash can) on a task to remove it.

## Dependencies

This project depends on Bootstrap for modal functionality and Font Awesome for icons.

## Notes

- Ensure that the HTML structure includes elements with the correct IDs as referenced in the code.
- Ensure that Bootstrap and Font Awesome are included in the HTML file for proper styling and functionality.

This code provides a basic structure for a task management application and can be extended with additional features and styling as needed.
```