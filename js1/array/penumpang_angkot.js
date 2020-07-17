// penumpang naik
var penumpang = [];

function tambahPenumpang(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambahakn peumpang di awawl array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi yang kosong
            if (penumpang[i] == undefined) {
                // tambahkan penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari funtion
                return penumpang;
            }
            // jika sudah ada nama penumpang yang sama
            else if (penumpang[i] == namaPenumpang) {
                //tampilkan pesan kesalahannya 
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if (i == penumpang.length - 1) {
                // tambahkan penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}
console.log(penumpang);


// penumpang turun

function hapusPenumpang(namaPenumpang, penumpang) {
    // jika angkot kosong 
    if (penumpang.length == 0) {
        console.log('Angkot sedang kosong');
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log('Penumpang dengan nama ' + namaPenumpang + ' tidak ada dalam angkot');
                return penumpang;
            }
        }
    }
}