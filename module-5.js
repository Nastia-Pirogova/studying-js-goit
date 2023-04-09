// const openai = require('openai');
// openai.apiKey = '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';


// function fakeBin(x) {
//     let arr = [...x]
//     let newArr = []
//     console.log(arr)
//
//     arr.forEach(elem => {
//         if (elem  < 5) {
//             elem = 0;
//         } else {
//             elem = 1;
//         }
//         return  newArr.push(elem)
//     })
//     return newArr.join("")
//
// }
//
// console.log(fakeBin('45385593107843568'))
// console.log(fakeBin('509321967506747'))

// Учитывая строку цифр, вы должны заменить любую цифру ниже 5
// на «0», а любую цифру 5 и выше на «1». Верните полученную строку.
//     Примечание: ввод никогда не будет пустой строкой

//
// function highAndLow(numbers) {
//     let arr = [numbers]
//     console.log(arr)
// }
//
// console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

//
// function confindSmallestInt(args){
//  return  Math.min(...args)
//
// }
//
// console.log(confindSmallestInt([78,56,232,12,8]))


// function greet(name, owner) {
//     if (name === owner) {
//         return 'Hello boss'
//     } else {
//         return 'Hello guest'
//     }
// }
//
// console.log(greet('Daniel', 'Daniel'))
// console.log(greet('Greg', 'Daniel'))

// function countPositivesSumNegatives(input) {
//     let totalA =0
//     let totalB =0
//     if (!input || input.length === 0) {
//         return [];
//     }
//     for (const inputElement of input) {
//         if (inputElement > 0){
//             totalA++
//         }else{
//             totalB += inputElement
//         }
//     }
//         return [totalA, totalB]
// }
//
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]

/*
Тарган - одне з найшвидших комах. Напишіть функцію, яка приймає швидкість у км/год і повертає її в см/с, округлену до цілого числа (= підлога).
    Наприклад:

1,08 --> 30
Примітка! Введенням є дійсне число (фактичний тип залежить від мови) і >= 0. Результат має бути цілим числом.
*/

// function cockroachSpeed(s) {
//
//     return  Math.floor(s * 27.7778)
// }
//
// console.log(cockroachSpeed(1.08))// 30


/*
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

/*console.log('[] === []: ', [] === []); //false
console.log('{} === {}: ', {} === {}); //false
console.log(
    'function() {} === function() {}: ',
    function () {} === function () {}, //false
);

const fnA = function () {
    console.log('hello');
};

const fnB = fnA;
console.log('fnB === fnA: ', fnB === fnA); //true*/

/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };
//
// user.showTag();


/*
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */

// const foo = function () {
//     console.log('foo -> this', this); //foo -> this undefined
// };
//
// foo();


/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };
//
// // showTag();
//
// const user = {
//     tag: 'Mango',
// };
//
// user.showUserTag = showTag;
// console.log('user', user);
//
// user.showUserTag();

/*
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };
//
// user.showTag();
//
// const outerShowTag = user.showTag;
//
// // outerShowTag();


/*
 * Контекст в callback-функциях
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };
//
//
// const invokeAction = function (action) {
//     console.log(action);
//
//     action();
// };
//
// invokeAction(user.showTag);


/*
 * Тренируемся 1
 */

// const fn = function () {
//     console.log('fn -> this', this); //undefined
// };
//
// fn(); // Какой this ???

/*
 * Тренируемся 2
 */

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };
//
// book.showThis(); // Какой this ??? {title: 'React for beginners', showThis: ƒ, showTitle: ƒ}
//
// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ??? undefined
//
// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ??? Uncaught TypeError: Cannot read properties of undefined (reading 'title')

/*
 * Тренируемся 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };
//
//     // changeColor(); // Какой this ??? undefined
//
//     const sweater = {
//         color: 'teal',
//     };
//
//     sweater.updateColor = changeColor;
//
//     // sweater.updateColor('red'); // Какой this ??? {color: 'teal', updateColor: ƒ}
//
//     return sweater.updateColor;
// };
//
// const swapColor = makeChangeColor();
//
// swapColor('blue'); // Какой this ??? undefined

/*
 * Тренируемся 4
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };
//
//     return changeColor;
// };
//
// const updateColor = makeChangeColor();
// //updateColor('yellow'); // Какой this ??? undefined
//
// const hat = {
//     color: 'blue',
//     updateColor: updateColor,
// };
//
// hat.updateColor('orange'); // Какой this ??? {color: 'blue', updateColor: ƒ}

/*
 * Тренируемся 5
 */

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this); //undefined
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this); //undefined
//         this.value -= value;
//     },
// };
//
// const updateCounter = function (value, operation) {
//     operation(value);
// };
//
//  updateCounter(10, counter.increment);
//  updateCounter(5, counter.decrement);
//
// counter.increment(10)
// /*
//  * * Контекст в callback-функциях не сохр
//  */


