var message = '';
var student;
var search;
var list = " ";
var message2 = " ";

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
}
while (true) {
search = prompt("Type in the name of the student or type quit");

if (search === null || search.toLowerCase() === "quit") {
  break;
 }else if (search === "namelist") {
   for ( var i = 0; i < students.length; i += 1) {
  list += students[i].name + ", ";
 print(list);}
  
  for (var i = 0; i < student.length; i +=1) {
     student = students[i]
   search === student.name} {
     
   message2 += '<h2>Student: ' + student.name + '</h2>';
  message2 += '<p>Track: ' + student.track + '</p>';
  message2 += '<p>Points: ' + student.points + '</p>';
  message2 += '<p>Achievements: ' + student.achievements + '</p>';
   } 
   print(message2);  
 }    
}

