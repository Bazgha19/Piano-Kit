//Detecting Button Press
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(i=0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

//Detecting Keyboard Press
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){
  switch (key) {
    case "p":
        var audio = new Audio("sounds/piano-3.mp3");
        audio.play();
        break;
    case "i":
        var audio = new Audio("sounds/piano-4.mp3");
        audio.play();
        break;
    case "a":
        var audio = new Audio("sounds/piano-5.mp3");
        audio.play();
        break;
    case "n":
        var audio = new Audio("sounds/piano-6.mp3");
        audio.play();
        break;
    case "o":
        var audio = new Audio("sounds/piano-7.mp3");
        audio.play();
        break;
    case "d":
        var audio = new Audio("sounds/piano-2.mp3");
        audio.play();
        break;
    case "j":
        var audio = new Audio("sounds/piano-1.mp3");
        audio.play();
        break;
    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
  
}
