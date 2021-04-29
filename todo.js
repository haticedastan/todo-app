const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody= document.querySelectorAll(".card-body")[0];
const secondCardBody= document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addTodo);
}

function addTodo(e){
    const newTodo=todoInput.value.trim();
   // console.log(newTodo);

   //todoları dinamik olarak eklemek için

   addTodoUI(newTodo);

    e.preventDefault();
}
  
    //DOM ile
    
    // <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //                         <a href = "#" class ="delete-item">
    //                             <i class = "fa fa-remove"></i>
    //                         </a>

    //                     </li>


    function addTodoUI (newTodo){

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
    

}