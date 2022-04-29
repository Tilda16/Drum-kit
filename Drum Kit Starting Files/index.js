function handleClick(){
  alert("I got clicked");
}
let clickForAll = document.querySelectorAll("button");
clickForAll.forEach(button){
  .addEventListener("click", handleClick);
}