/*
 * call и apply
 */
// const showThis = function (a, b, arr) {
//    // console.log(a, b, arr);
//     console.log('showThis -> this', this); //undefined
// };
//
//  showThis();
//
// const objA = {
//     a: 5,
//     b: 10,
// };
//
// showThis.call(objA, 5, 1, 100, 200, 300); //{a: 5, b: 10}
// showThis.apply(objA, [5, 1, [100, 200, 300]]); // {a: 5, b: 10}
//
// const objB = {
//     x: 788,
//     y: 25,
// };
//
// showThis.call(objB, 1, 1, 2); //{x: 788, y: 25}
// showThis.apply(objB, [1, 1, 2]); //{x: 788, y: 25}
//
// showThis();

/*!===============================================*/
// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };
//
// const hat = {
//     color: 'black',
// };
//
// // changeColor.call(hat, 'orange');
// // console.log(hat); //{color: 'orange'}
//
// const sweater = {
//     color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater); //{color: 'blue'}

/*
 * bind (copy)
 */

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow'); //{color: 'black'}
// console.log(hat); //{color: 'yellow'}
//
// changeSweaterColor('red'); //{color: 'green'}
// console.log(sweater); //{color: 'red'}


/*
 * counter
 */

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };
//
// const updateCounter = function (value, operation) {
//     operation(value);
// };
//
// updateCounter(10, counter.increment.bind(counter)); //{value: 0, increment: ƒ, decrement: ƒ}
// updateCounter(5, counter.decrement.bind(counter)); //{value: 10, increment: ƒ, decrement: ƒ}
//
// console.log(counter); //{value: 5, increment: ƒ, decrement: ƒ}


/*!=======================================================*/

// const counter = {
//     value: 0,
//     increment() {
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };
//
// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');


// console.log(decrementBtn)
// console.log(incrementBtn)
// console.log(valueEl)

// decrementBtn.textContent = "- - - -";
// incrementBtn.textContent = "++++"
//
// decrementBtn.addEventListener('click', function () {
//     console.log('click on decrement');
//
//     counter.decrement();
//     console.log(counter)
//
//     valueEl.textContent = counter.value;
// });
//
//
// incrementBtn.addEventListener('click', function () {
//     console.log('click on increment')
//     counter.increment();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });
//
// console.log(window);


/*! ==================================*/

/*
! Example 1 - Майстерня коштовностей
Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю
і розраховує та повертає загальну вартість каменів з таким ім'ям,
ціною та кількістю з властивості stones.
*/

// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         // const currentStone = this.stones.find(({name}) => name === stoneName)
//         // return currentStone.price * currentStone.quantity
//
//         const {price, quantity} = this.stones.find(({name}) => name === stoneName)
//         return price * quantity
//     },
// };
//
// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

/*!===============================================================*/
/*
! Example 2 - Телефонна книга
Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.
*/
// const phonebook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(newContact);
//     },
//     generateId() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//         return Date.now();
//     },
// };
//
// console.log(
//     phonebook.add({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     phonebook.add({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );
//
// console.log(phonebook.contacts)

/*!===============================================================*/
/*
Example 3 - Калькулятор
Створіть об'єкт calculator з трьома методами:

* read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
* add() - повертає суму збережених значень.
* mult() - перемножує збережені значення та повертає результат.
*/

// const calculator = {
//
//     read(a = 0, b = 0) {
//         this.a = a;
//         this.b = b;
//     },
//     add() {
//         return this.a + this.b
//     },
//     mult() {
//         return this.a * this.b
//     }
//
// };
//
// calculator.read(5, 3),
//     console.log(calculator)
//
// console.log(calculator.add())   //8
// console.log(calculator.mult())  //15


