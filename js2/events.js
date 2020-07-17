// Events handler
const p3 = document.querySelector('.p3');
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}

// ---------------------------
// addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('dblclick', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(textLiBaru);
    ul.appendChild(liBaru);
});




// perbadaan event handler dan addEventListener
const p5 = document.querySelector('.p5');
// p5.onclick = function () {
//     p5.style.backgroundColor = 'ligthblue';
// }
// p5.onclick = function () {
//     p5.style.color = 'red';
// }


p5.addEventListener('click', function () {
    p5.style.backgroundColor = 'lightblue';
});
p5.addEventListener('click', function () {
    p5.style.color = 'red';
});