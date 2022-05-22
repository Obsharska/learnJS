// https://learn.javascript.ru/types-intro

// 1 number
let n = 123;
n = 12.345;
console.log(n)
 

// 2 bigInt
// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// 3 string
let str = "Мама мыла раму";
str = 'Одинарные кавычки тоже подойдут';

// 4 boolean
let checked = true; // поле формы помечено галочкой
checked = false;    // поле формы не содержит галочки
 
// 5 null
let age = null;
console.log(typeof age)

// 6 undefined
let x;
// alert( x ); // выведет "undefined"

// 7 symbol
// Создаём новый символ - id
let id = Symbol();
console.log(typeof id)

// 8 object
let user = { name: 123 + "Вася"};
console.log( user.name)

