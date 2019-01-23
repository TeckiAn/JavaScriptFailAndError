const form = document.getElementById("registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList");

function createLI(text) {
	const li = document.createElement("li");
  li.textContent = text;
	const label = document.createElement('label');
	label.textContent = 'confirmed'	
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox'
	label.appendChild(checkbox);
	li.appendChild(label);
	const editButton = document.createElement('button');
	editButton.textContent = 'Edit';
	li.appendChild(editButton);
	const removeButton = document.createElement('button');
	removeButton.textContent = 'Remove';
	li.appendChild(removeButton);
	return li;		
}
	
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = " ";
  const li = createLI(text);	
	ul.appendChild(li);
});

ul.addEventListener('click', (e) => {
	if (e.target.className === 'BUTTON') {
		const button = e.target;
		const li = e.target.parentNode;
		const ul = li.parentNode;
		if (e.target.textContent === 'Remove') {			
			ul.removeChild(li);
		} else if (e.target.textContent === 'Edit') {
				console.log('edit');
			}
	}
});

ul.addEventListener('change', (e) => {
	checkbox = event.target;
	checked = checkbox.checked;
	listItem = checkbox.parentNode.parentNode;
	if (checked) {
		listItem.className = 'responded';
	} else {
		listItem.className = '';
	}
});