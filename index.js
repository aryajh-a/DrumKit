


var totDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < totDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);        // 'click' is the event, handleClick is for passing the function, 
    // not calling the function, hence no '()' in use 

    
}

// playing audio                                                          
function handleClick() {

    // accessing the inerHTML of the button pressed
    var buttonInnerHTML = this.innerHTML;
    // setting white color to buttons that has been pressed
    //this.style.color = "white";
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

}

document.addEventListener("keydown", handler);
function handler(event) {
    makesound(event.key);
    buttonAnimation(event.key);
}


function makesound(key) {
    switch (key) {

        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log(key);
    }
}

function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+currentKey).classList.remove("pressed")
    }, 100)
}