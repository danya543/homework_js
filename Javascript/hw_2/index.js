//task1
const x = 20;
const y = 58;
const z = 42;
console.log(x+y+z);
//task2
const secondsInMinute=60;
const minutesInHour=60;
const hoursInDay=24;
const daysInYear=365;
const myAgeInSeconds=19*daysInYear*hoursInDay*minutesInHour*secondsInMinute;
console.log(myAgeInSeconds,'seconds');
//task3
const count = 42;
const userName = '42';
const charInteger=parseInt(userName);
const countChar=count.toString();
const charInteger1=Number(userName);
const countChar1=''+count;
console.log(charInteger,countChar,charInteger1,countChar1);
//task4
const a = 1;
const b = 2;
const c = "белых медведей";
console.log(`${a}${b} ${c}`);
//task5
const first='доступ';
const second='морпех';
const third='наледь';
const fourth='попрек';
const fiveth='рубило';
console.log((first+second+third+fourth+fiveth).length);
//task6
const var1=20;
const var2='hello';
const var3=true;
console.log('Variable: var1 have type:'+ typeof(var1))
console.log('Variable: var2 have type:'+ typeof(var2))
console.log('Variable: var3 have type:'+ typeof(var3))
//task7
const yourName=prompt('Enter your name');
const yourAge=prompt('Enter your age');
console.log(`Hello ${yourName}, you're ${yourAge}`);
//advanced tasks
//task1
let one = 4;
let two = 3;
one=one+two;
two=one-two;
one=one-two;
console.log(one,two);
//task2
const codeWord1 = "обернись";
const codeWord2 = "неужели";
const codeWord3 = "огурцы";
const codeWord4 = "липкие";
const codeWord5 = "?!";
const cipher=codeWord1[1]+codeWord2[1]+codeWord3[1]+codeWord4[1]+codeWord5[1];
console.log(cipher);
