// konsep this
// keyword special yang secara otomatis itu di definisikan di setiap function/object. 
// setiap buat function/object dengan cara apapun maka ada keyword this yang didefinisikan

// jika di scope global maka this == window.
// var a = 10;
// console.log(a);
// console.log(this.a);
// console.log(window.a);
// console.log(window === this);
// console.log(this);

// note:
// properti itu adalah variabel yang ada dalam object
// method adalah function yang ada dalam object 

// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('dengan cara function declaration');
// }
// // cara panggilnya
// halo();
// // atau
// // this pada function declaration kontectnya adalah mengembalikan object global
// this.halo();



// cara 2 - object literal
// var obj = {
//     a: 10,
//     nama: 'ani'
// };
// obj.halo = function () {
//     // hasilnya adalah memanggil/mengembalikan object yang bersangkutan
//     console.log(this);
//     console.log('dengan cara object literal');
// }
// // cara panggilnya
// obj.halo();



// cara 3 - constructor 
function Halo() {
    // hasilnya adalah memanggil/mengembalikan object yang baru dibuat
    console.log(this);
    console.log('dengan cara contructor');
}
// cara panggilnya
new Halo();
// objectnya adalah ini
var obj1 = new Halo();
var obj2 = new Halo();




















// membuat object

// cara 1 - function declaration
// function halo() {
//     console.log('dengan cara function declaration');
// }
// // cara panggilnya
// halo();


// cara 2 - object literal
// var obj = {};
// obj.halo = function () {
//     console.log('dengan cara object literal');
// }
// // cara panggilnya
// obj.halo();


// cara 3 - constructor 
// function Halo() {
//     console.log('dengan cara contructor');
// }
// // cara panggilnya
// new Halo();