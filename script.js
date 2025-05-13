const inputBox=document.getElementById("inputBox");
const Listconatiner=document.getElementById("Listconatiner");
function addtask(){
  if(inputBox.value===''){
    alert("You must write something!");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML =inputBox.value;
    Listconatiner.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  inputBox.value="";
  saveData();

}
Listconatiner.addEventListener("click",function(e){
if(e.target.tagName ==="LI"){
  e.target.classList.toggle("checked");
  saveData();
}else if(e.target.tagName==="SPAN"){
  e.target.parentElement.remove();
  saveData();
}
},false);
function saveData(){
  localStorage.setItem("data",Listconatiner.innerHTML);
}
function st(){
  Listconatiner.innerHTML=localStorage.getItem("data");
}
st();