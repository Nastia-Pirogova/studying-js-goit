/* <div>
DIV
<p>
    P
    <span>
        SPAN
    </span>
</p>
</div> */

// const allElements = document.querySelectorAll("*");
//
// for (const elem of allElements) {
//   elem.addEventListener(
//     "click",
//     () => alert(`Занурення: ${elem.tagName}`),
//     true
//   );
//   elem.addEventListener("click", () => alert(`Сплиття: ${elem.tagName}`));
// }
//
// document.body.addEventListener("click", (e) => {
//   console.log(
//     `Target: ${e.target.tagName} | current target: ${e.currentTarget.tagName}`
//       //Target: SPAN | current target: BODY
//   );
// });
// const divEl = document.querySelectorAll("div");
// divEl.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     console.log(e.currentTarget); //<div>DIV <p> P <span>SPAN</span></p></div> на чем обработчик
//     console.log(e.target); // <span> SPAN  </span> при нажатии
//   });
// });


//! target - елемент, на якому відбулася подія
//! currentTarget - елемент, на якому висить обробник(хто оброблює подію)

//! ===================================================

// Створити калькулятор вартості продукту взалежності від ціни. При роботі з подіями використовувати делагування.

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.
//
// const refs = {
//     form: document.getElementById("form"),
//     price: document.getElementById("price"),
//     quantity: document.getElementById("quantity"),
//     amount: document.getElementById("amount"),
//     total: document.getElementById("total"),
// };

// console.log(refs)


// const data = {
//     price: 0,
//     quantity: 0,
//     calcTotalPrice() {
//         return Number((this.price * this.quantity).toFixed(2));
//     },
// }
//
// dataFill();
// console.log(data)
// displayTotal()
//
// refs.amount.textContent = data.quantity;
//
//
//
// refs.form.addEventListener("input", handleFormInput)
//
// function handleFormInput({target}) {
//     //const target = event.target
//     const {value} = target;
//     // target - елемент, на якому відбувається подія, value - значення input'а поточного поля
//
//     if (target === refs.quantity) {
//         refs.amount.textContent = value;
//     }
//
//     target.setAttribute("value", value);
//     dataFill();
//     displayTotal()
// }
//
// function dataFill() {
//     data.price = Number(refs.price.value);
//     data.quantity = Number(refs.quantity.value);
// }
//
// function displayTotal(){
//     refs.total.textContent = data.calcTotalPrice() + "грн";
// }
//!=====================================================================

// const refs = {
//     otuputScrollStandart: document.getElementById("otuputScrollStandart"),
//     otuputScrollThrottled: document.getElementById("otuputScrollThrottled"),
//     otuputResizeStandart: document.getElementById("otuputResizeStandart"),
//     otuputResizeThrottled: document.getElementById("otuputResizeThrottled"),
// };
//
//
// const eventScrollCounter = {
//     standart: 0,
//     throttle: 0,
// };
// const eventResizeCounter = {
//     standart: 0,
//     throttle: 0,
// };
//
// document.addEventListener("scroll", () => {
//     eventScrollCounter.standart += 1;
//     refs.otuputScrollStandart.textContent = eventScrollCounter.standart
// })
//
// document.addEventListener("scroll", _.throttle(() => {
//             eventScrollCounter.throttle += 1;
//             refs.otuputScrollThrottled.textContent = eventScrollCounter.throttle;
//         }, 1000, {
//             leading: true,
//             trailing: false,
//         }
//     )
// );
//
// window.addEventListener("resize", () => {
//     eventResizeCounter.standart += 1;
//     refs.otuputResizeStandart.textContent = eventResizeCounter.standart
// })
//
// window.addEventListener("scroll", _.throttle(() => {
//         eventResizeCounter.throttle += 1;
//             refs.otuputResizeThrottled.textContent = eventResizeCounter.throttle;
//         }, 3000
//     )
// );

//! ============================================================

// const nameInput = document.getElementById("nameInput");
//
// nameInput.addEventListener(
//     "input",
//     _.debounce(
//         (event) => {
//             console.log(event.target.value);
//         },
//         1000,
//         {
//             leading: true,
//             trailing: true,
//         }
//     )
// );

//! ===================================

const signInForm = document.getElementById("signInForm");

const classes = {
    wrong: "wrong",
    correct: "correct",
};

signInForm.addEventListener("input", _.debounce(({target}) => {

    const {value} = target;
    console.log(target.dataset)

    if (value.length < target.dataset.minLength ||
        value.length > target.dataset.maxLength) {

        target.classList.add(classes.wrong)
        target.classList.remove(classes.correct)
    } else {
        target.classList.remove(classes.wrong)
        target.classList.add(classes.correct)
    }

}, 1000))
