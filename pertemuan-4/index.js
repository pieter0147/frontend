// // Javascript function
// // 1.function decelration

// function greetings(){
//     console.log('hello world')
// }

// greetings() //call function

// // 2. function expression
// const greetings2 = function (){
//     console.log('hello world')
// }

// greetings2()

// Function with input (argument & parameter)
// and out (return value)

// //                 parameter
// function greetings(fullName, age){
//     return+'hello'+fullName
// }
// //         argument
// greetings('John Doe', 20)
// console.log(output)

// // cara 2
// const greetings2 = function(fullName){
//     return 'hello' + fullName
// }

// let output2 = greetings2 ('Jane Doe')
//     console.log(output2)

// // global, local, block scope variable
// let x = 10 //global variable
// console.log(x)
// function func1(){
//     let y = 20 // local variable
//     console.log(x)
//     console.log(y)
//     if(true){
//         let z = 30
//         console.log(x)
//         console.log(y)
//         console.log(z)
//     }
//     console.log(z) //error
// }
// console.log(y)
// func1()

// mini excercise
// memodifikasi mini exercise terakhir tenteang menghitung BMI
// dengan menggunakan function dimana verta dan tinggi

function calculate(berat, tinggi){
    let bmi = berat / (tinggi*tinggi)
    return hasil = BMI > 25 ? "BMI anda: " + BMI + ", Kategori kelebihan berat badan" : "normal"
}

let out = calculate(90, 1.83)
console.log(output)

