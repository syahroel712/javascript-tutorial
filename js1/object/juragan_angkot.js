// mmebuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // function yang ada di dalm object disebut method
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('angkot masih kosong');
            return false;
        }
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            } else if (this.penumpang[i] != namaPenumpang) {
                alert('nama penumpang tidak ada');
            }
        }
    }
}

var angkot1 = new Angkot('Haha', ['batang arau', 'pasa padang panjang'], [], 0);

var angkot2 = new Angkot('Bujang', ['pitalah', 'batang arau'], [], 0);