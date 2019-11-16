'use  strict'; // Её желательно вписывать в каждом докумете

// alert("Hello World"); // ; - это разделитель между командами, её желательно ставить;

let message;

message = 10;

console.log(message);

let message2 = 20;

message = 30;

console.log(message);


let user = 'Ellie', age = 14, height = 180; // Множестенное присваивание

let hello;

hello = user;

console.log(hello); //Ellie


const COLOR_ITEM = "#fff";



// типы данных

let number = 10; // целое число

let number2 = 34.567; // число с плавающей точкой

// Существует спец-значение для бесконечности - это Infinity \ -Infinity

console.log(1 / 0); // Infinity

console.log( -1 / 0 ); // -Infinity


// Если мы не число делис на число, то поучиться NaN (Not a Number)

console.log( "не число" / 10);
// NaN



// Строки как тип данных (String)

message = "Привет";
message = 'Привет';
message = `${message} Андрей`;

console.log(message);

let x = 10, y = 20;
console.log( `${x + y} человек`); // 30

// 'f', ' ' - это строка, в отличии от некоторых других языков, пробел это тоже символ.


// Булевый(логический) (Boolen) Как тип данных

// Поддерживает два типа значений - true\false (Правда\ложь)

let nameChecked = true;

let isGreater = 4 > 1;

console.log(isGreater)

// Специальное значение null

/*
    Не относться ни к одному типу данных и представляет собой 'ничего' \ 'пусто' \ 'значение неизвестно'
*/

let weight=null;



// Специальное значени underfined

/* 
    Также не относиться ни к одному типу данных. Если объявлена переменная и в неё ничего не записано, то в ней храниться значение underfined
*/

let z;

console.log(z);


/*
    РЕКОМЕНДУЕТСЯ ИСПОЛЬЗОВАТЬ NULL Я ОПРЕДЕЛЕНИЕ ПУСТОЙ ПЕРЕМЕННОЙ, А UNDERFINED БУДЕТ ПОКАЗТЕЛЕН ЧТО В ПЕРЕМЕННУЮ НИЧЕГО НЕ ЗАПИСЫВВАЛОСЬ
*/

/*
    Все типы, которые мы описали выше это преметивы.

    Тип данных Объект(Objekt) - особенный тип данных который может хранить все типы данных сразу

    Тип символ (symbol) - использкется для уникальных идентификаторов переменных.
*/


/*
    Оператор typeof - Нужен для определения типа данных аргумента, либо данных, хранящихся в перемных
*/

console.log( typeof 0 ); //number
console.log( typeof z ); //underfined

console.log( typeof null ); // obejct - Это ошибка в языке програмирования



// Строковое преобразование

let value = true;
console.log( typeof value ); //Boolean

value = String(value); // 'true'
console.log( typeof value ); // String


//Числовое преобразоваие

/*
    Числовое преобразование србатывает, кога в выражении учавствуют числа или происходит математическое действие
*/

console.log( '6'/ '2' );
// 3

let text = '123';

let number3 = Number(text);

console.log(number3); // 123

console.log(Number('Привет') ); // NaN

/*
    underfined > NaN
    null > 0
    true > 1
    false > 0
*/

console.log( Number('                       1234                 ') ); //1234

console.log(Number('123n') ); // NaN

console.log( 1 + '2'); //12
/*
    Если один из операндов строка то при сложении, произойдёт конкатенация(присоединение) слов
*/

// Логическое преобразование

/*
    Значение типа 'пустые', 0, пустая строка, null, underfined И NaN преобразуются в false
    Все остальные в true
*/

console.log(Boolean(1) ); //true
console.log(Boolean(0) ); //false

console.log(Boolean('0') ); //true
console.log(Boolean(' ') ); //true


//Операторы
/*
    Операнд - то, к чему применяется оператор
    Унарный оператор - когда оператор применяется только к одному операнду
    Бинарный оператор - когда применяется к двум операндам
*/

let g = 1 ;
g = -g; // -1 \ Унарный оператор

g = 2-1; // 1 \ Бинарный оператор


// Сложение строк (Бинарный +)

text = 'моя' + 'прелесть'
console.log(text); // Моя прелесть

console.log( 2 + 3 + '1'); //51

console.log( '2' - 1 ); // 1 ( Происходит преобразование к числу )

console.log( '6' / '3'); 
// 2 ( Происходит преобразование к числу )


// Преобразоваение к числу (унарный +)

number = 1;
console.log( +number ); // 1 (Не влияет на положительно число)

number = -1;
console.log( +number ); // 1 (Преобразование в положительное)

console.log( +true ); //1 ( Произойдёт преобразование к числу)

console.log( +'' ); // 0 ( Пустая строка = 0 )

console.log( +'число' ); // NaN (Всё что не число = NaN)


let apples = '2';
let oranges = '4';

console.log( apples + oranges ); // 24
console.log( +apples + +oranges ); // 6
