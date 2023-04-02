let todoList = [];
let todoObjList = [];
let html;
function setTitle() {
    let input = document.querySelector('input');
    let todo = {
        name: input.value,
        state: 'uncompleted',
        id: todoList.length+1,
    }
    todoList.push(todo);
    for (todoshka of todoList) {
        console.log(todoshka);
    }
    console.log('===')
}

function render() {
    
}

function complete(id) {
    for (todo of todoList) {
        if (todo.id == id) {
            todo.state = 'completed';
        }
    }
}

function uncomplete(id) {
    for (todo of todoList) {
        if (todo.id == id) {
            todo.state = 'uncompleted';
        }
    }
}