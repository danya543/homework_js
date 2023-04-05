let counter = 1;
const advanced = "Advanced";

function capitalize(task) {
  const splitted = task.split("");
  const first = splitted[0].toUpperCase();
  let res = [...splitted];
  res.splice(0, 1);
  res = [first, ...res].join("");
  return res;
}

function taskCounter(level = "") {
  let task = "task ";
  if (isNaN(level)) {
    level = level + " level ";
    const result = level + task + counter;
    console.log(result);
  } else {
    task = capitalize(task);
    const result = task + counter;
    console.log(result);
  }
  counter++;
}

//task1
taskCounter();

const colors = ["red", "green", "blue"];
const lengthColors = colors.length;
console.log(lengthColors);

//task2
taskCounter();

const animals = ["monkey", "dog", "cat"];
const i = animals.length - 1;
console.log(animals[i]);

//task3
taskCounter();

//first way
const numbers = [5, 43, 63, 23, 90];
console.log(`First way`, numbers);
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers.pop();
}
console.log(numbers);

//second way
const a = [1, 2, 3];
console.log(`Second way`, a);
a.length = 0;
console.log(a);

//task4
taskCounter();

const students = ["Polina", "Dasha", "Masha"];
console.log(students);

students.pop();
console.log(students);

students.push("Borya");
console.log(students);

students.shift();
console.log(students);

students.unshift("Andrey");
console.log(students);

//task5
taskCounter();

const cats = ["Gachito", "Tom", "Batman"];
console.log(`Output by 'for'`);
const lengthCats = cats.length;
for (let i = 0; i < lengthCats; i++) {
  console.log(cats[i]);
}

console.log(`Output by 'for of'`);
for (const cat of cats) {
  console.log(cat);
}

//task6
taskCounter();

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = evenNumbers.concat(oddNumbers);
console.log(`Sum of two arrays: ${allNumbers}`);

/*for (let i = 0; i < allNumbers.length; i++) {
 if (allNumbers[i] === 8) {
    let index = i;
    console.log(`Index of number 8: ${index}`);
  }
}*/

let index = allNumbers.indexOf(8);
console.log(`Index of number 8: ${index}`);

//task7
taskCounter();

const binary = [0, 0, 0, 0];
const outputBinary = binary.join(1);
console.log(`Result after method join ${outputBinary}`);

counter = 1;
//advanced level
//task1
taskCounter(advanced);

function polyndromCheck(str) {
  const middle = Math.floor(str.length / 2);

  for (let i = 0; i < middle; i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return 0;
    }
  }

  return 1;
}

const polyndrom = prompt("Enter word which you need to check:");
if (!isNaN(polyndrom)) {
  throw new Error("Your input is not a string");
}

let flag = polyndromCheck(polyndrom);
console.log(flag);
if (flag === 1) {
  console.log(`${polyndrom} is a polyndrom`);
} else {
  console.log(`${polyndrom} is not a polyndrom`);
}

//task2
taskCounter(advanced);

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
let sum = 0;
let quantity = 0;
for (let i = 0; i < matrix.length; i++) {
  quantity += matrix[i].length;
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}
const averageMatrixNumber = sum / quantity;
console.log(averageMatrixNumber);

//task3
taskCounter(advanced);

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
const positiveNumbers = [];
const negativeNumbers = [];

for (const number of mixedNumbers) {
  if (number >= 0) {
    positiveNumbers.push(number);
  } else {
    negativeNumbers.push(number);
  }
}
console.log(`Input array: ${mixedNumbers}`);
console.log(`Array of positive numbers: ${positiveNumbers}`);
console.log(`Array of negative numbers: ${negativeNumbers}`);

//task4
taskCounter(advanced);

let max = 20;
let min = 5;
let size = 5;
let degree = 3;

const choose = confirm(
  `Range of random numbers (max: ${max}; min: ${min})\nSize of array: ${size}\nDegree: ${degree}\nChange default values?`
);
if (choose) {
  do {
    max = Number(prompt("Enter max number:"));
    min = Number(prompt(`Enter min number (it must be <${max}):`));
  } while (max < min);
  do {
    size = Number(prompt("Enter size of array (>=5):"));
  } while (size < 5);
  degree = Number(prompt("Enter degree:"));
}

function randomInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const initialValues = [];
for (let i = 0; i < size; i++) {
  initialValues.push(randomInt(max, min));
}

const finiteArray = [];
for (let i = 0; i < size; i++) {
  finiteArray[i] = initialValues[i] ** degree;
}

console.log(`Initial array ${initialValues}`);
console.log(`Finite array (initial array raised to a degree ${degree}): ${finiteArray}`);
