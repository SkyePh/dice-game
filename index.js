
var RandomNumber1 = Math.floor(Math.random()*6);
var RandomNumber2 = Math.floor(Math.random()*6);

const dice1 = document.querySelector('.img1');
const dice2 = document.querySelector('.img2');

const arr = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

dice1.setAttribute("src", arr[RandomNumber1]);
dice2.setAttribute("src", arr[RandomNumber2]);

if (RandomNumber1>RandomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
}
else if (RandomNumber1<RandomNumber2){
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector('h1').innerHTML = "Draw...";
}