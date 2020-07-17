var kesempatan = 2;
var comp = Math.floor(Math.random() * 10) + 1;
alert('Selamat datang di Tebak Angka \n Anda Punya 3 Kesempatan ');
// membuat pilihan comp jadi random
console.log(comp);
var lagi = true;
while (lagi) {
    while (kesempatan >= 0) {
        // menangkap pilahan player
        var player = prompt('masukkan angka tebakan : 1 - 10');

        // menangkap pilahan computer
        // menentukan rules
        var hasil = '';
        if (player == comp) {
            hasil = 'BENAR';
        } else if (player < comp) {
            hasil = 'TERLALU RENDAH';
        } else if (player > comp) {
            hasil = 'TERLALU TINGGI';
        } else {
            hasil = 'Inputan salah';
        }

        // tampilkan hasil
        if (hasil != 'BENAR' && kesempatan != 0) {
            alert(
                'Hasil : ' + hasil + '\n' +
                'Kamu masih punya ' + kesempatan + ' kesempatan lagi'
            );
        } else if (hasil == 'BENAR') {
            alert(
                'Hasil : ' + hasil + '\n' +
                'Good Job!'
            );
            break;
        } else {
            alert('Kesempatan sudah habis \nangka yang dicari adalah ' + comp);
        }
        kesempatan--;
    }
    lagi = confirm('lagi ?');
}
alert('terimakasih sudah bermain');