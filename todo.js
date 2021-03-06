const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody= document.querySelectorAll(".card-body")[0];
const secondCardBody= document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


eventListeners();

function eventListeners(){//tüm event listenerlar 

    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteToDo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);

}
function clearAllTodos(e){
    if(confirm("tümünü silmek istediğinize emin misiniz?"));
    //Arayüzden temizle

    // todoList.innerHTML=""; //yavaş

    while(todoList.firstElementChild!=null){
        todoList.removeChild(todoList.firstElementChild);

    }
    localStorage.removeItem("todos");

}

function filterTodos(e){

    const filterValue= e.target.value.toLowerCase();
    const listItems= document.querySelectorAll(".list-group-item");

        listItems.forEach(function(listItem){
        const text=listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)=== -1){
            //Bulunamadı
            listItem.setAttribute("style","display : none  !important");
        }
        else{
            listIem.setAttribute("style","display:block ");
        }
    });
}

function deleteToDo(e){

    if(e.target.className==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteToDoStorage(e.target.parentElement.parentElement.textContent);

        showAlert("success","Todo başarıyla silindi.");
    }
    
}

function deleteToDoStorage(deletetodo){
    let todos=getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(todo===deletetodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}


function loadAllTodosToUI(){
    let todos=getTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    })
}

function addTodo(e){
    const newTodo=todoInput.value.trim();

    if(newTodo===""){
     
    showAlert("danger","Lütfen bir todo giriniz");

    }
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","todo başarıyla eklendi");
    }
   // console.log(newTodo);
   //todoları dinamik olarak eklemek için
    e.preventDefault();
}  


function getTodosFromStorage(newTodo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
  
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}


  
function showAlert(type,message){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    firstCardBody.appendChild(alert);
   
    //settimeout
    setTimeout(() => {
        alert.remove();
    }, 1000);

}
    //DOM ile
    // <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //                         <a href = "#" class ="delete-item">
    //                             <i class = "fa fa-remove"></i>
    //                         </a>

    //                     </li>


    function addTodoToUI (newTodo){

    //List Item oluşturma 
    const listItem = document.createElement("li");

    //Link Oluşturma 
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>"
    listItem.className="list-group-item d-flex justify-content-between";
   
    //text node ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todo liste list itemi ekleme 
    todoList.appendChild(listItem);
    todoInput.value="";

}