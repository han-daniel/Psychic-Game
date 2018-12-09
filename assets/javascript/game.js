var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var lettersGuessed = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerGuess);
document.onkeydown = function(ewvent) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    addLetter(keyPress);
}

function addLetter (usersKeypress) {
var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
})

if (repeatGuess) {
    alert("You guessed '" + usersKeypress + "' already");
    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);
        showLettersGuessed();
        guessMatch(usersKeypress);
    }

}

function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You win.");
        wins = wins + 1;
        showWins();
    
    } else if (guessesLeft === 0) 
        {
        alert("You lose. Press any key to start again.");  
        losses = losses + 1;
        showLosses();
        resetVariables ();
    

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}

function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}

function showLosses() {
    document.getElementById("numLosses").innerHTML = losses;
}

function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 9;
}

function startGame() {
    showGuessesRemaining();
    showWins();
    showLosses();
}

startGame();