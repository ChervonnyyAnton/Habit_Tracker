/*
	Дан список задач
	Сделать функции:
		- добавить задачу в конец
		- удаление задачи по названию
		- перенос задачи в начало списка по названию

	Всегда меняем исходный массив
*/

const tasks = ["task 1"];

// Добавить задачу в конец
function Add(task) {
  tasks.push(task);
}
// Удалить задачу по названию
function Delete(task) {
	if(!tasks.includes(task)) return console.log('Такой задачи нет');
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
}
// Перенести задачу в начало по названию
function Prioritize(task) {
	if (!tasks.includes(task)) return console.log("Такой задачи нет");
  const index = tasks.indexOf(task);
  const taskToMove = tasks.splice(index, 1);
  tasks.unshift(taskToMove[0]);
}

console.log(tasks);
Add("task 2");
console.log(tasks);
Delete("task 1");
console.log(tasks);
Delete("false task")
console.log(tasks);
Prioritize("task 2");
console.log(tasks);
Prioritize("false task")
console.log(tasks);