import { tasksArr, completeArr } from "./index.js";

export function createElementWithClass(className, tagName = "div") {
  let el = document.createElement(tagName);
  el.classList.add(className);
  return el;
}

export function createButton(className, innerText, buttonProps) {
  const button = createElementWithClass(className, "button");
  button.textContent = innerText;
  for (const key in buttonProps) {
    button.setAttribute(key, buttonProps[key]);
  }

  return button;
}
export function createInput(className, inputProps) {
  const input = createElementWithClass(className, "input");
  for (const key in inputProps) {
    input.setAttribute(key, inputProps[key]);
  }

  return input;
}

export function getFormattedDate() {
  let now = new Date();

  let dateStr = "";
  dateStr += (now.getDate() < 10 ? "0" + now.getDate() : now.getDate()) + ".";
  dateStr += (now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth()) + ".";
  dateStr += now.getFullYear();

  return dateStr;
}

export function counter(el, flag) {
  if (flag) {
    el.innerText = tasksArr.length + completeArr.length;
  } else {
    el.innerText = completeArr.length;
  }
}
