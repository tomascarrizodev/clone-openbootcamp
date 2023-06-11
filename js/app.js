const $ = (elem) => document.querySelector(elem)

const btnBurger = $('#btn-burger')
const btnClose = $('#btn-close')
const headerNav = $('.header-nav')

btnBurger.addEventListener('click', event => {
    btnBurger.style = 'outline: 2px solid lightblue;'
    btnClose.style = 'outline: none;'
    headerNav.classList.toggle('show');
})

btnClose.addEventListener('click', event => {
    btnBurger.style = 'outline: none;'
    btnClose.style = 'outline: 2px solid lightblue;'
    headerNav.classList.toggle('show');
})