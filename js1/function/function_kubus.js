var kubus_1 = prompt('masukkan sisi kubus pertama');
var kubus_2 = prompt('masukkan sisi kubus kedua');

function jumlahVolume2Kubus(kubus_1, kubus_2) {
    var volumeKubus1;
    var volumeKubus2;
    var total;

    volumeKubus1 = kubus_1 * kubus_1 * kubus_1;
    volumeKubus2 = kubus_2 * kubus_2 * kubus_2;

    total = volumeKubus1 + volumeKubus2;
    return total;
}

alert('Jadi volume kedua kubus adalah ' + jumlahVolume2Kubus(kubus_1, kubus_2));