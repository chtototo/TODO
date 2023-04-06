let todoObjectList = []; // массив объектов тодо
let todoCompletedHTMLcode = []; // массив для дивов выполненных тодо
let todoUncompletedHTMLcode = []; // массив для дивов невыполненных тодо
let HTMLCompletedTodo; // переменная для кода одного объекта (выполненного тодо)
let HTMLUncompletedTodo; // переменная для кода одного объекта (невыполненного тодо)

function setTitle() {
    let input = document.querySelector('.inp');
    let todo = {
        name: input.value,
        state: 'uncompleted',
        id: todoObjectList.length+1,
    }
    todoObjectList.push(todo); 
    render();
}

function render() {
    completedListUpdate();
}

function setID(id) {
    return 'button_' + id;
}

function complete(id) {
    for (todo of todoObjectList) {
        if (todo.id == id) {
            todo.state = 'completed';
        }
    }
    completedListUpdate();
    uncompletedListUpdate();
}

function uncomplete(id) {
    for (todo of todoObjectList) {
        if (todo.id == id) {
            todo.state = 'uncompleted';
        }
    }
    uncompletedListUpdate();
    completedListUpdate();
}

function enter() {
    var input = document.querySelector('input[type="text"]');

    input.addEventListener('keypress', function(e){
      if(e.which === 13){
      	e.preventDefault();
            setTitle();
            render();
            cleanInput();
      }
    });
}

function cleanInput() {
    document.getElementById('inp').value = "";
}

function setIDrename(id) {
    return 'rename_button_' + id;
}

function setNAMErename(id) {
    return 'name_' + id;
}

function uncompletedListUpdate() {
    todoCompletedHTMLcode = [];
        for (todo of todoObjectList) {
            if (todo.state == 'completed') {
                todoCompletedHTMLcode.push(`<div class="todoshka-comp">
                <button class="completed-state" id="${setID(todo.id)}" onclick="uncomplete(${todo.id})">✓</button>
                <s class="name" id="${setNAMErename(todo.id)}">${todo.name}</s>
                <button class="rename" id="${setIDrename(todo.id)}" onclick="reSetName(${setNAMErename(todo.id)}, ${todo.id})">✎</button>
            </div>`);
            }
        }

        HTMLCompletedTodo = '';
        for (code of todoCompletedHTMLcode) {
            HTMLCompletedTodo += code;
        }
        document.getElementById('completed-todo-list').innerHTML=HTMLCompletedTodo;
}


function completedListUpdate() {
    todoUncompletedHTMLcode = [];
    for (todo of todoObjectList) {
        if (todo.state == 'uncompleted') {
            todoUncompletedHTMLcode.push(`<div class="todoshka">
            <button class="state" id="${setID(todo.id)}" onclick="complete(${todo.id})">✓</button>
            <div class="name" id="${setNAMErename(todo.id)}">${todo.name}</div>
            <button class="rename" id="${setIDrename(todo.id)}" onclick="reSetName(${setNAMErename(todo.id)}, ${todo.id})">✎</button>
        </div>`);
        }
    }
    HTMLUncompletedTodo = '';
    for (code of todoUncompletedHTMLcode) {
        HTMLUncompletedTodo += code;
        // console.log(code);
    }
    document.getElementById('todo-list').innerHTML=HTMLUncompletedTodo;
}

function reSetName(id, todoID) {
    document.getElementById(id.id).innerHTML=`<input type='text' class='rename-inp' id='rename-inp' value='${todo.name}'>`;
    enterRename(todoID);
}

function rename(todoID) {
    let input = document.querySelector('.rename-inp').value;
    for (todo of todoObjectList) {
        if (todo.id == todoID) {
            todo.name = input;
        }
    }
    uncompletedListUpdate();
    completedListUpdate();
}

function enterRename(id) {
    let input = document.querySelector('.rename-inp');
    
    input.addEventListener('keypress', function(b){
      if(b.which === 13){
      	b.preventDefault();
            rename(id);
      }
    });
}