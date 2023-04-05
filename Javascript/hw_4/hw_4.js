//task1
function getSum(n = 10) {
  let sum = 0;
  if (!isNaN(sum)) {
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  } else {
    throw new Error("You shold enter number");
  }
}
const n = prompt("Enter number");
const sumResult = getSum(n);
console.log(sumResult);
//task2
function credit(sum) {
  const years = 5;
  const betPerMonth = 0.17 / 12;
  const monthPay = (sum * betPerMonth) / (1 - 1 / (1 + betPerMonth) ** (years * 12));
  let totalAmount = 0;
  for (let i = 1; i <= years * 12; i++) {
    totalAmount += monthPay;
  }
  let division = totalAmount - sum;
  return division;
}
const creditSum = prompt("Enter sum of credit");
if (isNaN(creditSum)) {
  throw new Error("You should enter number");
} else {
  const overPay = credit(creditSum);
  console.log(`Overpayment of credit ${overPay}`);
}
//task3
function trimString(str, start, end) {
  for (let i = 0; i < str.length; i++) {
    if (i + 1 === start) {
      let result = "";
      do {
        result += str[i];
        i++;
      } while (i != end);
      return result;
    }
  }
}
const string = prompt("Enter any string");
const firstSymbol = Number(prompt("Enter first symbol"));
const lastSymbol = Number(prompt("Enter last symbol"));
if (
  firstSymbol > 0 &&
  lastSymbol > 0 &&
  firstSymbol <= lastSymbol &&
  firstSymbol <= string.length &&
  lastSymbol <= string.length &&
  string.length != 0
) {
  const finalStr = String(trimString(string, firstSymbol, lastSymbol));
  console.log(finalStr);
} else {
  throw new Error("You enter wrong properties");
}
//task4
function getSumNumbers(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (isNaN(Number(number[i]))) {
      throw new Error("You should write only numbers");
    } else {
      sum += Number(number[i]);
    }
  }
  return sum;
}
const num = prompt("Enter any number");
const sumOfDigits = getSumNumbers(num);
console.log(`Sum of digits in number ${num} = ${sumOfDigits}`);

//task5
function getSum(a, b) {
  if (a === b) {
    return a;
  }
  if (a > b) {
    [b, a] = [(a, b)];
  }
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
const firstNumber = Number(prompt("Enter first number"));
const secondNumber = Number(prompt("Enter second number"));
let summary;
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  if (firstNumber <= secondNumber) {
    summary = getSum(firstNumber, secondNumber);
    console.log(`Sum of all numbers between ${firstNumber} and ${secondNumber} is ${summary}`);
  } else {
    summary = getSum(secondNumber, firstNumber);
    console.log(`Sum of all numbers between ${secondNumber} and ${firstNumber} is ${summary}`);
  }
} else {
  throw new Error("You must type only numbers");
}
//task6
function foo() {
  return "foo";
}
function boo() {
  return "boo";
}
function fooboo(bool, foo, boo) {
  if (bool) {
    console.log(foo);
  } else {
    console.log(boo);
  }
}
const bool = confirm("Choose true or false");
fooboo(bool, foo(), boo());
//advanced level
//task1
function maxSide(a, b, c) {
  let max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }

  if (max === c) {
    return triangle(max, a, b);
  }
  if (max === b) {
    return triangle(max, a, c);
  }
  if (max === a) {
    return triangle(max, b, c);
  }
}
function triangle(max, a, b) {
  if (a + b > max) {
    console.log(`We can build a triangle with sides ${a} ${b} ${max}`);
  } else {
    console.log(`We can't build a triangle with sides ${a} ${b} ${max}`);
  }
}
const a = Number(prompt("Enter length of side of triangle"));
const b = Number(prompt("Enter length of other side of triangle"));
const c = Number(prompt("Enter length of last side of triangle"));
maxSide(a, b, c);
//task2
function chocolateShare(a, b) {
  let numFault = a * b - 1;
  return numFault;
}
const height = Number(prompt("Enter height of chocolate"));
const width = Number(prompt("Enter width of chocolate"));
if (width <= 0 || height <= 0) {
  throw new Error("You should write only numbers > 0");
} else {
  const fault = chocolateShare(height, width);
  console.log(fault);
}
//task3
function round(num) {
  let result = (Math.round(num * 100) / 100).toFixed(2);
  result += "$";

  return result;
}

function onlyPhones(phonePrice, tax, balance) {
  let quantity = 0;
  let startBalance = balance;

  while (balance >= phonePrice * (1 + tax)) {
    balance -= phonePrice * (1 + tax);
    quantity++;
  }

  let sumOfTax = round(quantity * phonePrice * tax);
  let result = startBalance - balance;
  result = round(result);
  balance = round(balance);

  console.log(
    `You bought ${quantity} phones\nAnd pay for this ${result} tax in this ${sumOfTax}\nYou have left ${balance}`
  );
}

function onlyAccessories(accessoryPrice, tax, balance) {
  let quantity = 0;
  let startBalance = balance;

  while (balance >= accessoryPrice * (1 + tax)) {
    balance -= accessoryPrice * (1 + tax);
    quantity++;
  }

  let sumOfTax = round(quantity * accessoryPrice * tax);
  let result = startBalance - balance;
  result = round(result);
  balance = round(balance);

  console.log(
    `You bought ${quantity} accessories\nAnd pay for this ${result} tax in this ${sumOfTax}\nYou have left ${balance}`
  );
}

function bothProducts(phonePrice, accessoryPrice, tax, balance) {
  let quantity = 0;
  let startBalance = balance;
  let flag = 0;

  while (balance >= (phonePrice + accessoryPrice) * (1 + tax)) {
    balance -= (phonePrice + accessoryPrice) * (1 + tax);
    quantity++;
  }

  let sumOfTax = round(quantity * (phonePrice + accessoryPrice) * tax);
  let quantityPhone = quantity;
  let quantityAccessory = quantity;

  if (balance >= phonePrice * (1 + tax)) {
    if (confirm("Do you want to buy only phone")) {
      balance -= phonePrice * (1 + tax);
      quantityPhone += 1;
      flag = 1;
      sumOfTax = round((quantityPhone * phonePrice + quantity * accessoryPrice) * tax);
    }
  } else if (balance >= accessoryPrice * (1 + tax)) {
    if (confirm("Do you want to buy only accessory")) {
      balance -= accessoryPrice * (1 + tax);
      quantityAccessory += 1;
      flag = 0;
      sumOfTax = round((quantity * phonePrice + quantityAccessory * accessoryPrice) * tax);
    }
  }

  let result = startBalance - balance;
  result = round(result);
  balance = round(balance);

  if (flag) {
    console.log(
      `You bought ${quantityPhone} phones and ${quantity} accessories for them\nAnd pay for this ${result} tax in this ${sumOfTax}\nYou have left ${balance}`
    );
  } else if (!flag) {
    console.log(
      `You bought ${quantity} phones and ${quantityAccessory} accessories for them\nAnd pay for this ${result} tax in this ${sumOfTax}\nYou have left ${balance}`
    );
  } else {
    console.log(
      `You bought ${quantity} phones and accessories for them\nAnd pay for this ${result} tax in this ${sumOfTax}\nYou have left ${balance}`
    );
  }
}

function calculation(phonePrice, accessoryPrice, tax, balance) {
  if (confirm("Do you want to buy only phones")) {
    onlyPhones(phonePrice, tax, balance);
  } else if (confirm("Do you want to buy only accessories")) {
    onlyAccessories(accessoryPrice, tax, balance);
  } else {
    alert("You will buy both products");
    bothProducts(phonePrice, accessoryPrice, tax, balance);
  }
}

let tax = 0.2;
if (confirm(`Change default tax (${tax * 100}%)`)) {
  tax = Number(prompt("Enter tax in percents"));
  tax /= 100;
}

let phonePrice = 1500;
if (confirm(`Change price of phone ${phonePrice}$`)) {
  phonePrice = Number(prompt("Enter price of phone"));
}

let accessoryPrice = 250;
if (confirm(`Change price of accessory ${accessoryPrice}$`)) {
  accessoryPrice = Number(prompt("Enter price of accessory"));
}

let balance = Number(
  prompt(
    `Price of phone: ${phonePrice}$ \nPrice of accessories: ${accessoryPrice}$\nTax: ${
      tax * 100
    }%\nEnter your card balance`
  )
);

calculation(phonePrice, accessoryPrice, tax, balance);
