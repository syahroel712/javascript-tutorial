// // element.innerHTML

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Syahrul</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';

// -----------------------------
// // element.style.<propertiCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';


// -------------------------------
// // Element.getAttribute();
// // Element.setAttribute();
// // Element.removeAttribute();
// attribut-> suatu yg menempel pada html ex: id, name, class, href dll

// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'syahrul');
// const a = document.querySelector('section#a a');
// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label');


// ------------------------
// utuk mengelola class kita bisa gunakan element.classList
// Element.classList.add() -> tambah class baru
// Element.classList.remove() -> hapus class yg ada
// Element.classList.toggle() -> tambah class jika tidak ada, jika sudah puya maka menghilangkan
// Element.classList.item() -> utk mengetahui class tertentu yg ada di sebuah element
// Element.classList.contains() -> cek apakah elemetn punya class tertentu
// Element.classList.replace() -> utk menggati class yang ada

// const p2 = document.querySelector('.p2');