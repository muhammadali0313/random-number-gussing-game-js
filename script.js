var userName = prompt("What is your name?");
var randomNumber = Math.floor(Math.random() * 100) + 1;
var numGuesses = 0;

while (true) {
  var userGuess = prompt(`Guess a number between 1 and 100, ${userName}!`);
  if (isNaN(userGuess)) {
    alert("Please enter a valid number!");
    continue;
  }
  userGuess = parseInt(userGuess)
  if (userGuess === randomNumber){
    alert('Congratulation, ${"userName"}');
  }
  userGuess = parseInt(userGuess);
  if (userGuess === randomNumber){
    break;
}else if(userGuess< randomNumber){
    alert("too low ! try again.");
} else{
    alert("too high! try again.")
}
numGuesses++;
}