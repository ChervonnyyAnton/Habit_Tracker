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

const obj = JSON.parse('{"a": 1}');
console.log(obj);
const str = JSON.stringify(obj);
console.log(str);