let todoObjectList = []; // массив объектов тодо
let todoCompletedHTMLcode = []; // массив для дивов выполненных тодо
let todoUncompletedHTMLcode = []; // массив для дивов невыполненных тодо
let HTMLCompletedTodo; // переменная для кода одного объекта (выполненного тодо)
let HTMLUncompletedTodo; // переменная для кода одного объекта (невыполненного тодо)

function setTitle() {
    // object
    let input = document.querySelector('input');
    let todo = {
        name: input.value,
        state: 'uncompleted',
        id: todoObjectList.length+1,
    }
    todoObjectList.push(todo); 
    
    // HTMLUncompletedTodo
    todoUncompletedHTMLcode = [];
    for (todo of todoObjectList) {  
        if (todo.state == 'uncompleted') {
            todoUncompletedHTMLcode.push(`<div class="todoshka">
    <button class="state" id="${setID(todo.id)}" onclick="complete(${todo.id})">✓</button>
    <div class="name">${todo.name}</div>
</div>`);
        }
    }   
}

function render() {
    HTMLUncompletedTodo = '';
    for (code of todoUncompletedHTMLcode) {
        HTMLUncompletedTodo += code;
    }
    document.getElementById('todo-list').innerHTML=HTMLUncompletedTodo;
}

function setID(id) {
    return 'button_' + id
}

function complete(id) {
    // state
    for (todo of todoObjectList) {
        if (todo.id == id) {
            todo.state = 'completed';
        }
    }

    // HTMLUncompletedTodo
    todoCompletedHTMLcode = [];
    for (todo of todoObjectList) {
        if (todo.state == 'completed') {
            todoCompletedHTMLcode.push(`<div class="todoshka-comp">
            <button class="completed-state" id="${setID(todo.id)}" onclick="uncomplete(${todo.id})">✓</button>
            <s class="name">${todo.name}</s>
        </div>`);
        }
    }

    // render
    HTMLCompletedTodo = '';
    for (code of todoCompletedHTMLcode) {
        HTMLCompletedTodo += code;
    }
    document.getElementById('completed-todo-list').innerHTML=HTMLCompletedTodo;

    // delete 
    todoUncompletedHTMLcode = [];
    for (todo of todoObjectList) {
        if (todo.state == 'uncompleted') {
            todoUncompletedHTMLcode.push(`<div class="todoshka">
    <button class="state" id="${setID(todo.id)}" onclick="complete(${todo.id})">✓</button>
    <div class="name">${todo.name}</div>
</div>`);
        }
    }
    HTMLUncompletedTodo = '';
    for (code of todoUncompletedHTMLcode) {
        HTMLUncompletedTodo += code;
    }
    document.getElementById('todo-list').innerHTML=HTMLUncompletedTodo;
}

function uncomplete(id) {
    // state
    for (todo of todoObjectList) {
        if (todo.id == id) {
            todo.state = 'uncompleted';
        }
    }

    // HTMLCompletedTodo
    todoCompletedHTMLcode = [];
    for (todo of todoObjectList) {
        if (todo.state == 'completed') {
            todoCompletedHTMLcode.push(`<div class="todoshka-comp">
            <button class="completed-state" id="${setID(todo.id)}" onclick="uncomplete(${todo.id})">✓</button>
            <s class="name">${todo.name}</s>
        </div>`);
        }
    }

    // render
    HTMLCompletedTodo = '';
    for (code of todoCompletedHTMLcode) {
        HTMLCompletedTodo += code;
    }
    document.getElementById('completed-todo-list').innerHTML=HTMLCompletedTodo;

    // delete 
    todoUncompletedHTMLcode = [];
    for (todo of todoObjectList) {
        if (todo.state == 'uncompleted') {
            todoUncompletedHTMLcode.push(`<div class="todoshka">
    <button class="state" id="${setID(todo.id)}" onclick="complete(${todo.id})">✓</button>
    <div class="name">${todo.name}</div>
</div>`);
        }
    }
    HTMLUncompletedTodo = '';
    for (code of todoUncompletedHTMLcode) {
        HTMLUncompletedTodo += code;
    }
    document.getElementById('todo-list').innerHTML=HTMLUncompletedTodo;
}

function enter() {
    var input = document.querySelector('input[type="text"]');

    input.addEventListener('keypress', function(e){
      if(e.which === 13){
      	e.preventDefault();
            setTitle();
            render();
      }
    });
}

function cleanInput() {
    document.getElementById('inp').value = "";
}