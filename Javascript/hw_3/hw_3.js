//task1
const a='true';
const b=false;
const c=17;
const d=undefined;
const e=null;
console.log(a+' '+typeof(a)+'\n'+b+' '+typeof(b)+'\n'+c+' '+typeof(c)+'\n'+d+' '+typeof(d)+'\n'+e+' '+typeof(e));
//task2
const height = 15;
const width = 20;
if(height>width){console.log(height);}
else{console.log(width);};
//task3
for(let i=1;i<21;i++){
    if(i%3===0){console.log(i)}
};
//task4
const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;
const shouldGoToWork = (key && documents && pen) && (apple || orange);
if(shouldGoToWork){console.log('You can go to work');}
else{console.log('You have forgot something')};
//task5
let num=prompt('Write any digit');
num=parseInt(num);
if((num%5==0) && (num%3===0)){alert('FizBuz');}
else if(num%5==0){alert('Fiz');}
else if(num%3==0){alert('Buz');};
//task6
let age=prompt('Write your age');
age=parseInt(age);
if(age>=18){console.log('Попей пивка')}
else if(age>=16){console.log('Можешь выкурить сигаретку, только маме не говори')}
else {console.log('Пей колу')}
//task7
let sideOfWorld=prompt('Enter any side of the world');
sideOfWorld=sideOfWorld.toLowerCase(sideOfWorld);
switch(sideOfWorld){
case "юг":{console.log('на юг пойдешь счастье найдешь');break;}
case "север":{console.log('на север пойдешь много денег найдешь');break;}
case "запад":{console.log('на запад пойдешь верного друга найдешь');break;}
case "восток":{console.log('на восток пойдешь разработчиком станешь');break;}
default:{console.log('Try one more time');break;}
}
//advanced level tasks
//task1
let yourName=prompt('Enter your name');
let yourSurName=prompt('Enter your surname');
yourName=yourName.toLowerCase();
yourName=yourName[0].toUpperCase()+ yourName.substring(1);

yourSurName=yourSurName.toLowerCase();
yourSurName=yourSurName[0].toUpperCase()+ yourSurName.substring(1);
alert(`Привет, ${yourName} ${yourSurName}`);
//task2
let startNumber=prompt('Enter any number');
startNumber=Number(startNumber);

let subtrahend=prompt('Enter subtrahend');
subtrahend=Number(subtrahend);
let finishNumber=startNumber-subtrahend;

let addend=prompt('Enter addend');
addend=Number(addend);
finishNumber+=addend;

let multiplier=prompt('Enter multiplier');
multiplier=Number(multiplier);
finishNumber*=multiplier;

let divider=prompt('Enter divider');
divider=Number(divider);
finishNumber/=divider;

alert(`((${startNumber} - ${subtrahend} + ${addend}) * ${multiplier}) / ${divider} = ${finishNumber}`);
//task3
let line=String();
for(let j=6;j>0;j--){
for (let i=j;i<7;i++){line+='#';}
line+='\n'
}
console.log(line);
