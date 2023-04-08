// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.table(friends);
//
// friends[1] = "cdvdv";
// friends[3] = 11111;
//
//
// console.table(friends)

// //!по значению
// let a = 10;
// let b = a;
//
// console.log(a);
// console.log(b);
//
// //!по ссылке
// let friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// let bi = friends;
//
// // console.log(friends);
// // console.log(bi);
//
// friends[0] = 500;
//
// console.log("friends", friends); //[500, 'Kivi', 'Poly', 'Ajax']
// console.log("bi", bi); //[500, 'Kivi', 'Poly', 'Ajax']
//
// console.log(friends === bi); //true

// //!перебор масcива
// let friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// console.table(friends);
//
// for (let i = 0; i <= friends.length-1; i += 1) {
//     console.log(i);
//     friends[i] += `-1`
// }
//
// //*если не нужен индекс или не нужно изменять эелемент массива
// for (const friend of friends){
//     console.log(friend) //копия
// }
// // console.table(friends);

//
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
//
// // for (let i = 0; i < cart.length; i += 1) {
// //     // console.log(cart[i])
// //     total += cart[i]
// //     //total = total + cart[i]
// // }
//
// for (const value of cart) {
//     total += value
// }
//
// console.log("Total:", total)

//
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);
//
//     if (number % 2 === 0) {
//         console.log("четное")
//         total += number
//     }
// }

// for (const number of numbers){
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log("четное")
//         total += number
//     }
// }
//
// console.log("TOTAl", total);


// const logins = ['m4ngoDoge', 'k1widab3st', 'podvsvf1vf', 'ddsfcs1aj']
// const loginToFind = 'podvsvff1vf';
// let message = '';
// for (const login of logins){
//
// }
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
// console.log("login", login)
//
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
//     message = `Пользователь ${loginToFind} не найден`;
//
// }
//
// console.log(message)

// const a = 15 > 10 ? "ага" : "нет";
// const message = logins.includes(loginToFind) ? "ага" : "нет";
// console.log(message)

//! Перебор маcсива
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
//
// for (const number of numbers){
//     if(number > smallestNumber){
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);


// const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
// // let string = '';
// let string = friends.join(",");
// console.log(string);

// for (friend of friends) {
//     string += friend + ',';
// }
//
// string = string.slice(0, string.length-1)
// // console.log(string.slice(0, -1))//новая копия
// console.log(string)


// const string = "JavaScript";
// const letters = string.split('');
// let invertedString = '';
//
// console.log(letters);
// for (const letter of letters) {
//     // console.log(letter)
//     //
//     // if (letter === letter.toLowerCase()) {
//     //     console.log("Это буква в нижнем регистре", letter);
//     //     invertedString += letter.toUpperCase();
//     // } else {
//     //     invertedString += letter.toLowerCase();
//     // }
//
//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
//
// console.log(invertedString);


// const title = "Top 10 benefits of React framework";
//
// // const normalizedString = title.toLowerCase();
// // // console.log(normalizedString)
// //
// // const words = normalizedString.split(" ");
// // // console.log(words);
// //
// // const slug = words.join("-")
// // // console.log(slug);
//
// const slug1 = title.toLowerCase().split(" ").join("-");
// console.log(slug1)


// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
//
// const numbers = array1.concat(array2, [1, 2 ,5], [60, 90])
// console.table(numbers);
//
// for (const number of numbers) {
//     total += number;
// }
// console.log(total);


// const cards = [
//     "Кароточка-1",
//     "Кароточка-2",
//     "Кароточка-3",
//     "Кароточка-4",
//     "Кароточка-5",
// ];
// console.table(cards)

// const cardToRemove = "Кароточка-3";
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
//
// console.table(cards);


// const cardToInsert = "Кароточка-6";
// const index = 3;
// cards.splice(4, 0, cardToInsert);
//
// console.table(cards)


// const cardToUpdate = "j Кароточка-4";
// cards.splice(3,1,cardToUpdate);
// console.log(cards)


// function calculateEngravingPrice(message, pricePerWord) {
//
//  let split =  message.split(" ");
// console.log(split.length * pricePerWord)
//     return
// }
//
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


// function slugify(title) {
//     // let array = title
//     return  title.toLowerCase().split(" ").join("-");
//
// }
//
// slugify("Arrays for begginers");
// slugify("English for developer")


// function makeArray(firstArray, secondArray, maxLength) {
//
//    let ddd =  firstArray.concat(secondArray)
//  // console.log(ddd);
//
//    if(ddd.length > maxLength){
//        console.log(ddd.slice(0, maxLength))
//    }else{
//     console.log(ddd)
//    }
//
//     return
// }
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4);
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)

