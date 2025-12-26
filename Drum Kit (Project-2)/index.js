


function handleClick(event) {
    if (event.key == "w") {
        sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        pressed("w")
    }
    else if (event.key == "a") {
        sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        pressed("a")
    }
    else if (event.key == "s") {
        sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        pressed("s")
    }
    else if (event.key == "d") {
        sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        pressed("d")
    }
    else if (event.key == "j") {
        sound = new Audio("sounds/snare.mp3");
        sound.play();
        pressed("j")
    }
    else if (event.key == "k") {
        sound = new Audio("sounds/crash.mp3");
        sound.play();
        pressed("k")
    }
    else if (event.key == "l") {
        sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        pressed("l")
    }
}

document.getElementsByClassName("w drum")[0].addEventListener("click", handleClick);
document.getElementsByClassName("a drum")[0].addEventListener("click", handleClick);
document.getElementsByClassName("s drum")[0].addEventListener("click", handleClick);
document.getElementsByClassName("d drum")[0].addEventListener("click", handleClick);
document.getElementsByClassName("j drum")[0].addEventListener("click", handleClick);
document.getElementsByClassName("k drum")[0].addEventListener("click", handleClick);
document.getElementsByClassName("l drum")[0].addEventListener("click", handleClick);

document.addEventListener("keydown", function (event) {
    console.log(event.key);
})
document.addEventListener("keydown", handleClick)

function pressed(key) {
    document.querySelector("." + key).classList.add("pressed")
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed")
    }, 100)
}
