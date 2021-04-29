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

    if(newTodo===""){
     /*/   <div class="alert alert-danger" role="alert">
    This is a danger alert—check it out!
    </div> */
    showAlert("danger","Lütfen bir todo giriniz");

    }
    else{
        addTodoUI(newTodo);
        showAlert("success","todo başarıyla eklendi");
    }
   // console.log(newTodo);

   //todoları dinamik olarak eklemek için

   addTodoUI(newTodo);

    e.preventDefault();
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
    todoInput.value="";

}