/*!===============================================================*/
/*
- this in arrow func
- this in normal func
- call/apply and func
*/


// function  boo(){
//
//     console.log(this)
// }
//
// function  foo(){
//     boo();
//     console.log(this)
// }
// foo()

/*!===============================================================*/

// const petya = {
//     username: "Petya",
//     showThis() {
//         console.log(this);
//     },
//     showName() {
//         console.log(this.username);
//     },
// };
//
// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'


//! ====

// const foo = () => console.log(this)
// foo()

// function boo() {
//     console.log(this);
// }
//
//
// const user = {
//     username: "Alex",
//     sayHi() {
//         const foo = () => console.log(this);
//         // foo()
//         //foo.call({ username: "Lena" })
//         const fooCopy = foo.bind({username: "Lena"})
//         fooCopy()
//         //boo();
//         console.log(`Hello everyone! My name is ${this.username}`);
//     },
// };
//
//
// // boo.call({username: "Lena"})
//
// user.sayHi()


//! =========================================================

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
//
// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   //console.log(`Обробляємо заявку від ${callback()}.`);
//    console.log(`Обробляємо заявку від ${callback.call(customer)}.`);
// }
//
// //makeMessage(customer.getFullName.bind(customer));
// makeMessage(customer.getFullName);

/*!=============================================*/
// під час передачі ф-ції(або методу) в якості колбек ф-ції ми втрачаємо
// контекст. Це відбувається тому що контекст ф-ції визначається на момент
// її виклику, а оскільки під час передачі колбек ф-ції ми її не викликаємо
// (бо треба передати посилання, а не результат), то і сама ф-ція не розуміє
// що буде її контекстом

// якщо ф-ція викликається без контексту - її контекстом буде Window, а у
// 'use strict' - undefined
/*!=============================================*/

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Change code above this line
// };
//
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//         return this.orders
//             .map(order => `email: ${order.email} dish: ${order.dish}`)
//             .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
// };

/*!======================================================================*/

//!ООП

// Прототипное наследование
// Прототип объекта и Object.create()
// Создание объектов через new - функция-конструктор
// Статические методы и свойства


/**
 * Прототип объекта
 *
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Собственные свойства и Object.prototype.hasOwnProperty()
 * - Цепочка прототипов
 */


// const objC = {
//   z: 5,
// };
// // console.log(objC)
// // console.log(objC.hasOwnProperty('z'))
//
// const objB = Object.create(objC);
// objB.y = 2;
//
// console.log("objC",objC)
//
// console.log("objB",objB)
// // console.log("objB.z",objB.z)
// // console.log("objB.y",objB.y)
//
// const objA = Object.create(objB);
// objA.x = 1;
//
//  console.log(objA.z);
//
// objA.z = 100;
// console.log('objA', objA);
//
// console.log(objA.hasOwnProperty('z'));

// const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);
//
// console.log(dummyObj.message);

//  'Это собственное свойство объекта'
//  'Это свойство на объекте-прототипе'

/*
 * Алгоритм поиска свойства в цепочке прототипов:
 * 1. Поиск начинается в собственных свойствах
 * 2. Если свойства нет в сообственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращается при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);
//
// console.log(objA.x);


/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

// 1. Если функция вызывается через new, создается пустой объект
// 2. Функция вызывается в контексте созданного объекта,
//    то есть в this записывается ссылка на него
// 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

// 4. Ссылка на обьект возвращается в место вызова new Car


// const Car = function (brand, model, price) {
//     // const { brand, model, price } = config;
//     // 2. Функция вызывается в контексте созданного объекта,
//     //    то есть в this записывается ссылка на него
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//
//     // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//     //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
//     console.log(this) //Car {brand: 'Audi', model: 'Q3', price: 25000}
//     // 4. Ссылка на обьект возвращается в место вызова new Car
// };
//
// const myCar = new Car("Audi", "Q3", 25000);
// console.log(myCar) //Car {brand: 'Audi', model: 'Q3', price: 25000}
//
//
// const myCar2 = new Car(10);
// console.log(myCar2)
//

/*!======================================================================*/

