'use strict';

// #1
function isNumberInRange(x){
if (x > 0 && x < 10) {return('true');}
else {return('false');}
}
console.log(isNumberInRange(10));

// #2

function isEven(z){
if( z % 2 == 0 ){return('true')}
else{return('false')}
}
console.log(isEven(6));

//3


var value = +prompt('value?','0');
switch(value){
case 0:
    alert( 0 );
    break
case 1:
    alert( 1 );
    break
case 2:
    alert( '2,3' );
    break
case 3:
    alert( '2,3' );
    break
}
//4

function min(a,b)
{
if( a < b ){return b;}
else if( a > b ){return a;}
}
console.log(min(8, 16));