var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function getlist (list) {
  var HTML = "<ol>";
  for (var i = 0; i < list.length; i += 1){
   HTML += "<li>" + list[i] + "</li>";
  } HTML += "</ol>";
  print(list);
} 
getlist (playList);
      