// const Car3 = function (config = {}) {
//     const {brand, model, price} = config
//     this.brand = config.brand;
//     this.model = config.model;
//     this.price = config.price;
// };
//
// const myCar3 = new Car3({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 25000
// });
// console.log(myCar3) //Car3 {brand: 'Audi', model: 'Q3', price: 25000}
//
//
// const myCar4 = new Car3({
//     brand: 'BMW',
//     model: 'X6',
//     price: 50000
// });
// console.log(myCar4) //Car3 {brand: 'BMW', model: 'X6', price: 50000}
//
// const myCar5 = new Car3();
// console.log(myCar5) //Car3 {brand: undefined, model: undefined, price: undefined}

/*!======================================================================*/

// const Car = function ({ brand, model, price } = {}) {
//     // const { brand, model, price } = config;
//     // 2. Функция вызывается в контексте созданного объекта,
//     //    то есть в this записывается ссылка на него
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//
//     // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//     //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
//
//     // 4. Ссылка на обьект возвращается в место вызова new Car
// };
//
// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello :) '); //Hello :)
//     console.log(`${this.price} price`); //50000 price
// };
//
// // Car.prototype.changePrice = function (newPrice) {
// //     this.price = newPrice;
// // };
//
//  console.log(Car.prototype);
// const myCar4 = new Car({
//     brand: 'BMW',
//     model: 'X6',
//     price: 50000
// });
// console.log(myCar4);
// myCar4.sayHi() //Hello :)

/*!======================================================================*/


// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };
//
// console.log(User.prototype);
//
// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };
//
// const mango = new User({ email: 'mango@mail.com', password: 1111111 });
//
// mango.changeEmail('my-new-mail@mail.com');
// console.log(mango);


/*!======================================================================*/

// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()


/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */
// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };
//
// console.log(User.prototype);
//
// User.prototype.changeEmail = function (newMail) {
//     this.email = newMail;
// };
//
// const mango = new User({ email: 'mango@mail.com', password: 1111111 });
//
// mango.changeEmail('my-new-mail@mail.com');
// // console.log(mango);
//
//
// /*!======*/
// User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипе.';
//
// User.logInfo = function (obj) {
//     console.log('User.logInfo -> obj', obj);
//     console.log('Почта: ', obj.email);
//     console.log('Пароль: ', obj.password);
// };
//
// User.logInfo(mango);
//
// // Object.keys()
// // Object.value()


// const CounterPlugin = function ({
//                                     rootSelector,
//                                     initialValue = 0,
//                                     step = 1,
//                                     onUpdate = () => null,
//                                 } = {}) {
//     this._value = initialValue;
//     this._step = step;
//     this._refs = this._getRefs(rootSelector);
//
//     this.onUpdate = onUpdate;
//
//     this._bindEvents();
//     this.updateValueUI();
// };
//
// CounterPlugin.prototype._getRefs = function (rootSelector) {
//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     refs.incrementBtn = refs.container.querySelector('[data-increment]');
//     refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//     refs.value = refs.container.querySelector('[data-value]');
//
//     return refs;
// };
//
// CounterPlugin.prototype._bindEvents = function () {
//     this._refs.incrementBtn.addEventListener('click', () => {
//         console.log('CounterPlugin.prototype._bindEvents -> this', this);
//         this.increment();
//         this.updateValueUI();
//     });
//
//     this._refs.decrementBtn.addEventListener('click', () => {
//         console.log('CounterPlugin.prototype._bindEvents -> this', this);
//         this.decrement();
//         this.updateValueUI();
//     });
// };
//
// CounterPlugin.prototype.updateValueUI = function () {
//     this._refs.value.textContent = this._value;
//
//     this.onUpdate();
// };
//
// CounterPlugin.prototype.increment = function () {
//     this._value += this._step;
// };
//
// CounterPlugin.prototype.decrement = function () {
//     this._value -= this._step;
// };
//
// new CounterPlugin({
//     rootSelector: '#counter-1',
//     step: 10,
//     initialValue: 100,
//     onUpdate: () => console.log('Это мой кастомный колбек для onUpdate'),
// });
//
// new CounterPlugin({rootSelector: '#counter-2', step: 2});


/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */

