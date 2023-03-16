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
      return;
    }

    document.querySelector(".panel").innerText = input;
    document.querySelector(".input").value = null;
}