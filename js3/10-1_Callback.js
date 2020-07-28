// callback

// // synchronous callback
// function halo(nama) {
//     alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('masukkan nama:');
//     callback(nama)
// }

// tampilkanPesan(halo)

// contaoh lain
// function tampilkanPesan(callback) {
//     const nama = prompt('masukkan nama:');
//     callback(nama)
// }

// tampilkanPesan(nama => {
//     alert(`Halo, ${nama}`);
// })

// ----------------------------------------------------------

// // Asynchronous callback
// case 1
// const mhs = [{
//     "nama": "adi",
//     "nrp": "9324923423",
//     "email": "adi@gmail.com",
//     "jurusan": "TI",
//     "idDosenWali": 1
// }, {
//     "nama": "ade",
//     "nrp": "3248288423",
//     "email": "adi@gmail.com",
//     "jurusan": "SI",
//     "idDosenWali": 2
// }, {
//     "nama": "ado",
//     "nrp": "9323422323",
//     "email": "ado@gmail.com",
//     "jurusan": "SK",
//     "idDosenWali": 2
// }];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 1000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// //case 2 pakai vanilla javascript
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('GET', url);
//     xhr.send();
// }

// // getDataMahasiswa('data/mahasiswa.json', SUCCESS, ERROR);

// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => {
//         console.log(m.nama)
//     });
//     // console.log(JSON.parse(results));
// }, () => {

// });
// console.log('selesai');


// case 3 pakai jquery
console.log('mulai')

$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
        console.log(mhs);
    },
    error: (e) => {
        console.log(e.responseText);
    }
})

console.log('selesai');