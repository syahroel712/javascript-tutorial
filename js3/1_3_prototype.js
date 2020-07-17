// // function declaraion dan object.create()
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log("Halo" + this.nama + ", Selamat Main!!");
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log("Halo " + this.nama + " Selamat Tidur");
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa
// }

// let andi = Mahasiswa('Andi', 10);
// let dodi = Mahasiswa('Dodi', 10);


// // -----------start----------
// // function contructor
// function Mahasiswa(nama, energi) {
//     // yg sebenarnya terjadi di belakang adalah js akan membuat variabel this dan object.create() serta memanggil object mahasiswa.prototype
//     // let this = Object.create(Mahasiswa.prototype)
//     this.nama = nama;
//     this.energi = energi;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return "Halo " + this.nama + " Selamat Makan";
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return "Halo " + this.nama + " Selamat Bermain";
// }
// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return "Halo " + this.nama + " Selamat Tidur";
// }

// let adi = new Mahasiswa('adi', 10);


// versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return "Halo " + this.nama + " Selamat Makan";
    }
    main(jam) {
        this.energi -= jam;
        return "Halo " + this.nama + " Selamat Bermain";
    }
    tidur(jam) {
        this.energi += jam * 2;
        return "Halo " + this.nama + " Selamat Tidur";
    }
}

let adi = new Mahasiswa('adi', 10);
let ade = new Mahasiswa('ade', 10);