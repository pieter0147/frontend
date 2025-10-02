// NAMA : Pieter, Marcovan Filippo Leanro
// NIM  : 105022310094

// 1. ==========================================================================

const calculateAge = (birthYear) => 2019 - birthYear;
const yearUntilRetirement = (object) => {
    var age = calculateAge(object.year);
    var retirement = 60 - age;

if(retirement > 0){
        console.log(`${object.firstName} retires in ${retirement} years`);
    } else {
        console.log(`${object.firstName} is already retired.`);
    }
}
yearUntilRetirement({year: 1987, firstName: 'Komar'})

// 2. ==========================================================================

const addNumber = (a, b, c, d, e, f, g) => {
    var numbers = [a, b, c, d, e, f, g];
    var sum = 0;
    numbers.map((number) => sum += number);
    return sum;
}
console.log(addNumber(1,2,3,4,5,6,7));

// 3. ==========================================================================

const phi = 3.14;
let power = 2;
let radius = 0;

const calculateArea = (obj) => phi * Math.pow(obj.radius, obj.power);
radius = 21;
let are21 = calculateArea({radius, power});
radius = 7;
let are7 = calculateArea({radius, power});

console.log(`area with 21 radius: ${are21}, and area with 7 radius: ${are7}`);

// 4. ==========================================================================

const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
}
makeAjaxRequest('www.google.com');

// ==========================================================================
