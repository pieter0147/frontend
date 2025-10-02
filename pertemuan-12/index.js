// Asynchronus JavaScript

// Synchronus -> single thread -> blocking
console.log("Hello 1");
console.log("Hello 2");
console.log("Hello 3"); //proses yang memakan waktu lama
console.log("Hello 4");

//Asynchronus -> multi thread -> non blocking
// 1. Parallel
setTimeout(() => {
  console.log("Hello 1");
}, 4000);
setTimeout(() => {
  console.log("Hello 2");
}, 2000);
setTimeout(() => {
  console.log("Hello 3");
}, 5000);
setTimeout(() => {
  console.log("Hello 4");
}, 1000);

// 2. Concurrent
setTimeout

// Promise
let condition = false
const newPromise = new Promise((resolve, reject) => {
    if(condition) {
        resolve('Berhasil');
    } else {
        reject('Gagal');
    }
});

// Cara menggunakan Promise
// 1. the - catch
newPromise
.then((result) => `${result} !!!`) // proses 1
.then((result2) => console.log(result2)) // proses 2
.catch((error) => console.log(error));

// 2. async/await
// Buat didalam fungsi

// const getData = async () => {
//     const result = await newPromise;
//     console.log(result);
// };
// getData();


const getData = async () => {
    try{
    const result = await newPromise;
    console.log(result);
    } catch

};
getData();

// Mini Exercise
// Ubah the-catch diatas dengan menggunakan async/await
// dan tampilkan field name saja

fetch("https://jsonplacehodler.typicode.com/users")
    .then((result) => result.json())
    .then((json) => console.log(json));

const getUsers = async () => {
    const result = await fetch('https://jsonplacehodler.typicode.com/users');
    const json = await result.json();
    json.forEach(({ name }) => console.log(name));
};
getUsers();

