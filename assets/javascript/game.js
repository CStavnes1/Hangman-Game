
'use strict';


//defining an array to choose word from
//radom selection of word from array
const randomWordArr = ["cat", "duck", "whale"];
const randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
//assigning a variable to the chosen words length
//let chosenWordLength = chosenWord.length;

//creating answer array//
let answerArray = [];

function startUp() {
    for (let i = 0; i < randomWord.length; i++) {
        answerArray[i] = '_';
    };

    let remainingLetter = randomWord.length;

    //displaying the random word to the user
    let startingWord = answerArray.join(' ');

    $('#answer').append(startingWord);
    alert(startingWord);
}

alert(remainingLetter);

function Letter() {
    let letter = $('#letter').val();

    if (letter.length > 0) {
        for (let i = 0; i < randomWord.length; i++)

            if (randomWord[i] === letter) {
                answerArray[i] = letter
            }
    }
    
}


