// ✅ Логически и синтаксически сгруппированные сущности
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Это метод объекта
//     getBooks() {
//         console.log("Этот метод будет возвращать все книги - свойство books");
//     },
//     // Это метод объекта
//     addBook(bookName) {
//         console.log("Этот метод будет добавлять новую книгу в свойство books");
//     },
// };
//
// // Вызовы методов
// bookShelf.getBooks();
// bookShelf.addBook("Новая книга");

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//         console.log(this);
//     },
// };
//
// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
//
// for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
// }


// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";
//
// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

//
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
// const keys = Object.keys(book);
//
// for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значение свойства
//     // console.log(book[key]);
// }


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']
//
// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]


// const apartment = {
//         imgUrl: "https://via.placeholder.com/640x480",
//         descr: "Spacious apartment in the city center",
//         rating: 4,
//         price: 2153,
//         tags: ["premium", "promoted", "top"],
//
//     owner: {
//         name:"Henry",
//         phone:"982-126-1588",
//         email: "henry.carter@aptmail.com"
//     }
// }
//
// console.log(apartment)


// const playlist = {
//     name: "Henry",
//     rating: 4,
//     tags: ["premium", "promoted", "top"],
//     price: 2153,
// };
//
// console.log(playlist.price)

// const name = "Hary";
// const rating = 5;
//
// const playlist = {
//     name,
//     rating: rating,
//     tags: ["premium", "promoted", "top"],
//     price: 2153,
// };
//
// const propertyName = "tags"
//
// console.log(playlist.price)
// console.log(playlist['rating'])
// console.log(playlist[propertyName])


// const  inputName = 'color';
// const  inputValue = 'tomato';
//
// const colorPicker = {
//     [inputName]: 5, //{ color: 5 }
//     [inputName]: inputValue, //{ color: 'tomato' }
//     inputName: inputValue //{ inputName: 'tomato' }
// };
// const colorPicker1 = colorPicker
// console.log(colorPicker1 === colorPicker) //true
//
//
// colorPicker.qwe = 9; //{ ... qwe: 9 }
// colorPicker.qwe = 50; //{ ... qwe: 50 }
//
// console.log(colorPicker)
//
// //{} === {} не ровны


// const a ={
//     name: 4,
//  rating: 50
// }
// const b ={
//     name: 4,
//     rating: 50
// }
// console.log(a === b) //false


// const a =[1,2,3];
//
// a.hello = '888';
// console.log(a);


// const fn =function () {
//     console.log("hello");
// };
// fn.hello = "ggg"
//
// console.dir(fn.hello)
//
// fn();


//Методи

// const playlist = {
//     name: "My super play list",
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     //до
//     // getName: function () {
//     //     console.log("getName 00000")
//     // },
//     //после
//     getName(newName) {
//         console.log("ссылка на этот объект", this)
//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//         // this.trackCount = this.tracks.length
//     },
//     updateRating(newRating){
//         this.rating = newRating
//     },
//     getTrackCount(){
//         return this.tracks.length
//     }
// }
//
// console.log(playlist)
// playlist.getName('New name')
//
// playlist.addTrack('New track4')
// playlist.addTrack('New track5')
// playlist.addTrack('New track6')
// playlist.updateRating(50)
//
// console.log(playlist.getTrackCount());


//Перебор

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }
//
// let totalFeedback = 0;

// const keys = Object.keys((feedback));
// console.log(keys)
//
// for (const key of keys) {
//     console.log(key);//good //neutral //bad
//     console.log(feedback[key]); //5 // 10 //3
//
//     totalFeedback += feedback[key]
// }
//
// console.log("totalFeedback:",totalFeedback)

// const values = Object.values(feedback)
// console.log(values) //[5, 10, 3]
//
//
// for (const value of values) {
//     console.log(value)
//
//     totalFeedback += value
// }
// console.log("totalFeedback:",totalFeedback)

// const stones = [
//     { name: 'Смарагд', online: false },
//     { name: 'Діамант', online: true},
//     { name: 'Сапфір', online: true},
//     { name: 'Щебінь', online: false},
// ];

// for (const stone of stones) {
//     console.log(stone);
//     stone.newprop = 555
// }

// console.table(stones);


