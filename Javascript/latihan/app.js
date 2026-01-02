// alert(1 + 1);
// console.log("Hello World");

// console.log("sebelum pembanding")
// if (1 + 1 === 3) {
//   console.log('di dalam pembanding')
// }
// console.log("Setelah pembanding")

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//   console.log("angka lebih besar dari 0.5")
// }

// if (angka <= 0.5) {
//   console.log("angka lebih kecil dari 0.5")
// }

// const iniHari = prompt('isikan hari!').toLowerCase();

// if (iniHari === 'senin') {
//   console.log("Selamat bekerja kawan")
// } else if (iniHari === 'sabtu') {
//   console.log('semoga jangan cepat berlalu')
// } else {
//   console.log('yah biasa saja')
// }

// const nilai = '80';

// if (nilai < 50) {
//   console.log('E');
// } else if (nilai < 60) {
//   console.log('D');
// } else if (nilai < 70) {
//   console.log('C');
// } else if (nilai < 80) {
//   console.log('B');
// } else if (nilai < 100) {
//   console.log('A');
// }

// const password = prompt("buat password");

// // panjang 6 karakter
// // if (password.length >= 6) {
// //   if (password.indexOf(' ') === -1) {
// //     console.log("password valid")
// //   } else {
// //     console.log("password tidak boleh ada spasi")
// //   }
// // } else {
// //   console.log("password harus minimal 6 karakter");
// // }

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//   console.log('password valid');
// } else {
//   console.log("password tidak memenuhi syarat");
// }

// const role = prompt('masukkan role akun');

// // if(role === 'admin' || role === 'spv') {
// //   console.log('boleh mengakses');
// // } else {
// //   console.log('akses ditolak');
// // }

// if (role !== 'admin') {
//   console.log('akses ditolak');
// } else {
//   console.log('boleh mengakses');
// }

const balonku = prompt("input warna balon");

switch(balonku) {
  case 'merah':
    console.log("warna merah");
    break;
  case 'hijau':
    console.log("dorrrr");
    break;
  default:
    console.log("bukan balon saya")
}