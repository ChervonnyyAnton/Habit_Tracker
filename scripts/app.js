'use strict';

let habits = [];
const HABIT_KEY = 'HABIT_KEY';

/* page */

const page = {
  menu: document.querySelector(".menu__list"),
  header: {
    habitName: document.querySelector(".habit__name"),
    progressPercentage: document.querySelector(".progress__percent"),
    progressCoverBar: document.querySelector(".progress__cover-bar"),
  }
};

/* utils */

function loadData() {
	const habitsString = localStorage.getItem(HABIT_KEY);
	const habitArray = JSON.parse(habitsString);
	if(Array.isArray(habitArray)){
		habits = habitArray;
	}
}

function saveData(){
	localStorage.setItem(HABIT_KEY, JSON.stringify(habits));
}

/* render */

function reRenderMenu(activeHabit) {
	if (!activeHabit) {
		return;
	}
	
	for(const habit of habits) {
		const existed = document.querySelector(`[menu-habit-id="${habit.id}"]`);
		if(!existed){
			const element = document.createElement('button');
			element.setAttribute('menu-habit-id', habit.id);
			element.classList.add('menu__item');
			element.addEventListener('click', () => reRender(habit.id));
			element.innerHTML = `<img src="./images/${habit.icon}.svg" alt="${habit.name}" />`;

			if (activeHabit.id === habit.id) {
            element.classList.add('menu__item_active');
          	}

			page.menu.appendChild(element);

			continue;
		}

		if(activeHabit.id === habit.id){
			existed.classList.add('menu__item_active');
		}
		else{
			existed.classList.remove('menu__item_active');
		}
	}
}

function reRenderHead(activeHabit) {
	if (!activeHabit) {
		return;
    }

	page.header.habitName.innerText = activeHabit.name;
	const result = activeHabit.days.length / activeHabit.target;
	const progress = result > 1 ? 100 : result * 100;

	page.header.progressPercentage.innerText = progress.toFixed(0) + "%";
	page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}

function reRender (activeHabitId) {
	const activeHabit = habits.find(habit => habit.id === activeHabitId);
	reRenderMenu(activeHabit);
	reRenderHead(activeHabit);
}

/* init */

(() => {
	loadData();
	reRender(habits[0].id);
})();

