
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = "#";

var chances = (Math.floor(Math.random()*26));
var answer = letters[chances];
    console.log(answer);

var guesses = document.getElementById("Guesses");
var freshWins = document.getElementById("Wins");
var freshLosses = document.getElementById("Losses");
var remain = document.getElementById("Remain");

freshWins.textContent = wins;
freshLosses.textContent = losses;
remain.textContent = guessesLeft;

document.onkeyup = function(event) {
    
    userKey = event.key;

    if(userKey==answer) {
        wins = wins+1;
        freshWins.textContent = wins;
        guessesLeft = 10;
        remain.textContent = guessesLeft;
        guesses.textContent = "";
        newRound = (Math.floor(Math.random()*26));
        answer = letters[newRound];
        console.log(answer);
       
    } else if(userKey !== answer && letters.indexOf(userKey) !== -1) {
        guesses.insertAdjacentElement("beforeend", userKey + ", ");
        guessesLeft = guessesLeft -1;
        remain.textContent = guessesLeft; 

        if(guessesLeft < 1) {
            losses = losses+1;
            freshLosses.textContent = losses;
            guessesLeft = 10;
            remain.textContent = guessesLeft;
            guesses.textContent = "";
            newRound = (Math.floor(Math.random()*26));
            answer = letters[newRound];
            console.log(answer);
        }
    }
}