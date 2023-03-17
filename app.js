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

    document.querySelector(".panel").innerText = input;
    document.querySelector(".input").value = null;
	document.querySelector(".notification").classList.add('notification_active');
}

function getElOne(){
	const elementsCollection = document.getElementsByClassName("one");
	for(let i = 0; i < elementsCollection.length; i++){
		console.log(elementsCollection[i].textContent)
	}
}

console.log(getElOne());

function getElTwo(){
	const element = document.getElementById("two");
	return element.textContent;
}

console.log(getElTwo());

function getElFour(){
	const element = document.querySelector("[user-id = '4']");
	return element.textContent;
}

console.log(getElFour());

// решение junior

console.log(document.querySelector('.one').innerText);
console.log(document.querySelector('.one ~ div').innerText);
console.log(document.querySelector('#two').innerText);
console.log(document.querySelector('[user-id = "4"]').innerText);

// middle+

console.log(document.querySelectorAll('.one > span')[0].innerText);
console.log(document.querySelectorAll(".one > span")[1].innerText);
console.log(document.getElementsByClassName("one")[0].innerText);
console.log(document.getElementsByClassName("one")[1].innerText);

console.log(document.getElementById('two').innerText);

console.log(document.querySelector('[user-id = "4"]').innerText);