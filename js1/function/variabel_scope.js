// gunakan jika tidak ingin mengotori varaibel scope globalnya
// "use strict"

// global scope/window scope
var a = 1;
var c = 1;

function tes() {
    var b = 2;
    var c = 2;
    //2 . maka supaya b bisa diakses maka console.log diletakkan didalm functionnya
    console.log(b);
    // 3 . jika kita ingin mengakses varaiabel a, maka hal tersebut akan berhasil karena a adalah variabel global
    // console.log(a);=> hasilnya adalah 1

    //  4 . jika kita memiliki nama variabel yang sama antara variabel dalam function dan di luar function maka jika kita akses yang didalam function maka hasilnya adalah variabel yg didalam function
    // console.log(c); => hasilnya adalah 2

    // 6. jika kita tetap ingin mengakses variable yg di luar function maka cukup tambahkan keyword window
    // console.log(window.c); =>hasilnya adalah 1 
}
tes();

//1 . jika kita ingin tampilan b di luar function maka hasilnya akan error: b is not defined karena b hanya bisa diakses didalam functionnya  
// console.log(b); => 

// 5 . jika kita memiliki nama variabel yang sama antara variabel dalam function dan di luar function maka jika kita akses yang diluar function maka hasilnya adalah variabel yg diluar function
// console.log(c); => hasilnya adalah 1