// const friends = [
//     {name: 'Смарагд', online: false},
//     {name: 'Діамант', online: true},
//     {name: 'Сапфір', online: true},
//     {name: 'Щебінь', online: false},
// ];
// const getAllName = function (allFrands) {
//     const names = [];
//
//     for (const friend of allFrands) {
//         console.log(friend.name)
//         names.push(friend.name)
//     }
//
//     console.log(names)
// }

// getAllName(friends)


// const getAllName = function (allFriends) {
//     const onlineFriends = [];
//
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);
//
//         if (!friend.online) {
//             onlineFriends.push(friend)
//         }
//
//     }
//     // return onlineFriends
//     console.log(onlineFriends)
// }
//
// getAllName(friends)
//
// console.log(Object.keys(friends).length) //4

/*
!Example 1 - Основи об'єктів
Напиши скрипт, який для об'єкта user, послідовно:

*? додає поле mood зі значенням 'happy'
*? замінює значення hobby на 'skydiving'
*? замінює значення premium на false
*? виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
//  user.mood = 'happy';
// // user['mood'] = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);
//
// console.log(Object.keys(user));
//
// const keys = Object.keys(user)
//
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`)
// }

/*
!Example 2 - метод Object.values()
У нас є об'єкт, де зберігаються зарплати нашої команди.
Напишіть код для підсумовування всіх зарплат і збережіть результат
у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній,
то результат має бути 0.
*/

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
//
// let total = 0;
// // const keys = Object.keys((salaries));
// const salariesArr = Object.values(salaries)
// // console.log(salariesArr);
//
// for (const salary of salariesArr) {
//     total += salary
// }
// console.log("total:", total)

/*
! Example 3 - Масив об'єктів
Напишіть функцію calcTotalPrice(stones, stoneName),
яка приймає масив об'єктів та рядок з назвою каменю.
Функція рахує і повертає загальну вартість каміння з таким ім'ям,
ціною та кількістю з об'єкта
*/

// const user = {
//     name: "Alex",
//     playlist: {
//         favirites: ["dvdv", "aaafdvde", "kkkfdvd"],
//         avarListenTime: 5,
//         toptracks: {
//             online: true,
//         }
//     }
// };
//
// console.log(user.playlist.toptracks.online);

// const stones = [
//     {name: 'Смарагд', price: 1300, quantity: 4},
//     {name: 'Діамант', price: 2, quantity: 3},
//     {name: 'Сапфір', price: 400, quantity: 7},
//     {name: 'Щебінь', price: 200, quantity: 2},
// ];
//
// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName)
//             return stone.price * stone.quantity;
//     }
//     return "Error"
// }
//
// const total = calcTotalPrice(stones, 'Діамант')
// console.log(total)

/*
! Example 4 - Комплексні завдання
Напиши скрипт управління особистим кабінетом інтернет банку.
Є об'єкт account в якому необхідно реалізувати методи для роботи
з балансом та історією транзакцій.
*/
/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const TRANSACTION = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };
//
// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */
//
// const account = {
//     // Поточний баланс рахунку
//     balance: 0,
//
//     // Історія транзакцій
//     transactions: [],
//
//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     /*
//      * Кожна транзакція це об'єкт із властивостями: id, type та amount
//      */
//     createTransaction(amount, type) {
//         return {
//             amount,
//             type,
//             id: this.transactions.length,
//         }
//     },
//
//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         const transaction = this.createTransaction(amount, TRANSACTION.DEPOSIT);
//         this.transactions.push(transaction);
//         this.balance += amount
//     },
//
//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.error("недостатньо коштів");
//             return false
//         }
//         this.balance -= amount
//         const transaction = this.createTransaction(amount, TRANSACTION.WITHDRAW);
//         this.transactions.push(transaction);
//     },
//
//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance
//     },
//
//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (id === transaction.id) {
//                 return transaction;
//             }
//         }
//         // return {};
//     },
//
//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let total = 0;
//         for (const transaction of this.transactions) {
//             if (type === transaction.type) {
//                 total += transaction.amount
//             }
//         }
//         return total
//     },
// };
//
//
// // console.log(account.getBalance());
// // console.log(account.createTransaction(100, TRANSACTION.DEPOSIT));
// account.deposit(500);
// account.deposit(400);
// account.deposit(100);
//
// account.withdraw(300)
// console.log(account.transactions);
// console.log(account.getBalance());
//
// console.log(account.getTransactionDetails(2));
//
// console.log(account.getTransactionTotal(TRANSACTION.DEPOSIT));
// console.log(account.getTransactionTotal(TRANSACTION.WITHDRAW));

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
//
// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
//
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);
//
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
//
//
// const aptRating = apartment.rating;
// const aptDescr = apartment;
// const aptPrice = apartment;
// const aptTags = apartment;


