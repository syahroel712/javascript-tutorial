// For..of 
// const mhs = ['adi', 'ade', 'ado'];

// // array
// cara lama for
// for (let i = 0; i <= mhs.length; i++) {
//     console.log(mhs[i]);
// }

// cara forEach
// mhs.forEach(m => {
//     console.log(m);
// });

// cara For..of
// for (const m of mhs) {
//     console.log(m)
// }

// // string
// const nama = 'Syahrul';
// for (const n of nama) {
//     console.log(n);
// }


// const mhs = ['adi', 'ade', 'ado'];
// mhs.forEach((m, i) => {
//     // console.log(m);
//     // console.log(i);
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);

// });


// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
// }


// //nodelist
// const liNama = document.querySelectorAll('.nama');
// console.log(liNama);

// liNama.forEach(n => console.log(n.textContent));


// for .. of
// for (n of liNama) {
//     console.log(n.innerHTML);
// }


// // arguments
// function jumlhkanAngka() {
//     // reduce tidak bisa
//     // return arguments.reduce((a, i) => a + i);
//     // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);

//     // forEach tidak bisa
//     // let jumlah = 0;
//     // arguments.forEach(a => {
//     //     jumlah += a
//     // });
//     // return jumlah;  

//     // for..of bisa
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlhkanAngka(1, 2, 3, 4, 5));










// for..in
const mhs = {
    nama: 'adi',
    umur: 19,
    email: 'Ad@ad'
}

// tidak bisa paki for..of
// for (m of mhs) {
//     console.log(m)
// }

// pakin for..in bisa, tspi ambil properti
for (m in mhs) {
    console.log(m)
}

// pakin for..in bisa, tspi ambil value
for (m in mhs) {
    console.log(mhs[m])
}