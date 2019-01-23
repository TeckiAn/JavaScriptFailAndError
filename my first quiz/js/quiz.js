var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var rightanswers =[];
var wronganswers =[];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
  document.write(message);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    rightanswers.unshift(i);  
  } 
else {wronganswers.unshift(i);
     }
}

html = "You got " + correctAnswers + " question(s) right."
+ "These question(s) are right: " + printlist(rightanswers)
+"These question(s) are wrong: " + printlist(wronganswers)

print(html);