// const temps = [14, -4, 25, 8, 11];
//
// // В консоли будет массив
// console.log(temps);
// // ❌ Так не сработает, потому что передаём целый массив
// console.log(Math.max(temps)); // NaN
//
// // В консоли будет набор отдельных чисел
// console.log(...temps);
// // ✅ Распылим коллекцию элементов как отдельные аргументы
// console.log(Math.max(...temps)); // 25


// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };
//
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
//
// const fourth = { ...second, ...first };
// console.log(fourth); //{ propC: 50, propD: 20, propA: 5, propB: 10 }


// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };
//
// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propB: 10, propA: 5, propC: 15 }
//
// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
//
// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }


// function multiply(...args) {
//     console.log(args); // массив всех аргументов
// }
//
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     // console.log(firstNumber); // Значение первого аргумента
//     console.log(secondNumber); // Значение второго аргумента
//     console.log(otherArgs); // Массив остальных аргументов
// }
//
// // multiply(1, 2);
// // multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };
//
// // Деструктуризируем
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined
//
// const accessType = isPublic ? "публичном" : "закрытом";
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
// console.log(message)


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
//
//
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     city: "Kingston",
//     country: "Jamaica",
// };
//
//
// console.log(apartment)

// const emailInputName = "email";
// const passwordInputName = "password";
//
// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
// };
//
// console.log(credentials)

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
//
// for (key in keys) {
//
// }
// console.log(values)
// console.log(keys);


/* !///////////////////////////////////////////////////////*/

// const number = [1,2,3].concat([4,5,6], [7,8,9])
// const number = [0,5,...[1,2,3], 'm', 5]; //[ 0, 5, 1, 2, 3, 'm', 5 ]
// console.log(number);

// const temp = [18, 14, 12, 1, 17, 29, 24];
//
// console.log(Math.max(...temp)); //29
// console.log(Math.min(...temp)); //1

// const a = [1,2,3];
// const b = [...a];
// console.log(a===b) //false

// const a = [{ a:1}, {b:2},{c:3}];
// const b = [...a];
// console.log(a[0]===b[0]) //true
// console.log(a===b) //false

// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};
// const c = {};
//
// Object.assign(c, a, b); //{ x: 0, y: 2, z: 3}
// const c = {
//      ...a, ...b //{ x: 0, y: 2, z: 3 }
// }

// const c = {
//     ...a, x: 10, ...b, y: 20, //{ x: 0, y: 20, z: 3 }
//
// }
// console.log(c);


// const defaulSettings = {
//     theme: "light",
//     showNotification: true,
//     hideSidebar: false,
// };
//
// const userSettings = {
//     showNotification: false,
//     hideSidebar: true,
// }
//
// const finalSettings = {
//     ...defaulSettings,
//     ...userSettings
// }
// console.log(finalSettings)


// const playlist = {
//     name : "My super playlist",
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     author: " MA"
// };
//
// const {name, rating, tracks, trackCount, author = 555, trackCount: numberOfTracks = 0 } = playlist
// console.log(name);
// console.log(rating);
// console.log(tracks);
// console.log(trackCount);
//
// console.log(author);
// console.log(numberOfTracks);


// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.tracks,
//     playlist.trackCount
// )


