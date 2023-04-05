import { createButton, createElementWithClass, getFormattedDate, counter } from "../utils.js";
import { tasksArr, completeArr } from "../index.js";
import { completeOutput } from "./TasksView.js";

export class CardView {
  constructor(number, text) {
    const taskNum = "task" + number;
    const wrap = createElementWithClass(`task`);
    wrap.setAttribute("id", `${taskNum}`);

    const output = createElementWithClass("inform");

    const taskNumber = createElementWithClass("taskNumber", "h3");
    taskNumber.textContent = "Task " + number;

    const taskText = createElementWithClass("taskOutput", "h5");
    taskText.textContent = text;

    const date = createElementWithClass("taskDate", "p");
    const dateInner = getFormattedDate();
    date.textContent = dateInner;

    output.append(taskNumber, taskText, date);

    wrap.append(output);

    wrap.append(createButtons());

    return wrap;
  }
}
function createButtons() {
  const buttons = createElementWithClass("check");

  const buttonAdd = createButton("buttonAdd", "✓");

  buttonAdd.addEventListener("click", ({ target }) => {
    taskComplete(target);
  });

  const buttonDel = createButton("buttonDel", "☓");
  buttonDel.addEventListener("click", ({ target }) => {
    deleteTask(target);
  });

  buttons.append(buttonAdd, buttonDel);

  return buttons;
}

function taskComplete(el) {
  let completeTask = el.parentNode.parentNode;
  completeTask = completeTask.firstElementChild;
  completeTask = completeTask.firstElementChild;
  completeTask = completeTask.nextElementSibling;
  completeArr.push(completeTask.innerText);

  for (let i = 0; i < tasksArr.length; i++) {
    if (completeTask.innerText === tasksArr[i]) {
      tasksArr.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(tasksArr));
    }
  }

  counter(document.getElementById("counterCompleteNum"), 0);

  el.parentNode.parentNode.remove();

  completeOutput(completeArr[completeArr.length - 1]);

  localStorage.setItem("completed", JSON.stringify(completeArr));
}

function deleteTask(el) {
  let task = el.parentNode.parentNode;
  task = task.firstElementChild;
  task = task.firstElementChild;
  task = task.nextElementSibling;
  for (let i = 0; i < tasksArr.length; i++) {
    if (task.innerText === tasksArr[i]) {
      tasksArr.splice(i, 1);
    }
  }

  el.parentNode.parentNode.remove();

  counter(document.getElementById("counterAllNum"), 1);
}
