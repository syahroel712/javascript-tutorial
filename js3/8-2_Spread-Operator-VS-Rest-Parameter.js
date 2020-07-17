// //Rest Parameter
// harus diakhir parameter function
// function myFunc(a, b, ...myArgs) {
//     // return a;
//     // return myArgs;
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;

// }

// console.log(myFunc(1, 2, 3, 4, 5))



// function myFunc(...myArgs) {
//     // return arguments;
//     // return Array.from(arguments);
//     // return myArgs;
//     return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5))

// =========================================

// function jumlahkan(...angka) {
//     // cara for.. of
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;

//     // cara reduce
//     return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5))


// array destructuring
const kelompok1 = ['a', 'b', 'c', 'd', 'e'];

// cara lama
// const ketua = kelompok1[0];
// const wakil = kelompok1[1];

// // cara baru
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(anggota);



// object destructuring
// const team = {
//     pm: 'a',
//     frontend1: 'b',
//     frontend2: 'c',
//     backend: 'd',
//     ux: 'e',
//     devOps: 'f'
// }

// const {
//     pm,
//     ...myTeam
// } = team;
// console.log(pm);
// console.log(myTeam);


// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}
console.log(filterBy('number', 1, 2, 'adi', false, 10, true, 'dod'));
console.log(filterBy('string', 1, 2, 'adi', false, 10, true, 'dod'));
console.log(filterBy('boolean', 1, 2, 'adi', false, 10, true, 'dod'));