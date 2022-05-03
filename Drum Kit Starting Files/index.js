let numberOfButtons = document.querySelectorAll(".drum").length;
let audio = new Audio('sounds/crash.mp3');

for(i = 0; i<numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick(){
    audio.play;
  }
}
