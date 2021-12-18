// //Ex1
// let userId = Symbol("id");
// const user = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 40,
//   address: "USA",
//   [userId]: 123,
// };
// for (let key in user) {
//   console.log(user);
// }

// //Ex2
// let vin = Symbol("4S3BMHB68B3286050");
// const car = {
//   brand: "Porsche",
//   color: "grey",
//   engine: "V8",
// };
// for (let key in car) {
//   console.log(car);
// }

// console.log(vin.description);

// //Ex3
// let weatherForecast = {
//   yerevan: 36n,
//   kotayq: 33n,
//   lori: 28n,
//   gegharqunik: 20n,
//   ararat: 25n,
//   aragacotn: 35n,
//   shirak: 34n,
//   tavush: 32n,
//   armavir: 38n,
//   vayocDzor: 34n,
//   syuniq: 30n,
// };

// let findMaxTemp = 0n;
// for (let key in weatherForecast) {
//   if (weatherForecast[key] > findMaxTemp) {
//     findMaxTemp = weatherForecast[key];
//   }
// }
// console.log(findMaxTemp);

// let findMinTemp = 0n;
// for (let key in weatherForecast) {
//   if (weatherForecast[key] < findMinTemp) {
//     findMinTemp = weatherForecast[key];
//   }
// }
// console.log(findMinTemp);

// let findAvarageTemp = 0n;
// let count = 0n;
// for (let key in weatherForecast) {
//   findAvarageTemp += weatherForecast[key];
//   count++;
// }
// let a = findAvarageTemp / count;
// alert(a);

// //ex4
// let country = {
//   name: "Armenia",
//   capital: "Yerevan",
//   population: 3000000,
//   toString: function () {
//     return (
//       "The capital of " +
//       this.name +
//       " is " +
//       this.capital +
//       " with a population of " +
//       this.population
//     );
//   },
// };
// alert(country);

//Ex5
let book2 = {
  author: "Chares Petzold",
  title: "Code",
  price: 15000,
  toString: function () {
    return this.author + " " + this.title;
  },
  valeuOf: function () {
    return this.price;
  },
};

let book1 = {
  author: "James Joue",
  title: "Ulysses",
  price: 25000,
  toString: function () {
    return this.author + " " + this.title;
  },
  valeuOf: function () {
    return this.price;
  },
};

alert(book2);
alert(book1);

alert(book1.price + book2.price);