//
// const start = 3;
// const end = 7;
//
// for (let i = start; i <= end ; i += 1) {
//     console.log(i);
// }


/*
/! Example 1 - Базові операції з масивом
Створіть масив genres з елементами «Jazz» та «Blues».
   1. Додайте «Рок-н-рол» до кінця.
   2.  Виведіть у консоль перший елемент масиву.
   3.  Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
   4.  Видаліть перший елемент та виведіть його в консоль.
   5. Вставте «Country» та «Reggae» на початок масиву.
 */

// const genres = ['Jazz', 'Blues'];
// //1
// genres.push('Рок-н-рол')
// console.log("1 Додайте «Рок-н-рол» до кінця: ",genres)
// //2
// console.log("2 Виведіть у консоль перший елемент масиву: ",genres[0]);
// //3
// // genres.length-1;
// console.log("3 Виведіть у консоль останній елемент масиву: ",genres[genres.length-1]);
// //4
// //  console.log("4 Видаліть перший елемент та виведіть його в консоль: ",genres.shift());
// //5
// genres.splice(0, 0, "Country","Reggae");
// console.log("5 Вставте «Country» та «Reggae» на початок масиву: ", genres)


/**
 /! Example 2 - Масиви та рядки
 Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка.
 Значення гарантовано розділені пробілом.
 */

//     const values = '8 11';
// const valueArray = values.split(" ")
// console.log(valueArray);
//
// const square = valueArray[0] * valueArray[1]
// console.log("Площа:", square)
//
// const a = Number(valueArray[0]);
// const b = Number(valueArray[1]);
// console.log("Площа:", a * b)


/**
 !* Example 3 - Перебір масиву
 Напиши скрипт для перебору масиву fruits циклом for.
 Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.
 */

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋', '🍒'];
// for(const fruit of fruits) { //перебирає значення
//     let num = fruits.indexOf(fruit);
//     console.log(num + 1 + ':' + fruit);
// }


// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋', '🍒'];
// for(const i in fruits) { // перебирає індекси (i - строка)
//     console.log(Number(i)+1 ,':' ,  fruits[i]);
// }

/*
!* Example 5 - Масиви та рядки
Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
Скрипт повинен працювати для будь-якого рядка.
*/


//     const string = 'Welcome to the future';
// const valueArray = string.split(" ")
// console.log(valueArray);
//
// valueArray.shift();
//  valueArray.pop();
//
// const newString = valueArray.join(" ");
//
// console.log(newString);
// console.log(valueArray);
//

/*
!* Example 6 - Масиви та рядки
Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.
*/

// const stringArrow = 'Welcome to the future';
// const valueArray = stringArrow.split("").reverse().join("")
// console.log(valueArray);


// let newString = [];
// const newArray = stringArrow.split("")
//
// for (let i = newArray.length - 1; i >= 0; i -= 1) {
//     newString.push(newArray[i])
// }
//
// newString = newString.join("")
// console.log(newString)

/*
Example 7 - Сортування масиву із циклом
Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.
*/

/*let temp = langs[1];
langs[1] = langs [2];
langs[2] = temp;*/

/*
1. Запустити цикл, який буде проходитись по всім елементам(по індексам)
2. Запустити вкладений цикл, який буде починатись з індексу  га один більше i ( не з 0)
3. Порівнбємо перші букви сусідніх елементів
    3.1 Якщо буква зліва білша за букву справа, то міняємо елементи місцями
    3.2
 */

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// for (let i = 0; i < langs.length-1; i += 1) {
//     // console.log(`El: ${langs[i]} | i: ${i}`)
//     for (let j = i + 1; j < langs.length; j += 1) {
//         // console.log(`\tEl: ${langs[j]} | j: ${j}`)
//
//         if (langs[i][0] > langs[j][0]) {
//             let temp = langs[i];
//             langs[i] = langs [j];
//             langs[j] = temp;
//         }
//     }
//     // console.log("\n")
// }
// console.log(langs)
// console.log(langs.sort())

/*
Example 8 - Пошук елемента
Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
//
// for (const num of numbers) {
//     if(num < min) min = num;
// }
//
// console.log(min); // 1


// function calculateTotal(number) {
//
//     // let numbers = [];
//     let num = 0;
//     for (let i = 0; i <= number; i += 1) {
//         num += i;
//         console.log(num)
//     }
// return num
// }
//
// calculateTotal(7); //28

// const fruits = ['apple', 'plum', 'pear', 'orange'];
//
// for (let i = 0; i< fruits.length; i+=1) { // Change this line
//     const fruit = fruits[i]; // Change this line
//     console.log(fruit);
// }


// function calculateTotalPrice(order) {
//     let total = 0;
//
//     for (const num of order) {
//         total += num
//     }
//     return total;
// }
// calculateTotalPrice([164, 48, 291])

// function findLongestWord(string) {
// let mas = string.split(" ")
//
//     let total;
//     if (string[0] > string[1]) {
//         total = string[0]
//     }else if(){
//
//     }
//
//
// console.log(mas)
// }
//
// findLongestWord("May the force be with you")


/*
! fffffffffffff
 */