//
// const playlist = {
//     name : "My super playlist",
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     author: {
//         follow: 5640,
//         likes: 50,
//         view: 29866,
//     }
// };
//
// const {name, rating, tracks, trackCount, author = 555, trackCount: numberOfTracks = 0,  } = playlist
// const {view, likes, follow} = author
//
// // console.log(name);
// // console.log(rating);
// // console.log(tracks);
// // console.log(trackCount);
// //
// // console.log(author);
// // console.log(numberOfTracks);
// //
// // console.log(view);
// // console.log(follow);
// // console.log(likes);
//
// console.log(name, rating, tracks, trackCount, author, numberOfTracks, view, follow, likes);


// const rgb = [255, 100, 80];
//
// const [a,  ,c] = rgb;
//
// console.log(a,  c); //255 80


// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
//
// // console.log(Object.keys(user)); //[ 'name', 'age', 'hobby', 'premium' ]
// //console.log(Object.values(user)) //[ 'Mango', 20, 'html', true ]
// // const keys = Object.keys(user)
// //
// // for (const key of keys) {
// //     console.log(`${key}: ${user[key]}`) // name: Mango   age: 20   hobby: html  premium: true
// // }
//
// const entries = Object.entries(user);
//
// for (const [names, rating] of entries) { //entry
//     // // console.log(entry) //[ 'name', 'Mango' ] [ 'age', 20 ] [ 'hobby', 'html' ]  [ 'premium', true ]
//     // const name = entry[0];
//     // const rating = entry[1];
//
//    // const [names, rating] = entry
//     console.log(names, rating) // name Mango  age 20   hobby html   premium true
// }

// const profile = {
//     name : "My super playlist",
//     tag: "dsvvf",
//     location: 'Costa Rika',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     //author: " MA",
//     status: {
//         follow: 5640,
//         likes: 50,
//         view: 29866,
//     }
// };
//
// const {name, tag, location, ...restProps} = profile;
//
// console.log(name, tag, location);
// console.log(restProps)


// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };
//
// const {
//     name,
//     tag,
//     stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;
//
// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308\

// const rgb = [200, 255, 100];
//
// const [red, ...colors] = rgb;
//
// console.log(red); // "200"
// console.log(colors); // [255, 100]


// const fn = function (params) {
//
// }
//
// fn({
//     age: 10,
//     friends: 5 ,
//     isOnline: true,
//     hobby: [],
//     games: {},
//     rating: 6
// })


// const showProfileInfo = function ({ name, tag, location, rating, tracks,trackCount, ...restProps}) {
//     // const {
//     //     name, tag, location, rating, tracks, status: {follow, likes, view}
//     // } = userProfile;
//
//
//     console.log(name, tag, location, rating, tracks); //My super playlist dsvvf Costa Rika 5 [ 'track-1', 'track-2', 'track-3' ]
//     console.log(restProps) //{ status: { follow: 5640, likes: 50, view: 29866 } }
//
// }
// const profile = {
//     name: "My super playlist",
//     tag: "dsvvf",
//     location: 'Costa Rika',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     //author: " MA",
//     status: {
//         follow: 5640,
//         likes: 50,
//         view: 29866,
//     }
// };
//
// showProfileInfo(profile)


// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         console.table(this.items)
//         for (const item of this.items) {
//             // console.log(item);
//
//             if (item.name === product.name) {
//                 item.quantity += 1
//                 return;
//             }
//         }
//
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };
//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const {items} = this;
//
//         for (let i = 0; i < items.length; i += 1) {
//             // console.log(this.items[i])
//             const {name} = items[i];
//
//             if (productName === name) {
//                 console.log(" нашли такой продукт", productName);
//                 console.log("index", i);
//
//                 items.splice(i, 1)
//             }
//         }
//
//         // for (const item of this.items) {
//         //     console.log(item);
//         //     if( productName === item.name){
//         //         console.log(" нашли такой продукт", productName)
//         //     }
//         // }
//     },
//     clear() {
//         this.items = []
//     },
//     countTotalPrice() {
//         const {items} = this
//
//         let total = 0;
//
//         for (const {price, quantity} of items) {
//             total += price * quantity;
//         }
//         return total
//     },
//     increaseQuantity(productName) {
//     },
//     decreaseQuantity(productName) {
//     },
// }
//
//
// console.log(cart.getItems())
//
// cart.add({name: '🍎', price: 50});
// cart.add({name: '🍇', price: 60});
// cart.add({name: '🍑', price: 60});
// cart.add({name: '🍑', price: 60});
// cart.add({name: '🍌', price: 110});
// cart.add({name: '🍌', price: 110});
// cart.add({name: '🍌', price: 110});
//
//
// console.table(cart.getItems())
//
// console.log("Total: ", cart.countTotalPrice())
//
// cart.remove('🍑')
// // cart.remove('🍌')
// console.table(cart.getItems())
//
//
// cart.clear()
// console.log(cart.getItems())


