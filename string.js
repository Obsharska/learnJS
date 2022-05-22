// // string and конкатенация js
// let beautiful = false

// // let lookLike

// if (beautiful === true){
//     lookLike = 'beautiful'
// } else {
//     lookLike = 'bad'
// }

// // let string = Alina is a ${lookLike} girl

// console.log(string)

// let string = 'string'
// console.log(string[1])
// for (let i = 0; i<string.length; i++){
//     console.log(string[i])
// }

// don't working because of immutable
// string[0] = 'w'
// console.log(string)

//but in arrays you can
// let arr = [1,2,3]
// arr[0] = '22'
// console.log(arr)


//---

//split розбиває строку на масив по розділювачу а join її по розділювачу назад збирає в строку
// string = string.split('')
// string[0] = '___'
// string = string.join('')
// console.log(string)




// 6 зробити строку 'person alina' де alina це зімнна name (використовувати
//     конткатенацію)
//  розбити цю строку на масив та поміняти alina на назар 
//  потім через джоін вернути масив  в строку
let name = 'alina'

let person = `person ${name} girls ${name}`


person = person.split(' ')
// person[1] = 'nazar'
// person[3] = 'nazar'

for(let i = 0; i<person.length; i++){
    if(person[i] === 'alina'){
        person[i] = 'nazar'
    }
}



person = person.join('- - ')
console.log(person)