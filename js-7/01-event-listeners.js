/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');


// addListenerBtn.addEventListener('click', () => {
//     console.log("Вешаю слушателя события на целевую кнопку");
//
//     targetBtn.addEventListener('click', onTargetBtnClick)
// })
//
// removeListenerBtn.addEventListener('click', () => {
//     console.log("Снимаю слушателя события с целевой кнопки");
//
//     targetBtn.removeEventListener('click', onTargetBtnClick)
// })
//
// function onTargetBtnClick() {
//     console.log("Клик по целевой кнопке")
// }

// targetBtn.addEventListener('click', () => {
//     console.log("Клик")
// })

// function handleTargetButtonClick() {
//     console.log("Клик1")
// }
//
// function targetButtonClickHandler() {
//     console.log("Клик2")
// }
//
// function onTargetButtonClick() {
//     console.log("Клик3")
// }
//
// function logMessage() {
//     console.log("Клик по целевой кнопке") //6 Клик по целевой кнопке
// }

//!============================================================================


addListenerBtn.addEventListener('click', event => {
    console.log(event); //PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
    console.log('Вешаю слушателя события на целевую кнопку');

    targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
    console.log(event);
    console.log('Снимаю слушателя события с целевой кнопки');

    targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
    console.log(event);
    console.log('Клик по целевой кнопке');
}