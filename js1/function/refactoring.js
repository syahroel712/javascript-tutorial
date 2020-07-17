function jumlahVolumeDuaKubus(a, b) {
    // var volumeA;
    // var volumeB;
    // var total;

    // volumeA = a * a * a;
    // volumeB = b * b * b;

    // total = volumeA + volumeB;
    // return total;

    // script panjang  diatas bisa disingkan dengan script dbawah dan akan menghebat lebih banyak memori karena kita tidak perlu mendeklarasikan variabel
    return a * a * a + b * b * b;
}
alert(jumlahVolumeDuaKubus(2, 3));