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
  },
  content: {
    daysContainer: document.getElementById("days"),
    nextDay: document.querySelector(".habit__day")
  },
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
	page.header.habitName.innerText = activeHabit.name;
	const result = activeHabit.days.length / activeHabit.target;
	const progress = result > 1 ? 100 : result * 100;

	page.header.progressPercentage.innerText = progress.toFixed(0) + "%";
	page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}

function reRenderContent(activeHabit){
	page.content.daysContainer.innerHTML = '';
	for (const index in activeHabit.days){
		const element = document.createElement('div');
		element.classList.add('habit');
		element.innerHTML = `
				<div class="habit">
					<div class="habit__day">Day ${Number(index) + 1}</div>
					<div class="habit__comment">${activeHabit.days[index].comment}</div>
					<button class="habit__delete">
						<img src="./images/delete_icon.svg" alt="delete Day ${index + 1}" />
					</button>
            	</div>`;
		page.content.daysContainer.appendChild(element);
	}
	page.content.nextDay.innerHTML = `Day ${activeHabit.days.length + 1}`;
}

function reRender (activeHabitId) {

	const activeHabit = habits.find(habit => habit.id === activeHabitId);
	if (!activeHabit) {
      	return;
    }
	reRenderMenu(activeHabit);
	reRenderHead(activeHabit);
	reRenderContent(activeHabit);
}

/* work with days */
function addDays(event){
	event.preventDefault();
	const data = new FormData(event.target);
	const comment = data.get('comment');
	console.log(comment);
}

/* init */

(() => {
	loadData();
	reRender(habits[0].id);
})();