let deleteButton = document.querySelector('.delete');
let box = document.querySelector('.box');
let button = document.querySelector('button');
let textTask = document.querySelector('.textTask');
let taskToDo = document.querySelector('.tasktodo');
let task = document.querySelector('.task');
let taskList = document.querySelector('.taskList');

//deletion
taskList.addEventListener('click', e => {
  let parent = e.target.parentNode;
  if (e.target.matches('.delete')) {
    parent.remove();
  }
});

//check
taskList.addEventListener('click', e=> {
  let text = e.target.nextSibling;
  if (e.target.checked === true) {
    text.setAttribute('id', 'tasktodo');
  }
  else {
    text.setAttribute('id', 'bullshit');
  }
});

//adding
function add() {
  //creating a div element with class = task
  let newtask = document.createElement('div');
  newtask.setAttribute('class', 'task');
  taskList.appendChild(newtask);
  
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
  
  //updating the text
  textTask.value = '';
}
button.addEventListener('click', add);
