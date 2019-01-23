const toggleList = document.getElementById ("toggleList");
const listDiv = document.querySelector (".list");
const descriptionInput = document.querySelector ("input.description");
const descriptionP = document.querySelector ("p.description");
const descriptionButton = document.querySelector ("button.description");
const listUl = document.querySelector('ul');
const addItemInput = document.querySelector ("input.addItemInput");
const addItemButton = document.querySelector ("button.addItemButton");
const listItems = document.getElementsByTagName ("li");




listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        let li = event.target.parentNode; 
        let ul = li.parentNode; 
        if (event.target.className == 'remove') {
            ul.removeChild(li); //Removes button's parent node (which is a list item)
        }
        if (event.target.className == 'up') {
           
          let li = event.target.parentNode;
          let ul = li.parentNode;
          let prevLi = li.previousElementSibling; 
            if(prevLi) {
                ul.insertBefore(li, prevLi); //Moves the list item up
            }
        }
    }
        if (event.target.className == "down") {
          let li = event.target.parentNode;
          let ul = li.parentNode;
          let nextLi = li.nextElementSibling;
             if(nextLi) {
             ul.insertBefore(nextLi, li);}
             }
})

