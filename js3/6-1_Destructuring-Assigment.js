// case 1 array
// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;
// console.log(a); //satu
// console.log(b); //dua
// console.log(c); //tiga

// ========================================
// case 2 object

// const mhs = {
//     nama: 'adi',
//     umur: 19,
//     email: 'adi@gmail.com'
// }
// const {
//     nama,
//     umur,
//     email
// } = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// =============================================
// case 3 Desructuring variable/assigment

// destructuring array
const perkenalan = ['halo', 'nama', 'saya', 'adi'];
// cara lama
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(salam)
// console.log(nama)

// cara baru
// const [salam, satu, dua, nama] = perkenalan;
// console.log(salam)
// console.log(dua)
// console.log(nama)

// // jika ingin skip salah satu isi dari array
// const [salam, , , nama] = perkenalan;
// console.log(salam)
// // console.log(dua)
// console.log(nama)

// // // jika ingin swap/tukar isi array
// let a = 1;
// let b = 2;
// // sebelum
// console.log(a);
// console.log(b);

// [a, b] = [b, a];
// // sesudah
// console.log(a);
// console.log(b);


// // return value pda function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();

// console.log(a);
// console.log(b);



// // rest parameter / ...values

// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a)
// console.log(values)

// ================================================
// // destructuring object
// const mhs = {
//     nama: 'ado',
//     umur: 33
// }

// const {
//     nama,
//     umur
// } = mhs;
// console.log(nama);
// console.log(umur);

// Assicment tanpa deklarasi object

// ({
//     nama,
//     umur
// } = {
//     nama: 'ado',
//     umur: 33
// })

// console.log(nama);
// console.log(umur);


// assigment ke variabel baru

// const mhs = {
//     nama: 'ado',
//     umur: 33
// }

// const {
//     nama: n,
//     umur: u
// } = mhs;
// console.log(n);
// console.log(u);


// memberikan default value

// const mhs = {
//     nama: 'ado',
//     umur: 33,
//     email: 'ad@ad.com'
// }

// const {
//     nama,
//     umur,
//     email = 'email@default.com'
// } = mhs;
// console.log(email);


// beri nilai defautl dan assign ke variabel baru

// const mhs = {
//     nama: 'ado',
//     umur: 33,
//     email: 'ad@ad.com'
// }

// const {
//     nama: n,
//     umur: u,
//     email: e = 'email@default.com'
// } = mhs;
// console.log(e);


// // rest parameter
// const mhs = {
//     nama: 'ado',
//     umur: 33,
//     email: 'ad@ad.com'
// }

// const {
//     nama,
//     ...value
// } = mhs;
// console.log(nama);
// console.log(value);


// mengambil field pda object, setelah itu dikirim sebgai parameter untuk function
const mhs = {
    id: 123,
    nama: 'ado',
    umur: 33,
    email: 'ad@ad.com'
}

function getIdMhs({
    id,
    nama
}) {
    return id;
    // return nama;
}

console.log(getIdMhs(mhs));