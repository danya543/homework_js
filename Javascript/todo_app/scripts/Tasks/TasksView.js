import { TaskHeader } from "../TaskHeader/TaskHeader.js";
import { createElementWithClass, getFormattedDate, counter } from "../utils.js";
import { tasksArr } from "../index.js";

export class TaskView {
  constructor(containerId = "root") {
    const root = document.getElementById(containerId);
    const header = new TaskHeader();

    const tasks = this.taskPart;

    root.append(tasks, header);
  }
  taskPart = (function () {
    const progressTasks = createElementWithClass("progressTasks");

    const completeTasks = createElementWithClass("completeTasks");

    const tasks = createElementWithClass("tasks");
    tasks.setAttribute("id", "tasksection");

    tasks.append(progressTasks, completeTasks);

    return tasks;
  })();
}

export function completeOutput(text) {
  const task = createElementWithClass("completeTask");
  const taskCompl = createElementWithClass("taskNumber", "h3");
  taskCompl.innerText = "Task complete";
  const innerTask = createElementWithClass("taskOutput", "h5");

  const date = createElementWithClass("taskDate", "p");
  let dateComplete = getFormattedDate();
  dateComplete = "complete " + dateComplete;
  date.innerText = dateComplete;

  innerTask.textContent = text;
  task.append(taskCompl, innerTask, date);

  document.getElementsByClassName("completeTasks")[0].append(task);
}
