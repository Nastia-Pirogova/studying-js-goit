// const  fnA = function ( message,callback) {
//     console.log(message);
//     console.log(callback);
//     callback(100)
// }
//
// const  fnB = function (number) {
//     console.log("fnB", number);
// }
//
// fnA("wwewew", fnB)


// const doMath = function (a, b, callback) {
//   const result = callback(a,b)
//     console.log(result)
// }
// const  add = function (x, y ){
//     return x + y
// }
//
// const  sub = function (x, y ){
//     return x - y
// }
// doMath(2, 3, function (x, y ){
//     return x + y
// } )
// doMath(10, 8, function (x, y ){
//     return x - y
// } )
//

// const buttonRef = document.querySelector('.js-button');
// const handleBtnClick = function (){
//     console.dir("Click")
// }
//
//
// buttonRef.addEventListener('click', handleBtnClick )
// console.dir(buttonRef)
//
//
//
// const onGetPositionSuccess = function (position){
//     console.log("onGetPositionSuccess")
//     console.log(position)
// }
//
// const onGetPositionError = function (error){
//     console.log("onGetPositionError")
//     console.log(error)
// }
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// )


// const callback = function (params) {
//     console.log("2 c")
// }

// console.log("do");
// setTimeout(callback, 2000)
// console.log("posle");

// const onRequestSuccess = function (response) {
//     console.log("posle");
//     console.log(response)
// }

//fetch("https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D0%B5%D0%BC%D0%BE%D0%BD").then(res => res.json()).then(onRequestSuccess)

// const filter = function (array, test) {
//     const  fillterArr = []
//     for (const arrayElement of array) {
//         console.log(arrayElement)
//         // console.log(test(arrayElement))
//         const passed = test(arrayElement);
//
//         if (passed){
//             fillterArr.push(arrayElement)
//         }
//     }
//     return fillterArr
// }
//
// const  callback1 = function (value){
//     return value >= 3;
//
// }
//
// const r1 = filter([1,2,3,4,5],callback1) ;
// console.log(r1);
//
//
// const  callback2 = function (value){
//     return value <= 4;
//
// }
// const r2 =  filter([1,2,3,4,5,6,7,8], callback2);
// console.log(r2);
//
//
// const fruits = [
//     {name: 'Смарагд', price: 1300, quantity: 4},
//     {name: 'Діамант', price: 2, quantity: 3},
//     {name: 'Сапфір', price: 400, quantity: 7},
//     {name: 'Щебінь', price: 200, quantity: 2},
// ];
//
// const  callback3 = function (fruit){
//     return fruit.quantity >= 3;
//
// }
//
// const r3 =  filter(fruits, callback3);
// console.log(r3);


/*! ======================================================= */

// const fnA = function (parameter) {
//     const innerVariable = " Значение переменной fnA";
//
//     const innerFunction = function () {
//         console.log(parameter)
//         console.log(innerVariable)
//         console.log("Это вызов innerFunction")
//     }
//
//     return innerFunction
// }
//
// const fnB = fnA(555)
// fnB()
// console.log(fnB)

/*! ======================================================= */

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// }
//
// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
//
// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супчик');

// const makeSheff = function (name){
//     const makeDish = function (dish){
//         console.log(`${name} готовит ${dish}`);
//     }
//     return makeDish
// }
//
// const  mango = makeSheff('Mango');
//
// mango(('kokletu'))
//
// const poly = makeSheff('Polyy');
// poly(('coffee'))
// poly(('tea'))


// const floatingPoint = 3.456789
// const  someInt = Math.round(floatingPoint) //3
// const  withDecimals = Number(floatingPoint.toFixed(2)) //3.45
//
// const rounder = function (number, places){
//     return Number(number.toFixed(places));
// }


// console.log(rounder(3.252626, 2))
// console.log(rounder(4.5216626, 3))
//
// const  rounder = function (places){
//     return function (number) {
//         return Number(number.toFixed(places))
//     }
// }
//
// const rounder2 = rounder(2)
// const rounder3 = rounder(3)
// console.log(rounder2(3.272634897852626))
// console.log(rounder3(4.5216626))
//
// const number1 = 3.6678;
// const number2 = 4.1234;
//
// console.log(Number(number1.toFixed(3)))
// console.log(Number(number2.toFixed(4)))


// const salaryMnagerFactory = function (employeeName, baseSalary) {
//     let salary = baseSalary;
//
//     const changeBy = function (amount) {
//         salary += amount
//     }
//
//     return {
//         rase(amount) {
//             changeBy(amount)
//         },
//         lower(amount) {
//             changeBy(amount)
//         },
//         current() {
//             return `Текущая зарплата ${employeeName} - ${salary}`
//         }
//     }
// }
//
// const salaryManager =salaryMnagerFactory("Mango", 5000)
//
// console.log(salaryManager.current())

// const myLibValue = function () {
//     let value = 0;
//
//     const  add = function (num) {
//         value += num;
//     }
//
//     return {
//         add: add,
//         getValue() {
//             return value
//         }
//     }
//
// }
//
// const  myLib = myLibValue();
//
//
// console.log(myLib)
// console.log(myLib.getValue())
// myLib.add(10)
// console.log(myLib.getValue())


/*!=================================================*/

