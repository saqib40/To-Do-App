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
  let newtask = document.createElement('div.task');
  newtask.textContent = textTask.value;
  body.appendChild(newtask);
}


box.addEventListener('click', check);
button.addEventListener('click', add)
deleteButton.addEventListener('click', deletion);
