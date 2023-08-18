// getName();
// console.log(x);
// var x = 4;
// console.log(x);
// function getName() {
//   console.log("Namaste JavaScript!");
// }

// var a = 2;
// b();
// function b() {
//  var a = 23;
//   console.log("Namaste JavaScript!");
//   console.log(callBackFn.a);
// }
// console.log(a);

// console.log(x);
// var x = 3;
// console.log(x); //3
// console.log(a); //a is not defined =>Reference Error.

//   var a = 23;
//   let b = 54;
//   const c = 63;

// console.log(a);
// console.log(b);
// console.log(c);

// // var a = 5;
// let a=43;
// {
// //   var a = 32;
// let a=54
//   console.log(a);
// }
// console.log(a);

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     console.log(i);
//     setTimeout(() => {
//     //   console.log(i);
//     console.log("Namaste");
//     }, i * 1000);
//   }
// }
// x();

// function x() {
//   let a = 32;
//   let b = 23;
//   function y( b) {
//     // console.log();
//     // console.log();
//     return a + b;
//   }
//   return y;
// }
// const res = x();
// console.log(console.log(res(43)));

// function greet() {
//   console.log("Hello,👋");
// }

// function x() {
//   greet();
// }
// x();

//  calculate the area:

// const arr = [1, 2, 3, 4, 5];

// function area(r) {
//   return Math.PI * r * r;
// }

// function calculate(arr) {
//   let result = [];
//   //   for (let i = 0; i < arr.length; i++) {
//   //     result.push(area(arr[i]));
//   //   }
//   arr.forEach((el) => {
//     result.push(area(el));
//   });
//   return result;
// }
// console.log(calculate(arr));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const filterData = arr.filter((el) => el % 2 != 0);
// console.log(filterData);

// function filterOld(data) {
//   if (data % 2 !== 0) {
//     return data;
//   }
// }

// function calculate(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(filterOld(arr[i]));
//   }
//   return result;
// }
// const ans = calculate(arr);
// console.log(ans);

// function isEven(x) {
//   return x % 2 === 0;
// }

// Array.prototype.filterFn = function (callBackFn) {
//   const filterData = [];
//   for (let i = 0; i < callBackFn.length; i++) {
//     callBackFn(callBackFn[i]) ? filterData.push(callBackFn[i]) : null;
//   }
//   return filterData;
// };

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const xxx = arr.filterFn((x) => x % 2 != 0);
// console.log(xxx);

// Array.prototype.filterFn = function (callBackFn) {
//   const filterData = [];
//   for (let i = 0; i < this.length; i++) {
//     callBackFn(this[i]) ? filterData.push(this[i]) : null;
//   }
//   return filterData;
// };

// const isEven = (data) => data % 2 === 0;
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const even = arr.filterFn(isEven);
// console.log(even);

// Pollyfill for Map

// Map:

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // // const res = arr.map((el) => el * 2);
// // // console.log(res);

// // Array.prototype.mapMe = function (callBackFn) {
// //   const mapData = [];
// //   for (let i = 0; i < this.length; i++) {
// //     // callBackFn(this[i]) ? mapData.push(this[i]) : null;
// //     mapData.push(callBackFn(this[i]));
// //   }
// //   return mapData;
// // };

// // function sq(x) {
// //   return x * x;
// // }
// // console.log(sq(2))
// // console.log(arr.mapMe(sq));

// // Map Method::

// const arr = [1, 2, 3, 4, 5, 6];

// const double = (x) => {
//   return x * 2;
// };
// /**
// const myMap = arr.map(double);
// console.log(myMap);
// */

// // Pollyfill Of Map😃::

// Array.prototype.ourMap = function (callBackFn) {
//   const result = [];
//   for (var i = 0; i < this.length; i++) {
//     result.push(callBackFn(this[i]));
//   }
//   return result;
// };

// const res = arr.ourMap(double);
// console.log(res);

// // Filter Method::

// // const filterEven = arr.filter((el) => el % 2 === 0);
// // console.log(filterEven);

// // PollyFill Of Filter😃::

// const isEven = (x) => x % 2 === 0;

// Array.prototype.ourFilter = function (callBackFn) {
//   const result = [];
//   for (var i = 0; i < this.length; i++) {
//     callBackFn(this[i]) ? result.push(this[i]) : null;
//   }
//   return result;
// };
// const resF = arr.ourFilter(isEven);
// console.log(resF);

// // Reduce Method::

// // const totalPrice = arr.reduce((acc, curr, i) => {
// //   return (acc += curr);
// // });
// // console.log(totalPrice);

// // Reduce PollyFill😃::

// Array.prototype.ourReduce = function (callBackFn, initialValue) {
//   const acc = initialValue;
//   for (var i = 0; i < this.length; i++) {
//     acc;
//   }
//   return acc;
// };

// // forEach Method::

// const x = arr.forEach((el) => console.log(el));
// console.log(x);

// const array1 = ['a', 'b', 'c'];

// array1.forEach((element) => console.log(element));

// const getData = (country) => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0]);
//       const neig = data[0]?.borders[0];
//       return fetch(`https://restcountries.com/v3.1/name/${neig}`);
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data[0]);
//       const neig1 = data[0]?.borders[3];
//       if(!neig1)return "Not Found"
//       return fetch(`https://restcountries.com/v3.1/name/${neig1}`);
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data[0])).catch((err)=>console.log("🌋🌋"))
// };
// getData("portugal");

// const lotteryTicket = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve(console.log("You Win!"));
//     } else {
//       reject(new Error("You Lost!"));
//     }
//   }, 1000);
// });

// lotteryTicket.then((res) => console.log(res)).catch((err) => console.log(err));