// class Car {
//     static description = 'Класс описывающий автомобиль';
//
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }
//
//     constructor({ brand, model, price } = {}) {
//         this.brand = brand;
//         this._model = model;
//         this._price = price;
//     }
//
//     get price() {
//         return this._price;
//     }
//
//     set price(newPrice) {
//         this._price = newPrice;
//     }
//
//     get model() {
//         return this._model;
//     }
//
//     set model(newModel) {
//         this._model = newModel;
//     }
// }
//
// const carInstance = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });
//
// console.log(carInstance.model);
// carInstance.model = 'Q4';
// console.log(carInstance.model);
//
// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);
//
// console.log(carInstance);

/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */

// class Car1 {
//     static description = 'Класс описывающий автомобиль';
//
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }
//
//     //#test = "test"
//
//     mySuperPublicField = 555
//
//     constructor({brand, model, price} = {}) {
//         // console.log('Выполняется constructor');
//         // console.log(this);
//
//         this.brand = brand;
//         this._model = model;
//         this.price = price;
//
//         this.mySuperPublicField = 555;
//     }
//
//     // changePrice(newPrice) {
//     //     this.price = newPrice
//     //     //console.log(this.#test);
//     // }
//
//     get price() {
//        return  this._price
//         //console.log(this.#test);
//     }
//
//     set price(newPrice) {
//         this._price = newPrice
//         //console.log(this.#test);
//     }
//
//     get model () {
//         return this._model
//     }
//
//     set model (newModel) {
//         this._model = newModel
//     }
//
//     // setModel(newModel) {
//     //     this.model = newModel
//     // }
//
//     // getModel(){
//     //     return this.model
//     // }
// }
//
// console.dir(Car1)
//
// console.log(Car1.description);
//
// const carInstance = new Car1({
//         brand: 'Audi',
//         model: 'Q3',
//         price: 35000,
//     }
// );
// // console.dir(carInstance)
// // console.log(Object.getPrototypeOf(carInstance))
//
// // Car1.logInfo(carInstance)
// // carInstance.changePrice(2000)
//
//
// // console.log(carInstance.getModel())
// //
// // carInstance.setModel('Q5');
// // console.log(carInstance.getModel()); // logs 'Q5'
//
//
// console.log(carInstance.model);
// carInstance.model = "Q4"
// console.log(carInstance.model);
//
// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);
//
// console.log(carInstance);


// class Car {
//     constructor (brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//
// }
//
// const Car1 = new Car("Audi", "Q3", 36000)
//
//
// console.log(Car1);    // { brand: "Audi", model: "Q3", price: 36000 }


// Change code above this line


// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//
//     getItems() {
//         return this.items
//     }
//
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//
//     removeItem(itemToRemove) {
//         const index = this.items.indexOf(itemToRemove);
//         if (index !== -1) {
//             this.items.splice(index, 1);
//         }
//     }
// }
//
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//
// storage.addItem("Droid");
//
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//
// storage.removeItem("Prolonger");
//
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class StringBuilder {
//     constructor(initialValue) {
//         this.value = initialValue
//     }
//
//     getValue() {
//         return this.value
//     }
//
//     padEnd(str){
//         this.value = this.value.toString() + str;
//     }
//
//     padStart(str){
//         this.value = str + this.value.toString()  ;
//     }
//
//     padBoth(str){
//         this.value = str + this.value.toString() + str ;
//     }
//
// }
//
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Car {
//     #brand
//
//     constructor({brand, model, price}) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//
//     getBrand(){
//         return this.#brand
//     }
//     changeBrand(newBrand){
//         this.#brand = newBrand
//     }
// }


// class Storage {
//     // Change code below this line
//     #items
//
//     constructor(items) {
//         this.#items = items;
//     }
//
//     getItems() {
//         return this.#items;
//     }
//
//     addItem(newItem) {
//         this.#items.push(newItem);
//     }
//
//     removeItem(itemToRemove) {
//         this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// }
//
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]


// class Car {
//     static MAX_PRICE = {
//         MAX_PRICE: 50000,
//     };
//
//     #price;
//
//     constructor({ price }) {
//         this.#price = price;
//     }
//
//     get price() {
//         return this.#price;
//     }
//
//     set price(newPrice) {
//         // newPrice <= Car.MAX_PRICE ? this.#price = newPrice : this.#price
//        // this.#price = newPrice;
//
//         if (newPrice <= Car.MAX_PRICE.MAX_PRICE) {
//             this.#price = newPrice;
//
//         }
//     }
//     // Change code above this line
// }
//
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
//
// audi.price = 49000;
// console.log(audi.price); // 49000
//
// audi.price = 51000;
// console.log(audi.price); // 49000
//
// console.log(Car.MAX_PRICE.MAX_PRICE)

// class Car {
//     static #MAX_PRICE = 50000;
//
//    static checkPrice(price) {
//         if(price > Car.#MAX_PRICE){
//             return "Error! Price exceeds the maximum"
//         }else{
//          return    "Success! Price is within acceptable limits"
//         }
//     }
//
//     constructor({price}) {
//         this.price = price;
//     }
// }
//
// const audi = new Car({price: 36000});
// const bmw = new Car({price: 64000});
//
// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// class User {
//     constructor(email) {
//         this.email = email;
//     }
//
//     get email() {
//         return this.email;
//     }
//
//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
//
// // Change code below this line
//
// class Admin extends User {
//     static AccessLevel =
//         { BASIC: "basic", SUPERUSER: "superuser" }
//
// }

// class User {
//     email;
//
//     constructor(email) {
//         this.email = email;
//     }
//
//     get email() {
//         return this.email;
//     }
//
//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//
//     blacklistedEmails = [];
//
//     blacklist(email){
//         this.blacklistedEmails.push(email)
//     }
//     isBlacklisted(email){
//         for (const emailElement of this.blacklistedEmails) {
//             if (emailElement === email){
//                 return true
//             }else{
//               return false
//             }
//
//         }
//     }
//
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };
//
//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }
//
//     // Change code above this line
// }
//
// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });
//
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
//
// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


