// LIFE & callback function
// 1. IIFE (Imdeiately Invoked Function Expression)
//  self-executing anonymous function

// (function (){
//     console.log('hello world');
// })();

// // IIFE with parameter & return value
// let output = (function (fullName) {
//     return 'Hello ' + fullName;
// })('John Doe');
// console.log(output);

// 2. Callback function
// function passed into another function as an argument
// greetings(function() {
//     console.log('hello callback');
// });

// callback with parameter & return value
function greetings(callback){
    let result = callback('john doe');
    return result;
}
// callback function must be anonymous function
let output = greetings(function (fullName){
    console.log('hello '+ fullName);
});

console.log(output);

// Exercise #01
// buat program untuk menghitung BMI dengan menggunakan
// IIFE & Callback
