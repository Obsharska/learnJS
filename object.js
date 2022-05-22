// objects
// let soldier = {
//     name: 'alina',
//     age: 20,
//     power: '65%',
//     skills: ['shooting','karate']
// }

// soldier.newValue = 'test'
// delete soldier.age

// console.log(soldier)
// console.log(
//     Object.keys(soldier)
// )
// console.log(
//     Object.values(soldier)
// )


// перребор обєкта
// console.log(soldier["name"])
// for (let i in soldier){
//     console.log('--key--',i)
//     console.log('--value--',soldier[i])
//     console.log('======')
// }

// 5 зробити обєкт кввіта який буде мати якісь ключі та значення, вивести в консоль
//  його ключі та значення як я показував

let flower = {
    name: 'lilac',
    color: 'violet', 
    price: 100
}

delete flower.color

for (let f in flower){
    console.log('key',f)
    console.log('value',flower[f])
    console.log('---')
}