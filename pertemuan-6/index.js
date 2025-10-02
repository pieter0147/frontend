// Array & Object in JavaScript
// 1. Array
// Cara mendeklarasikan array
// cara 1. Array Literal
let stundents = ['John', 'Jack', 'Pieter', 'Bob'];
let john = ['John', 30, true, [80, 90, 10]]

// 2. Kata kunci "new" 
let employees = new Array('John', 'Jack', 'Pieter', 'Bob');

// Menampilkan semua element array sekaligus
console.log(stundents);
// Menampilkan element array berdasarkan index
console.log(stundents[2]);
// Merubah element array berdasarkan index
john[2] = false;
console.log(john);
// Menampikan element terakhir didalam array
console.log(john.length);
console.log(stundents[stundents.length - 1]);

// Array Method
let array = [1, 2, 3, 'hello', false, true];
// 1. tostring() - merubah array menjadi string
console.log(array.toString());
// 2. join()
console.log(array.join(' '));
console.log(array.join('$'));
console.log(array.join('-'));
// 3. pop() - menghapus element terakhir
array.pop();
console.log(array);
// 4. push() - menambah element terakhir
array.push('gutenmorgen');
console.log(array);
// 5. shift() - hapus element pertama
array.shift();
console.log(array);
// 6. unshift() - menambah element pertama
array.unshift('gutenmorgen');
console.log(array)
// 7. splice() - tambah/hapus element di tengah
array.splice(3, 0, 4);
console.log(array);
// 8. slice() - mengambil sebagian elment dari array
let numbers = array.slice(1,4);
console.log(numbers);
// 9. concat() - menggabungkan array
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let combineNumbers = num1.concat(num2, num3);
console.log(combineNumbers);

// 2. Object -> memiliki property & nilai

let JohnObj = {
    fullName: 'John Doe',
    age: 30,
    isActive: true,
    grade: [89, 14, 100],
    address: {
        street: 'Jl. Arnold Mononutu',
        city: 'Minahasa Utara',
        province: 'Sulawesi Utara',
    },
    sayHello: function () {
        console.log('gutenmorgen ' + this.fullName);
    },
};
// Cara mengakses element dalam obj
// 1. Dot notation
console.log(JohnObj.fullName);
console.log(JohnObj.grade[1]);
console.log(JohnObj.address.street);
JohnObj.sayHello();
// 2. Bracket notation
console.log(JohnObj['fullName']);
console.log(JohnObj['grade'][1]);
console.log(JohnObj['address'],['street']);
JohnObj['sayHello']();

JohnObj.job = 'programmer'; //jika property tidak ada maka akan ditambahkan
delete JohnObj.isActive; // hapus property dalam object
console.log(JohnObj);