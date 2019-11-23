'use strict';

// №1

let a = 1;
if(a === 1){
    console.log("Верно");
} else{
    console.log("Неверно");
}

let a2 = '1';
if(a2 === 1){
    console.log("Верно");
} else{
    console.log("Неверно");
}

let a3 = 3;
if(a3 === 1){
    console.log("Верно");
} else{
    console.log("Неверно");
}

// №2

let item = false;

if(item != true){
    console.log("'Верно'");
} else{
    console.log("'Неверно'");
}


let item2 = (item = !true )? "'Верно'": "'Неверно'";
console.log(item2);

// №3

let a4 = 4;
if(a4 > 0, a4 < 4 ){
    console.log("'Верно'");
} else{
    console.log("'Неверно'");
}

let a5 = 0;
if(a5 > 0, a5 < 4 ){
    console.log("'Верно'");
} else{
    console.log("'Неверно'");
}

let a6 = -3;
if(a6 > 0, a6 < 4 ){
    console.log("'Верно'");
} else{
    console.log("'Неверно'");
}

let a7 = 2;
if(a7 > 0, a7 < 4 ){
    console.log("'Верно'");
} else{
    console.log("'Неверно'");
}

// №4

let a8;
let b;
if(a8 > 3, a8 < 12 || b >= 7, b < 15 ){
    console.log("'Верно'");
} else{
    console.log("'Неверно'");
}

// №5 

let month = 12;

if (month == 1 || 2 && month == 12 ){
    console.log('Зима');
}if (month>=3 && month<=5){
    console.log('Весна');
}if (month>=6 && month<=8){
    console.log('Лето');
}if (month>=9 && month<=11){
    console.log('Осень');
}
// №6
let number = 0;

for(;;){
    if(number>=100){break;}
number=number+2;
console.log(number);
}
