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

localStorage.setItem('token', 'elgjdldgm');
console.log(localStorage.getItem('token'));
localStorage.removeItem('token');
localStorage.clear();