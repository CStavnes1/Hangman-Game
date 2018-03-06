
'use strict';


//defining an array to choose word from
//radom selection of word from array
const words = ["cat", "duck", "whale"];
const word = words[Math.floor(Math.random() * words.length)];
//assigning a variable to the chosen words length
//let chosenWordLength = chosenWord.length;

//creating answer array//
let answerArray = [];

function startUp() {
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = '_';
    };

    //displaying the random word to the user on the page
    let startingWord = answerArray.join(' ');

    $('#answer').append(startingWord);
alert(word);
alert(startingWord);
alert(answerArray);
}


function Letter() {

    let guess = $('#letter').val();
   

    if (guess.length > 0) {

        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                alert(word[j]);
                word[j] = guess;
            } else {
                alert('does not match')
            }
        }
        }


    }

