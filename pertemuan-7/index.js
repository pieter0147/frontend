// Javascript conditional & loop
// 1. javascript conditional

// if - else
let suhu = 35;
if (suhu >= 38) {
  console.log("suhu panas");
} else {
  console.log("suhu normal");
}

// if - else if - else
// jika nilai 91 - 100 = A
// jika nilai 81 - 90 = b
// jika nilai 71 - 10 = c
// jika nilai <= 70 = 0
let nilai = 80;
if (nilai >= 91 && nilai <= 100) {
  console.log("A");
} else if (nilai >= 81 && nilai <= 100) {
  console.log("B");
} else if (nilai >= 71 && nilai <= 80) {
  console.log("C");
} else if (nilai <= 70) {
  console.log("D");
} else console.log("Out of Range");

// switch-case
let hari = 1;
switch (hari) {
  case 1: // if (hari === 1)
    console.log("hari minggu");
    break;
  case 2:
    console.log("hari senin");
    break;
  case 3:
    console.log("hari selasa");
    break;
  case 4:
    console.log("hari rabu");
    break;
  case 5:
    console.log("hari kamis");
    break;
  case 6:
    console.log("hari jumat");
    break;
  case 7:
    console.log("hari sabtu");
    break;
}

// 2. Javascript

// for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// while loop
// let i = 1;
// while (1 <= 10) {
//     console.log(i);
//     i++;
// }

// do while loop
// let i = 1;
// do{
//     console.log(i)
//     i++
// } while (i <= 10);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// built-in method array
// 1. forEach()
numbers.forEach(function (value) {
  console.log(value);
});

// // 2. map()
// let output = numbers.map(function(value){
//     return value + 2;
// });
// console.log(output);

// 3. filter()
// let output = numbers.filter(function(value){
//     return value > 2;
// });
// console.log(output);

// 4. find()
let output = numbers.find(function (value) {
  return value > 2;
});
console.log(output);