// const add = function (a, b, c) {
//     console.log(arguments);
//
//     return a + b + c
// }
//
// const addArrow = (...args) => {
//     console.log(args);
//
//     // return a + b + c
// }
//
// // const addArrow = (a, b, c) =>  a + b + c
//
// console.log(add(5, 10, 15))
// console.log(addArrow(10, 10, 10))

/*!=================================================*/

// const fnA = function (){
//     return {
//         a: 5,
//     }
// }
//
// console.log(fnA())
//
// const arrowfnA = () => (5)
// console.log(arrowfnA())


// function add(...arg) {
//      let   total = 0;
//     console.log(arg)
//     for (const restElement of arg) {
//         total += restElement
//      }
//  console.log(total)
// }
//
// add(74, 11, 62, 46, 12, 36)


// // Change code below this line
// function addOverNum(...args) {
//     let total = 0;
//
//     for (const arg of args) {
//         total += arg;
//     }
//
//     return total;
//     // Change code above this line
// }


// function addOverNum(one, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//
//     console.log(args);
// }
//     if (one >= args.length){
//         let arr = [args.length]
//         console.log(arr)
//         for (const arg of args) {
//             total += arg;
//
//             console.log(args);
//         }
//     }
//
//     console.log(total);
//
// }
//
//
// addOverNum(5, 1, 2, 3, 6, 9)


// Change code below this line
// function findMatches(arr, ...args) {
//     const matches = []; // Don't change this line
//
//     for (const numbers of arr) {
//         if (args.includes(numbers)){
//             matches.push(numbers)
//         }
//
// .splise()
//     }
//
//
//     console.log(matches) ;
// }
//
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) // [24, 9, 41]


// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         const index = this.books.indexOf(oldName);
//         if (index === -1) {
//         } else if (this.books.includes(oldName)) {
//             this.books.splice(index, 1, newName)
//         }
//         return this.books
//     }
// };
//
// bookShelf.updateBook("The last kingdom", "Dune")

//
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions(){
//         return  atTheOldToad.potions
//     }
//
// };
// console.log(atTheOldToad.getPotions())

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//         console.log(atTheOldToad.potions)
//
//
//     },
// };

//
// atTheOldToad. removePotion("Speed potion")


// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//
//
//
//     },
// };


// const atTheOldToad = {
//     potions: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updatePotionName(oldName, newName) {
//         const index = this.potions.indexOf(oldName);
//         if (index === -1) {
//         } else if (this.potions.includes(oldName)) {
//             this.potions.splice(index, 1, newName)
//         }
//         return this.potions
//     }
// };

//
// const atTheOldToad = {
//     potions: [
//         {name: "Speed potion", price: 460},
//         {name: "Dragon breath", price: 780},
//         {name: "Stone skin", price: 520},
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         return this.potions.push(newPotion);
//
//     },
//     removePotion(potionName) {
//         for (const potion of this.potions) {
//             const potionIndex = this.potions.indexOf(potion);
//
//             if (potionName === potion.name) {
//                 this.potions.splice(potionIndex, 1);
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//
//     },
//     updatePotionName(oldName, newName) {
//         //const potionIndex = this.potions.indexOf(oldName);
//         for (const potion of  this.potions) {
//
//             if (oldName ===  potion.name) {
//                 potion.name = newName
//                 // this.potions.splice(potionIndex, 1, newName);
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
// };
//
//
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")

//
// const numbers = [5, 10, 15, 20, 25];
//
// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }
//
// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//     console.log(`2 Индекс ${index}, значение ${number}`);
// });


// const numbers = [5, 10, 15, 20, 25];
//
// const logMessage = (number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// };
//
// numbers.forEach(logMessage);


// function makePizza() {
//     return pointer;
// }
// // Change code below this line
//
// const result = makePizza("Your pizza is being prepared, please wait.");
// const pointer = makePizza;


// function deliverPizza(pizzaName) {
//     //return `Delivering ${pizzaName} pizza.`;
//     console.log( `Delivering ${pizzaName} pizza.`)
// }
//
// function makePizza(pizzaName) {
//     //return `Pizza ${pizzaName} is being prepared, please wait...`;
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`)
// }
//
// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     ;
//     //return callback(pizzaName);
//     console.log(pizzaName)
// }
//
// makeMessage("Ultracheese", deliverPizza);
// makeMessage("Royal Grand", makePizza);


// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }
//
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line
//
// makePizza("Ultracheese", function eatPizza(pizzaName ){
//     console.log(`Eating pizza  ${pizzaName}`)
// })

//
// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {},
// };
// // Change code above this line
//
// // Callback for onSuccess
// function makePizza(pizzaName) {
//     console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`) ;
// }
//
// // Callback for onError
// function onOrderError(pizzaName) {
//     // return `Error! There is no pizza with a name ${pizzaName} in the assortment.`
//     console.log(`Error! There is no pizza with a name ${pizzaName} in the assortment.`)
// }

//
// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


// const add = function (a, b) {
//     return a + b;
// }

// const add = (a, b) => {
//     return a + b;
// }


// const add = a => {
//     return a;
// }

// const add = () => {
//     return ;
// }

/*явный возврат*/
//const add = (a, b) => a + b

// const add = (a, b) => {
//     return a + b;
// }


/*Псевдомассив arguments*/

// const add = () => {
//     console.log(arguments); //arguments is not defined
// };
// add(2,2,2,2)

// const add = (...args) => {
//     console.log(args); //[2, 2, 2, 2]
// };
// add(2,2,2,2)