// const fn = function (a, b) {
//
//     console.log(1)
//
//     console.log(2)
//
//     console.log(3)
//     return 555
// }
//
// console.log(fn())

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];


// const fn =  function (cart){
//     let total = 0;
//
//     for (const value of cart){
//         total += value
//     }
//     // console.log("Total: " , total);
//     return total
// }
//
// console.log(fn([54, 28, 105, 70, 92, 17, 120, 12, 25, 90])) ;
// fn([54, 28, 92, 17, 120, 12, 25, 90]);

// const logins = ['sdfvgdb', 'sdvsvsdvf', 'rrrww', "eeee9e7f"]
//
// const findlogin = function (allLogins, loginToFind) {
//     // for (const login of allLogins){
//     //     if(loginToFind === login){
//     //       return  `Yes ${loginToFind}`
//     //     }
//     // }
//     //includes -> true/false
//     return allLogins.includes(loginToFind)
//         ? `Yes ${loginToFind}`
//         : `No ${loginToFind}`
// }
//
// console.log(findlogin(logins, 'ssssss'));
// console.log(findlogin(logins, 'rrrww'));
// console.log(findlogin(logins, 'eeee9e7f'));

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];


// console.log(smallestNumber);

// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0];
//
//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number
//         }
//     }
//     return smallestNumber
// }
//
// console.log(findSmallesNumber([54, 92, 17,  25, 90]));
// console.log(findSmallesNumber([54, 17, 120, 12, 25, 90]));
// console.log(findSmallesNumber([57, 4, 58, 2, -2, 90]));


// const changeCace = function (string) {
//     const letters = string.split('');
//     let invertedString = '';
//
//     for (const letter of letters) {
//       invertedString += letter === letter.toLowerCase()
//             ? letter.toUpperCase() : letter.toLowerCase();
//     }
//
//     return invertedString
// }
//
// console.log(changeCace('efwsgews'));
// console.log(changeCace('WWWcdkcnsj'));
// console.log(changeCace('65uFFYVbhb j'));

// const slugfigy = function (string) {
//     const slug = string.toLowerCase().split(" ").join("-");
//     return slug
// }
//
// console.log(slugfigy("Top 10 benefits of React framework"));
// console.log(slugfigy("Top 20 benefits of React framework"));
// console.log(slugfigy("Top 30 benefits of React framework"));


// const fn = function (...args) {
//     console.log(args)
//
// }
// const fn = function (a, b , c,...args) {
//     console.log(`${a}, ${b}, ${c}`)
//     console.log(args)
//
// }
// fn("hhh",1,2,3)
// fn("sssh",1,2,3,4,5)
// fn("stth",1,2,3,4,5,6,7)


// const add = function (...args){
//     console.log(args)
//
//     let total = 0;
//     for (const arg of args) {
//         total += arg
//     }
//     return total
// }
//
// console.log(add(1,2,3))
// console.log(add(1,2,3,4,5))
// console.log(add("stth",1,2,3,4,5,6,7))

// const filterNumbers = function (array, ...args) {
//     // console.log("array: ", array);
//     // console.log("args: ", args);
//     const newElements = [];
//
//     for (const element of array) {
//         if(args.includes(element)){
//             newElements.push(element)
//             // console.log(`${element} есть везде `)
//         }
//     }
//     return newElements
// }
//
// console.log(filterNumbers([5, 2, 9, 4, 1], 1, 2, 3)) //[2, 1]
// console.log(filterNumbers([50, 20, 90, 40, 10], 1, 20, 3, 4, 50)) //[50, 20]
// console.log(filterNumbers([500, 200, 900, 400, 100], 100, 2, 3, 4, 500, 6, 7)) //[500, 100]


