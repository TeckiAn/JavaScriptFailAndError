var html = '';
var red;
var green;
var blue;
var rgbColor;
var counter;
function randomcolour () {
return Math.floor(Math.random() * 256) 
}

for (var i = 1; i <= 10; i+=1)  {
red = randomcolour ();
green = randomcolour ();
blue = randomcolour (); 
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';
}


document.write(html);


