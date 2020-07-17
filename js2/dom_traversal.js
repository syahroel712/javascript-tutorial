// event handling
// const tutup = document.querySelector('.close');
// const kartu = document.querySelector('.card');

// tutup.addEventListener('click', function () {
//     // const container = document.querySelector('.container');
//     // container.removeChild(kartu);
//     // atau
//     kartu.style.display = 'none';
// })


// DOM Traversal
// const close = document.querySelectorAll('.close');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.style.display = 'none';
//         // console.log(e.target);
//         e.target.parentElement.style.display = 'none';
//     })
// }
// atau
// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         // 
//         e.preventDefault();
//         // event bubling
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click', function (e) {
//         alert('ok');
//     });
// });

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);
// console.log(nama.parentNode);
// console.log(nama.parentElement.parentElement);
// console.log(nama.parentNode.parentNode);
// console.log(nama.nextSibling);
// console.log(nama.previousSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.nextElementSibling.nextElementSibling);
// console.log(nama.previousElementSibling);
// console.log(nama.previousElementSibling.previousElementSibling);






// event bubling
const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    // console.log(e.target);
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})