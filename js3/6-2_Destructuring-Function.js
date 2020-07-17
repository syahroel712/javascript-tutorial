// destructuring 

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }
// cara lama
// console.log(penjumlahanPerkalian(2, 3));
// console.log(penjumlahanPerkalian(2, 3)[0]);
// console.log(penjumlahanPerkalian(2, 3)[1]);

// cara destructuring
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// ====================================
// function kalkulasi(a, b) {
//     // return [a + b, a - b, a * b, a / b];
//     return [a + b, a - b, a * b];
// }

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(3, 2);

// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// =======================================

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b,
//     }
// }

// const {
//     kali,
//     tambah,
//     bagi = 'tidak ada',
//     kurang,
// } = kalkulasi(3, 2);

// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);


// ======================================
// destructuring function arguments
const mhs1 = {
    nama: 'ado',
    umur: 19,
    email: 'ad@ad',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// cara lama
// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama} dan umur saya ${umur} tahun`
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// cara lain
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama} dan umur saya ${mhs.umur} tahun`
// }
// console.log(cetakMhs(mhs1));

// // cara destructuring
function cetakMhs({
    nama,
    umur,
    nilai: {
        tugas,
        uts,
        uas
    }
}) {
    return `Halo, nama saya ${nama} dan umur saya ${umur} tahun, dan nilai uas saya ${uas}`
}

console.log(cetakMhs(mhs1));