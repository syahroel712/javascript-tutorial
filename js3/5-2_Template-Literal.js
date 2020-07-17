// 1. Html Fragment
// const mhs = {
//     nama: 'adi',
//     umur: 19,
//     nrp: '9343234',
//     email: 'ad@gamil.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>   
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. looping
// const mhs = [{
//         nama: 'adi',
//         email: 'adi@gmail.com'
//     },
//     {
//         nama: 'ade',
//         email: 'ade@gmail.com'
//     },
//     {
//         nama: 'ado',
//         email: 'ado@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`


// 3.conditional
// ternary
// const lagu = {
//     judul: 'skuy living',
//     penyanyi: 'qorygore',
//     // feat: 'angry'
// }

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`


// 4 . nested
// html fragment bersarang

const mhs = {
    nama: 'adi',
    semester: 5,
    matkul: [
        'rpl',
        'analisis',
        'pwd',
        'pbo'
    ]
}

function cetakMatkul(matkul) {
    return `
        <ol>
            ${matkul.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `
}

const el = `<div class="mhs">
    <h2> ${mhs.nama} </h2>
    <span class="semester">Semester ${mhs.semester} </span>
    <h4>Matkul:</h4>
    ${cetakMatkul(mhs.matkul)}
</div>`

















document.body.innerHTML = el;