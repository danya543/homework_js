import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const subjects: object = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};
let lessonStr: string = "";
for (const key in subjects) {
  lessonStr += key + ", ";
}

lessonStr = lessonStr.slice(0, lessonStr.length - 2);
console.log(lessonStr);

const keys: string[] = Object.keys(subjects);
const values = Object.values(subjects);

let quantity: number = 0;
for (let i = 0; i < values.length; i++) {
  quantity += values[i].students + values[i].teachers;
}
console.log(quantity);

let average: number = 0;
let studentQuantity: number = 0;
for (let i = 0; i < values.length; i++) {
  average += values[i].students;
  studentQuantity++;
}
average /= studentQuantity;
console.log(average);

const lesson: Array<object> = [];
for (let i = 0; i < keys.length; i++) {
  lesson.push({ [`${keys[i]}`]: values[i] });
}
console.log("Array");
console.log(lesson);

const sort: Array<object> = [];
sort.push(lesson[0]);
for (let i = 1; i < lesson.length; i++) {
  for (let j = 0; j < sort.length; j++) {
    if (Object.values(lesson[i])[0].teachers <= Object.values(sort[j])[0].teachers) {
      sort.splice(j, 0, lesson[i]);
      break;
    } else if (j === sort.length - 1) {
      sort.push(lesson[i]);
      break;
    }
  }
}

console.log("Sort");
console.log(sort);
