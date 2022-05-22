// string and конкатенация js
// let beautiful = false
//
// let lookLike
//
// if (beautiful === true){
//     lookLike = 'beautiful'
// } else {
//     lookLike = 'bad'
// }
//
// let string = Alina is a ${lookLike} girl
//
// console.log(string)

let string = 'string'
// console.log(string[1])
// for (let i = 0; i<string.length; i++){
//     console.log(string[i])
// }

// don't working because of immutable
string[0] = 'w'
console.log(string)

//but in arrays you can
let arr = [1,2,3]
arr[0] = '22'
// console.log(arr)


//---

//split розбиває строку на масив по розділювачу а join її по розділювачу назад збирає в строку
string = string.split('')
string[0] = '___'
string = string.join('')
console.log(string)