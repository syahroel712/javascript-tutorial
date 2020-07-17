// // case 1
// function kerjakanTugas(matkul, selesai) {
//     console.log("mulai mengerjakan tugas " + matkul)
//     selesai()
// }

// function selesai() {
//     alert('selesai kerjakan tugas')
// }

// kerjakanTugas("Pemograman Web", selesai);

// case 2



// case 5
function repeatLog(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repeatLog(10, console.log);
repeatLog(10, alert);