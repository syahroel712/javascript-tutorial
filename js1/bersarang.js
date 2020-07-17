// horizontal
// ***********
// var bintang = '';
// for (var i = 0; i < 10; i++) {
//     bintang += '*';
// }
// console.log(bintang);


// ------------------------------------------
// vertikal
// *
// *
// *
// *
// *
// var bintang = '';
// for (var i = 0; i < 10; i++) {
//     bintang += '*';
//     bintang += '\n';
// }
// console.log(bintang);


// ---------------------------------------------
// kotak
// *****
// *****
// *****
// var bintang = '';
// for (var i = 0; i < 7; i++) {
//     for (var j = 0; j < 10; j++) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);


// ---------------------------------------------
// segitiga
// *
// **
// ***
// var bintang = '';
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);


// ---------------------------------------------
// segitiga
// ***
// **
// *
// var bintang = '';
// for (var i = 10; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);


// ---------------------------------------------
// segitiga
// ***
//  **
//   *
// var bintang = '';
// for (var i = 0; i < 10; i++) {
//     for (var k = 0; k <= i; k++) {
//         bintang += ' ';
//     }
//     for (var j = 10; j > i; j--) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);


// -------------------------------------------------
// segitiga
//   *
//  **
// ***
// var bintang = '';
// for (var i = 0; i < 10; i++) {
//     for (var j = 10; j > i; j--) {
//         bintang += ' ';
//     }
//     for (var k = 0; k <= i; k++) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);


// ------------------------------------------------
// segitiga
// *
// **
// ***
// **
// *
// var bintang = '';
// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// for (var i = 10; i > 0; i--) {
//     for (var j = 0; j < i; j++) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);


// -------------------------------------------------
// segitiga
//   *
//  **
// ***
//  **
//   *
// var bintang = '';
// for (var i = 0; i < 10; i++) {
//     for (var j = 10; j > i; j--) {
//         bintang += ' ';
//     }
//     for (var k = 0; k <= i; k++) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// for (var i = 0; i < 10; i++) {
//     for (var k = 0; k <= i; k++) {
//         bintang += ' ';
//     }
//     for (var j = 10; j > i; j--) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);


// -------------------------------------------------
// segitiga
//   *
//  ***
// *****
var bintang = '';
for (var i = 0; i < 5; i++) {
    for (var j = 5; j > i; j--) {
        bintang += ' ';
    }
    for (var k = 0; k <= i; k++) {
        bintang += '*';
    }
    for (var l = 0; l < i; l++) {
        bintang += '*';
    }
    bintang += '\n';
}
console.log(bintang);



// -------------------------------------------------
// segitiga
// *****
//  ***
//   *
// var bintang = '';
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += ' ';
//     }
//     for (var k = 5; k > i; k--) {
//         bintang += '*';
//     }
//     for (var l = 4; l > i; l--) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);


// ------------------------------------------------
// diamonnd
//   *
//  ***
// *****
//  ***
//   *  
// var bintang = '';
// for (var i = 0; i < 6; i++) {
//     for (var j = 5; j > i; j--) {
//         bintang += ' ';
//     }
//     for (var k = 0; k <= i; k++) {
//         bintang += '*';
//     }
//     for (var l = 0; l < i; l++) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j <= i; j++) {
//         bintang += ' ';
//     }
//     for (var k = 5; k > i; k--) {
//         bintang += '*';
//     }
//     for (var l = 4; l > i; l--) {
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);

// catur
// # # # # 
//  # # # 
// # # # # 

var bintang = '';
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 10; j++) {
//         if (j % 2 === 0) {
//             bintang += ' ';
//         } else {
//             bintang += '#';
//         }
//     }
//     bintang += '\n';
//     for (let k = 0; k < 10; k++) {
//         if (k % 2 === 0) {
//             bintang += '#';
//         } else {
//             bintang += ' ';
//         }
//     }
//     bintang += '\n';

// }
// console.log(bintang);

// -------------------------------------------------
// segitiga pascal
//   1
//  121
// 13331
// var bintang = '';
// for (var i = 0; i < 5; i++) {
//     for (var j = 5; j > i; j--) {
//         bintang += '-';
//     }
//     for (var k = 0; k <= i; k++) {
//         if (k % 2 == 0) {
//             bintang += '1';
//         } else {
//             bintang += '-';
//         }
//     }
// for (var l = 0; l < i; l++) {
//     if (l % 2 === 0) {
//         bintang += ' ';
//     } else {
//         bintang += '1';
//     }
// }
//     bintang += '\n';
// }
// console.log(bintang);