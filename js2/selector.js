// DOM Selection

// // document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'blue';
// judul.style.backgroundColor = "magenta";
// judul.innerHTML = 'Testing';

// // document.getElementsByTagName -> HTMLCollection
// const p = document.getElementsByTagName('p');

// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';


// // document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');

// p1[0].innerHTML = 'Ini Di Ubah Dari Js';

// // document.querySelector() -> element 

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'ini diubah dengan javascript';

// // document.querySelectorAll() -> HTMLCollection
// const p = document.querySelectorAll('p');
// // p[2].style.backgroundColor = 'lightblue';
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }


// // mengubah node root
// cara lama
// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'lightblue';

// cara baru
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';
// atau
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';