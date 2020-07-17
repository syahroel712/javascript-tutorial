var binatang = ['sapi', 'ikan', 'ayam', 'panda', 'hiu'];


console.log(binatang[3]);
console.log(typeof (binatang));

//karena tidak ada tipe data array dalam js, maka tipe datanya adalah object. 
// fungsi yang ada dalam object namanya method

console.log(binatang.length);


// isi array dalam js boleh beda type
// var saya = ['syahrul', 19, true, myFunc, [4, 5, 6]];

var saya2 = ['syahrul', 19, true, 'myFunc', [4, 5, 6]];

console.log(saya2[4][1]);