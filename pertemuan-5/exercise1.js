// 1.IIFE
// let calculateBMI = (function (berat, tinggi){
//         let x = berat / (tinggi*tinggi);
//     return x > 25 ?
//     'BMI anda : ' + x + ', Masuk kategori Overweight'
//     : 'BMI anda : ' + x + ', Normal'
// })(95, 1.83);
// console.log(calculateBMI)

// 2. CallBack
// function calculateBMI(berat, tinggi, CallBack){
//     let x = berat / (tinggi*tinggi);
//     let result = CallBack(x)
//     console.log(result);
// }
// calculateBMI(96, 1.83, function(x){
//     return x > 25
//     ? 'BMI Anda: ' + x + ', Masuk Kategori Overweight'
//     : 'BMI anda: ' + x + ', Normal'
// });
