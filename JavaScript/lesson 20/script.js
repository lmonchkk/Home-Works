'use  strict';

function c(text){
console.log(text);
}
// Возврат значения фукциями(return)

function sum(a, b){
    return a + b;
}

console.log( sum(10, 20) ); // 30

let resultSum = sum(10, 20);

console.log( resultSum );


/*
    При срабатывании return происходит тоже что и при break, но дополнительно ещё возвращается значение, переданное через return
*/


function checkAge(age){
    if(age > 18){
    return true;
}else{
    return false;
}}

console.log( checkAge(22) ); // true

/*
    return можно использовать и без значения. Тогда он сработает как break (просто завершит выполнение функции)

    Функция с путым return вернёт underfined
    Функция без return вернёт тоже underfined
*/

function doNothing(){}


c( doNothing() ); //underfined

function doNothing2(){ return; }

c( doNothing2() ); // underfined

// Никогда не добавляйте перенос строки между return и значением

/*
    Именования функций

    1) В имени функции должно содержаться действие и имя того над чем производиться действие
    Например:
    showMessge
    getAge
    createAccount
    checkPremission
    .....

    2) Функции нужно создавать с условием, что она выполняет какое-то одно действие. Даже если функции будут выполняться вместе
    Например:
    Функция showMessage выполняет две другие функции showName и Showtext
    Функция стирать(для стрир. машинки) будет содержать функции Залить_воду \ Залить_порошок \ Вращать_барабан \ Слить_воду
    Нужно комментировать действие, происходящее в функциях, описывая этапы работы, принимание значения, возвращаемые значения...
*/

/*
    function showMessage(){ showName() }
        function showName(){ getUserName() }
            function getUserName(){}


        showText(){ getUserText() }
            function getUserText(){}
*/


// Function expressions (Функциональные выражения)

/*
    Синтаксис функции, который мы записывали ранее называется Function Declaration
    (Объявление функции)
*/

let sayHi = function(){
    c('Привет')
};

sayHi(); // Привет

c( sayHi ); //Выведет тело функции

let copySayHi = sayHi; // Запишет тело функции в переменную и теперь она будет работать также.

copySayHi();


// Функции - коллбеки

// Это процесс передачи функции как значения

function ask(question, yes, no){
    if(confirm(question)){
        yes();
    } else{
        no();
    }
}

function showOK(){
    confirm('Вы согласны');
}

function showCancel(){
    confirm('Вы не согласны');
}

ask('Вы согласны?', showOK, showCancel);
ask('Вы согласны?', function(){c('Вы согласны?');}, function(){c('Вы не согласны');});

// Функции, передаваетмые в другую фукцию это как значение, представляющее 'действие'

// Различия function expression и functio declaration

/*
    function expression создаётся когда выполнение коад доходит до неё и в последствии может запускаться
    function declaration может использоваться сразу во всём скрипте

    При строгои режиме(use strict), когда function declaration находиться в блоке{....}, эта функция доступна только внутри этого блока.
    Но не снаружи его
*/

let age2 = 19;
if(age2 >= 18) {
    function welcome(){
        c('Добро пожаловать');
    }

    welcome();
}

// welcome(); - будет ошибка - эта функция доступна только внутри скобок.


let copyWelcome;

if( age2 >= 18 ){

    copyWelcome = function (){
        c('Добро пожаловать');
    }

    copyWelcome();
}

copyWelcome();

// Функции-стрелки (стрелочные функции)

let sum2 = (a, b) => a+b;

c( sum2(20, 43) ); // 63

//ТЕЛО СТАРЕЛОЧНОЙ ФУНКЦИИ СРАЗУ ВОЗРАЩАЕТ ЗНАЧЕНИЕ (ВСТРОЕННЫЙ return)

// Если использовать только один аргумент, то можно не ставить скобки

let double = n => n*2;
c( double(6) ); // 12

// Если аргумента нет, то нужно указывать пустые скобки

let sayHello = () => c('Hello');

sayHello();

// Многострочные стрелочные функции

let sum3 = (a, b) => {
    let result = a + b;
    return result; // В многострочном варианте return не встроен и нужно его указывать
};

c( sum3( 14, 44)); // 58

// Тип данных Объекты

// это очень удобный инструмент для создания иерархии (Шкаф => Ящичек) :)

let user = new Object(); // Способ 1
let use2 = {}; // Способ 2 (Литеральная нотация) 
// Между первым и вторым способом есть разница

let user3 = {
    name : 'Иван',
    age : 30,
    height : 180
};

// Свойства объекта также называют полями объекта

// Получение или обращение к свойствам объекта

/*с(user3.name); //Иван
с(user3); // Выведет все поля объекта, но только первого уровня

ПОЧЕМУ-ТО НЕ РАБОТАЕТ, ПОЭТОМУ ЗАКОММЕНТИРОВАНО

// Если название свойства состоит из нескольких слов, то название нужно брать в кавычки */
let user4 = {
    'name' : 'John',
    'home adress' : 'Poltava'
};

c( user4['home adress'] ); // Poltava

/*
    чтобы обратитьься к свойству с названием больше чем из одного слова, нужно соблюдать такой синтаксис 
    ['название_свойства']
    Этот способ также позволяет обратиться к свойству, передавая вместо имени пременную
*/

let option_name = 'home_adress';

c( user4[option_name]); // Poltava

// Вычесляемые свойства

let fruit = prompt('Какой фрукт купить?', 'apple');
let bag = {
    [fruit] : 5 // Имя свойства будет взято из переменной fruit
};

c( bag.apple );
c( bag );


// Удаление из объекта

delete user3.height; // Удаление свойства height в объекте user3

c( user3 );

// Добавление свойства в объект

user3.isAdmin = true;

c( user3 );


// Проверка на существование свойства

let user5 = {
    age : 19
};

c( user5.name === underfined ); //true

c( 'name' in user5); //false
c( 'age' in user5); // true


// Цикл for .... in 

/*
    Нужен для перебора свойств объектов
    Иммет вид:
    for( key in object){

    }
    key - переменная, куда на каждой итерации будет попадать имя текущего свойства
    object - имя объекта, который мы перебираем
*/

for(let key in user3){
    c( key + ': ' + user3[key]  );
}


