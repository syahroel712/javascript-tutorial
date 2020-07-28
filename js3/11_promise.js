// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=2fd52a7a&s=avengers",
//     success: movies => console.log(movies),
// });


// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('GET', 'http://www.omdbapi.com/?apikey=2fd52a7a&s=avengers');
// xhr.send();


// const movies = fetch('http://www.omdbapi.com/?apikey=2fd52a7a&s=avengers');
// console.log(movies);

// fetch('http://www.omdbapi.com/?apikey=2fd52a7a&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));



// promise
// object yang mepresentasikan keberhasilan/ kegagalan sebuah event yang asynchronous di masa kyg akan datang
// janji(terpenuhi/ingkar)
// states(fulfilled/rejected/pending)
// callback (resolve/reject/finally)
// aksi(then /catch )


// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji ditepati');
//     } else {
//         reject('ingkar janji')
//     }
// });

// // console.log(janji1);
// janji1
//     .then(response => console.log('OK :' + response))
//     .catch(response => console.log('NOT OK :' + response));


// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu');
//         }, 2000)
//     }
// });

// console.log('mulai');
// // satu
// // console.log(janji2.then(() => console.log(janji2)));

// // dua
// // janji2
// //     .then(response => console.log('OK :' + response))
// //     .catch(response => console.log('NOT OK :' + response));

// // tiga
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => console.log('OK :' + response))
//     .catch(response => console.log('NOT OK :' + response));

// console.log('selesai');



// Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'aven',
            sutradara: 'as',
            pemeran: 'a'
        }])
    }, 1000)
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'padang',
            temp: '29',
            kondisi: 'cerah'
        }]);
    }, 500)
})

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })