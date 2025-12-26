var d1 = "./images/dice1.png";
var d2 = "./images/dice2.png";
var d3 = "./images/dice3.png";
var d4 = "./images/dice4.png";
var d5 = "./images/dice5.png";
var d6 = "./images/dice6.png";

document.querySelector("h1").innerHTML = "Refresh Me";

var n = (Math.floor(Math.random() * 6)) + 1;
var m = (Math.floor(Math.random() * 6)) + 1;

var d = [d1, d2, d3, d4, d5, d6];

document.getElementsByClassName("img1")[0].setAttribute("src", d[n - 1]);
document.getElementsByClassName("img2")[0].setAttribute("src", d[m - 1]);

if (n > m) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (m > n) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}




