'use srtict';

// Объекты - коприрование по ссылке

let name = 'Иван';
let user = name;

let obj1 = {
    'name' : 'Иван',
    'age' : 25
};

let obj2 = obj1; // В obj запишется не объект, а ссылка на объект


obj2.name = "Александр";
console.log( obj1.name ); // Александр



// Клонирование объектов

let clone ={};

for( let key in obj1 ){
    clone[key] = obj1[key];
}

clone.name = 'Игорь';
console.log( clone );

// Object.assing - склеивание объектов


let obj3 = { name : 'Петр' };

let premission1 = { canView : true };
let premission2 = { canEdit : false };

Object.assign( obj3, premission1, premission2);
console.log ( obj3 );

// Длинна массива ( length )

/*
let fruits = [];
fruits[123] = 'Яблоко';
*/

let arr3 = [1,2,3,4,5,6,7,8,43,64];

arr3.length = 3;

console.log( arr3 );

// создание массвива через new Array()

let arr4 = new Array('Яблоко', 'Груша', 'Апельсин');

let arr = new Array(4); // Создастся пустой массив на 4 пустые ячейки


// Многомерные массивы( матрица )

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log( matrix[1][1] ); // 5

// Преобразование массива в string

let arr6 = [1, 2, 3];

console.log( String(arr6) ); // '1,2,3'

console.log( [] + 1 ); // '1'
console.log( [6] + 1 ); // '61'
console.log( [1, 2] + 1 ); // '1,21'

/*
    с массивом работают те же функции что и с объектом
    push \ pop \ shift \ unshift
*/

// Функция массива splice - это функция удаления из массива

let arr7 = ['1', 'hello', 'name'];

arr7.splice(1, 1); // Первым параметром передаём с какого элемента удалить, а вторым - сколько элементов удалить
console.log( arr7 );

let deleted = arr7.splice(0, 2, 'Яблочко', 'Грушка');

console.log( arr7 );

console.log( deleted );


arr7.splice(1, 0, 1, 3, 6);
console.log( arr7 );


// Метод slice(start, end) - возвращае новый массив и копирует в него элементы начиная от start и до end (не включая end)

let arr8 = ['h', 'e', 'l', 'l', 'o'];

console.log( arr8.slice(1, 3) ); 


// Метод concat - соединение массивов

let arr9 = [];
console.log( arr9.concat(arr8, arr7, 12) );

// Перебор массива forEach - позволяет запустить функцию для каждого отдельно элемента массива

/*
    item - это текущий элемпент итерации
    index - порядковый номер итерации
    array - это массив с котоиым мы работаем (ссылка на массив)
*/

arr7.forEach(function(item, index, array){
    console.log( index + ' ' + item + ' ' + array);
    arr7[index] += '1';
});

console.log( arr7 );



