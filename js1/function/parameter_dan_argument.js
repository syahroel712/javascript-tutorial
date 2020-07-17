function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}
var a = parseInt(prompt('masukkan angka pertama'));
var b = parseInt(prompt('masukkan angka kedua'));
// cara sederhananya
// var hasil = tambah(a, b);
// atau juga bisa menambahkan operasi matematika di dalam argument
// var hasil = tambah(a * 10, b * 7);
// console.log(hasil);



// cara lebih complex yaitu dengan function dalam function
var hasil = kali(tambah(a, b), tambah(a, b));
console.log(hasil);