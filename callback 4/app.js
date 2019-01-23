 
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');



const makeRed = (redelement) => redelement.style.backgroundColor = "red";
const makeBlue = (blueelement) => blueelement.style.backgroundColor = "blue";
const makeGreen = (greenelement) => greenelement.style.backgroundColor = "green";



const addStyleToElement = (element, callback) => callback(element);



addStyleToElement(div1,makeRed);
addStyleToElement(div2,makeBlue);
addStyleToElement(div3,makeGreen);

