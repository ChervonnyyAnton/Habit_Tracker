'use strict';

let habits = [];
const HABIT_KEY = 'HABIT_KEY';

/* utils */

function loadData() {
	const habitsFromLocalStorage = localStorage.getItem(HABIT_KEY);
	const habitsParsed = JSON.parse(habitsFromLocalStorage);
	if(Array.isArray(habits)){
		habits = habitsParsed;
	}
}

function saveData(){
	localStorage.setItem(HABIT_KEY, JSON.stringify(habits));
}

(() => {
	loadData();
})();