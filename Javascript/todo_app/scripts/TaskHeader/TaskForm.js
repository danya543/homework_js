import { createElementWithClass, createButton, counter, createInput } from "../utils.js";
import { tasksArr, completeArr, showComplete } from "../index.js";
import { CardView } from "../Tasks/CardView.js";

export let numberTask = 1;

export class TaskForm {
  constructor() {
    const editForm = createElementWithClass("editForm", "form");

    editForm.setAttribute("action", "#");

    let completeButton = createButton("complete", "Complete");
    completeButton.addEventListener("click", ({ target }) => {
      showComplete(target);
    });

    const input = createInput("input", {
      placeholder: "Enter your tasks",
      type: "text",
      id: "enter",
    });

    const addButton = createButton("add", "Add");
    addButton.addEventListener("click", () => {
      const inputId = document.getElementById("enter");
      const text = inputId.value;
      inputId.value = "";
      getTask(text);
      localStorage.setItem("tasks", JSON.stringify(tasksArr));
    });

    editForm.append(completeButton, input, addButton);

    return editForm;
  }
}

export function getTask(text) {
  tasksArr.push(text);

  counter(document.getElementById("counterAllNum"), 1);
  counter(document.getElementById("counterCompleteNum"), 0);

  const card = new CardView(numberTask++, text);
  document.getElementsByClassName("progressTasks")[0].append(card);
}

export function deleteAll() {
  if (tasksArr.length || completeArr.length) {
    if (tasksArr.length && completeArr.length) {
      //delete all
      let length = tasksArr.length;
      for (let i = 0; i < length; i++) {
        const el = document.getElementsByClassName(`task`);
        el[0].remove();
        tasksArr.shift();
      }

      length = completeArr.length;
      const elColection = document.getElementsByClassName("completeTask");
      for (let i = 0; i < length; i++) {
        elColection[0].remove();
        completeArr.shift();
      }
    } else if (tasksArr.length) {
      //delete only tasks
      const length = tasksArr.length;
      for (let i = 0; i < length; i++) {
        const el = document.getElementById(`task${i + 1}`);
        el.remove();
        tasksArr.shift();
      }
    } else if (completeArr.length) {
      //delete only complete
      const length = completeArr.length;
      const el = document.getElementsByClassName("completeTask");
      for (let i = 0; i < length; i++) {
        el[0].remove();
        completeArr.shift();
      }
    }

    counter(document.getElementById("counterAllNum"), 1);
    counter(document.getElementById("counterCompleteNum"), 0);

    localStorage.setItem("tasks", JSON.stringify(tasksArr));
    localStorage.setItem("completed", JSON.stringify(completeArr));
    numberTask = 1;
  }
}
