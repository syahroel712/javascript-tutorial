// tagged template
// const nama = 'adi';
// const umur = 19;

// function coba(strings, ...values) {
//     // return values;
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // });
//     // return result;
//     // atau pakai reduce
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }


// const str = coba `Halo, nama saya ${nama} dan umur saya ${umur} tahun`;

// console.log(str);


// =============
// case 2


const nama = 'adi';
const umur = 19;
const email = 'ads@gmail.com'

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}


const str = highlight `Halo, nama saya ${nama} dan umur saya ${umur} tahun dan email saya ${email}`;


console.log(str);

document.body.innerHTML = str;