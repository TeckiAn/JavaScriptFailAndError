const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');


const listenToFocusEvent = (event) => {
event.target.className = 'highlight';
};

const listenToBlurEvent = (event) => {
event.target.className = '';
};

nameInput.addEventListener('focus',listenToFocusEvent);

nameInput.addEventListener('blur', listenToBlurEvent);

messageTextArea.addEventListener('focus', listenToFocusEvent);

messageTextArea.addEventListener('blur', listenToBlurEvent);