/*Контекст стрелки*/
// const greet = () => {
//     console.log("Привет!", this); //Привет! undefined
// };
//
// greet()
//
// const user = {name: 'Mango'};
// user.context = greet;
//
// user.context(); //Привет! undefined


// const user = {
//     fullName: "Mango",
//     showName(){
//         console.log('this', this); //this {fullName: 'Mango', showName: ƒ}
//         console.log('this.fullName', this.fullName); //this.fullName Mango
//
//     const inner =  () => {
//         console.log('this in inner: ', this)
//     }
//     inner() //this in inner:  {fullName: 'Mango', showName: ƒ}
//
//         // const inner = function () {
//         //     console.log('this in inner: ', this)
//         // }
//         // inner() //this in inner:  undefined
//     },
// }
//
// user.showName()


/*Стрелки как методы объекта*/

// const user = {
//     fullName: "Mango",
//     // showName(){
//     //     console.log('this:', this); //this: {fullName: 'Mango', showName: ƒ}
//     //     console.log('this.fullName:', this.fullName); //this.fullName: Mango
//     // },
//
//     showName: () => {
//         console.log('this:', this); //this: undefined
//         console.log('this.fullName:', this.fullName); //Cannot read properties of undefined (reading 'fullName')
//     },
// }
//
// user.showName()

/*
 Стрелка конcтруктор
 */

// const User = name => {
//     this.name = name;
// }
//
// console.log(new User("Mango")) //User is not a constructor


/*
Стрелки как методы объекта
*/

// const objA = {
//     x: 5,
//     showX(){
//         console.log("this в objA.showThis", this) //this в objA.showThis {x: 5, showX: ƒ}
//         console.log(this.x) //5
//         const  objB = {
//             y: 10,
//             showThis: () => {
//                 //---------------
//                 console.log("this в objB.showThis", this) //this в objB.showThis {x: 5, showX: ƒ}
//             }
//
//         }
//          objB.showThis()
//     },
// };
//
// objA.showX();

// function opposite(number) {
//     // if(number === -number){
//     //     return -number
//     // }
//     console.log(-number)
// }
//
// opposite(5)


// function grow(x) {
//     let total = 1;
//     for (let i = 0; i < x.length; i += 1) {
//         total *= x[i]
//     }
//     console.log(total)
// }
//
// grow([1, 2, 3, 4]);

// function multiplyArray(arr) {
//     let result = 1;
//     for (let i = 0; i < arr.length; i++) {
//         result *= arr[i];
//     }
//     return result;
// }
//
// // Example usage
// const array = [1, 2, 3, 4];
// const product = multiplyArray(array);
// console.log(product); // Output: 24


// function litres(time) {
//
//    let water =  Math.floor(time /2 )
//     console.log(water)
// }
//
// litres(11.8) //5


// function otherAngle(a, b) {
//     // return 0;
//     let tree = 180 - (a + b)
//     console.log(tree)
// }
//
// otherAngle(30, 50);

// function positiveSum(arr) {
//     let sum = 0
//     for (let i = 0; i <= arr.length; i += 1) {
//         let j = arr[i];
//         console.log("jj", j)
//         if (arr[i] >= 0) {
//
//             sum += arr[i]
//             console.log("summ", sum)
//         }
//     }
//     console.log(0)
// }
//
// positiveSum([1, -2, 3, 4, 5]) //1 + 7 + 12 = 20


/*!=========================================================*/
/*
*Example 1 - Коллбек функції

Напишіть наступні функції:
*createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек.
Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість
id та викликає коллбек передаючи йому створений об'єкт.

*logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

*logTotalPrice(product) - колббек, що приймає об'єкт продукту і
логіює загальну вартість товару в консоль
 */


// const apple = {name: "🍎", price: 30, quantity: 3};
// const lemon = {name: "🍋", price: 20, quantity: 5};
//
// function createProduct(obj, callback) {
//     const newProduct = {...obj, id: Date.now()};
//     //newProduct.id = 111
//     callback(newProduct)
// }

// //declaration function
// function logProduct(product) {
//     console.table(product);
// }
// const logProduct = (product) => console.table(product);
//
// const logTotalPrice = ({price, quantity}) => console.log(price * quantity);

// logProduct(apple);
// logTotalPrice(lemon);

// createProduct(apple, logProduct)
// createProduct(lemon, logTotalPrice)

//createProduct(apple, (product) => console.table(product))
//createProduct(lemon, ({price, quantity}) => console.log(price * quantity))

/*
! Example 2 - Коллбек функції
*Додайте об'єкт account методи withdraw(amount, onSuccess, onError)
та deposit(amount, onSuccess, onError), де перший параметр це сума операції,
а другий та третій - коллбеки.

*Метод withdraw викликає onError якщо amount більше
TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

*Метод deposit викликає onError якщо amount більше
TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.
 */

// const TRANSACTION_LIMIT = 1000;
//
// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount >= TRANSACTION_LIMIT) {
//             onError(`Перевищено ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`)
//         }else  if(amount > this.balance){
//             onError(`Нодастотньо коштів! Поточний баланс: ${this.balance}`)
//         }else{
//             this.balance -= amount
//             onSuccess(`Кошти знято, поточний баланс: ${this.balance}`)
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount >= TRANSACTION_LIMIT ) {
//             onError(`Перевищено ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`)
//         }else  if(amount <= 0){
//             onError(`Неможливо покласти таку суму. Сума повинна бути більша за 0`)
//         }else{
//             this.balance += amount
//             onSuccess(`Кошти зараховано! Поточний баланс: ${this.balance}`)
//         }
//     },
// };
//
// const handleSuccess = (message) => {
//     console.log(`✅ Success! ${message}`);
// }
//
// const handleError = (message) => {
//     console.log(`❌ Error! ${message}`);
// }
//
// account.withdraw(500, handleSuccess, handleError);
// account.withdraw(1500, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
//
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);


