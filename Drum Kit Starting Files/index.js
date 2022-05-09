let numberOfButtons = document.querySelectorAll(".drum").length;
let audio = new Audio('sounds/tom-1.mp3');

for(i = 0; i<numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    let buttonInnerHTML = this.innerHTML;
switch (buttonInnerHTML) {
  case "w":
    let crash = new Audio("sounds/crash.mp3");
    audio.play;
    break;
  case "a":
    let crash = new Audio("sounds/kick-base.mp3");
    audio.play;
    break;
  case "s":
    let crash = new Audio("sounds/snare.mp3");
    audio.play;
    break;
  case "d":
    let crash = new Audio("sounds/tom-1.mp3");
    audio.play;
    break;
  case "j":
    let crash = new Audio("sounds/tom-2.mp3");
    audio.play;
    break;
  case "k":
    let crash = new Audio("sounds/tom-3.mp3");
    audio.play;
    break;
  case "l":
    let crash = new Audio("sounds/tom-4.mp3");
    audio.play;
    break;
  default: console.log(buttonInnerHTML);

}
});
}