/*
// ! Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
// */
// function calcBMI({weight, height}) {
//
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
//
// // Було
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));
//
// // Очікується
// console.log(
//     calcBMI({
//         weight: '88,3',
//         height: '1.75',
//     }),
// );
// console.log(
//     calcBMI({
//         weight: '68,3',
//         height: '1.65',
//     }),
// );
// console.log(
//     calcBMI({
//         weight: '118,3',
//         height: '1.95',
//     }),
// );

// /*
// ! Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
// */
//
// function printContactsInfo({names, phones}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }
//
// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );
//
// // Очікується
// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });

//
// /*
// ! Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.
// */
//
//
// function getBotReport({ companyName, bots: {repair: repairBots, defence: defenceBots}}) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
//
// // Було
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));
//
// // Очікується
// console.log(
//     getBotReport({
//         companyName: 'Cyberdyne Systems',
//         bots: {
//             repair: 150,
//             defence: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 bots in stock"

///*
// ! Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями
// companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.
// */
//
// // Рішення
//
// function getStockReport({companyName, stock}) {
//
//     let total = 0;
//     for (const value of Object.values(stock)) {
//         total += value;
//     }
//     return `${companyName} has ${total} items in stock`;
// }
//
//
// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"
//
// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"


// /*
// !Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона
// повертала новий об'єкт контакту з доданими властивостями id та createdAt,
// а також list зі значенням "default" якщо в partialContact немає такої властивості.
// */
//
//
// function createContact(partialContact){
//     return {
//         list: "default",
//         ...partialContact,
//         id: generateId(),
//         createdAt: Date.now()
//     }
// }
//
// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );
//
// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// /*
// ! Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий
// об'єкт із властивістю fullName, замість firstName та lastName.
// */
//
// function transformUsername({ firstName, lastName, ...rest }){
//
// // rest.fullName = `${firstName} ${lastName}`;
// // console.log(rest);
//
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...rest,
//     }
// }
//
//
// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );
//
// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );


// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
//
// for (const key in apartment) {
//
//
//     keys.push(key);
//     values.push(apartment[key]);
//
//
// }


// function countProps(object) {
//     let propCount = 0;
// console.log(object.length)
//     const keys = Object.keys(object);
//     console.log(keys);
//
//  console.log(keys.length)

// for (const key in object) {
//
//     if( Object.hasOwnProperty(key)){
//         propCount +=1
//     }
// }

// for (let i = 0; i <= Object.keys(object); i += 1){
//     propCount += i
//     console.log(propCount)
//     console.log(propCount)
// }

//         return propCount;
// }
//
// countProps({mail: "poly@mail.com", isOnline: true, score: 500}); //3

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']
//
// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

/*
Перебери объект apartment используя метод Object.keys() и цикл for...of.
Запиши в переменную keys массив ключей собственных свойств объекта apartment,
и добавь в массив values все значения его свойств.
*/
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
//
// for (const value of Object.values(apartment)) {
//     values.push(value)
//     console.log(value)
// }
//
// const keys = Object.keys(apartment);
// console.log(keys)
//
// // const ddd = []
// // for (const value of Object.keys(apartment)) {
// //     ddd.push(value)
// // console.log("ddd", ddd)
// // }
//

/*
 Выполни рефакторинг функции countProps(object) используя метод Object.keys() и,
 возможно, но необязательно, цикл for...of.
 */

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//
//
//     for (const key of Object.keys(object)) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//
//     return propCount;
//     // Change code above this line
// }


// function countProps(object) {
//     // Change code below this line
//     // let propCount = 0;
//     const propCount = Object.keys(object).length;
//
//     // for (const key in object) {
//     //     if (object.hasOwnProperty(key)) {
//     //         propCount += 1;
//     //     }
//     // }
// console.log(propCount)
//     return propCount;
//     // Change code above this line
// }
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

/*
    Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
    где имя свойства это имя сотрудника, а значение свойства это зарплата.
    Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
    Используй переменную totalSalary для хранения общей суммы зарплаты.
    */

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//
//     for (const salary of Object.values(salaries)) {
//         totalSalary += salary
//     }
//
//
// console.log(totalSalary)
//     return totalSalary;
// }
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })

