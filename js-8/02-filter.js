const tech = [
    {label: 'HTML'},
    {label: 'CSS'},
    {label: 'JavaScript'},
    {label: 'Node.js'},
    {label: 'React'},
    {label: 'Vue'},
    {label: 'Next.js'},
    {label: 'Mobx'},
    {label: 'Redux'},
    {label: 'React Router'},
    {label: 'GraphQl'},
    {label: 'PostgreSQL'},
    {label: 'MongoDB'},
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};
const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

// refs.list.innerHTML = listItemsMarkup

function createListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join("");
}

// console.log(listItemsMarkup)


function onFilterChange(evt) {
    const filter = evt.target.value.toLowerCase()

    const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter))
    // console.log(filteredItems)


    const listItemsMarcup = createListItemsMarkup(filteredItems)
    // console.log(listItemsMarcup)

    // refs.list.innerHTML = listItemsMarcup
    populateList(listItemsMarcup);
}

function populateList(markup) {
    refs.list.innerHTML = markup;
}

