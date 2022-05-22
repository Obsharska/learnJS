// objects
let soldier = {
    name: 'alina',
    age: 20,
    power: '65%',
    skills: ['shooting','karate']
}

soldier.newValue = 'test'
delete soldier.age

// console.log(soldier)
// console.log(
//     Object.keys(soldier)
// )
// console.log(
//     Object.values(soldier)
// )


// перребор обєкта
// console.log(soldier["name"])
for (let i in soldier){
    console.log('--key--',i)
    console.log('--value--',soldier[i])
    console.log('======')
}