

const myinput = document.getElementById("input-box");
const mylist = document.getElementById("list-container");

function addTask(){
    if(myinput.value === ''){
        alert("you must write something");
    }
    else { 
        let li = document.createElement("li");
        li.innerHTML = myinput.value;
        mylist.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    

    myinput.value = " ";
    saveData();
}
myinput.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        addTask();
    }
}, false);

mylist.addEventListener("click", function(e) {
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", mylist.innerHTML);
    
}
function showTask(){
    mylist.innerHTML = localStorage.getItem("data");
}
showTask();
    
