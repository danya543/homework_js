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

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

console.log("First way:");
fibonacci.forEach(function (element) {
  console.log(element);
});

console.log("Second way:");
fibonacci.forEach((element, index, array) => {
  console.log(fibonacci[index]);
});

//task2
taskCounter();

const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];

console.log("First way:");
const users1 = users.map((element, index) => `member ${index + 1}: ${element}`);
console.log(users1);

console.log("Second way:");
const users2 = users.map(function callback(el, index) {
  return `member ${index + 1}: ${el}`;
});
console.log(users2);

//task3
taskCounter();

const numbers = [7, -4, 32, -90, 54, 32, -21];

console.log("First way:");
const numbers1 = numbers.filter(function (el) {
  if (el >= 0) {
    return el;
  }
});
console.log(numbers1);

console.log("Second way:");
const numbers2 = numbers.filter((el) => el >= 0);
console.log(numbers2);

//task4
taskCounter();

const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

console.log("First way:");
const sum1 = fibonacci2.reduce((acc, el) => (acc += el));
console.log(sum1);

console.log("Second way:");
const sum2 = fibonacci2.reduce(function (acc, el) {
  return (acc += el);
});
console.log(sum2);

//task5
taskCounter();

const numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

console.log("First way:");
const evennumber = numbers3.find((el) => el % 2 === 0);
console.log(evennumber);

console.log("Second way:");
const evennumber2 = numbers3.find(function (el) {
  if (el % 2 === 0) return el;
});
console.log(evennumber2);

counter = 1;
//advanced level
//task1
taskCounter(advanced);

function creditSum(students) {
  let sumOfCredit = 0;
  for (let i = 0; i < students.length; i++) {
    sumOfCredit += students[i].getCredit();
  }
  return sumOfCredit;
}
function Student(username, salary, rate) {
  this.name = username;
  this.salary = salary;
  this.rate = rate;

  this.getCredit = function () {
    if (this.rate === "A") {
      let credit = 12 * this.salary;
      return credit;
    } else if (this.rate === "B") {
      let credit = 9 * this.salary;
      return credit;
    } else if (this.rate === "C") {
      let credit = 6 * this.salary;
      return credit;
    } else {
      let credit = 0 * this.salary;
      return credit;
    }
  };
}

const ivan = new Student("Ivan", 3000, "C");
const petr = new Student("Petr", 2000, "A");
const alex = new Student("Alex", 2700, "C");
const john = new Student("John", 3700, "D");
const steve = new Student("Steve", 5500, "B");

let students = [ivan, petr, alex, john, steve];

console.log(students);

const sum = creditSum(students);
console.log(`Sum of credit for all group ${sum}`);

//task2
taskCounter(advanced);

const vowels = ["a", "e", "i", "o", "u"];

function deleteVowels(str) {
  let newString = "";

  for (let j = 0; j < str.length; j++) {
    let flag = 1;
    let el = str[j].toLowerCase();

    for (let i = 0; i < vowels.length; i++) {
      if (el === vowels[i]) {
        flag = 0;
        break;
      }
    }
    if (flag) {
      newString += str[j];
    }
  }

  return newString;
}

const trollStr = "This website is for losers LOL!";
const newStr = deleteVowels(trollStr);

console.log(trollStr);
console.log(newStr);

//task3
taskCounter(advanced);

function repeatLettersString(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      newStr += str[i].toLowerCase();
    }
    if (i !== str.length - 1) newStr += "-";
  }
  return newStr;
}

function repeatLettersArray(str) {
  let arr = [...str];
  let newArr = [];
  for (const el of arr) {
    let letter = el.toUpperCase();
    for (let i = 0; i < arr.indexOf(el); i++) {
      letter += el.toLowerCase();
    }
    newArr.push(letter);
  }

  return newArr.join("-");
}

const str = prompt("Enter any string");
if (!isNaN(str)) {
  throw new Error("Enter only string!");
}
const newString = repeatLettersString(str);
const newStrArr = repeatLettersArray(str);

console.log("Input string: " + str);
console.log("Output by string: " + newString);
console.log("Output by array(all letters must be different in this method): " + newStrArr);

//task4
taskCounter(advanced);

function MaxMinNumber(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let element = "";

    while (str[i] != " " && i < str.length) {
      element += str[i];
      i++;
    }
    arr.push(element);
  }

  let max = arr[0],
    min = max;
  for (let i = 0; i < arr.length; i++) {
    if (max <= Number(arr[i])) {
      max = arr[i];
    }
    if (min >= Number(arr[i])) {
      min = arr[i];
    }
  }
  return `${max} ${min}`;
}
const string = prompt("Enter numbers with space between them (like '1 -5 6')");
if (string.trim() === "") {
  throw new Error("Enter only numbers");
}
const result = MaxMinNumber(string);
console.log("Input numbers: " + string);
console.log("Max and min numbers: " + result);

//task5
taskCounter(advanced);

function isogramma(str) {
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    for (let j = i + 1; j < str.length; j++) {
      if (letter === str[j].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}

const testStr = prompt("Enter any string:");
if (!isNaN(testStr) && testStr != "") {
  throw new Error("Enter only string!");
}
console.log("Your string: " + testStr);
if (isogramma(testStr)) {
  console.log("Your string is isogramm");
} else {
  console.log("Your string is not isogramm");
}

//task6
taskCounter(advanced);

function charCode(str) {
  let charCodeStr = "";
  for (let i = 0; i < str.length; i++) {
    charCodeStr += str[i].charCodeAt();
  }
  return charCodeStr;
}
function sevenToOne(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "7") {
      newStr += "1";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
const strCode = prompt("Enter any string:");
if (!isNaN(strCode)) {
  throw new Error("Enter only string!");
}
const total1 = charCode(strCode);
const total2 = sevenToOne(total1);
const totalResult = total1 - total2;

console.log("Your string: " + strCode);

console.log("Different between code to chars: " + totalResult);

//task7
taskCounter(advanced);

function dublicate(str) {
  //first way by string
  let bracketStr = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    let element = "(";

    for (let j = 0; j < str.length; j++) {
      if (i === j) continue;
      else {
        if (letter === str[j].toLowerCase()) {
          element = ")";
          break;
        }
      }
    }
    bracketStr += element;
  }

  return bracketStr;

  //second way by object
  /*  let bracketStr = "";
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    let quantity = 1;

    if (typeof obj[letter] !== "undefined") continue;
    else {
      for (let j = i + 1; j < str.length; j++) {
        if (letter === str[j].toLowerCase()) quantity++;
      }
      obj[letter] = quantity;
    }
  }
  for (let i = 0; i < str.length; i++) {
    let element = "(";
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    for (let j = 0; j < keys.length; j++) {
      if (str[i].toLowerCase() === keys[j]) {
        if (values[j] > 1) element = ")";
        break;
      }
    }
    bracketStr += element;
  }

  return bracketStr; */
}

const dublicateStr = prompt("Enter any string:");

if (dublicateStr === null || dublicateStr === "") {
  throw new Error("Enter any string!");
}

const dublicateResult = dublicate(dublicateStr);

console.log("Your string: " + dublicateStr);
console.log("Brackets analog: " + dublicateResult);
