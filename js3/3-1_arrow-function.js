//Arrow Function
// bentuk lain dari function expression yg lebih ringkas

// ex function expression
// let tampilPesan = function (nama) {
//     alert('halo ' + nama)
// }
// tampilPesan('ani');

// diringkas dengan arrow function jadi
// let tampilPesan = (nama) => {
//     alert('halo ' + nama)
// }
// tampilPesan('andi');
// ===============================================

// case 1
// let tampilPesan = (nama) => {
//     return 'halo ' + nama;
// }
// console.log(tampilPesan('ani'));

// =============================================
// case 2
// let tampilPesan = (nama, waktu) => {
//     return 'halo ' + nama + " selamat" + waktu;
// }
// console.log(tampilPesan('ani', 'pagi'));


// =============================================
// case 2 implisit return
// let tampilPesan = nama => 'halo ' + nama;
// console.log(tampilPesan('ani'));

// =============================
// case 3
// let tampilPesan = () => "hello world";
// console.log(tampilPesan());

// ================================================
// case 4
let mahasiswa = ['ani fitri', 'muhammad adi', 'arief sabi'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf)

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf);