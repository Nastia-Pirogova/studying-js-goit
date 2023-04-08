// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
//     const message = (orderedQuantity * pricePerDroid) + deliveryFee;
//     console.log(`You ordered droids worth ${message} credits. Delivery (${deliveryFee} credits) is included in total price.`)
//
//     // Change code above this line
//     return message;
// }
//
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);


//!=======================================

//Example 1 - Математичні оператори
//Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log("Загальна кількість яблук та винограду:", total);
// const diff = apples - grapes;
// console.log("Різниця яблук та винограду:", diff);

//Example 2 - Комбіновані оператори
//Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students = students + 50;
// console.log(students);

// let students = 100;
// students += 50;
// console.log(students);

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

//     const result = 108 + 223 - 2 * 5;
// console.log(result); //321

//     1*
//     2+
//     3-

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.


//     const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

//< .5 floor | > .5 ceil

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"


// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
//     Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання).
//     Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.
//     Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';
//
// weight = Number(weight.replace(",","."));
// height =  Number(height.replace(",","."));
//
// console.log(weight);
// console.log(height);
// //replace знаходить перший елемент , замінює на .
//
//
//  const bmi = Number((weight/Math.pow(height, 2)).toFixed(1)) ;
//
// console.log(bmi); // 28.8


// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); // true
//
// console.log(10 >= '7'); //true
//
// console.log('2' > '12'); //true юнікод 2 більше 1
//
// // console.log('2'.charCodeAt(0)) //50
// // console.log('1'.charCodeAt(0)) //49
//
// console.log('2' < '12'); //false
//
// console.log('4' == 4); //true
//
// console.log('6' === 6); //false
//
// console.log('false' === false); //false
//
// console.log(1 == true); //true
//
// console.log(1 === true); //false
//
// console.log('0' == false); //true 0 == 0 -> true
//
// console.log('0' === false); //false
//
// console.log('Papaya' < 'papaya'); //true
//
// console.log('Papaya' === 'papaya'); //false
//
// console.log(undefined == null); //true
//
// console.log(undefined === null); //false


// Example 8 - Логічні оператори
// Яким буде результат виразів?

// && i - повертає перший false, якщо не знаходить, повертає останній елемент
// || або - повертає перший true, якщо не знаходить, повертає останній елемент
// !не - змінює логічний тип на зворотній (false на true, true на false)

// console.log(true && 3); //3
//
// console.log(false && 3); //false
//
// console.log(true && 4 && 'kiwi'); //'kiwi'
//
// console.log(true && 0 && 'kiwi'); //0
//
// console.log(true || 3); //true
//
// console.log(true || 3 || 4); //true
//
// console.log(true || false || 7); //true
//
// console.log(null || 2 || undefined); //2
//
// console.log((1 && null && 2) > 0); //false null > 0
//
// console.log(null || (2 && 3) || 4); //3


// Example 9 - Значення за замовчуванням та оператор нульового злиття
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null.
// В іншому випадку має присвоюватися значення defaultValue.
// Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);


// // Example 10 - Оператор % та методи рядків
// // Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.
//
// // 70 покаже 01:10
// // 450 покаже 07:30
// // 1441 покаже 24:01
// const totalMinutes = 70;
//
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
//
// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);


// let a = Number(prompt("число а:"));
// let  b = Number(prompt("число b:"));
//
// let result = Math.pow(a, b) ;
// console.log(a);
// console.log(b);
// console.log(result);


// const min = 30;
// const max = 50;
// const result = Math.round(Math.random() * (max-min) + min);
//
// console.log((result)); //округляет

// Math.random()*(max - min) + min;

// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;
//
// const index = Math.round(Math.random() * (max-min) + min);
//
// const color = colors[index];
// console.log(color);
//
// document.body.style.backgroundColor = color;


// const message = 'В этой строке 26 символов.';
// console.log(message.length); //26

// const fName = 'Chelsy';
// const lName = 'Emerlad';
// const fullName = fName + ' ' + lName;
//
// console.log(fullName);
//
// const room = 716;
// const type = 'VIP';
//
// const welcomeMsg = `Гость ${fName + ' ' + lName} поселяется в ${type} номер ${room}`;
// console.log(welcomeMsg);


// let brand = 'SamSUng';
// brand = brand.toLowerCase();
// console.log(brand);
//
// console.log(brand.slice(1).toLowerCase()); //amsung

// let brand = 'SamSUng';
// let string1 = 'SamSUng dvsvfed efe fer hfr ';
// console.log(string1.includes(brand)); //true

// const d = 5 !== 5; //false
// console.log(d);


// console.log(Boolean(5)); //true
// false - 0 NaN null undefined "" '' false


// console.log(5 && 6 && 7 && null); //null false

// console.log(0 || 5 || 8);//5 true

// console.log(!1); //false  инверсия


