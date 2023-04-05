import { createElementWithClass, createButton } from "../utils.js";
import { TaskForm } from "./TaskForm.js";
import { deleteAll } from "./TaskForm.js";

export class TaskHeader {
  constructor() {
    const edit = createElementWithClass("edit");

    const form = new TaskForm();

    const editRow = createElementWithClass("editRow");

    const counters = createElementWithClass("counters");

    const counterAll = this.counter("p", "All: ");
    const counterAllNum = this.counter("span", "0", { id: "counterAllNum" });

    const counterComplete = this.counter("p", "Complete: ");
    const counterCompleteNum = this.counter("span", "0", { id: "counterCompleteNum" });

    counterAll.append(counterAllNum);
    counterComplete.append(counterCompleteNum);

    counters.append(counterAll, counterComplete);

    let btnDeleteAll = createButton("delButton", "Delete all", { id: "deleteAll" });
    btnDeleteAll.addEventListener("click", () => {
      deleteAll();
    });

    editRow.append(counters, btnDeleteAll);

    edit.append(form, editRow);

    return edit;
  }
  counter = (tagName, innerText, props) => {
    const el = document.createElement(tagName);
    el.append(innerText);
    for (const key in props) {
      el.setAttribute(key, props[key]);
    }
    return el;
  };
}
