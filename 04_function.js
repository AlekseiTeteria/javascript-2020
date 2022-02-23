// 1 Функции
// Function Declaration
// function greet(name) {
//   console.log('Привет - ', name)
// }

// Function Expression
// const greet2 = function greet2(name) {
//   console.log('Привет 2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval) // clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// 3 Стрелочные функции
// function greet() {
//   console.log('Привет - ')
// }

// const arrow = (name, age) => {
//   console.log('Привет - ', name, age)
// }

// const arrow2 = name => console.log('Привет - ', name)

// // arrow2('Vladilen')

// const pow2 = num => num ** 2

// // console.log(pow2(5))

// // 4 Параметры по умолчанию
// const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(41, 4))
// console.log(sum())

// function sumAll(...all) {
//   let result = 0
//   for (let num of all) {
//     result += num
//   }
//   return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 Замыкания
// function createMember(name) {
//   return function(lastName) {
//     console.log(name + lastName)
//   }
// }

// const logWithLastName = createMember('Vladilen')
// console.log(logWithLastName('Minin'))
// console.log(logWithLastName('Kuznezov'))

// const clients = ["Mango", "Poly", "Ajax"];

// // Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Aja

// Test mentor 1

// const string = `abcde`;
// const chars = [`a`, `b`, `e`];
// const index = [];

// for (let i = 0; i < string.length; i += 1) {
//   if (chars.includes(string[i])) {
//     index.push(i);
//   }
// }
// console.log(index);

// Test mentor 2
// let str = `Каждый охотник желает знать`;
// function stringToaray(str) {
//   return str.split(` `);
// }
// const arr = stringToaray(str);
// console.log(arr);

// const propName = "famelei";
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: "Генри Сибола",
// };

// console.log(user.famelei); // 'Генри Сибола'
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