// const x1 = 10;
// const x2 = 30;
// const number = 20;
//
// console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);
//
// const res = number > x1 && number < x2;
// console.log(res);
//
//
// const ili = number < x1 || number > x2;
// console.log("Ili:", ili);

//
// const isO = true;
// const isF = true;
// const isD = false;
//
// const  canOpenChat = isO && isF && !isD;
//
// console.log('Можно открыть чат?', canOpenChat);


// // const subscribe = 'vip';
// const canA = sub === 'pro' || sub === 'vip';
// //true || false => true
// //false || true => true
// //false|| false => false
//
// console.log(canA);

// const salary = 1500;
// if (salary < 500) {
//     console.log("Norm");
// } else if (salary > 500 && salary <= 1500) {
//     console.log("Good");
// } else{
//     console.log("Nice");
// }


// const balance = 50;
// // let massage;
// //
// // if (balance >= 0) {
// //     massage = "Positive";
// // } else{
// //     massage = "Negative";
// // }
//
// const massage = balance >= 0 ? "Positive" : "Negative";
// console.log(massage);


// const bi = 10;
// if(true) {
//     const ai = 5;
//     console.log(ai);
//     console.log(bi);
// }


// let balance = 10000;
// const payment = 2000;
// let discount = 0;


///////////////////////////////////////////////////////////////////////////
//switch ()


// if (stars === 1) {
//     price = 20;
// } else if( stars === 2){
//     price = 30;
// } else if( stars === 3){
//     price = 50;
// } else if( stars === 4){
//     price = 70;
// } else if( stars === 5){
//     price = 120;
// } else {
//     console.log("NOOOOO")
// }
//
// const stars = 1;
// let price;
//
// switch (stars) {
//     case 1:
//         price = 20;
//         console.log("Yeees");
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//
//     default:
//         console.log("Noooo")
// }
//
// console.log(price);


// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if( stars === 3 || stars ===4){
//     price = 30;
// } else if( stars === 5){
//     price = 120;
// } else {
//     console.log("NOOOOO")
// }
// console.log(price);

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         console.log("Yeees");
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//
//     case 5:
//         price = 120;
//         break;
//
//     default:
//         console.log("Noooo")
// }


// let option = 3;
// let message = "";
//
//
// switch (option) {
//     case 1:
//         message = "Mozete sam";
//         break;
//     case 2:
//         message = "Mozete kurerom";
//         break;
//     case 3:
//         message = "Mozete post";
//         break;
//     default:
//         console.log("Telefonchik")
// }
//
// console.log(message)

//////////////////////////////////////////
//for

// for (let i = 0; i <= 25; i += 1) {
//     console.log(i);
// }


// const employees = 3;
// const minSalary = 500;
// const maxSalary = 5000;
// let totalSalary = 0;
//
// for (let i = 1; i <= employees; i += 1) {
//
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//
//     console.log(`Money ${i} - ${salary}`);
//
//     totalSalary += salary;
//
// }
// console.log(totalSalary);


// const min = 5;
// const max = 13;
// let total = 0;
//
// for (let i = min; i <= max; i += 1) {
//     // console.log(i);
//     if (i % 2 !== 0) {
//         console.log("Ne Chetnoe ", i);
//         continue; //пропускай.
//     }
//     console.log("Chetnoe", i);
//     total += i
// }
//
// console.log(total);


// let balance = 10000;
// const payment = 2000;
//
// // for (let i = 0; i <= balance; i += 0) {
// // }
// console.log(`Общая сумма заказа ${payment}`);
//
// if (balance >= payment) {
//     console.log("ok")
//
//     balance -= payment;
//
//     console.log(`На счету осталось ${balance}`);
// }else{
//     console.log('На счету недостаточно средств')
// }


// [1, 5)] -> 1, 2, 3, 4

// const totalSpent = 100000;
// let payment = 500;
// let discount = 0;
//
// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log("Бронзовый партнер, скидка 2%");
//     discount = 0.02
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log("Серебряный партнер, скидка 5%");
//     discount = 0.05
// } else if (totalSpent >= 5000) {
//     console.log("Золотой партнер, скидка 10%");
//     discount = 0.1
// } else if (totalSpent < 1000) {
//     console.log("не партнер, скидка 0%")
// }
// console.log(`оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

//
// const btnAdd = document.querySelector("button");
// const valueInput = document.querySelector("input")
// // console.log(btnAdd)
// btnAdd.textContent = "Haloo";
// btnAdd.addEventListener('click', function (){
//     console.log("click heheheh")
//     console.log(valueInput.value)
// });


// let password = "";
//
// do {
//     password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);
//
// console.log("Ввели пароль: ", password);


// function getSubstring(string, length) {
//     const substring = string.slice(0, length);
//     console.log(substring);
// }
// getSubstring("Hello world", 3)

