// function add(x, y){

//     let results = x + y;

//     return results
// }

// function multiply(x,y){

//     let results = x * y;

//     return results;

// }



//  alert(add(777,multiply(36325,9824)))

// //00000000000000000000000000000000**************1 to 20************************00000000000000000000000000//


// function compareArrays(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//       console.log("Arrays not same length");
//       return false;
//     }
  
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//        console.log(`Mismatch at index ${i}: ${arr1[i]} !== ${arr2[i]}`);
//         return false;
//       }
//     }
  
//     console.log("true");
//     return true;
//   }

//   compareArrays([1, 2, 3], [1, 2, 3]); 
  

  
// //00000000000000000000000000000000**************20 to 42************************00000000000000000000000000//


  // Picks a random word from a list
function pickWord() {
    const words = ["javascript", "hangman", "programming", "developer"];
    return words[Math.floor(Math.random() * words.length)];
  }
  
  // Sets up the answer array like ['_', '_', '_']
  function setupAnswerArray(word) {
    const answerArray = [];
    for (let i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    return answerArray;
  }
  
  // Displays current progress
  function showPlayerProgress(answerArray) {
    alert(answerArray.join(" "));
  }
  
  // Gets a letter from the player
  function getGuess() {
    return prompt("Guess a letter, or click Cancel to stop playing.");
  }
  
  // Updates game state based on the guess
  function updateGameState(guess, word, answerArray) {
    let correctGuesses = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess && answerArray[i] === "_") {
        answerArray[i] = guess;
        correctGuesses++;
      }
    }
    return correctGuesses;
  }
  
  // Shows final word and congratulates
  function showAnswerAndCongratulatePlayer(answerArray) {
    alert("Good job! The answer was: " + answerArray.join(""));
  }
  
  // --- Game Loop ---
  const word = pickWord();
  const answerArray = setupAnswerArray(word);
  let remainingLetters = word.length;
  
  while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    const guess = getGuess();
    
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
      const correctGuesses = updateGameState(guess.toLowerCase(), word, answerArray);
      if (correctGuesses === 0) {
        alert("Nope! That letter isn't in the word.");
      } else {
        alert("Nice! You got " + correctGuesses + " letter(s) right.");
        remainingLetters -= correctGuesses;
      }
    }
  }
  
  showAnswerAndCongratulatePlayer(answerArray);
  

  
// //00000000000000000000000000000000**************20 to 115************************00000000000000000000000000//
