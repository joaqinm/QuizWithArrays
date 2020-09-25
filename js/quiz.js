
alert("Welcome to my quiz. Please answer all questions to be your best knowledge. Capitalization won't count but spelling does ")
// 1. Create a multidimensional array to hold quiz questions and answers
let quiz = [
  ['What is 9 times 9? Answer as a number', '81'],
  ['What state is miami located in?', 'florida'],
  ['What color is produce with the hex #FFF?', 'white'],
  ['What year the U.S. declare their independence? Answer as a number', '1776']
]

// 2. Store the number of questions answered correctly
let correct = 0;
let gotRight = [];
let gotWrong = [];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for ( let i = 0 ; i < quiz.length ; i++) {
  let guess = prompt(quiz[i][0])
  if (guess.toLowerCase() == quiz[i][1]) {
    correct++;
    gotRight += `<li>${quiz[i][0]}</li>`;
  }
  else {
    gotWrong += `<li>${quiz[i][0]} <br> 
                Guess : ${guess} <br>
                Correct Answer : ${quiz[i][1]}</li>`;
  }
}

document.querySelector('main').innerHTML = `
  <h1>You got ${correct} question(s) right</h1>
  <h2>You got these questions right</h2>
  <ol>
    ${gotRight}
  </ol>
  <h2> You got these questions wrong</h2>
  <ol>
    ${gotWrong}
  </ol>
`


// 4. Display the number of correct answers to the user