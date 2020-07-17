// Spread Operator
// memecah iterables jadi single element

// const mhs = ['adinfa', 'ade', 'ado'];
// console.log(...mhs);
// console.log(...mhs[0]);

// menggabungkan 2 array
// const mhs = ['adinfa', 'ade', 'ado'];
// const dosen = ['ani', 'ana', 'ane'];
// // const orang = [...mhs, ...dosen];
// const orang = [...mhs, 'aji', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);
// console.log(...orang);


// melakukan copy pada array/ mengcopy array
// const mhs = ['adinfa', 'ade', 'ado'];

// // cara salah
// // const mhs1 = mhs;
// // mhs1[0] = 'fajar';

// // cara benar
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';

// console.log(mhs);
// console.log(mhs1);

// ------------------------------
// case 1
// const liMhs = document.querySelectorAll('li');
// console.log(liMhs[0].textContent);
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// cara 2
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

// ============================================
// case 2
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;

console.log(huruf);