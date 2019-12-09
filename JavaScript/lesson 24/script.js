'use strict';
function c(text){
    console.log(text);
} // C - ЭТО CONSOLE.LOG


// Автоиспаравление дат

let date = new Date(2013, 0, 32);
c( date ); // 1 февраля 2013

date.setDate( date.getDate() + 2 );
c( date ); // 3 февраля 2013

date.setDate(1); // 1 февраля 2013
date.setDate(0); // 31 января 2013
c(date);


// Преобразование даты к числу, разность дат

let start = new Date();
for(let i = 0; i < 100000; i++){
    let doSomething = i * i * i;
}

let end = new Date();

c(`Цикл выполнялся ${end - start} миллисекунд`);

// Date.now() - возвращает метку времени в миллисекундах от первого 1.01.1970 до текущего момента

let date2 = new Date();
c( +date2 ); // Дата преобразуется к числу в миллисекунды как date2.getTime()

// Разбор строки с датой

let ms = Date.parse('2012-01-25T13:41:50.345-07:00');
c(ms);


// Функции  массивов - find \ findIndex
// find(item, index, array) - функция, которая перебираетт все элементы массива и возвращает значение ячейки, если произошло совпадение

let users = [
    {id:1, name:'Василий'},
    {id:2, name:'Петр'},
    {id:3, name:'Маша'},
]

let user = users.find( item =>item.id == 3 );

/*
    users.find{
        function(item){
            if(item.id == 1)
            return true;
        }
    }
*/

c( user.name );

// findIndex - делает то же самое но возвращает индекс элемента, а не значение

// filter(item, index, array) - ищет один или несколько элементов, если коллбэк функция возвращает true и вернёт в результате массив найденых 
// элементов

let someUsers = users.filter( item => item.id < 3);
c( someUsers );

// Преобразование массива

// Функция map(item, index, array) - вызывает коллбэк функцию для каждого элемента по очереди и возвращает результат этой фнукции

let lengths = ['Bilbo', 'Gendalf', 'Nazgul'].map( item => item.length);
c(length);

// sort(fn);

let arr = [ 1, 2, 15 ];

arr.sort();

c(arr); // 1, 15, 2
// По умолчанию элементы сортируются как строки

function compare(a, b){
    if( a > b) return 1;
    if( a == b) return 0;
    if(a < b) return -1;
}
arr.sort(compare);
c( arr ); // 1, 2, 15

function compare2(a, b){
    return a - b;
}

arr.sort( (a,b) => a-b);


// Функция reverse - переворачивает массив задом наперёд

let arr2 = [1, 2, 3, 4, 45, 6, 658, 678];
arr2.reverse();
c(arr2);

// Функция split \ join

// split(delim) - принимает разделитель, котрый будет служить разделителем между словами

let names = 'Вася, Эля, Алиса';
let arr3 = names.split(', ');
c( arr3 );

// У split также есть второй необязательный аргумент, которым можно ограничить число элементов в массиве

let arr4 = names.split(' ', 2);
c(arr4);

let arr5 = names.split(''); // Если указан простой разделитель - split разделит посимвольно
c(arr5);

// Функция reduse \ reduseRight

// Используется если вам нужно вычислить единое значение, которое изменяется с ходом всех итераций

let arr6 = [1, 2, 3, 4, 5];

let result = arr6.reduce( ( sum, current) => sum + current, 0 );

c(result); // 15

// reduseRight - только идёт по массиву с конца
// Array.isArray - функция обнаружения массива

c( typeof {} ); // object, объект
c( typeof [] ); // тоже object, массив

c( Array.isArray( {} ) ); // false
c( Array.isArray( [] ) ); // true

// THE END (по массивам)
