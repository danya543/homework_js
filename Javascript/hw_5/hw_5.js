//task1
/*const example = {
  height: 500,
  width: 300,
};

delete example.width;
delete example.height;

//task2
const twokeys = {
  image: 500,
  shape: "triangle",
};

const nameOfKey = prompt("Enter name of key");
for (const key in twokeys) {
  if (key === nameOfKey) {
    console.log("true");
    break;
  } else {
    console.log("false");
  }
}

//task3
const student = {
  name: "John",
  age: 19,
  isHappy: true,
};

let flag = 1;
for (let i = 0; i <= 1; i++) {
  for (const key in student) {
    if (flag) {
      console.log(key);
    } else {
      console.log(student[key]);
    }
  }
  flag = 0;
}
//task4
const colors = {
  "ru pum pu ru rum": {
    red: "красный",
    green: "зеленый",
    blue: "синий",
  },
};

for (const key in colors["ru pum pu ru rum"]) {
  if (key === "red") {
    console.log(colors["ru pum pu ru rum"].red);
  }
  if (key === "blue") {
    console.log(colors["ru pum pu ru rum"].blue);
  }
}

//task5
let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  tom: 664,
  alexandra: 199,
};

let i = 0;
let averageSalary = 0;
for (const key in salaries) {
  averageSalary += +salaries[key];
  i++;
}

averageSalary /= i;
console.log(averageSalary);

//task6
const login = prompt("Введите свой логин");
const passWord = prompt("Введите свой пароль");
const user = {
  login: login,
  password: passWord,
};

let flag = 1;
const checkLogin = prompt("Введите логин еще раз");
const checkPassWord = prompt("Введите пароль еще раз");
for (const key in user) {
  if (key === "login") {
    if (user[key] != checkLogin) {
      flag = 0;
    }
  } else if (key === "password") {
    if (user[key] != checkPassWord) {
      flag = 0;
    }
  }
}

if (flag) {
  console.log("Добро пожаловать");
} else {
  console.log("Вы ввели неверные данные");
}

//advanced level
//task1
const score = {
  1: "один",
  2: "два",
  3: "три",
  4: "четыре",
  5: "пять",
  6: "шесть",
  7: "семь",
  8: "восемь",
  9: "девять",
  0: "ноль",
};

const inputScore = prompt(`Введите счет матча (в формате '2:5')`);
if (!isNaN(inputScore)) {
  throw new Error("Вы ввели пустую строку!");
}
for (let i = 0; i < inputScore.length; i += 2) {
  if (isNaN(inputScore[i])) {
    throw new Error("Вы ввели неверные данные");
  }
}

let result = "Счет матча";
for (let i = 0; i < inputScore.length; i += 2) {
  for (const key in score) {
    if (inputScore[i] === key) {
      result = result + " " + score[key];
    }
  }
}
console.log(result);
*/
//task2
function compareKeys(key1, flag) {
  for (const key2 in student2) {
    if (key1 === key2) {
      flag = compareValues(key1, key2);
      return flag;
    }
  }
}
function compareValues(key1, key2) {
  if (student1[key1] === student2[key2]) {
    flag = 1;
    return flag;
  }
}

let student1 = {
  name: "Polina",
  age: 27,
};
let student2 = {
  name: "Polina",
  age: 27,
};

let flag = 0;
let i = 0;
for (const key1 in student1) {
  flag += compareKeys(key1, flag);
  i++;
}
if (flag / i === 1) {
  console.log("Objects are the same");
} else {
  console.log(`Objects are different`);
}

//task3
const animals = {
  cat: {
    name: "Енчик",
    age: 3,
  },
  dog: {
    name: "Орео",
    age: 2,
  },
};
const birdName = prompt("Enter bird name");
console.log(animals.bird?.name);
console.log("All good!");
