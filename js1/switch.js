// contoh 1

// var angka = prompt('masukkan angka');

// switch (angka) {
//     case '1':
//         alert('anda memasukkan angka 1');
//         break;
//     case '2':
//         alert('anda memasukkan angka 2');
//         break;
//     case '3':
//         alert('anda memasukkan angka 3');
//         break;
//     default:
//         alert('ini bukan angka');
//         break;
// }

// contoh 2

var item = prompt('masukkan nama makanan/minuman: \n (cth: nasi, daging, susu, burger, softdrink)');

switch (item) {
    case 'nasi':
        alert('ini makanan/minuman sehat')
        break;
    case 'daging':
        alert('ini makanan/minuman sehat')
        break;
    case 'susu':
        alert('ini makanan/minuman sehat')
        break;
    case 'burger':
        alert('ini makanan/minuman tidak sehat')
        break;
    case 'softdrink':
        alert('ini makanan/minuman tidak  sehat')
        break;        
    default:
        alert('makanan/minuman tidak ada dalam list')
        break;
}