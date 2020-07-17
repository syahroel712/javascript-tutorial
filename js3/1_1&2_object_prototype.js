// cara membuat object pad JS
// // object literal
// problem : tidak efektif utk object yng bnyak

// let mahasiswa1 = {
//     nama: 'andi',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!!`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'adi',
//     energi: 12,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!!`)
//     }
// }
// ---------------------------------------------

// // function declaration
// problem : tidak efektif

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!!`);
//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log("Halo" + nama + ", Selamat Main!!");
//     }
//     return mahasiswa
// }

// let andi = Mahasiswa('Andi', 10);
// let dodi = Mahasiswa('Dodi', 10);
// -----------------------------------------------


// contructor function(keyword new)
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log("Halo " + nama + ", Selamat Makan");
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log("Halo " + nama + ", Selamat main");
//     }
// }
// let andi = new Mahasiswa('Andi', 10);






// object.create
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!!`);
    },
    main: function (jam) {
        this.energi -= jam;
        console.log("Halo" + this.nama + ", Selamat Main!!");
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log("Halo " + this.nama + " Selamat Tidur");
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;

    return mahasiswa
}

let andi = Mahasiswa('Andi', 10);
let dodi = Mahasiswa('Dodi', 10);