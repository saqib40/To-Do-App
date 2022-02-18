let deleteButton = document.querySelector('.delete');
let box = document.querySelector('.box');
let button = document.querySelector('button');
let textTask = document.querySelector('.textTask');
let taskToDo = document.querySelector('.tasktodo');
let task = document.querySelector('.task');
let body = document.querySelector('body');

function deletion() {
  task.remove();
}

function check() {
  if (box.checked === true) {
    taskToDo.setAttribute('id', 'tasktodo');
  }
  else {
    taskToDo.setAttribute('id', 'bullshit');
  }
}

function add() {
  //creating a div element with class = task
  let newtask = document.createElement('div');
  newtask.setAttribute('class', 'task');
  body.appendChild(newtask);
  
  //creating a span element inside div with class = delete
  let newDelete = document.createElement('span');
  newDelete.setAttribute('class', 'delete');
  newDelete.textContent = 'x';
  newtask.appendChild(newDelete);
  
  //creating a checkbox ...
  let newBox = document.createElement('input');
  newBox.setAttribute('class', 'box');
  newBox.setAttribute('type', 'checkbox');
  newBox.textContent = 'x';
  newtask.appendChild(newBox);
  
  //creating a span element ...
  let newtasktodo = document.createElement('span');
  newtasktodo.setAttribute('class', 'tasktodo');
  newtasktodo.textContent = textTask.value;
  newtask.appendChild(newtasktodo);
}


box.addEventListener('click', check);
button.addEventListener('click', add)
deleteButton.addEventListener('click', deletion);
