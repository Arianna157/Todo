document.getElementById("codeInput").value = '';
function checkCode(){
    if(document.getElementById("codeInput").value == "Nibbles"){
        alert("Welcome back oofy!")
        document.getElementById("passwordScreen").style.display = 'none';
        document.getElementById("container").style.display= 'block';
        document.getElementById("codeInput").value == "";
    } else {
        alert("Wrong code!!!!!")
    }
};






const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
 if(inputBox.value=== '') {
    alert("You must write something oof!");
 }
 else{
    let li=document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
 }
 inputBox.value="";
 saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask (){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
