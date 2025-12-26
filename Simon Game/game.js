gamePattern=[]
userPattern=[]
let start=true;

function gameBegin(){
    if(start)
    {
        alert("Press any key to start!");
        $(document).one("keydown", nextSequence);

        start = false;
    }
}

function nextSequence(){
    n = Math.floor(Math.random()*4);
    var buttonColours=["red", "blue", "green", "yellow"];
    randomChoosenColour=buttonColours[n];
    gamePattern.push(randomChoosenColour);
    tryy(randomChoosenColour);
    soundPlay(randomChoosenColour);
}

function tryy (randomChoosenColour){
$("#"+ randomChoosenColour).animate({opacity:0.5},50).delay(100).animate({opacity:1},50)

}


function soundPlay(randomChoosenColour){
    switch(randomChoosenColour){
    case "red": 
        audio= new Audio("sounds/red.mp3");
        audio.play();
        break;

    case "blue":
        audio=new Audio("sounds/blue.mp3");
        audio.play();
        break;

    case "green":
        audio=new Audio("sounds/green.mp3");
        audio.play();
        break;

    case "yellow":
        audio=new Audio("sounds/yellow.mp3");
        audio.play();
        break;
    }
}

$(".btn").click(function(){
    x=$(this).attr("id");
    userSequence(x);
    soundPlay(x);
    tryy(x);
    check(userPattern.length - 1);
});

function userSequence(clickedColour){
    userPattern.push(clickedColour);
    // if(userPattern.length == gamePattern.length)
    // {
    //     check();
    // }
}

// function check(){
//     let isCorrect= true;
//     for(n=0;n<gamePattern.length;n++)
//     {
//         if(gamePattern[n]!==userPattern[n])
//         {
//             isCorrect=false;
//             break;
//         }
//     }

//     if(isCorrect)
//     {
//         if(gamePattern.length==userPattern.length)
//         {
//             userPattern=[];
//             setTimeout(nextSequence,1000);
//         }
//     }

//     else
//     {
//         alert("TryAgain!");
//         userPattern=[];
//         gamePattern=[];
//         setTimeout(nextSequence,1000);
//     }
// }
function check(currentIndex){
    
    if(gamePattern[currentIndex] === userPattern[currentIndex]) {

        if(userPattern.length === gamePattern.length) {
            userPattern = [];
            setTimeout(nextSequence, 1000);
        }

    } else {
        alert("Try Again!");
        userPattern = [];
        gamePattern = [];
        start = true;
        setTimeout(gameBegin, 1000);
    }
}

gameBegin();






