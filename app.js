// var list = document.getElementById("list");
// var li = document.createElement("li");
// var delBtn = document.createElement("button");
// var deltext = document.createTextNode("DELETE");
// delBtn.setAttribute("class", "btn");
// delBtn.setAttribute("onclick", "deleteItem(this)");


// //create edit button
// var editBtn = document.createElement("button");
// var editText = document.createTextNode("EDIT");
// editBtn.setAttribute("class", "btn");
// editBtn.setAttribute("onclick", "editItem(this)");

// var todo_item;
// var data = [];

// function addTodo() {
//     //var a = this.value;
//     todo_item = document.getElementById("todo-item");
//     data.push(todo_item.value)
//     for (var i = 0; i <= data.length; i++) {
//         console.log(data[i]);
//         //  var liText = document.createTextNode();
//         editBtn.appendChild(editText);
//         delBtn.appendChild(deltext);
//         li.innerHTML = li.innerHTML + data[i];
//         //   li.appendChild(liText);
//         li.appendChild(editBtn);
//         li.appendChild(delBtn);
//         list.appendChild(li);
//     }
// }

// // console.log(data)


// function deleteItem(e) {
//     e.parentNode.romove();
// }

// function editItem(e) {
//     var val = prompt("Enter updated value", e.parentNode.firstchild.nodevalue);

//     e.parentNode.firstchild.nodevalue = val
// }

// function deleteAll() {
//     list.innerHTML = ""
// }


var a = document.getElementById("todo-item");
var list = document.getElementById("mylist");

//create del button
var delBtn = document.createElement("BUTTON");
var deltext = document.createTextNode("DELETE");
delBtn.setAttribute("class", "btn");
delBtn.setAttribute("onclick", "deleteItem(this)");


//create edit button
var editBtn = document.createElement("BUTTON");
var editText = document.createTextNode("EDIT");
editBtn.setAttribute("class", "btn");
editBtn.setAttribute("onclick", "editItem(this)");


function addTodo(){

// var x = document.createElement("LI");
// var t = document.createTextNode(a.value);

// x.appendChild(t);
// x.appendChild(editBtn);
// document.getElementById("myList").appendChild(x);

var a = document.getElementById("todo-item");
var li = document.createElement("li");  
var txt = document.createElement("span"); 
var btn = document.createElement("BUTTON");
var btn2 = document.createElement("BUTTON");
var br = document.createElement("br");
var br2 = document.createElement("br");
btn.setAttribute("onclick", "editItem(this)");
btn2.setAttribute("onclick", "deleteItem(this)");

btn.setAttribute("class", "btn btn-primary");
btn2.setAttribute("class", "btn btn-danger");
   // Create a <button> element
txt.innerHTML = a.value;   
btn.innerHTML = "Edit"; 
btn2.innerHTML = "Delete";                   // Insert text
//document.body.appendChild(btn);               // Append <button> to <body>
li.appendChild(txt);
li.appendChild(btn);
li.appendChild(btn2);
li.appendChild(br);
li.appendChild(br2);
document.getElementById("myList").appendChild(li);

a.value="";
}






function deleteItem(e) {
    e.parentNode.remove();
}

function editItem(e) {
    //alert(e.);
    var val = prompt("Enter updated value", e.parentNode.firstChild.innerHTML);

    e.parentNode.firstChild.innerHTML = val
}

function deleteAll() {
    document.getElementById("myList").innerHTML="";
}
