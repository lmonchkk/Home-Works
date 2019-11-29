'use strict';

// Тип данных Symbol (Символ)

/*
    Символ представляет собой уникальный идентификатор
*/

let id = Symbol();

let id2 = Symbol('id');

let id3 = Symbol('id');

console.log( id2 === id3); // false

// Символ никогда не преобразуется в строки

console.log( id2 ); // Здесь вывелось значение

console.log( id2.toString() ); //Symbol('id') Здесь вывклся текст

// Создание скрытых свойств объекта

let id4 = Symbol( 'id');

let user = {
    name: "Вася"
};

user[id4] = 1;
user[id3] = 2;

console.log( user );

// Свойства объекта, объявленное через символ игнорируется циклом for...in

for( let name in user){
    console.log( name + ': ' + user[name]);
}


// Глобальные символы

let id5 = Symbol.for('newid');
// Если символ с таким именем(идентификатором) отсутствует, то он создасться

let id6 = Symbol.for('newid');
// В глобльной области уже есть такой символ, поэтому он запишет его адрес в переменную

console.log(id5 == id6 ); // true


// Функция поиска симолов по значению

let sym = Symbol.for('name');
let sym2 = Symbol.for('age');

console.log( Symbol.keyFor(sym) ); // name 
console.log( Symbol.keyFor(sym2) ); // age


// Метод объекта , 'this'

let car = {
    name: 'Mazda',
    maxspeed: 200,
    'current distance': 0,
    drive: function(){
        this['current distance']+=100;
        console.log( this['current distance'] + ' изменился');
    }
};

car.drive();
car.drive();
car.drive();

car.stop = function(){
    console.log('Машина остановилась');
}

car.stop();

// у стрелочных функций нет 'this', поэтому она не будет работать в объекте


// Преобразование объекта к примитивам

// При выводк в alert или console.log объект преобразуется к строке

console.log( car );
console.log( Number(car) ); // NaN


// Конструкторы(создание объектов через 'new')

/*
    1) Имя функции-конструктора должно начинаться с большой буквы 
    2) Функция-конструктор должна вызываться при помощи оператора new
*/

function User(username){
    this.name = username;
    this.isAdmin = false;
};

let user_1 = new User('Андрей');
console.log( user_1 );

console.log(user_1.name); // Андрей
console.log(user_1.isAdmin); // false


// Методы примитивов

/*
    Это функции(методы), котрые описаны в объектах примитивов и позволяют делать различные с этими объектами
*/

let str = 'Привет';

console.log( str.toUpperCase() ); //Привет

/*
    function String(...){
        ...
        toUpperCase: function(...){...}
    }
*/

// Числа

let billion = 1e9; // 1 миллиард ( 1 и девять нулей)
let ms = 1e-6; //Нули в обратную сторону 0.000001

// Поддериживается Шестнадцатиричная система
console.log( 0xff ); // 255 0x - обозначение шестнадцатириичного; ff - само число

// Бинарная 
let a = 0b11111111; // 255 0b - обозначение бинарной системы; 11111111 - само число

// Восьмиричная форма
let b = 0o377; // 255 0o - обозначние восьмиричной системы; 277 - само число
console.log( a == b); // true

// Метод toString(base) - возвращаеь строковое обозначение числа в системе base

let num = 255;
console.log(num.toString(16) ); //ff

// Максимальная система счисления 36



// Округление чисел

let num2 = 3.1;

console.log( Math.floor(num2) ); // 3 - округление в меньшую сторону
console.log( Math.ceil(num2) ); // 4 - округление в большую сторону
console.log( Math.round(num2) ); // 3 - округление до ближайшего целого
console.log( Math.trunc(num2) ); // 3 - удаляет дробную часть (Не поддерживается Internet Explorer)


// Округление до x знаков

let num3 = 1.123456

console.log( Math.floor(num3 * 100 / 100) ); // 1.123456 -> 123.456 -> 123 -> 1.23

// Метод to fixed(n) - округляет число до n знаков

let num4 = 12.34;
console.log( num4.toFixed(1) ); // 12.3

let num5 = 12.36;
console.log( num5.toFixed(1) ); // 12.4 Округляет 6

/*
    Посе применения toFixed возвращается текст, а не число
    При обрезании используется дополнительно метод round
    Если у числа после запятой меньше знаков, чем указано в toFixed(n), то в результате будут добавлениы нули в конце числа
*/

let num6 = 12.34;
console.log( num6.toFixed(6) ); // '12.340000'

// Неточные вычисления

// Если число слишком большое, то оно выведется как бесконечность

console.log( 1e500 ); // Infinity( Бесконечость )


console.log( 0.1 + 0.2 == 0.3 ); // false
console.log( 0.1 + 0.2 ); // 0.30000000000000004

console.log( 0.1.toFixed(20) ); // 0.1


// Способ 1
let sum2 = 0.1 + 0.2;
console.log( +sum2.toFixed(2) ); // 0.3

// Способ 2
console.log((0.1 * 10 + 0.2 * 10) / 19); // 0.3

//Но лучше использовать способ 1 потому что второй не идеален

console.log( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

console.log( 9999999999999999 ); // 10000000000000000 погрешность в еденицу