/*
 * Наследование
 *  - extends
 *  - super()
 */

// class Hero {
//     constructor({ name = 'hero', xp = 0 } = {}) {
//         this.name = name;
//         this.xp = xp;
//     }
//
//     gainXp(amount) {
//         console.log(`${this.name} получает ${amount} опыта`);
//         this.xp += amount;
//     }
// }
//
// class Warrior extends Hero {
//     constructor({ weapon, ...restProps } = {}) {
//         super(restProps);
//
//         this.weapon = weapon;
//     }
//
//     attack() {
//         console.log(`${this.name} атакует используя ${this.weapon}`);
//     }
// }
//
// class Berserk extends Warrior {
//     constructor({ warcry, ...restProps } = {}) {
//         super(restProps);
//
//         this.warcry = warcry;
//     }
//
//     babyRage() {
//         console.log(this.warcry);
//     }
// }
//
// const ajax = new Berserk({
//     name: 'ajax',
//     xp: 500,
//     weapon: 'axe',
//     warcry: 'waaaaaaaah',
// });
//
// console.log(ajax);
//
// ajax.babyRage();
// ajax.attack();
// ajax.gainXp();
//
// class Mage extends Hero {
//     constructor({ spells, ...restProps } = {}) {
//         super(restProps);
//
//         this.spells = spells;
//     }
//
//     cast() {
//         console.log(`${this.name} что-то там кастует 🧙‍♂️`);
//     }
// }
//
// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
//  console.log(mango);
//  mango.attack();
//  mango.gainXp(1000);
//
// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);
//
// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);
//
// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );
//
// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );


/*! Модуль 5. Заняття 10. Прототипи та класи
! Example 1 - Блогер
* Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

    *email - пошта, рядок
    *age - вік, число
    *numberOfPosts - кількість постів, число
    *topics - масив тем на яких спеціалізується блогер

? Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
? Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.
? Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
*/

// class Blogger {
//     constructor({name, age, numberOfPosts, topics}) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
// }
//
//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }
//
//     updatePostCount(value) {
//         this.numberOfPosts += value
//     }
//
//     // get (value) {
//     //     this.value = value
//     // }
//     //
//     // set (value ){
//     //     this.value = value
//     // }
//
// }
//
// const mango = new Blogger({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
//
// const poly = new Blogger({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

//! ===================================================
// class User {
//     static calculateBirthDate(age) {
//         return 2023 - age;
//     }
//
//     constructor(userName, userAge) {
//         this.name = userName;
//         this.age = userAge;
//     }
//
//     greeting() {
//         console.log(
//             `Hello, ${this.name}! You was born in ${User.calculateBirthDate(
//                 this.age
//             )}`
//         );
//     }
// }
//
// const user = new User("Serg", 25);
// const user1 = new User("Olena", 24);
// console.log(user);
// console.log(user1);
// console.dir(user);
// user.greeting();
//
// console.log(User.calculateBirthDate(60))

