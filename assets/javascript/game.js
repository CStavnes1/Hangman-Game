'use strict';

//defining an array to choose word from
//radom selection of word from array
const randomWordArr = ["cat", "duck", "whale"];
const randomWord = randomWordArr [Math.floor(Math.random() * randomWordArr.length)];

//assigning a variable to the chosen words length
//let chosenWordLength = chosenWord.length;

//creating answer array//
let answerArray = [];

function startUp() 
{
    for (let i = 0; i < randomWord.length; i++) 
{
   answerArray[i] = '_';
};

let = remainingLetter = randomWord.Length;

//creating a string//
let startingWord = answerArray.join(' ');
document.getElementById("answer").innerHTML = startingWord;


}


function Letter()
{
    let letter = document.getElementById("letter").value;

    if (letter.length > 0)
    {
        for (let i = 0; 1 < randomWord.length; i++)
        {
            if (randomWord[i] === letter)
            {
                answerArray[i] = letter;
            } else

            
            {
                answerArray[i] = letter;
            }


            
        }

    }

}




// //game start//
// let remainingLetters = chosenWordLength;
// while (remainingletters > 0) {
// //alert((dashCounter).join(' '));

// let playerGuess = prompt('Guess a letter, or click cancel.');

// if (playerGuess === null) {

//     break; 

// } else if (playerGuess.length !==1) {
//    // alert('Please enter one letter')

// } else {
//     //checking if the answer matches a letter in the array//
//     for (let ansChecker = 0; ansChecker < chosenWordLength; ansChecker++) {

//         if (chosenWord[ansChecker] === playerGuess) {
//             dashCounter[ansChecker] = playerGuess;
//             remainingletters--;
//         }

//     }
// }   

// };

//alert(dashCounter.join(' '));
//alert('answer:' + chosenWord);

//adding game functions to html//
