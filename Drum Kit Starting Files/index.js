let numberOfButtons = document.querySelectorAll(".drum").length;
let audio = new Audio('sounds/tom-1.mp3');

for(i = 0; i<numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  this.style.color="white";
)};
}