// function formatMessage(message, maxLength) {
//     let result;
//
//     if(message > maxLength){
//         let result = message.slice(maxLength, "...");
//     }else{
//         console.log(result);
//     }
//
//     console.log(result);
// }
// formatMessage("Curabitur ligula sapien", 16);

// let message = "Curabitur ligula sapien";
// let maxLength = 16;
// // let result;
//
// if(message > maxLength){
//     let result = message.slice(maxLength, "...");
//     console.log(result);
// }else{
//     // console.log(result);
// }
//
// // console.log(result);

// const productName = "Repair droid";
// console.log(productName[0]); // "R"
// console.log(productName[5]); // "r"
// console.log(productName[11]); // "d"
// console.log(productName[productName.length - 1]); // "d"
//
// const productName1 = "Repair droid";
// console.log(productName1.slice(0, 4)); // "Repa"
// console.log(productName1.slice(3, 9)); // "air dr"
// console.log(productName1.slice(0, productName1.length)); // "Repair droid"
// console.log(productName1.slice(7, productName1.length)); // "droid"

// let message = "Curabitur ligula sapien";
// let maxLength = 16;
//  let result;
//
//  message.toLowerCase()

// let result = message.slice(0, maxLength);
// console.log(`${result}...`);
//

// if ( message.length  > maxLength) {
//     result = message.slice(0, maxLength);
//     console.log(message.slice(0, maxLength).concat("..."));
// } else if (message.length < maxLength) {
//     result = message
//     console.log(result);
// }

// console.log(result);


// const incomingValue = null;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);


/**
 * ! Модуль 1. Заняття 2. Розгалуження. Цикли
 * Example 1 - Введення користувача та розгалуження
 * Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?".
 * Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"
 */

// const message = prompt("Яка офіційна назва JavaScript?");
//
// if (message === "ECMAScript") {
//     alert("Правильно!");
// }else {
//         alert("Не знаєте? ECMAScript!");
// }

// let msg = "";
// const message = prompt("Яка офіційна назва JavaScript?");
// message === "ECMAScript" ? (msg = "Правильно!") : (msg = "Не знаєте? ECMAScript!");
// alert(msg);

/**
 * * dvs
 * ! dicjdi
 * ? jujh
 * fdbvfd
 */

/**
 * ! Example 2 - Відображення часу (if...else)
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.".
 * Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 16;
// let timestring;
//
// if (minutes > 0) {
//     timestring = `${hours} г. ${minutes} хв.`;
// } else {
//     timestring = `${hours} г.`;
// }
// console.log(timestring);

/**
 *! Example 3 - Розгалуження
 Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля.
 Якщо було введено нуль, виводь в консоль рядок "Це нуль".
 Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".
 */

// const userInput = prompt('Введіть число');
//
// if (userInput > 0) {
//     console.log("Це позитивне число");
//  }else if(userInput == 0) {
//     console.log("Це нуль");
//  }else{
//     console.log("Це негативне число");
// }


/**
 * ! Example 4 - Вкладені розгалуження
 Напиши скрипт, який порівнює числа у змінних a та b.
 Якщо обидва значення більше 100, то виведи в консоль максимальне з них.
 В протилежному випадку у консолі повинна бути сума значення b та числа 512.
 */
// const a = 120;
// const b = 180;
//
// if( a >= 100 && b >= 100){
//     if(a > b) console.log(a)
//     else console.log(b)
// }else{
// console.log( b + 512);
// }

/**
 *! Example 10 - Дедлайн здачі проекту (switch)
 Виконай рефакторинг коду задачі номер 5 використовуючи switch.
 */
// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//     console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//     console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//     console.log('Післязавтра');
// } else {
//     console.log('Дата у майбутньому');
// }

// switch (daysUntilDeadline) {
//     case 0:
//         console.log('Сьогодні');
//         break;
//     case 1:
//         console.log('Завтра');
//         break;
//     case 2:
//         console.log('Післязавтра');
//         break;
//     default:
//         console.log('Дата у майбутньому');
// }

/**
 *!Example 11 - Цикл for
 *? Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.
 ** min max
 */
// const max = 100;
// const min = 20;
//
// for (let i = min; i <= max; i += 5) {
//   if(i % 5 === 0)  console.log(i)
// }

/**
 *! Example 12 - Введення користувача та розгалуження
 Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.
 Якщо відвідувач вводить "Адмін", то prompt запитує пароль
 Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
 В іншому випадку вивести рядок "Я вас не знаю"
 Пароль перевіряти так:
 Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
 Інакше виводити рядок "Невірний пароль"
 */

// const login = prompt("Your login:")?.trim();
//
// console.log(login)
//
// if (login === "Адмін") {
//     const password = prompt("Password");
//     if (password === "Я адмін") console.log("Здрастуйте!")
//     else console.log("Невірний пароль")
// } else if (!login) {
//     console.log("Скасовано");
// } else {
//     console.log("Я вас не знаю");
// }