/*
Example 3 - Коллбек функції
Напишіть функцію each(array, callback), яка першим параметром очікує масив,
а другим - функцію, яка застосовується до кожного елемента масиву.
Функція each повинна повернути новий масив, елементами якого будуть
результати виклику коллбека.
*/

// Рішення
// function each(array, callback) {
// /*
//     1. створення нового пустого масиву
//     2. перебір масиву array
//     3. виклик колбек функції на кожному елементі масиву
//     4. запушити у пустий масив видозмінений елемент старого масиву
//     5. повернути новий масив
//    */
//
//     const newArr = [];
//     // for (const el of array) {
//     //     newArr.push(callback(el));
//     // }
//
//     // array.forEach(function (el) {
//     //     newArr.push(callback(el));
//     // })
//
//     array.forEach( (el) => newArr.push(callback(el)))
//
//     return newArr;
// }
//
// // const plusOne = (num) =>  num + 1
//
// // function multTwo(num) {
// //     return num * 2
// // }
// //
// // function sqrt(num) {
// //     return Math.sqrt(num);
// // }
// const arr = [1, 2, 3, 4, 5];
//
// const newArr = each(arr, (num) =>  num + 1); //[2,3,4,5,6]
// const newArr2 = each(arr, (num) =>  num * 2);//[2,4,6,8,10]
// const newArr3 = each(arr, (num) => Math.sqrt(num));
//
// //const newArr2 = each(arr, multTwo);//[2,4,6,8,10]
// // const newArr3 = each(arr, sqrt);
//
// console.log(newArr)
// console.log(newArr2)
// console.log(newArr3)

//! ===================================

// function calculateAverage(...args) {
//     const amount = args.length
// // console.log(amount); //5
//
//     let total = 0;
//
//     args.forEach((el) => total += el)
//     return total / amount
//     // console.log(total)
// }
//
// console.log(calculateAverage(1, 5, 3, 7, 2)); // 3.6
// console.log(calculateAverage(5, 8)); //6.5
// console.log(calculateAverage(1, 2, 3)); //2

//! ===================================


// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//
//         if (this.pizzas.includes(pizzaName)) {
//             onSuccess(pizzaName)
//         } else if (this.pizzas.includes(pizzaName) === false) {
//             onError(pizzaName)
//         }
//     },
// };
// // Change code above this line
//
// // Callback for onSuccess
// function makePizza(pizzaName) {
//     //return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//     console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`)
// }
//
// // Callback for onError
// function onOrderError(pizzaName) {
//     //return `Error! There is no pizza with a name ${pizzaName} in the assortment.`
//     console.log(`Error! There is no pizza with a name ${pizzaName} in the assortment.`)
// }
//
// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


// const account = {
//     username: 'Jacob',
//     balance: 400,
//     withdraw(amount, onSuccess, onError) {
//         if (amount >= TRANSACTION_LIMIT) {
//             onError(`Перевищено ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`)
//         }else  if(amount > this.balance){
//             onError(`Нодастотньо коштів! Поточний баланс: ${this.balance}`)
//         }else{
//             this.balance -= amount
//             onSuccess(`Кошти знято, поточний баланс: ${this.balance}`)
//         }
//     },
//


//! ===================================

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
//
//     for (let i = 0; i < orderedItems.length; i += 1) {
//         totalPrice += orderedItems[i];
//     }
//     orderedItems.forEach((el) => totalPrice += el)
//     return totalPrice
//     // console.log(total)
//
//     // Change code above this line
//     return totalPrice;
// }

// const number = [1,20,13,40,5,6]
//
// //для каждого
// number.forEach(function (number,index, array){
//     console.log("number", number);
//
// });
//
// console.log(number);


// /* *Map */
// const numbers = [1, 20, 13, 40, 5, 6];
// //[undefined, undefined, undefined, undefined, undefined, undefined]
//
// const doubledNums = numbers.map((numbers) => {
//     console.log("ccc", numbers)
//     // return 555 //[555, 555, 555, 555, 555, 555]
//     return numbers * 2 //[2, 40, 26, 80, 10, 12]
// })
// console.log("ccc", numbers) //[1, 20, 13, 40, 5, 6]
// console.log(doubledNums)//[2, 40, 26, 80, 10, 12]


// const books = [
//     {title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38,},
//     {title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51,},
//     {title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75,},
// ];
// console.table(books)

// const plaerbook = books.map((book) => {
//     console.log(book);
//
//     return book.author //['Bernard Cornwell', 'Роберт Шекли', 'Федор Достоевский']
// })
//
// console.log(plaerbook)
// console.log(books);


// const bookId = books.map(book => book.rating)
// console.log(bookId); //[8.38, 8.51, 7.75]

// const  updateBooks = books.map((book) => {
//     console.log(book);
//     return {
//         ...book,
//         rating: book.rating * 2
//     }
// })

// console.table((updateBooks));

// const bookRating = 8.51;

