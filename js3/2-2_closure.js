// Closure

// // case 1
// function init() {
//     let nama = 'adi';

//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init()

// -------------------------------

// // case 2
// function init() {
//     let nama = 'adi';
//     let umur = 10;

//     function tampilNama() {
//         console.log(nama);
//         console.log(umur);
//     }
//     // console.log(tampilNama);
//     console.dir(tampilNama);
// }
// init()
// -------------------------------

// // case 3
// function init() {
//     let nama = 'adi';

//     function tampilNama() {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama();

// -------------------------------
// // case 4 dunction factory

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log("halo " + nama + ",selamat " + waktu);
//     }
// }
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// // selamatPagi('andi');
// // selamatSiang('andi');
// // selamatMalam('andi');

// // console.dir(selamatMalam);
// console.dir(selamatMalam('andi'));

// ---------------------------------

// // case 5 counter
// let counter = 0;
// let add = function () {
//     return function () {
//         return ++counter;
//     }
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// case 6

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());