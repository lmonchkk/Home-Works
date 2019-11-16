// Оператор присваивания (=)

let x = 2 * 3 - 1; // 5
let y = 2 * (3 - 1); // 4

let a, b, c;
a = b = c = 2 + 2; // 4 Запишется во все переменные сразу ( c b a )

let z = 3 - (a = b + 1); // -2 Так записывать можно (приоритетность выше)

// Оператор = возвращает значение, а не только присваивает.


// Оператор остатка от деления (%)
console.log(6 % 3); // 0
console.log(5 % 2); // 1
console.log(8 % 3); // 2


// Возведение в степень (**)
console.log( 2 ** 2); // 4 
console.log(2 ** 4); // 16
console.log(2 ** (1/2) ); // 2 - Квадратный корень из четырёх


// Инкримент\декремент (++)

// Инкремент - оператор, который увеличиваетчисло на еденицу
let counter= 2;
counter++;
console.log( counter ); //3

//Декремент - оператор, который уменьшает число на 1 (--)
counter--;
console.log( counter ); //2

//Инкремент\декремент можно применять только к переменным

/*
    Эти операторы могут быть расположены не только после переменной, но и до
    Расположенные после называются "постфиксная форма"
    А расположенные до называются "Префиксная форма"
*/

let counter2 = 1;
let number = ++counter2;
console.log( number ) // 2
// В этом выражении сначала выполниться префиксная форма инкремента, а потом присваивание

let counter3 = 10;
let number2 = counter3++;
console.log( number2 ); // 10
console.log( counter3 ); // 11
//В этом выражении сначала выполниться присваивание, а потом постфиксная форма инкримента


// Сокращённая арифметика

let n = 5;
n = n * 5; // 25
n *= 5; // Сокращённое умножение
console.log( n );
/*

+=
-=
*=
/=
%=

*/

let m = 2;
m *= 3 + 5; // 16(сначала выполняется выражение, а потом сокращённый оператор) В этом выражении сначала выполниться сложение, а потом умножение 
console.log( m );


// Оператор запятая (,)
// Используется для перечисления
let g = (2, 3, 4, 5); // 5 Запишется последний результат
g = (1 + 2, 3 + 4); // Запишется 7(3+4)


// Операторы сравнения

// Оператор больше\меньше ( > , < )

console.log( 2 > 1 ); // true
// Любая операция в результате возвращает логические значение (булевое)
// Оператор больше\меньше или равно

console.log(10 >= 10 ); //true


// Оператор равенства (==)
console.log(5 == 10); // false

// Оператор НЕ равно (!=)

console.log( 5 != 10 ); //true

// Любая операция возвращает результат

let result = 5 > 4; //true

console.log( result );


// Сравнение строк
// Сравнение строк происходит по принципу посимвольного сравнения
/*
    Учитываются порядковые номера символов к таблице Юникод. Чем номер больше, тем старше и символ
*/
console.log( "Я" > "А"); //true
console.log( "Кот" > "Код"); // true
console.log("Сонный" > "Сон"); // true Сонный больше так как у него больше символов
console.log( "Банан" > "Апельсин"); // true

// Сравнение разных типов данных
// При сравнении разных типов JS приводит каждый из них к числу

console.log("2" > 1); // true
console.log("01" == 1); // true
console.log( true == 1); // true


// Строгое равенство  (===)
// При строгом равенстве не работает преобразование к числу, данные сравниваются и по значению и по типу. Если типы разные, то всегда будет false
console.log( true === 1); //false
console.log( 1 === 1); //true
console.log( "1" === "1"); //true

// Есть также оператор строгог неравенства !==

/*
    Оператор равенства (==) не различает 0 от falsе, пустую строку от false
*/

//    Сравнение с null и underfined

console.log(null === undefined);
// Они не равны потому что у них разные типы

console.log(null == undefined);
// true - они преобразуются она в false, соответсвенно они равны


// Странный результат сравнения null и 0
console.log( null > 0); //false
console.log( null >= 0); //true


// Несравнимые значения undefined
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined = 0); //false


// Взаемодействие с пользователем

/*
    Модальное окно - это информационное окно, которое появляется поверх контента и не позволяет с ним взаимодействовать пока это окно открыто
*/

alert('Hello world');

//promt( заголовок, значение_по_умолчанию );

/*
    promt - модальное окно, которое запрашивает у пользователя ввети данные. В результате подтверждения эти данные можно записать в переменную
    Форма вернёт null если пользователь нажмёт "отмена" или закрое. Для кроссбраузерности желательно указывать зачения по умолчанию хотя бы пустое
*/

let text_from_user = prompt("Сколько Вам лет?", '18');
console.log( text_from_user );

/*
    confirm - модальное окно, котрое спрашивает пользователя Да\Нет (Ок\Отмена)
    И в результате возвращает true или false
    
*/

let question = confirm("Сегодня понедельник?");

console.log( question );


//Оператор если (if)

let fruit = "Апельсин";
if (fruit == "Апельсин"){
    console.log("Почистить");
} else {
    console.log("Выбрать другой");
}

// Всё, что происходит в круглых скобках if перед проверкой приводиться к булевому значению

if(1){

}

// Несколько условий else if()

let year = 2015;
if(year < 2015){
    console.log("Слишком рано");
} else if(year > 2016){
    console.log("Слишком поздно");
} else{
    console.log("Верно");
}

// Конструкций else if может быть множество
// Проверка закончиться на том моменте, когда будет соблюдено условие 



// Условный оператор (?) - тернарный оператор

let accessAllowed;
let age = 18;

if(age>=18){
    accessAllowed=true;
} else{
    accessAllowed = false;
}

console.log(accessAllowed);

/*
     let result = условие ? занчение1 : значение2;
*/

accessAllowed = (age >= 18) ? true : false;


// Несколько операторов "?"

let message = (age < 3 )? 'Здравствуй, малыш!': (age < 18) ? "Привет" : (age < 100) ? "Здравствуйте" : "Какой необычный возраст";
console.log(message);



// Оператор ИЛИ ( || )

// Оператор ИЛИ позволяет делать конструкции проверок, которых может быть несколько сравнений
// Оператор ИЛИ находит первое истинное значение. (Он запинается на правде)

let items = 9;
if(items > 10 || items < 10){
    console.log("НЕ верно");
} else{
    console.log("верно");
}

console.log(null || 1); //Выведет 1 т.к. 1 это true
console.log(1 || 0); //Выведет 1 т.к. запнулся на истине


// Оператор И (&&)

//Оператор И находит первое ложное значение, он запинается на лжи

console.log( true && true ); //true
console.log( true && false ); //false
console.log( false && false ); //true
console.log( false && true ); //true

let hours = 12;
let minutes = 30;
if( hours == 12 && minutes == 30){
    console.log('Пора обедать')ж
}

