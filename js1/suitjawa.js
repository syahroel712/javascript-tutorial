var tanya = true;
while (tanya) {

    // menangkap pilihan player
    var player = prompt('pilih: gajah, semut, orang');


    // menangkap pilahan computer
    // membuat pilihan comp jadi random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    console.log(comp);

    // menentukan rules
    var hasil = '';
    if (player == comp) {
        hasil = 'SERI';
    } else if (player == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (player == 'orang') {
        // if (comp == 'semut') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'semut') ? 'MENANG' : 'KALAH';
    } else if (player == 'semut') {
        // if (comp == 'gajah') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
    } else {
        hasil = 'Inputan salah';
    }

    // tampilkan hasil
    alert(
        'Kamu memilih : ' + player + '\n' +
        'Komputer memlih : ' + comp + '\n' +
        'Hasilnya : ' + hasil
    );
    tanya = confirm('lagi ?');
}
alert('terimakasih sudah bermain');