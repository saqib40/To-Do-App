let deleteButton = document.querySelector('.delete');
let box = document.querySelector('.box');
let button = document.querySelector('button');
let textTask = document.querySelector('.textTask');
let taskToDo = document.querySelector('.tasktodo');

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
  
}


box.addEventListener('click', check);
button.addEventListener('click', add)
deleteButton.addEventListener('click', deletion);
