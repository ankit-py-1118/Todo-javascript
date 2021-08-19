const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//add todo button
todoButton.addEventListener('click', addTodo);

// delete todo bttuon 
todoList.addEventListener('click', deleteCheck)

// Addtodo function

function addTodo(e) {
    e.preventDefault();

    // for every todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // creating new li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //complete button 
    const completeButton = document.createElement('button');
    completeButton.innerText = "Completed";
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    console.log(completeButton);
    // //Deleted button 

    // const deleteButton = document.createElement('button');
    // completeButton.innerText = "Delete";
    // completeButton.classList.add('delete-btn');
    // todoDiv.appendChild(deleteButton);
    // console.log(deleteButton)
    // append in the list 
    if (todoInput.value == '') {
        alert("add a todo ")
    } else {
        todoList.appendChild(todoDiv);
    }
    todoInput.value = "";
}

function deleteCheck(e) {
    console.log(e.target);
    const item = e.target;

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.remove()
    }

}