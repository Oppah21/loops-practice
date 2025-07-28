//  Loops and Iteration - Exercises
// Exercise1
// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }
// Exercise2
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// Exercise3
// let word = "bootcamp";
// for (let char of word) {
//   console.log(char);
// }
// Exercise4
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }
// Exercise5
// let numbers = [3, 7, 2, 9, 5];
// let sum = 0;

// for (let num of numbers) {
//   sum += num;
// }

// console.log("Total Sum:", sum);
// Exercise7
// let nums = [1, 4, 6, 8];

// for (let num of nums) {
//   console.log(num * 2);
// }
// Exercise8
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}




