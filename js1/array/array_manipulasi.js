// manipulasi array

// 1. menambah isi array
// var arr = ["a", 1, true];
// var arr = [];
// tampil semua
// console.log(arr);

// tampil salah satu
// console.log(arr[1]);

// cara menambah isi array
// arr[0] = 'hai';
// arr[1] = 'hello';
// arr[2] = 'hi';
// console.log(arr);

// 2. menghapus isi array
// var arr = ['hai', 'helo', 'hi'];
// arr[1] = undefined;
// console.log(arr);


// 3. menampilkan isi array tanpa menggunakan object
// var arr = ['ani', 'budi', 'ina'];

// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' ' + arr[i]);
// }




// method pada array

// 1. join
// menggabungkan array jadi string supaya mudah dibaca
// var arr = ['ani', 'budi', 'ina'];
// console.log(arr.join());
// atau
// console.log(arr.join('-'));


// 2. push dan pop

// var arr = ['ani', 'budi', 'ina'];

// push untuk menmbahkan isi array dan selalu di bagian akhir array
// arr.push('dimas', 'koko');
// console.log(arr.join());

// pop untuk menghapus isi array paling akhir
// arr.pop();
// console.log(arr.join());


// 3. unshift dan shift

// var arr = ['ani', 'budi', 'ina'];

// // unshift untuk menambah isi array diawal arraynya
// arr.unshift('gigi', 'lola');
// console.log(arr.join());


// shift untuk menghapus isi array diawal arraynya
// arr.shift();
// console.log(arr.join());

// 4. slice(mengiris) dan splice(menyisipkan) 
// var arr = ['ani', 'budi', 'ina'];

// splice untuk menyisipkan isi array baru ditengah
// rumus => splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2 .....);

// arr.splice(2, 0, 'dimas', 'lola');
// atau
// arr.splice(1, 1, 'Dody', 'lola');
// atau 
// arr.splice(1, 2, 'Dody', 'lola');
// console.log(arr.join());


// slice untuk mengiris isi array ditengahnya
// rumus => slice(indexAwal, indexAkhir);

// var arr = ['ani', 'budi', 'ina', 'ini', 'badi'];
// var arr2 = arr.slice(1, 3);
// console.log(arr.join());
// console.log(arr2.join());




// 5. forEach dan map

// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// angka.forEach(function (e) {
//     console.log(e);
// })

// var nama = ['ani', 'ina', 'kiki'];
// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' adalah ' + e)
// })


// map
// sama sperti foreach, tapi lebih baik karean map mengembalikan array
// var angka = [1, 2, 5, 4, 6, 7, 8];

// var angka2 = angka.map(function (e) {
//     return e * 2;
// })

// console.log(angka2.join());


// 6. sort
// utuk urutkan isi array

// var angka = [1, 3, 2, 5, 4, 6, 8, 7];
// console.log(angka.join());
// angka.sort();
// console.log(angka.join());


// var angka = [1, 10, 3, 2, 20, 5, 4, 6, 8, 7];
// console.log(angka.join());
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join());


// 7. filter dan find
// untuk mencari pada array
// filter bisa mengembalikan banyak nilai
// var angka = [1, 10, 3, 2, 20, 5, 4, 6, 8, 7];
// var angka2 = angka.filter(function (x) {
//     return x > 5;
// });
// console.log(angka2.join());

// find bisa mengembalikan 1 nilai
var angka = [1, 10, 3, 2, 20, 5, 4, 6, 8, 7];
var angka2 = angka.find(function (x) {
    return x > 5;
});
console.log(angka2);