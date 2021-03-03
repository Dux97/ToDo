var newItem


window.onload = function() {
    newItem = document.getElementById("myUL");
    var lis = document.querySelectorAll('#myUL li')
    var buttons = document.getElementsByClassName('deleteButton');
    for (var i = 0; li < lis[i]; i++) {
        buttons[i].addEventListener('click', function(){
           this.parentElement.removeChild(li)
        });
    }
  };

function newElement(){
    var item = document.getElementById("createNew").value; 
    var TodoList = document.createElement("li");
    
    let newLi = "";
    newLi +=`<label><input type="checkbox" name="" ><span></span><p id="TodoText">${item}</p> <button name="deleteButton" ></button></label>`;
    TodoList.innerHTML = newLi
    newItem.appendChild(TodoList);
    
}
