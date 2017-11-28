//select a word from the wordBank array
var inquirer = require('inquirer');

var wordBank = ["chocolate", "strawberry", "caramel", "vanilla", "mint", "coffee", "neopolitan", "pistachio", "butterfinger", "smores"];
var newWord = wordBank[Math.floor(Math.random() * wordBank.length)];
// console.log(ComputerGuess.chosenWord());

var guessedWord = [];
var numOfGuesses = 10;
// var wrongGuesses =[];

// for (let i = 0; newWord.length>i;i++){
//     guessedWord.push("_")
// }

function compare (word, letter) {
 if (word.includes(letter)){
     guessedWord.push(letter)
     console.log("correct")
 } else {
     numOfGuesses--;
     console.log("You have " + numOfGuesses + " left")
 }
}

function winning (){
    for (var i = 0; i < newWord.length; i++){
        if (guessedWord.includes(newWord[i])){    
        } else {
            return false;
        }
    }
    return true;
}

function display (){
    var x = ""; 
    var newWordArray = newWord.split("");

    for (var i = 0; i < newWordArray.length; i++){ 
        if (guessedWord.includes(newWordArray[i])){
            x += newWordArray[i] + " "
        } else {
            x += "_ "
        }
    }
    console.log(x);

}
// // module.exports(newWord);

// var userGuess = "a";

// for (let i = 0; newWord.length>i; i++) {
//     if(userGuess === newWord[i]){
//         console.log('true');
//         guessedWord[i] = userGuess;
//     }
// else {console.log('else');}
// }

// console.log(guessedWord);
// console.log(wrongGuesses);



  function loop(){
    inquirer.prompt([
        {
          name: "letter",
          message: "Guess a letter:",
          type: "input"
        }
      ]).then(function(i) {
        compare(newWord.split(""), i.letter);
        display();


        if (numOfGuesses > 0){
            if (winning()){
                console.log("You won.")
            } else {
                loop();
            }
        } else {
            console.log("You lost.")
        }
        
      });
  }


console.log("Welcome to Hangman Ice Cream Edition");
console.log("Guess each letter of the ice cream selected, you have 10 guesses.")  
loop();