// const updateBooks = books.map(book => {
//     console.log(book.rating);
//     if(bookRating === book.rating){
//         console.log(`Done: ${book.rating}`)
//         return "this is update object"
//     }
//     // return `this is old object ${book}`
//     return  book
// })
//
//
// console.table(updateBooks)


// const updateBooks = books.map(book => bookRating === book.rating
//     ? { ...book, rating: book.rating + 50}
//     : book
// );
//
//
// console.table(updateBooks)


/* * filter */
// const numbers = [1, 20, 13, 40, 5, 6];

// const  filternumbers = numbers.filter((number) => {
// console.log(number)
//     return number > 15
// })
// const  filternumbers = numbers.filter(number => number > 15);
// console.log(filternumbers); //[20, 40]
// console.log(numbers); //[1, 20, 13, 40, 5, 6]


// const books = [
//     {title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38, online: false, id: 1},
//     {title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51, online: true, id: 2},
//     {title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75, online: true, id: 3},
// ];
// console.table(books)

// const  filterBooks = books.filter(book =>  !book.online); //false
// console.log(filterBooks);

// const hardcorebooks = books.filter(book => book.rating < 8.50)
// console.log(hardcorebooks)

/* *Find */

// const titleBook = "Сон смешного человека";
// const hardcorebooks = books.find(book => book.title === titleBook)
// console.log(hardcorebooks)

// const findPlayerById = (allBook, bookId) => { return allBook.find(book =>book.id === bookId) }

// const findPlayerById = (allBook, bookId) => { return allBook.find(({id}) => id === bookId) }
//
// console.log(findPlayerById(books, 3) );
// console.log(findPlayerById(books, 1) );


/* * Методы every() и some()
True or false
*/
// const books = [
//     {title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38, online: false, id: 1},
//     {title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51, online: true, id: 2},
//     {title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75, online: true, id: 3},
// ];
// console.table(books)

// const isAllOnline = books.every(book => book.online);
// console.log("isAllOnline:", isAllOnline); //isAllOnline: false если хоть одно не true то вернет

// const isAllOnline = books.every(book => book.rating > 5);
// console.log("isAllOnline:", isAllOnline); //isAllOnline: true


//some true если б хотя бы один

// const isAnyOnline = books.some(book => book.online)
// console.log(isAnyOnline) //true

/* *Метод reduce()*/
// const numbers = [1, 20, 13, 40, 5, 6];
// const total = numbers.reduce((acc, number) => {
//     // console.log('number', number) //number 1
//     // console.log("acc", acc); //acc 0
//     return acc + number //85
// }, 0)
//
// console.log(total)


// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
// }
//
// const totalSalary = Object.values(salary).reduce(
//     (total, value) => {
//     return total + value //300
// }, 0)
//
// console.log(totalSalary) //300

// const cart = [
//     {label: "Apples", price: 100, quantity: 2},
//     {label: "Bananas", price: 120, quantity: 3},
//     {label: "Lemons", price: 70, quantity: 4},
// ];
//
// const totalAmount = cart.reduce((total, itemPr ) => {
//
//     return total + itemPr.price *  itemPr.quantity //840
// }, 0)
//
// console.log(totalAmount) //840


// const tweets = [
//     {id: '100', likes: 5, tags: ['js', 'nodejs']},
//     {id: '001', likes: 2, tags: ['html', 'css']},
//     {id: '002', likes: 17, tags: ['css', 'nodejs']},
//     {id: '003', likes: 8, tags: ['js', 'html']},
//     {id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
// ]
//
// const allTags = tweets.reduce((acc, tweet) => {
//     // tags.push(...tweet.tags)
//
//     return [...acc, ...tweet.tags]
// }, []);
//
// console.log(allTags); //['js', 'nodejs', 'html', 'css', 'css', 'nodejs', 'js', 'html', 'js', 'nodejs', 'react']
//
//
// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
//     if (acc[tag]) {
//         acc[tag] += 1
//         return acc
//     }
//     acc[tag] = 1
//     return acc
// }, {})
// console.log(tagsStats);


// function changeEven(numbers, value) {
//     let array = [];
//     let sum =0
//     // for (const arrayElement of numbers) {
//     //     if (arrayElement % 2 === 0){
//     //         array.push(arrayElement + value)
//     //
//     //     }   }
//         numbers.forEach(element => {
//             if (element % 2 === 0){
//                 array.push(element + value);
//                     }
//
//         });
//    return array
// }
//
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)) //[12, 18, 3, 7, 14, 16]

/* *Sort */
//const numbers = [1, 9, -6, 2, 3];
// numbers.sort();
// console.log("numbers", numbers) //[1, 2, 3, 6, 9]

// const letters = ["a", "B", "b", "A"]
// letters.sort();
// console.log("letters", letters) //['A', 'B', 'a', 'b']

// numbers.sort((curEl, nexEl) => {
//     return   nexEl-curEl
// });
// console.log("numbers", numbers) //[9, 3, 2, 1, -6]


// const copy = [...numbers];
// copy.sort()
// console.log("copy",copy) //[-6, 1, 2, 3, 9]
// console.log("numbers",numbers) //[1, 9, -6, 2, 3]


// const accSorted = [...numbers].sort((a, b) => b - a);
// const desAccSorted = [...numbers].sort((a, b) => a - b);
//
// console.log("accSorted", accSorted) //[9, 3, 2, 1, -6]
// console.log("desAccSorted", desAccSorted) //[-6, 1, 2, 3, 9]
// console.log("numbers", numbers) //[1, 9, -6, 2, 3]

