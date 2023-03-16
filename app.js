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
        .classList.remove("notification_active");
		return;
    }

    document.querySelector(".panel").innerText = input;
    document.querySelector(".input").value = null;
	document.querySelector(".notification").classList.add('notification_active');
}