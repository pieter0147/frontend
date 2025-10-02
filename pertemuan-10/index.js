// Rest Parameter & Spread Operator
// 1. Rest Parameter
// a. Rest Parameter bertipe data array
const funct1 = (param1, param2, ...rest) => {
    console.log(param1, param2);
    console.log(rest);
};         

funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

// Mini Exercise
// Buatlah fungsi yang dapat menjumlahkan semua nilai
// pada argument fungsi

// const addNumber = (...numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// };
// console.log(addNumber(1,2,3,4,5,6,7,8,9,10))

const penjumlahan = (...rest) => {
    let hasil = 0;
    rest.forEach((item) => (hasil += item))
    console.log(hasil);       
};
penjumlahan(1,2,3,4,5);

// 2. Spread Operator
// Berkaitan dengan Array & Object
const numbers = [1,2,3,4,5];
console.log(numbers);
console.log(...numbers);

// Kegunaan spread operator pada array
// 1. Duplikasi array
const numbers2 = {...numbers};
console.log(numbers2)

// 2. menggbungkan array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let combinedArr1 = arr1.concat(arr2, arr3);
console.log(combinedArr1);
let combinedArr2 = [...arr1, ...arr2, ...arr3];
console.log(combinedArr2);

// Kegunaan Spread Operator pada Object
// 1. Duplikasi
const student1 = {
    fullName: 'John',
    status: 'active'
};

const student2 = {...student1, address: 'Manado'};
console.log(student2);

// 2. Menggabungkan Object
let obj1 ={a: 1, b:2};
let obj2 ={c: 3, d:4};

let combinedObject = {...obj1, ...obj2};
console.log(combinedObject);