/*
! Example 1 - Індекс маси тіла
Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
Вага та висота будуть спеціально передані як рядки.
Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/


// function calcBMI(weight, height) {
//     weight = convertToDecimal(weight)
//     height = convertToDecimal(height)
//
//     const result = Number(weight / Math.pow(height, 2))
//
//     return getFixedNumber(result)
// }
//
// function convertToDecimal(str) {
//     return Number(str.replace(",", "."));
// }
//
// function getFixedNumber(num) {
//     return Number(num.toFixed(1))
// }
//
// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8


// function foo() {
//     console.log(arguments)
//     console.log("Old ", Array.from(arguments));
//
//     const arr = [];
//     for (let i = 0; i < arguments.length; i += 1) {
//         arr[i] = arguments[i];
//     }
//     console.log("long",arr);
// }
//
// foo('sss', 4, false, null)

/*
!Example 2 - Найменше з чисел
Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
*/
//
// function min(a, b) {
//     return a < b ? a : b
//
//     // return Math.min(a, b)
// }
//
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

/*
! Example 6 - Пошук найбільшого елемента
 Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.
*/
// function findLargestNumber(numbers) {
//     let max = numbers[0]
//
//     for (const number of numbers) {
//         if (number > max) max = number
//     }
//     return max
// }
//
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
! Example 7 - Середнє значення
Напишіть функцію calAverage() яка приймає довільну кількість аргументів і
повертає їхнє середнє значення. Усі аргументи будуть лише числами.
*/

// function calAverage() {
//     const amount = arguments.length;
//     let sum = 0;
//
//     for (const number of arguments) {
//         sum += number
//     }
//     return sum / amount
// }
//
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

/*
! Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
Напишіть функції для роботи з колекцією навчальних курсів courses:

addCourse(name) - додає курс до кінця колекції
removeCourse(name) - видаляє курс із колекції
updateCourse(oldName, newName) - змінює ім'я на нове
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
//
// function addCourse(name) {
//     if (courses.includes(name)) console.log("Ви вже маєте такий курс")
//     else courses.push(name)
// }
//
// function removeCourse(name) {
//     const index = courses.indexOf(name);
//     console.log(index)
//     if (index === -1) console.log("Курс із таким ім'ям не знайдено")
//     else courses.splice(index, 1)
// }
//
// function updateCourse(oldName, newName) {
//     const index = courses.indexOf(oldName);
//     if (index === -1) console.log("Курс із таким ім'ям не знайдено")
//     else if (courses.includes(name)) console.log("Ви вже маєте такий курс")
//     else courses.splice(index, 1, newName)
// }
//
//
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'
//
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'
//
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// function findLongestWord(string) {
//     let arr = string.split(" ")
//     let total = " ";
//
//     for (const arrElement of arr) {
//         if(arrElement.length > total.length){
//             total = arrElement
//         }
//     }
//     return total
// }
//
// findLongestWord("May the force be with you")
// findLongestWord("The quick brown fox jumped over the lazy dog")

/*
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
*/
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//
//     for (let i = min; i <= max; i += 1) {
//          numbers.push(i)
//     }
//     // return numbers;
//     console.log(numbers)
// }
//
// createArrayOfNumbers(1, 3);

/*
Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers)
и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
*/
// function filterArray(numbers, value) {
//     const newArray = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }
//     }
//     return newArray
// }
//     filterArray([1, 2, 3, 4, 5], 3); // [4, 5]


/*Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit),
и проверяет есть ли такой фрукт в массиве fruits.
Дополни код функции так, что если:
фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.
*/

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     return fruits.includes(fruit)
// }
// checkFruit("plum") //true
// checkFruit("mandarin") //false

/*Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах.
А числа 0, 1 и 8 присутствуют только в одном из массивов.
Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2,
и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
*/

// function getCommonElements(array1, array2) {
//     newArray = []
//
//     for (let i = 0; i < array1.length; i+=1) {
//         if(array2.includes(array1[i])){
//             newArray.push(array1[i])
//         }
//     }
// return newArray
// }
//
// getCommonElements([1, 2, 3], [2, 4]) // [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2]

/*
Напиши функцию getEvenNumbers(start, end)
которая возвращает массив всех чётных чисел от start до end.
Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
 */

// function getEvenNumbers(start, end) {
//     let array = []
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             array.push(i)
//
//         }
//     }
//     return array
// }
//
// // getEvenNumbers(2, 5) //[2, 4]
// getEvenNumbers(3, 11) // [4, 6, 8, 10]

// const start = 6;
// const end = 27;
// let number;
//
// for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

/*
Напиши функцию includes(array, value), которая делает тоже самое,
что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value,
возвращая true если есть и false в противном случае.
При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
*/
function includes(array, value) {

    for (const arrayElement of array) {
        if (arrayElement === value){
            // return true
            console.log(true)
        }
    }
    console.log(false)
    // return false
}

includes([1, 2, 3, 4, 5], 3) //true
//  includes([1, 2, 3, 4, 5], 17) //false