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

function uncompletedListUpdate() {
    todoCompletedHTMLcode = [];
        for (todo of todoObjectList) {
            if (todo.state == 'completed') {
                todoCompletedHTMLcode.push(`<div class="todoshka-comp">
                <button class="completed-state" id="${setID(todo.id)}" onclick="uncomplete(${todo.id})">✓</button>
                <button class="rename" id="${setIDrename(todo.id)}" onclick="reSetName(${todo.id})">✎</button>
                <s class="name" id="name">${todo.name}</s>
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
            <button class="rename" id="${setIDrename(todo.id)}" onclick="reSetName(${todo.id})">✎</button>
            <div class="name" id="name">${todo.name}</div>
        </div>`);
        }
    }

    HTMLUncompletedTodo = '';
    for (code of todoUncompletedHTMLcode) {
        HTMLUncompletedTodo += code;
    }
    document.getElementById('todo-list').innerHTML=HTMLUncompletedTodo;
}

function reSetName(id) {
    for (todo of todoObjectList) {
        if (todo.id == id) {
            document.getElementById('rename-todo').innerHTML=`<div class="rename-window">
            <div class='rename-div'>
                <p>Enter a name:</p>
                <input class='rename-inp' id="rename-inp" type='text'>
                <button class="ok" onclick="rename(${todo.id})">OK</button>
            </div>
        </div>`;
        }
    }
    // rename();
}

function rename(id) {
    for (todo of todoObjectList) {
        if (todo.id == id) {
            todo.name = document.querySelector('.rename-inp').value;
        }
    }
    completedListUpdate();
    uncompletedListUpdate();
    document.getElementById('rename-todo').innerHTML='';
}