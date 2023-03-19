'use strict'
localStorage.clear();

function addLog() {
  const data = localStorage.getItem("lastInput");
  const lastInput = JSON.parse(data);
  const newElement = document.createElement("div");
  newElement.innerHTML = `<div>${lastInput.text}</div>`;
  document.querySelector(".log").appendChild(newElement);
}

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

	const jsonString = JSON.stringify({ text: input });
    localStorage.setItem("lastInput", jsonString);
    addLog();
}