// Array.prototype.test = function () {
//     console.log("Я новий метод", this);
// };
//
// const arr = [1, 2, 3];
//
// arr.test();

//! ===================================================
/*
! Example 2 - Сховище
Напиши клас Storage який створює об'єкти для керування складом товарів.
При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
його властивість items.

Додай методи класу:
    *getItems() - повертає масив товарів.
    *addItem(item) - отримує новий товар і додає його до поточних.
    *removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

*/
// class Storage {
//     constructor(arr) {
//         this.items = arr
//     }
//
//     getItems() {
//         return this.items
//     }
//
//     addItem(item) {
//         return this.items.push(item)
//     }
//
//     removeItem(item) {
//         return this.items = this.items.filter((el) => el !== item)
//     }
// }
//
//
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]
//
// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]
//
// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

/*
! Example 3 - User
Напиши клас User який створює об'єкт із властивостями login та email.
Оголоси приватні властивості #login та #email, доступ до яких зроби через
 гетер та сетер login та email.
*/

// class User {
//
//     #login;
//     #email;
//
//     constructor({login, email}) {
//         this.#login = login;
//         this.#email = email;
//     }
//
//     get login(){
//         return this.#login
//     }
//
//     set login(newLogin){
//             if (!Number.isNaN(Number(newLogin))) {
//       /*
//         newLogin = "9"
//         Number("9") -> 9
//         Number.isNaN(9) -> false
//         !false -> true
//
//         newLogin = "Mangodoge"
//         Number("Mangodoge") -> NaN
//         Number.isNaN(NaN) -> true
//         !true -> false
//         */
//       console.log("Логін не може бути числом!");
//     } else this.#login = newLogin;
//
//         //return this.#login =  newLogin
//     }
//   get email() {
//     return this.#email;
//   }
//
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
//
// }
//
// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });
// console.log(mango)
// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// mango.login = '9';
// console.log(mango.login); // Mangodoge
//
// const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
// });
//
// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie


//! =======================================================================
/*
! Example 4 - Нотатки
Напиши клас Notes який керує колекцією нотаток у властивості items.
Замітка це об'єкт із властивостями text та priority.
Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

{
            LOW: 'low',
            NORMAL: 'normal',
            HIGH: 'high'
}
Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/

// class Notes {
//   static Priority = {
//     LOW: "low",
//     NORMAL: "normal",
//     HIGH: "high",
//   };
//
//   static findIndexByText(items, text) {
//     return items.findIndex(({ text: noteText }) => text === noteText);
//   }
//
//   constructor(items = []) {
//     this.items = items;
//   }
//
//   addNote(note) {
//     this.items.push(note);
//   }
//
//   removeNote(text) {
//     const index = Notes.findIndexByText(this.items, text);
//     this.items.splice(index, 1);
//
//     // this.items = this.items.filter(({ text: noteText }) => text !== noteText);
//   }
//   updatePriority(text, newPriority) {
//     const index = Notes.findIndexByText(this.items, text);
//     this.items[index].priority = newPriority;
//
//     // const targetObj = this.items.find(
//     //   ({ text: noteText }) => text === noteText
//     // );
//     // targetObj.priority = newPriority;
//   }
// }
//
// const myNotes = new Notes([]);
//
// myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });
// console.log(myNotes.items);
//
// myNotes.addNote({
//   text: "Моя друга замітка",
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);
//
// myNotes.removeNote("Моя перша замітка");
// console.log(myNotes.items);
//
// myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
// console.log(myNotes.items);

//! =======================================================================

class Restangle {
    constructor(a, b) {
        this.name = "Restangle";
        this.a = a;
        this.b = b;
    }

    greeting() {
        console.log(`Hello! i'm ${this.name}`)
    }

    calculateArea() {
        return this.a * this.b
    }
}

class Square extends Restangle {
    constructor(length) {
        super(length, length);
        this.name = "Square";
    }
}

const rec = new Restangle(4, 3)
console.log(rec);

rec.greeting()
console.log(rec.calculateArea())


const square = new Square(19);

square.greeting()

console.log(square.calculateArea())