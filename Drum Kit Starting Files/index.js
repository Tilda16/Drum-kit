function handleClick(){
  alert("I got clicked");
}
let clickForAll = document.querySelectorAll("button");
function allButtons() {
  clickForAll.forEach(button).addEventListener("click", handleClick);
}
