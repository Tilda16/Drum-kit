let numberOfButtons = document.querySelectorAll(".drum").length;

for(i = 0; i<numberOfButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick(){
    audio.play;
  }
}

let audio = new audio(sounds/tom-1.mp3);
