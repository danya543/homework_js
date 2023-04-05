import { tasksArr, completeArr } from "../index.js";
import { completeOutput } from "../Tasks/TasksView.js";
import { getTask } from "../TaskHeader/TaskForm.js";
import { counter } from "../utils.js";

export class TaskModel {
  constructor() {
    if (tasksArr != getSaveTasks("tasks")) {
      const tasks = getSaveTasks("tasks");
      for (const key of tasks) {
        getTask(key);
      }
    }
    if (completeArr != getSaveTasks("completed")) {
      const completed = getSaveTasks("completed");
      for (const key of completed) {
        completeOutput(key);
        completeArr.push(key);
      }
      counter(document.getElementById("counterAllNum"), 1);
      counter(document.getElementById("counterCompleteNum"), 0);
    }
    console.log(tasksArr, completeArr);
  }
}

function getSaveTasks(LocalStorageKey) {
  const savedItems = localStorage.getItem(LocalStorageKey);

  if (!savedItems) {
    return [];
  }

  try {
    return JSON.parse(savedItems);
  } catch (err) {
    console.error(err);
    return [];
  }
}
