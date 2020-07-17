// konsep this pada arrow function

// Constuctor Function
// const Mahasiswa = function () {
//     this.nama = 'andi';
//     this.umur = 14;
//     this.sayHello = function () {
//         console.log("halo, nama " + this.nama + " umur " + this.umur);
//     }
// }

// const andi = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//     this.nama = 'andi';
//     this.umur = 14;
//     this.sayHello = () => {
//         console.log("halo, nama " + this.nama + " umur " + this.umur);
//     }
// }

// const andi = new Mahasiswa();



// Object Literal
// const mhs1 = {
//     nama: 'andi',
//     umur: 14,
//     sayHello: () => {
//         // console.log("halo, nama " + this.nama + " umur " + this.umur);
//         console.log(this);
//     }
// }

// -=======================================
// case 1
// function expression
// const Mahasiswa = function () {
//     this.nama = 'andi';
//     this.umur = 14;
//     this.sayHello = function () {
//         console.log("halo, nama " + this.nama + " umur " + this.umur);
//     }
//     // function arrow
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500)
// }

// const andi = new Mahasiswa();


// case 2
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
        // console.log(this);
    }, 600)
})





















































// 