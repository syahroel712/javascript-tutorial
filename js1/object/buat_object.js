// membuat object
// object literal
var mhs1 = {
    nama: "Ani",
    nrp: "9218312",
    email: 'ani@gmail.com',
    jurusan: 'Teknik Sipil'
};

var mhs2 = {
    nama: "Ina",
    nrp: "12939123",
    email: "ina@gmail.com",
    jurusan: "Teknik Industri"
};


// function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('budi', '9232394293', 'budi@gmail.com', 'Teknik Sipil');

var mhs4 = buatObjectMahasiswa('andi', '98342293', 'andi@gmail.com', 'Teknik Pangan');

// Constructor
// function yng khusus utk membuat objet, mirip dengan cara function declaration
// biasanya nama fungsi huruf awalnya pakai  kapital
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa('ujang', '3245234', 'ujang@gmail.com', 'Teknik Mesin');