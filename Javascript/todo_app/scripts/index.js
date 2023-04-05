//import { createElementWithClass, counter, getFormattedDate } from "./utils.js";
import { TaskView } from "./Tasks/TasksView.js";
import { TaskModel } from "./model/TaskModel.js";

export const tasksArr = [];
export const completeArr = [];

export function showComplete(el) {
  document.getElementsByClassName("progressTasks")[0].style.zIndex = -1;
  document.getElementsByClassName("progressTasks")[0].style.position = "absolute";
  document.getElementsByClassName("completeTasks")[0].style.position = "relative";
  document.getElementsByClassName("completeTasks")[0].style.zIndex = 1;

  el.textContent = "Tasks";
  el.classList.toggle("complete");
  el.classList.toggle("toTasks");

  el.addEventListener("click", ({ target }) => {
    showTasks(target);
  });
}
export function showTasks(el) {
  document.getElementsByClassName("completeTasks")[0].style.zIndex = -1;
  document.getElementsByClassName("completeTasks")[0].style.position = "absolute";
  document.getElementsByClassName("progressTasks")[0].style.position = "relative";
  document.getElementsByClassName("progressTasks")[0].style.zIndex = 1;

  el.textContent = "Complete";
  el.classList.toggle("complete");
  el.classList.toggle("toTasks");

  el.addEventListener("click", ({ target }) => {
    showComplete(target);
  });
}

const view = new TaskView();
const model = new TaskModel();
