// functions
/*Зачастую нам надо повторять одно и то же действие во многих частях программы.

    Например, необходимо красиво вывести сообщение при приветствии посетителя, при выходе посетителя с сайта, ещё где-нибудь.

    Чтобы не повторять один и тот же код во многих местах, придуманы функции. Функции являются основными «строительными блоками» программы.

    Примеры встроенных функций вы уже видели – это alert(message), prompt(message, default) и confirm(question). Но можно создавать и свои.*/

//функція яка буде приймати на вхід кількість гривень і буде повертати кількість гивень в курсі долара
// тобто вона на вхід приймає число, курс долара і поевертає теж число(кількість долаірв)
// тобі треба її дописати :)

/*
  ***UAN:number
  ***COURSE:number
  return dollars
*/

function curranceCalculattor(UAN, COURSE) {
    let dollars //... дописати
    return dollars
}

function sum(a, b) {
    return a + b
}

let sumFunctionResult = sum(2, 3)
console.log('----->sumFunctionResult<-----', sumFunctionResult)

function womanCalories(weigtn,height,age){
    // Женская формула: 10 х вес + 6,25 х рост – 5 х возраст – 161;
    let callories = null
    callories = 10 * weigtn + 6.25 * height * age
        // ... дороббити і випраивити)))
    return callories + ' callories'
}

console.log(
    womanCalories(60,160,20),
)
console.log(
    womanCalories(70,180,22),
)