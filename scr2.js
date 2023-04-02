let todoList = [];
let todoCodeList = [];
let todoCompletedList = [];
let todoCompletedCodeList = [];
let codeUnc;
let codeComp;
function setTitle() {
    let input = document.querySelector('input');
    let todo = {
        name: input.value,
        state: 'uncompleted',
        id: todoList.length+1,
    }
    todoList.push(todo);
    codeUnc += `<div class="todoshka">
                    <button class="state" onclick="complete(1)">✓</button>
                    <div class="name">${todo.name}</div>
                </div>`
    todoCodeList.push(codeUnc);
}

function render() {
    for (code of todoCodeList) {
        document.getElementById('todo-list').innerHTML=code;
    }
    for (code of todoCompletedCodeList) {
        document.getElementById('completed-todo-list').innerHTML=code;
    }
    // console.log(todoList);
    // console.log('---------')
    // console.log(todoCompletedCodeList);
    // console.log('=========')
}

function complete(id) {
    for (todo of todoList) {
        if (todo.id == id) {
            todo.state = 'completed';
            todoComp = {
                name: todo.name,
                state: 'completed',
                id: todoList.length+1,
            }
            todoCompletedList.push(todoComp);
            codeComp += `<div class="todoshka-comp">
                            <button class="completed-state" onclick="uncomplete(todo.id)">✓</button>
                            <s class="name">${todoComp.name}</div>
                        </s>`
            todoCompletedCodeList.push(codeComp);
            todoList.splice(todo.id-1, 1);
            todoCodeList.splice(todo.id-1, 1);
            console.log(todoCompletedList);
            console.log(todoCompletedCodeList);
        }
    }
}

function uncomplete(id) {
    for (todo of todoCompletedList) {
        if (todo.id == id) {
            todo.state = 'uncompleted';
            todoUnc = {
                name: todo.name,
                state: 'completed',
                id: todoList.length+1,
            }
            todoList.push(todoUnc);
            codeUnc += `<div class="todoshka">
                            <button class="state" onclick="complete(todo.id)">✓</button>
                            <div class="name">${todoUnc.name}</div>
                        </div>`
            todoCodeList.push(codeUnc);
            todoCompletedList.splice(todo.id-1, 1);
            todoCompletedCodeList.splice(todo.id-1, 1);
        }
    }
}

