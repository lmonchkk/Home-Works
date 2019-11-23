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