// const books = [
//     {title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38, online: false, id: 1},
//     {title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51, online: true, id: 2},
//     {title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75, online: true, id: 3},
// ];
//
// const sortedBestBook = [...books].sort((prevBook, nextBook) => {
//     return prevBook.rating - nextBook.rating
// })
//
// const sortedBadBook = [...books].sort((prevBook, nextBook) => {
//     return nextBook.rating - prevBook.rating
// })

//console.table(sortedBestBook) //{title: 'Сон смешного челове... {title: 'The Last Kingdom'..., {title: 'На берегу спок...
//console.table(sortedBadBook) //{title: "На берегу спокойных вод"...  {title: "The Last Kingdom" ...{title: "Сон смешного человека"

// const byName = [...books].sort((a, b) => {
//    // console.log('a.title', a.title[0])  //H C
//    // console.log("b.title", b.title[0]) // T Н
//
// console.log(a.title.charCodeAt(0)) //1053 1057
//
//     const result = a.title[0] > b.title[0];
//     if (result){
//         return 1
//     }
//     if (!result){
//         return -1
//     }
//
// })
//
// console.table(byName)


/* * Flat*/

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]]
//
// console.log(array.flat(3)) //[1, 2, 4, 5, 6, 7, 8, 9]
// console.log(array.flat(2)) //[1, 2, 4, 5, 6, 7, 8, [9]]
// console.log(array.flat(1)) //[1, 2, 4, [5], 6, [7, 8, [9]]]
// console.log(array.flat(0)) //[1, 2, [4, [5]], [6, [7, 8, [9]]]

// const tweets = [
//     {id: '100', likes: 5, tags: ['js', 'nodejs']},
//     {id: '001', likes: 2, tags: ['html', 'css']},
//     {id: '002', likes: 17, tags: ['css', 'nodejs']},
//     {id: '003', likes: 8, tags: ['js', 'html']},
//     {id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
// ]
//
// // const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// // const tags = tweets.map(t => t.tags).flat()
//
// const tags = tweets.flatMap(t => t.tags)
// console.log(tags)
//
//
// const  stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] +1 : 1
//     }
// }, {})
//
// console.log(stats) //{js: 3, nodejs: 3, html: 2, css: 2, react: 1}

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo); //[5, 4, 3]
//
// const multByThree = greaterThenTwo.map(num => num * 3);
// console.log(multByThree);//[15, 12, 9]
//
// const sorted = multByThree.sort((a, b) => a - b);
// console.log(sorted);//[9, 12, 15]

// Цепочка предыдущих трёх
// const sorted = numbers
//     .filter(num => num > 2)
//     .map(num => num * 3)
//     .sort((a, b) => a - b);
//
// console.log(sorted); //[9, 12, 15]

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
//     { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
// ];
//
// const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((playerA, playerB) => playerA.rank - playerB.rank);
//
// console.table(onlineAndSorted);


/*
 * Chaining в методах объекта как jquery
 */

