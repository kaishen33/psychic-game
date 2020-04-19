var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userKey = "#";

var randomChoice = (Math.floor(Math.random()*26));
var answer = letters[randomChoice];

var Wins = document.getElementById("Wins"); 
var Losses = document.getElementById("Losses"); 
var Remain = document.getElementById("Remain"); 
var Guessed = document.getElementById("Guessed"); 

Wins.textContent = wins;
Losses.textContent = losses;
Remain.textContent = guessesLeft;

document.onkeyup = function(event) {

    userKey = event.key;
    if(userKey==answer) {
        wins = wins+1;
        Wins.textContent = wins;
        guessesLeft = 10;
        Remain.textContent = guessesLeft;
        Guessed.textContent = "";
        newAnswer = (Math.floor(Math.random()*26));
        answer = letters[newAnswer];

    } else if(userKey != answer && letters.indexOf(userKey) != -1) {
        Guessed.insertAdjacentText("beforeend", userKey + ", ");
        guessesLeft = guessesLeft - 1;
        Remain.textContent = guessesLeft;
        if(guessesLeft < 1) {
            losses = losses+1;
            Losses.textContent = losses;
            guessesLeft = 10;
            Remain.textContent = guessesLeft;
            Guessed.textContent = "";
            newAnswer = (Math.floor(Math.random()*26));
            answer = letters[newAnswer];
        }  
    }  
}