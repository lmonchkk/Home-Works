'use  strict';

// Логтческий оператор НЕ (!)

let result = true;

console.log( result ); // True
console.log( !result ); // False

/*
    1) В начале произойдёт преобразование к булевому значению
    2) Переворачивает значение наоборот
*/

console.log(!false); // True

// Двойной восклицательный знак используется для преобразования к булевому значению

console.log(!!"non-empty-string"); // True тоже самое что Boolean("non-empty-string");
console.log(!"non-empty-string"); // False

/*
    Приоритет восклицательного знака самый большой средт логических операторов, он будет выполняться перед операторами && и ||
*/

if( !result === false ){ // true (!result равно false)

}

//Циклы While

// Используется для повтрения однотипных действий

let number = 0;

while ( number < 10){
    console.log(number);
    number++;
}
/*
Итерация - одно выполнения тела цикла
*/

let number2 = 5;

while(number2){
    console.log(number2);
    number2--;
}

// цикл do ... while

/*
    Тоже самое что while, только проверка условия происходит в онце итерации, сначала ыполниться тело цикла, а потом проверка условия
*/

let number3 = 0;

do{
    console.log(number3);
    number3++;

}while(number3 < 3);

// Тело цикла выполниться хотя бы один раз 100%

// Цикл for

for (let i = 0; i < 3; i++){
    console.log("Коробка " + i);
}

/*
    for( начало; условие; шаг;){ тело цикла }

    1) Начало - выполниться один раз в начале цикла
    2) Условие - проверяется перед каждой итерацией
    3) Шаг - выполняется перед каждой итерацией
    4) Тело цикла - выполняется бесконечно, пока условие true
*/

let b;
for(b = 0; b < 3; b++){

}

console.log(b); // 3

// console.log(i); - это ошибка, переменные, объявленные внутри скобок не видны за их пределами


// Посмотреть раздел "Пропуск частей for"


// Прерывание циклов (break)

let number4 = 0;

while(true){
    let value = +prompt('Введите число', '');

    if(!value){break;}
    number4+=value;
}

console.log(number4); // Сумма введённых чисел

//Переход к следующей итерации

/*
    continue - облегчённая версия break. При её выполнении цикл не останавливается а просто переходит к следующей итерации
*/

for(let i = 0; i < 10; i++){
    if( i%2 == 0){continue};
    console.log(i);
}
/*
    break и continue нельзя использовать в тернарном операторе
*/


// Конструкция switch

/*
    Конструкция switch заменяет собой сразу несколько if
*/

let n = 1;
let number5 = 4;

switch(number5){
    case 3:
        console.log('Маловато');
    case 4:
        console.log('В точку');
        break;
    case 5:
    case '6':
        console.log('Перебор');
        break;
    default:
        console.log('Нет таких значений')
}

/*
Кейсы, записанные один под другим называбтся группировеой кейсов.
Обычно они выполняют одно и то же действие.
Значение Switch сравнивается по строгому равенству!!!
*/

// Функции

function showMessage(){
    console.log('Привет');
}

showMessage();
showMessage();
showMessage();


// Локальные переменные функции

/*
    Это переменные, объявленные внутри функции
    Это переменные, которые не доступны снаружи функции
*/

function showMessage2(){
    let name = 'Иван';

    console.log(`привет ${name}`);
}

showMessage2();

// console.log(name) - это будет ошибка, так как переменная не доступна за пределами функции

// Внешние переменные
// У функций есть доступ ко всем внешним переменным

let userName = 'Петр';

function showMessage3(){
    console.log('Привет ' + userName);
}

showMessage(3);

// Помимо доступа к переменным все что произойдёт с переменной внутри сохраняется, то есть у функции есть возможность изменять переменные

function showMessage4(){
    username = 'Александр';
    console.log('Привет, ' + userName);
}

console.log(userName); //Петр
showMessage4();
console.log(userName); //Александр


let user = 'Андрей';
function showMessage5(){
    let user = 'Валерий';
    console.log('привет, ' + user);
}

console.log(user); // Андрей
showMessage5(); // привет, Валерий
console.log(user); //Андрей

/*
Переменные, объявленные внутри функции - самостоятельные и не связвны с внешними.
*/


// Параметры функции

let chatname = 'Вика';

function showMessage6(from, text){
    console.log(from + ': ' + text);
}

showMessage6( 'Аня', 'Привет'); // Аня: Привет
showMessage6(chatname, 'Как дела?'); //Вика: Как дела?

showMessage6('Аня'); // Аня undefined

/*
Параметры внутри функции видны как локальные переменные. Меняя их мы не меняем переменную с таким же именем
*/

// Параметры по умолчанию


function showMessage7(from, text = 'Текст по умолчанию'){
    // text = text || 'Текст по умолчанию'
    console.log(from + ': ' + text);
}

showMessage7('Виталий'); // Виталий: текст по умолчанию
showMessage7('Виталий', 'Привет'); // Виталий: Привет