// const element = {
//     class: '',
//     hovered: false,
//     changeClass(cls) {
//         this.class = cls;
//
//         return this;
//     },
//     toggleHovered() {
//         this.hovered = !this.hovered;
//
//         return this;
//     },
// };
//
// element.toggleHovered().changeClass('open').toggleHovered();
//console.log(element); //{class: 'open', hovered: false, changeClass: ƒ, toggleHovered: ƒ}

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((element) => {
//    return   element.length;
// });
// console.log(planetsLengths)

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     {title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94},
//     {title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67},
// ];
//
//
// const titles = books.map(book => book.title);

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// // Change code below this line
//
// const genres = books.flatMap( book => book.genres);

// Change code below this line


// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//         gender: "male",
//         age: 24,
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         skills: ["adipisicing", "irure", "velit"],
//         gender: "female",
//         age: 21,
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         skills: ["ex", "culpa", "nostrud"],
//         gender: "male",
//         age: 27,
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         skills: ["non", "amet", "ipsum"],
//         gender: "male",
//         age: 38,
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         skills: ["lorem", "veniam", "culpa"],
//         gender: "female",
//         age: 39,
//     },
// ];
//
//
// const getUserNames = users.map(user => user.name);
// console.log(getUserNames)

/*Дополни код так, чтобы в переменной evenNumbers получился массив
чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных.
Обязательно используй метод filter().
*/
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
//
// const evenNumbers = numbers.filter(el => {
//     if (el % 2 === 0) {
//         return numbers.push(el)
//     }
// });
// const oddNumbers = numbers.filter(el => {
//     if (el % 2 !== 0) {
//         return numbers.push(el)
//     }
// });


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap(genres => genres.genres);
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
//
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line
//
// const topRatedBooks = books.filter((rat) => rat.rating >= MIN_RATING);
// const booksByAuthor = books.filter((name) => name.author ===AUTHOR);

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ]
// const color = "blue"
//
// console.log(colorFilter)
//
// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color);
//
// }
// // const getUsersWithEyeColor = (users, color) => {
// //     return users.filter(user => user.eyeColor === color);
// // };
// // console.log(colorFilter)
// console.log(getUsersWithEyeColor(users, "blue"))

// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
// return users.filter((user) =>
//     user.age >= minAge && user.age <= maxAge
// )
//
// };
//
// console.log(getUsersWithAge(users, 20, 30)) //Ross Vazquez, Elma Head и Carey Barr


// const cars = [
//     {mark: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true},
//     {mark: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true},
//     {mark: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false},
//     {mark: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true},
//     {mark: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false},
//     {mark: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false},
//     {mark: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true},
//     {mark: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true},
//     {mark: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true},
//     {mark: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false}
// ];

/*
! Example 1 - Метод map
Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
*/

// // const getModels = (cars) => cars.map((car) => car.model);
// const getModels = (cars) => cars.map(({model}) => model);
// console.table(getModels(cars));

/*
! Example 2 - Метод map
Нехай функція makeCarsWithDiscount повертає новий масив
об'єктів із змінним значенням властивості price залежно
від переданої знижки.
*/

// const makeCarsWithDiscount = (cars, discount) =>
//     cars.map((car) => ({...car, price: car.price * (1- discount)}));
//
// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

/*
! Example 3 - Метод filter
Нехай функція filterByPrice повертає масив автомобілів
ціна яких менша ніж значення параметра threshold.
*/
//  const filterByPrice = (cars, threshold) => cars.filter((car) => car.price <= threshold);
//
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
! Example 4 - Метод filter
Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
*/
// const getCarsWithDiscount = cars =>  cars.filter(car => car.onSale);
// console.table(getCarsWithDiscount(cars));

/*
! Example 5 - Метод filter
Нехай функція getCarsWithType повертає масив автомобілів тип
 яких збігається зі значенням параметра type.
*/
// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type) ;
//
// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

/*
!Example 6 - Метод find
*/
// const getCarByModel = (cars, model) => cars.filter(car => car.model === model);
// console.table(getCarByModel(cars, 'F-150'));
// console.table(getCarByModel(cars, 'CX-9'));

/*
! Example 7 - Метод sort
Нехай функція sortByAscendingAmount повертає
новий масив автомобілів відсортований за зростанням
значення якості amount.
*/
// const sortByAscendingAmount = cars => [...cars].sort((firstAmount, SecondAmount) => firstAmount.amount - SecondAmount.amount);
// //cars => cars.sort(car => car.amount);
// console.table(sortByAscendingAmount(cars));

/*
! Example 8 - Метод sort
Нехай функція sortByDescendingPrice повертає новий масив
автомобілів відсортований за зменшенням значення властивості price.
*/
// const sortByDescendingPrice = cars => [...cars].sort((firstPrice, secondPrice) => secondPrice.price - firstPrice.price );
// console.table(sortByDescendingPrice(cars));

/*
! Example 9 - Метод sort
Нехай функція sortByModel повертає новий масив автомобілів
відсортований за назвою моделі в алфавітному та зворотному
алфавітному порядку, в залежності від значення параметра order.
switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;

  default:
    инструкции;
}
*/

// const sortByModel = (cars, order) => [...cars].sort((a, b) => {
//     switch (order) {
//         case 'asc':
//           return   a.model.localeCompare((b.model));
//         case 'desc':
//             return   b.model.localeCompare((a.model));
//     }
// });
//
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

//! ===========================================

//const arr = ["b", "r", "s", "a", "c"];

//arr.sort((a, b) => a.localeCompare(b)); // за зростанням ['a', 'b', 'c', 'r', 's']
//arr.sort((a, b) => b.localeCompare(a)); // за спаданням ['s', 'r', 'c', 'b', 'a']
//console.log(arr);

/*
! Example 10 - Метод reduce
Нехай функція getTotalAmount повертає загальну кількість
автомобілів (значення властивостей amount).
*/
// const getTotalAmount = cars => cars.reduce((acc, {amount}) => acc + amount, 0);
//
// console.log(getTotalAmount(cars)); //100

/*
1. (acc = 0, { amount = 14 }) => acc + amount | 0 + 14 = 14
2. (acc = 14, { amount = 2 }) => acc + amount | 14 + 2 = 16
3. (acc = 16, { amount = 8 }) => acc + amount | 16 + 8 = 24
*/

/*
2. (acc = obj, { amount = 2 }) => acc + amount | obj + 2
3. (acc = obj2, { amount =82 }) => acc + amount | obj2 + 8 = obj28
*/

/*
! Example 11 - Ланцюжки методів
Нехай функція getAvailableCarNames повертає масив моделей
автомобілів, але тільки тих, які зараз на розпродажі.
*/
// const getModelsOnSale = cars => cars.filter( car => car.onSale).map((car => car.model));
// console.table(getModelsOnSale(cars));

/*
! Example 12 - Ланцюжки методів
Нехай функція getSortedCarsOnSale повертає масив автомобілів
на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
*/
// const getSortedCarsOnSale = cars => cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);
//
// console.table(getSortedCarsOnSale(cars));

//! ===============

// const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// const uniqueNumbers = numbers.filter(
//   (number, index, numbers) => numbers.indexOf(number) === index
// );
// console.log(uniqueNumbers); //[1, 2, 3, 4, 5]
//
// console.log(new Set(numbers)); //{1, 2, 3, 4, 5}

/*
1. numbers.filter(
  (number = 1, index = 0, numbers) => numbers.indexOf(number = 1)  === index | 0 === 0 -> true
);
2. numbers.filter(
  (number = 1, index = 1, numbers) => numbers.indexOf(number = 1)  === index | 0 === 1 -> false
);
3. numbers.filter(
  (number = 2, index = 2, numbers) => numbers.indexOf(number = 2)  === index | 2 === 2 -> true
);
4. numbers.filter(
  (number = 2, index = 3, numbers) => numbers.indexOf(number = 2)  === index | 2 === 3 -> false
  [1, 2]
);
*/

//! ===============
//
// const subjects = ["Math", "PE", "Chemistry", "Physics"];
//
// const index = subjects.findIndex((subject) => subject === "Physics");
// console.log(index);//3

// const arr = [3, 4, 2, 1, 35, 3, 2, 1, 99, 3, 2];
//
// const i = arr.findIndex((el) => el > 40);//8
//
// console.log(i);//8
// console.log(arr[i]);//99

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]
//
// const getUserWithEmail = (users, email) => {
//    return users.find(el => el.email === email);
// };
// console.log(getUserWithEmail(users, "moorehensley@indexia.com"))
//
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line
//
// const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);
//
// const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);
//
// const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);
//
// const anyElementInFirstIsEven = firstArray.some((el) => el % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((el) => el % 2 !== 0);
//
// const anyElementInSecondIsEven = secondArray.some((el) => el % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((el) => el % 2 !== 0);
//
// const anyElementInThirdIsEven = thirdArray.some((el) => el % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((el) => el % 2 !== 0);


