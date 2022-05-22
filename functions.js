// functions
/*Зачастую нам надо повторять одно и то же действие во многих частях программы.

    Например, необходимо красиво вывести сообщение при приветствии посетителя,
     при выходе посетителя с сайта, ещё где-нибудь.

    Чтобы не повторять один и тот же код во многих местах, придуманы функции. 
    Функции являются основными «строительными блоками» программы.

    Примеры встроенных функций вы уже видели – это alert(message), prompt(message, 
        default) и confirm(question). Но можно создавать и свои.*/

//функція яка буде приймати на вхід кількість гривень і буде повертати кількість
//  гивень в курсі долара
// // тобто вона на вхід приймає число, курс долара і поевертає теж число(кількість 
// долаірв)
// тобі треба її дописати :)

/*
  ***UAN:number
  ***COURSE:number
  return dollars
*/

function curranceCalculattor(UAN, COURSE) {
    let dollars = 1
    console.log(
        {
           UAN: UAN,
           COURSE: COURSE
        }
    )

    return {dollars}
}

console.log(
    curranceCalculattor(10,29)
)

// function sum(a, b) {
//     return a + b
// }

// let sumFunctionResult = sum(2, 3)
// console.log('----->sumFunctionResult<-----', sumFunctionResult)

// function womanCalories(weigtn,height,age){
//     // Женская формула: 10 х вес + 6,25 х рост – 5 х возраст – 161;
//     let callories = null
//     callories = 10 * weigtn + 6.25 * height * age
//         // ... дороббити і випраивити)))
//     return callories + ' callories'
// }

// console.log(
//     womanCalories(60,160,20),
// )
// console.log(
//     womanCalories(70,180,22),
// )



// 2 дописати функції плюс написати функцію для
//   качків -  Калькулятор максимального веса жима лежа тут дивись приклад
//    https://wpcalc.com/zhim-lezha/
// функція приймає на вхід вагу штанги і кількість повторів(тобто скільки ти разів
//      зможеш пожати цю вагу) а повертає разовий максимум

// function BenchPressMaximumWeightCalculator(weight,NumberOfRepetitions){
//     //     Максимальный вес (1RM) = (-1.89 ) + (1.16 x W) + (1.68 x R)
//     let onetimeMaximum = null
//     onetimeMaximum = (-1.89 ) + (1.16 * weight) + (1.68 * NumberOfRepetitions )
//     return onetimeMaximum + 'onetimeMaximum '
// }

// console.log(
//     BenchPressMaximumWeightCalculator(55,20)
// )