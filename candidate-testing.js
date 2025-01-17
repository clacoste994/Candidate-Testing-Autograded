const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "]; 
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let empty = [];
let testingAnswers = '';
let n = 0;
let v = 'Passed';


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

candidateName = input.question("Candidate name: ");
//console.log(candidateName);


}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(questions);
//console.log(candidateAnswer);
for (i = 0; i < questions.length; i++) {
  testingAnswers = input.question(questions[i]);
  if (i === 0) {
    candidateAnswers[0] = testingAnswers;
    console.log(`Candidate Answer: ${testingAnswers}
Correct Answer: ${correctAnswers[0]}`);
}
  if (i === 1) {
    candidateAnswers[1] = testingAnswers;
    console.log(`Candidate Answer: ${testingAnswers}
Correct Answer: ${correctAnswers[1]}`);
  }
  if (i === 2) {
    candidateAnswers[2] = testingAnswers;
    console.log(`Candidate Answer: ${testingAnswers}
Correct Answer: ${correctAnswers[2]}`);
  }
  if (i === 3) {
    candidateAnswers[3] = testingAnswers;
    console.log(`Candidate Answer: ${testingAnswers}
Correct Answer: ${correctAnswers[3]}`);
  }
  if (i === 4) {
    candidateAnswers[4] = testingAnswers;
    console.log(`Candidate Answer: ${testingAnswers}
Correct Answer: ${correctAnswers[4]}`);
  }
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer.toLowerCase === correctAnswer.toLowerCase) {
  console.log("correct!");
} else {
  console.log("Incorrect...");
}*/


n = 0;
for (i = 0; i < correctAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
 n++;
  } 
}


  
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  grade = n/5 * 100;
  if (n > 3){
    console.log(`Candidate's score ${grade}%. Success. You have ${v}`) 
    } else {
     console.log(`Candidate's score ${grade}%. Failed.`)
    }
  
  
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Welcome! Candidate ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};