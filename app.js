'use strict'

function onChange(e){
	if(e.code != 'Enter'){
		return;
	}

	submit();
}

function submit() {
	const input = document.querySelector(".input").value;
    if (!input) {
		document
			.querySelector(".notification")
			.setAttribute("class", "notification");
		return;
    }
}

const panelText = 'панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`
document.querySelector('.test').appendChild(newElement);