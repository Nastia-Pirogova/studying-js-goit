//* Створити список технологій що вивчаються на курсі Fullstack за допомогою js | Показати як це робиться через map та reduce

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

//  createElement
/*
 1. Створити контейнер ul
 2. Перебір масиву технологій
    2.1. Створювати li
    2.2. Записати текст у створений елемент li
    2.3. Помістити li у кінець ul
 3. Помістити ul на сторінку
*/

// const ulEl = document.createElement("UL");
//
// for (const technology of technologies) {
//   const liEl = document.createElement("LI");
//   liEl.textContent = technology;
//   ulEl.appendChild(liEl);
// }
//
// document.body.prepend(ulEl);

//!=================================================================
// const listContent = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join("");
// const list = `<ul>${listContent}</ul>`;
//
// document.body.insertAdjacentHTML("afterbegin", list);

//!=================================================================

// const listContent = technologies.reduce(
//   (markup, technology) => markup + `<li>${technology}</li>`,
//   ""
// );
//
// const list = `<ul>${listContent}</ul>`;
//
// document.body.insertAdjacentHTML("afterbegin", list);

//!=================================================================

//* Створити кілька кнопок на основі масива з обєктами використовуючи createElement

// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];
//
// const btnsContainer = document.getElementById("btnsContainer");
// const fragment = document.createDocumentFragment();
//
// colors.forEach(({ label, color }) => {
//   const button = document.createElement("button");
//   button.type = "button";
//   button.textContent = label;
//   button.style.backgroundColor = color;
//   button.classList.add("btn");
//   fragment.appendChild(button);
// });
//
// btnsContainer.appendChild(fragment);

//!================================================
// const arrayOfSheep = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true];
//
// let total =0;
//
// arrayOfSheep.forEach(el => {
//     if(el === null || undefined){
//         el = false
//     }
//    total += el
//     return total
// })
//
// console.log( total);
//
// document.addEventListener("keydown", event => {
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);
// });
//
// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;
//
// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);
//
// function logMessage({ type, key, code }) {
//     const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;
//
//     logList.insertAdjacentHTML("afterbegin", markup);
//
//     if (type === "keyup") {
//         incrementKeypressCounter();
//     }
// }
//
// function reset() {
//     keypressCounter = 1;
//     logList.innerHTML = "";
// }
//
// function incrementKeypressCounter() {
//     keypressCounter += 1;
// }


//!===================================================================


// window.addEventListener("keydown", (e) => {
//   console.log(e);
//   console.log(e.key, e.code);
// });

//! =========

// const mainForm = document.getElementById("mainForm");

// console.dir(mainForm.elements);
// console.dir(mainForm.elements.text);
// console.dir(mainForm.elements.submit);

// target - елемент, на якому відбулася подія
//
// mainForm.addEventListener("submit", onSubmit);
// mainForm.elements.text.addEventListener("input", onInput);
// mainForm.elements.text.addEventListener("change", onChange);
//
// function onSubmit(event) {
//   event.preventDefault();
//   console.log(mainForm.elements.text.value);
// }
//
// function onInput(event) {
//   console.log("INPUT EVT");
//   console.log(event.target.value);
// }
//
// function onChange(event) {
//   console.log("CHANGE EVT");
//   console.log(event.target.value);
// }

// // blur & focus
// const openModalBtn = document.getElementById("openModalBtn");
//
// openModalBtn.addEventListener("focus", () =>
//   console.log("На кнопці сфокусувалися")
// );
//
// openModalBtn.addEventListener("blur", () =>
//   console.log("Кнопка втратила фокус")
// );
//
// //! =========
//
// const select = document.getElementById("select");
//
// select.addEventListener("change", (event) => {
//   console.dir(event.target.value);
// });

//! =========

/*
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
*/

/*
    1. Отримуємо всі рефси
    2. Вішаємо обробник подій на кнопку - click
        2.1. Додаємо клас open до body
    3. Вішаємо обробник подій на оверлей і на крестик - click
        3.1. Забираємо клас open у body
*/

//! 1 варіант - викликати ф-цію toggleModalOpen тільки тоді, коли модалка відкрита

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };
//
// const openClass = "open";
//
// refs.openModalBtn.addEventListener("click", toggleModalOpen);
// refs.overlay.addEventListener("click", toggleModalOpen);
// refs.modalCloseBtn.addEventListener("click", toggleModalOpen);
// window.addEventListener("keydown", closeModalOnESC);
//
// function toggleModalOpen() {
//   document.body.classList.toggle(openClass);
// }
//
// function closeModalOnESC(event) {
//   if (event.code === "Escape" && document.body.classList.contains(openClass)) {
//     toggleModalOpen();
//     console.log("Натиснули Escape");
//   }
// }

//! 2 варіант - вручну прибрати клас

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };
//
// const openClass = "open";
//
// refs.openModalBtn.addEventListener("click", toggleModalOpen);
// refs.overlay.addEventListener("click", toggleModalOpen);
// refs.modalCloseBtn.addEventListener("click", toggleModalOpen);
// window.addEventListener("keydown", closeModalOnESC);
//
// function toggleModalOpen() {
//   document.body.classList.toggle(openClass);
// }
//
// function closeModalOnESC(event) {
//   if (event.code === "Escape") {
//     document.body.classList.remove(openClass);
//     console.log("Натиснули Escape");
//   }
// }

//! 3 варіант - розділити логіку і створити окремо ф-цію для відкриття і окремо для закриття

const refs = {
  overlay: document.getElementById("overlay"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  openModalBtn: document.getElementById("openModalBtn"),
};

const openClass = "open";

refs.openModalBtn.addEventListener("click", modalOpen);
refs.overlay.addEventListener("click", modalClose);
refs.modalCloseBtn.addEventListener("click", modalClose);
window.addEventListener("keydown", closeModalOnESC);

function modalOpen() {
  document.body.classList.add(openClass);
}
function modalClose() {
  document.body.classList.remove(openClass);
}

function closeModalOnESC(event) {
  if (event.code === "Escape") {
    modalClose();
    console.log("Натиснули Escape");
  }
}

//! ====================

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalCloseBtn: document.getElementById("modalCloseBtn"),
//   openModalBtn: document.getElementById("openModalBtn"),
// };

// const openClass = "open";

// refs.openModalBtn.addEventListener("click", modalOpen);
// refs.overlay.addEventListener("click", modalClose);
// refs.modalCloseBtn.addEventListener("click", modalClose);

// function modalOpen() {
//   document.body.classList.add(openClass);
//   window.addEventListener("keydown", closeModalOnESC);
// }

// function modalClose() {
//   document.body.classList.remove(openClass);
//   window.removeEventListener("keydown", closeModalOnESC);
// }

// function closeModalOnESC(event) {
//   if (event.code === "Escape") {
//     modalClose();
//     console.log("Натиснули Escape");
//   }
// }