// console.log(eachElementInFirstIsEven)
// console.log(eachElementInFirstIsOdd)
//
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
//
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd );

// массив.reduce((previousValue, element, index, array) => {
//     // Тело коллбек-функции
// }, initialValue);

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
//
//
// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);

//
// const averagePlayTime = totalPlayTime / playtimes.length;
//
// console.log(averagePlayTime)

//
// const players = [
//     {name: "Mango", playtime: 1270, gamesPlayed: 4},
//     {name: "Poly", playtime: 469, gamesPlayed: 2},
//     {name: "Ajax", playtime: 690, gamesPlayed: 3},
//     {name: "Kiwi", playtime: 241, gamesPlayed: 1},
// ];
// // Change code below this line


// const totalAveragePlaytimePerGame = players.reduce((totalTime, player) => totalTime + player.playtime / player.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame)
//
// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]
//
// const calculateTotalBalance = users => {
//     //return users.reduce((totalTime, user, index) => totalTime + user.friends, 0);
// return users.reduce((totalTime, user, index) => totalTime + user.friends.length, 0)
// };
// const getTotalFriendCount = users => {
//
// };
// console.log(getTotalFriendCount(users))
// console.log(calculateTotalBalance(users))


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// Change code below this line

// const ascendingReleaseDates = releaseDates.sort((a,b) => a.valueOf() - b.valueOf());
//
// //const alphabeticalAuthors = authors.sort((a,b) => a.valueOf() - b.valueOf());
//
// const alphabeticalAuthors =[...authors].sort((a, b) => a.localeCompare(b)); // за зростанням ['a', 'b', 'c', 'r', 's']
// //[...authors].sort((a, b) => b.localeCompare(a));

// console.log(ascendingReleaseDates)
// console.log(alphabeticalAuthors)

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
//
//
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a.valueOf() - b.valueOf());
//
// const descendingReleaseDates = [...ascendingReleaseDates].sort((a, b) => b.valueOf() - a.valueOf());
//
// console.log(ascendingReleaseDates)
// console.log(descendingReleaseDates)


// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line
//
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
//
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));


// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line
//
// const sortedByAuthorName = [...books].sort((a, b) =>
// a.author.localeCompare(b.author)
// );
//
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
// b.author.localeCompare(a.author)
// );
//
// const sortedByAscendingRating = [...books].sort((a, b) =>
//     a.rating - b.rating
// );
//
// const sortedByDescentingRating = [...books].sort((a, b) =>
//      b.rating - a.rating
// );
//
// console.log(sortedByAuthorName)
// console.log(sortedByReversedAuthorName)
// console.log(sortedByAscendingRating)
// console.log(sortedByDescentingRating)



const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
        title: "The Dreams in the Witch House",
        author: "Howard Lovecraft",
        rating: 8.67,
    },
];

// Change code below this line


// const MIN_BOOK_RATING = 8;
//
//
// //Используется цепочка методов `filter`, `map`, `sort`
//
// const names = [ ...books].filter(rat => rat.rating >= MIN_BOOK_RATING ).map(name => name.author).sort((a,b) => a.localeCompare(b))
//
// //const names =[ ...books].sort((a,b) =>{
//
//   // return a.filter(rat => rat.rating >= MIN_BOOK_RATING )
//
// //     if (a.rating >= MIN_BOOK_RATING){
// //      // return   a.author.localeCompare(b.author)
// //     }
// //
// // });
//
//
// console.log(names)
//
//
// /*Дополни код так, чтобы в переменной names получился массив имён авторов
// в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
//  */
//
//


const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]

const getTotalBalanceByGender = (users, gender) => {
    // return [...users].flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index).sort()
return [...users].filter((gendera) => gendera.balance === gendera.gender)
    //.flatMap(user => user.balance)
};

console.log(getTotalBalanceByGender(users, "male")) //12053

/*
Дополни функцию getTotalBalanceByGender(users, gender) так,
чтобы она возвращала общий баланс пользователей (свойство balance),
пол которых (свойство gender) совпадает со значением параметра gender.
*/