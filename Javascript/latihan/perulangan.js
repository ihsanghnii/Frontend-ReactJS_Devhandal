// for (let i = 1; i <= 10; i += 1) {
//   console.log('saya ada di dalam loop');
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 20; i >= 0; i -= 2) {
//   console.log(i);
// }

// for (let i = 10; i <= 100000; i *= 10) {
//   console.log(i);
// }

// const animals = ['cat', 'cow', 'deer', 'koala'];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i+1, animals[i])
// }

// let str = 'LOL';

// for (let i = 0; i < 4; i++) {
//   console.log("Outer:", i);
//   for (let j = 0; j < str.length; j++) {
//     console.log('    inner:', str[j]);
//   }
// }

// const pilihan = 'abcd';

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal nomor ${i}:`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`   ${pilihan[j]}. Pilihan Jawaban`)
//   }
// }

// const studentRow = [
//   ['Olivia', 'Liam', 'Emma', 'Noah'],
//   ['Amelia', 'Oliver', 'Ava', 'Elijah'],
//   ['Sophia', 'Mateo', 'Isabella', 'Lucas'],
// ]

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${row[j]}`);
//   }
// }


/**
 * 
 * WHILE
 * 
 */


// let num = 0;

// while (num < 10) {
//   console.log(num);
//   num++
// }

// const PASSWORD = 'Pass123';

// let guess = prompt('enter the password');
// while (guess !== PASSWORD) {
//   guess = prompt('eneter the password');
// }

// alert('conrats! the password is correct')


/**
 * 
 * BREAK
 * 
 */


// let input = prompt('Hei, say something');

// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === 'stop') break;
// }

// alert('ok')

for (let i = 0; i < 10000; i++) {
  console.log(i);
  if (i === 100) break;
}