/*
Перебери массив объектов colors используя цикл for...of.
Добавь в массив hexColors значения свойств hex, а в массив rgbColors
значения свойств rgb из всех объектов массива colors.
 */

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
//
// const hexColors = [];
// const rgbColors = [];
//
// for (const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors)

/*
Напиши функцию getProductPrice(productName) которая принимает один параметр
productName - название продукта. Функция ищет объект продукта с таким именем
(свойство name) в массиве products и возвращает его цену (свойство price).
Если продукт с таким названием не найден, функция должна возвращать null.
*/
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//     let price = null
//      for (const productNameElement of products) {
//          //console.log(productNameElement.name);
//          if (productName === productNameElement.name){
//            price = productNameElement.price
//              //console.log(productNameElement.price)
//          }
//
//      }
//
//     console.log(price)
// }
//
// // getProductPrice("Grip"); //1200
// // getProductPrice("Scanner");//2700
// getProductPrice("Engine");//null
// getProductPrice("Droid");//400

/*
Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
 */
//
// const products = [
//     {name: "Radar", price: 1300, quantity: 4},
//     {name: "Scanner", price: 2700, quantity: 3},
//     {name: "Droid", price: 400, quantity: 7},
//     {name: "Grip", price: 1200, quantity: 9},
// ];
//
// function getAllPropValues(propName) {

// let values = [];
// for (const productNameElement of products) {
//     let valuesNew = Object.keys(productNameElement);
//     if (valuesNew.includes(propName)) {
//         values.push(productNameElement[propName])
//     }
// }
// return values;

// }
//
//
//     getAllPropValues("name") //["Radar", "Scanner", "Droid", "Grip"]
//     getAllPropValues("quantity") //[4, 3, 7, 9]
//     getAllPropValues("price") //[1300, 2700, 400, 1200]
//     getAllPropValues("category") //[]

/* Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара.
 Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.*/

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];
//
// function calculateTotalPrice(productName) {
//     let price = 0
//      for (const productNameElement of products) {
//          //console.log(productNameElement.name);
//          if (productName === productNameElement.name){
//            price = productNameElement.price * productNameElement.quantity
//              //console.log(productNameElement.price)
//          }
//
//      }
//
//     console.log(price)
// }
// calculateTotalPrice("Blaster") //0
// calculateTotalPrice("Radar") //5200
// calculateTotalPrice("Droid") //2800
// calculateTotalPrice("Grip") //10800
// calculateTotalPrice("Scanner") //8100

//
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
//
// const {yesterday: highYesterday,today: highToday, tomorrow:highTomorrow, } = highTemperatures;
//
// const { highIcon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
//
//
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
//
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
//
// for (const {hex, rgb } of colors) {
//     console.log(hexColors.push(colors.hex));
//     console.log(rgbColors.push(colors.rgb));
// }


// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

//
// const {
//     today: {high: highToday, low: lowToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
//     tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}
// } = forecast


// function calculateMeanTemperature(forecast) {
//     const todayLow = forecast.today.low;
//     const todayHigh = forecast.today.high;
//     const tomorrowLow = forecast.tomorrow.low;
//     const tomorrowHigh = forecast.tomorrow.high;
//
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
//
//
//
// function calculateMeanTemperature(forecast) {
//
//   const  { today: {high: highToday, low: lowToday}, tomorrow: {high: highTomorrow, low: lowTomorrow}} = forecast ;
//
//     return (forecast) / 4;
// }
//
// // Change code below this line
// function calculateMeanTemperature(forecast) {
// const { today: {high: todayHigh , low: todayLow}, tomorrow: {high: tomorrowHigh, low: tomorrowLow}} =forecast
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
//


// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
//
// //Math.max() и Math.min()

//
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = allScores;
// const worstScore = allScores;

// function makeTask(data) {
//     // const completed = false;
//     // const category = "General";
//     // const priority = "Normal";
//
//     const {text: completed = false, category: category = "General", priority: priority = "Normal"} = data
//     console.log(data)
// }
//
// makeTask({category: 'Homemade', priority: 'Low'})


function add(arg) {
    // let   total = 0;
    console.log(arg)
    // for (const restElement of arg) {
    //     total += arg
    // }
// return total
}

add(74, 11, 62, 46, 12, 36)