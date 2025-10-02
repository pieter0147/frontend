// // Javascript variable & operators
// //1. Javascript Variable

// let fullName = 'John Doe' // camell case cara penulisan variabel
// let FullName = 'John Doe' // pascal case                            // key sensitive
// let full_name = 'John Doe' // snake case

// //Data Types
// const gender = 'male' // string
// let age = 10        // number
// let weight = 90.9 // number float
// let isMarried = false // boolean
// let grade = null // null(empty)
// let address // undefined

// console.log(gender, age, weight, isMarried, grade, address)

// // 2. JavaScript Operator
// // a. Arithmetic Operator (+, -, *, /, %, **)
// let bill1 = 20
// let bill2 = 50
// console.log(bill1 + bill2) //70
// console.log(bill1 - bill2) //1
// console.log(bill1 * bill2) //100
// console.log(bill1 / bill2) //4
// console.log(bill1 % bill2) //0
// console.log(bill1 ** bill2) //3200000

// // Mini Exercise
// // Buatlah Program yg menghitung luas lingkaran
// // Dimana r/jari2 anda tentukan sendiri
// let r = 10
// const phi = 3.14

// let luas = phi * (r*r)
// console.log(luas)

// //b. Assignment Operator (=, +=, -=, *=, /=)
// let bilangan=5
// bilangan = bilangan + 10
// bilangan += 5

// // c. String operation (+) concatination
// const fisrtName = "John"
// const lastName = "Doe"
// const fullName = fisrtName + " " + lastName
// console.log(fullName)

// // d. Relational Operator (==, ===, >, <, >=, <=, !=)
// let bil1 = 10
// let bil2 = 20
// let bil3 = '10'
// console.log(bil1 == bil3)
// console.log(bil1 === bil3)
// console.log(bil1 > bil2)
// console.log(bil1 < bil2)

// e. Logical Operator (&&, ||, !)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!true)

// f. Ternary Operator (? :)
let age = 16
let isEligible = age >+ 17 ? 'Bisa Buat KTP' : 'Belum bisa buat KTP'
console.log(isEligible)

// Mini Exercise #2
// Buat Program yang dapat menghitung BMI (Body, Mass Index)
// Rumus BMI : Berat (kg) / (tinggi (n) = tinggi (n))
// tampilkan hasilnya:
// Jika BMI > 25 -> "BMI anda adalah ___, kategori kelebihan berat badan"
// Jika BMI < 25 -> "BMI anda adalah ___, kategori normal"

let berat = 98
let tinggi = 1.83
let BMI = berat / (tinggi*tinggi)

let hasil = BMI > 25 ? "BMI anda: " + BMI + ", Kategori kelebihan berat badan" : "normal"
console.log(hasil)


