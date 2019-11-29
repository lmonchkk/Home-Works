'use strict';

// Проверка на бесконечность isFinite \ Проверка на число isNaN

console.log( isNaN(NaN) ); // true

// Вначалк она преобразует к числу переданные данные и потом определит число ли это

let text = "Привет";
console.log( isNaN(text) ); // text

// NaN не равен ничему другому и даже себе

console.log(NaN === NaN); // false


console.log( isFinite('15') ); // true

// Сначала преобразует к числу переданные данные и потом возвращает true если это число

// Иногда isFinite используют для проверки - нет ли числа в строке


// pasreInt и parseFloat

// pasreInt - отделяет число от текста в строке (трока должна начинаться с числа)

console.log( parseInt('100px') ); // 100

// parseFloat - работает так же, только сохраняет ещё и дробную часть числа

console.log( parseFloat('12.5em') ); // 12.5

// Учитывается только первая точка

console.log( parseInt('12.3') ); // 12
console.log( parseFloat('12.2.3') ); // 12.2

// Если переданный текст начинается с буквы, то функия вернёт none

console.log('a123'); // NaN

/*
    У parseInt есть ещё второй параметр, оторый можно ередать систему исчисления в котрой записаны передаваемые данные
*/

console.log( parseInt('ff', 16)); // 255


// Math.random() - генерирует псевдослучайное в диапазоне от 0 до 1 ( не включая еденицу )

console.log( Math.random() );

function getRadom(min, max){
    return Math.round( Math.random() * (max - min) + min );
}

console.log( getRadom( 0, 1000) );

// Math.max(a, b, c .....) \ Math.min(a, b, c .....)

console.log( Math.max(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20) );
console.log( Math.max(1,20,3,45656,5,6,456,89,9,101234,11,612,183,14,155,16,177,18,199,20) );

// Math.pow(n, power) - возвращает число n, возведённое в степень power


console.log( Math.pow(2, 10) ); // 1024 (возводит первое число в степень второго)



// Строки

let bigtext = `Привет
Как дела
Хорошо`;
console.log( bigtext );

// Спецсимволы

/*
    n\ - перенос строки
    Чтобы вставить текст в спецсимвол нжно перед ним поставить \ (Экранировать его)

    \uXXXX - для вставни символов Unicode
*/

let str = 'Hello\nWorld';

console.log( str );

console.log( '\u00A9');
console.log( '\u{1F60D}');

//Свойсво - Длина строки (length)

console.log( 'text text text text text text'.length ); // 9 узнаём сколько букв в тексте

let str2 = 'hello';

console.log( str2[0] ); // H

console.log( str2.charAt(2) ); // 1

console.log( str2.lenght-1); // o (5-1 = 4)

/*
    Если символ по номер x отсуствует, то вернётся undefined, а в случае с charAt вернётся пустая строка
*/

console.log( str2[500] ); // undefined

console.log(str2.charAt(5000) ); // ''

// Строку можно перебрать посимвольно с помощью for...of

for(let char of 'Hello'){
    console.log( char );
}

// Строки не изменяемые - Нельзя поменять значение символа в строке, обратившись к нему
// str[3] = 'b' - так нельзя

/*
    Изменение регистра
    toUpperCase() - переводит в верхний регистр буквы
    toLowerCase() - перевод в нижний регистр
*/

// Поиск подстроки

// str.indexOf(substr) - ищет подстроку substr в строке str, начиная с позиции n/ и возвращает позицию либо -1 если ничего не найдено

let str3 = 'Widget with id';
console.log( str3.indexOf('Widget') ); // 0
console.log( str3.indexOf('widget') ); // -1
console.log( str3.indexOf('id') ); // 1

// у функции есть второй необязательный аргумент, он позволяет указать с какого символа начинать поиск

console.log( str3.indexOf('id', 2) ); // 0

// Есть также аналогичная функция, только ищет с конца. Она называется lastIndexOf(substr, n)


// Функция includes - возвращает true, если в строке есть подстрока, либо false если нет

console.log( str3.includes('Widget') ); // true

// Также есть второй необязательный параметр - задаёт от какого числа начать поиск - includes(str, pos)

// startsWith() \ endsWidth()
// Определяет начинает или заканчивается строка оределёнными символами

console.log( str3.startsWith('Wid') ); // true
console.log( str3.endsWith('id') ); // true



// Получение подстроки (substring \ substr \ slice)

// slice(start, end) - возвращает часть строки от start до end (не включая end)

let str4 = 'stringify';

console.log( str4.slice(0, 5) ); // 'strin'

//Если end не указан, то вернёт строку от start и до конца

console.log( str4.slice(5) ); // 'gify'

// также можно передать отрицательно значение and и start

console.log( str4.slice(-4, -1) ); // 'gif'

// Отрицательные значения работают наоборот, start будет подсчитывать с конца, а end с конца

// substring(start, end) - возвращает часть строки между start  end, это почти то же что и slice, только можно задать start  больше чем end

console.log( str4.substring(2, 6) ); // 'ring'
console.log( str4.substring(6, 2) ); // 'ring'

// Отрицательные значения не поддерживаются, они преобразовуются в 0

// substr(start, length) - возвращает часть строки от start длинной length

console.log( str4.substr(2, 4) ); // 'ring'

// Значение start может быть отрицательным, тогда начало будет с конца

// codePointAt(pos)

console.log( 'zddfsg'.codePointAt(0) ); // 122
console.log( 'Zddfsg'.codePointAt(0) ); // 90

//fromCodePoint(code)

console.log( String.fromCodePoint(90) ); // 'Z'


// Массивы

let arr = new Array();
let arr2 = [];

let fruits = ['Яблоко', 'Апельсин', 'Слива'];

console.log ( fruits[1] ); // Апельсин

fruits[2] = 'Банан';
console.log( fruits );
console.log( fruits.length ); // 3 - Длина массивва или количество элементов в массиве

fruits[90] = 'Груша';
console.log( fruits.length ); // 91
console.log( fruits );

fruits[fruits.length] = 'Киви';
console.log( fruits );


// В массив можно записывать любые типы данных

let arr3 = [
    'Яблоко',
    { name: 'Иван'},
    true,
    function(){ return true; },
    9999
]

console.log( arr3 );
console.log( arr3[1].name );

// Метод pop\push\shift\unshift

// push - добавляет элемент в конец массива
arr3.push('Привет');

// pop - последний эдемент из массиваи возвращает его
let delete_item = arr3.pop();
console.log(delete_item); // Привет

// shift - удаляет из массиа первый элемент и возвращает его
let delete_first_item = arr3.shift();
console.log(delete_first_item); // 'Яблоко'

// unshift - добавляет элемент в начало массива
arr3.unshift(false);
console.log(arr3);

//Методы push и unshift могут добавить сразу несколько объектов, если их передать через запятую

arr3.push('Гранат', 'Лайм');

// Перебор элементов массива

for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let fruit of arr3){
    console.log(fruit);
}














console.log( '\u042D\u043B\u043B\u0438');


// The End