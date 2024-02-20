const menuButton = document.querySelector('.menu_button')
menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.header_wrapper')
    if (menu.className === 'header_wrapper Active') {
        menu.classList.remove('Active')
    } else {
        menu.classList.add('Active')
    }
})
const catalogButton = document.getElementsByClassName('button-category-none')
for (let i = 0; i < catalogButton.length; i++) {
    const slideBar = document.querySelector('.slider-bar')
    catalogButton[0].classList.add('button-category-active')
    catalogButton[i].addEventListener('click', () => {
        const unSelected = document.querySelectorAll('.button-category-none')
        Array.from(unSelected).forEach(el => {
            el.classList.remove('button-category-active')
        })
        setTimeout(() => {
            catalogButton[i].classList.add('button-category-active')
        }, 10)
    })
}

let catalogPopup = document.querySelector('.nav_routes')
if (document.documentElement.clientWidth > 951) {
    catalogPopup.addEventListener('mouseenter', () => {
        const el = document.querySelector('.catalog_popup_box')
        el.style.display = "flex"
        const routes = document.getElementsByClassName('main_route_link')
        const box = document.getElementsByClassName('popup_box_routes_box')
        const allBox = document.querySelectorAll('.popup_box_routes_box')
        box[0].classList.add('Active')
        for (let i = 0; i < routes.length; i++) {
            routes[i].addEventListener('mouseenter', () => {
                allBox.forEach(el => el.classList.remove('Active'))
                for (let x = 0; x < box.length; x++) {
                    switch (routes[i].innerText) {
                        case 'Бытовая химия':
                            box[0].classList.add('Active')
                            break
                        case 'Профессиональный клининг':
                            box[1].classList.add('Active')
                            break
                        case 'Промышленная химия':
                            box[2].classList.add('Active')
                            break
                        case 'Автохимия':
                            box[3].classList.add('Active')
                            break
                        case 'Уход за собой':
                            box[4].classList.add('Active')
                            break
                        case 'Продукция для гостиниц':
                            box[5].classList.add('Active')
                            break
                    }
                }
            })
        }
        el.addEventListener('mouseleave', () => {
            el.style.display = "none"
            allBox.forEach(el => el.classList.remove('Active'))
        })
    })
}

if (document.documentElement.clientWidth < 950) {
    catalogPopup.addEventListener('click', () => {
        const routes = document.getElementsByClassName('main-route_box')
        const box = document.getElementsByClassName('popup_box_routes_box')
        const allBox = document.querySelectorAll('.popup_box_routes_box')
        box[0].classList.add('Active')
        for (let i = 0; i < routes.length; i++) {
            routes[i].addEventListener('mouseenter', () => {
                allBox.forEach(el => el.classList.remove('Active'))
                for (let x = 0; x < box.length; x++) {
                    switch (routes[i].innerText) {
                        case 'Бытовая химия':
                            box[0].classList.add('Active')
                            break
                        case 'Профессиональный клининг':
                            box[1].classList.add('Active')
                            break
                        case 'Промышленная химия':
                            box[2].classList.add('Active')
                            break
                        case 'Автохимия':
                            box[3].classList.add('Active')
                            break
                        case 'Уход за собой':
                            box[4].classList.add('Active')
                            break
                        case 'Продукция для гостиниц':
                            box[5].classList.add('Active')
                            break
                    }
                }
            })
        }
    })
}

if (document.documentElement.clientWidth < 949) {
    catalogPopup.addEventListener('click', () => {
        const el = document.querySelector('.catalog_popup_box')
        const chevron = document.querySelector('.fa-chevron-down')
        const allBox = document.querySelectorAll('.popup_box_routes_box')
        if (el.className === 'catalog_popup_box') {
            el.classList.add('Active')
            chevron.classList.add('Active')
        } else {
            el.classList.remove('Active')
            chevron.classList.remove('Active')
            allBox.forEach(el => el.classList.remove('Active'))
        }
    })
}

const filterName = document.getElementsByClassName('filter_box')
for (let i = 0; i < filterName.length; i++) {
    filterName[i].addEventListener('click', (e) => {
        if (filterName[i].nextElementSibling.className === 'filter_options') {
            filterName[i].nextElementSibling.classList.add('Active')
            filterName[i].children[1].classList.add('Active')
        } else {
            filterName[i].nextElementSibling.classList.remove('Active')
            filterName[i].children[1].classList.remove('Active')
        }
    })
}

if (document.documentElement.clientWidth < 950) {
    const filterOptions = document.querySelectorAll('.filter_options')
    filterOptions.forEach(el => {
        el.classList.add('Active')
    })
}

const sortButton = document.getElementsByClassName('sort_button')
for (let i = 0; i < sortButton.length; i++) {
    sortButton[i].addEventListener('click', () => {
        const sortButtons = document.querySelectorAll('.sort_button')
        setTimeout(() => {
            sortButton[i].classList.add('Active')
        }, 200)
        sortButtons.forEach(el => {el.classList.remove('Active')})
    })
}

const priceToggle = document.querySelector('.include-only_inner')
priceToggle.addEventListener('click', () => {
    const toggler = document.querySelector('.include-only_toggler')
    if (toggler.className === 'include-only_toggler') {
        toggler.classList.add('Active')
    } else {
        toggler.classList.remove('Active')
    }
})

const openFilters = document.querySelector('.filter_popup_btn')
openFilters.addEventListener('click', () => {
    const filterContainer = document.querySelector('.filtration_col')
    filterContainer.classList.add('Active')
    document.querySelector('body').classList.add('Noscroll')
})

const closeFilters = document.querySelector('.cancel-filter_button')
closeFilters.addEventListener('click', () => {
    const filterContainer = document.querySelector('.filtration_col')
    filterContainer.classList.remove('Active')
    document.querySelector('body').classList.remove('Noscroll')
})

const applyFilters = document.querySelector('.apply-filter_button')
applyFilters.addEventListener('click', () => {
    const filterContainer = document.querySelector('.filtration_col')
    filterContainer.classList.remove('Active')
    document.querySelector('body').classList.remove('Noscroll')
})

const allProductsCheckbox = document.getElementsByClassName('filter_checkbox')
for (let i = 0; i < allProductsCheckbox.length; i++) {
    allProductsCheckbox[i].addEventListener('click', () => {
        const allProducts = document.querySelectorAll('.products_inner_box')
            allProducts.forEach(el => {
                switch (allProductsCheckbox[i].parentElement.parentElement.previousElementSibling.children[0].innerText) {
                    case 'Бытовая химия':
                        if (el.children[0].innerText !== 'Бытовая химия') {
                            el.classList.add('Hidden')
                         if (allProductsCheckbox[i].checked === false) {
                             el.classList.remove('Hidden')
                         }
                        }
                        break
                    case  'Профессиональный клининг':
                        if (el.children[0].innerText !== 'Профессиональный клининг') {
                            el.classList.add('Hidden')
                            if (allProductsCheckbox[i].checked === false) {
                                el.classList.remove('Hidden')
                            }
                        }
                        break
                    case 'Автохимия':
                        if (el.children[0].innerText !== 'Автохимия') {
                            el.classList.add('Hidden')
                            if (allProductsCheckbox[i].checked === false) {
                                el.classList.remove('Hidden')
                            }
                        }
                        break
                    case 'Промышленная химия':
                        if (el.children[0].innerText !== 'Промышленная химия') {
                            el.classList.add('Hidden')
                            if (allProductsCheckbox[i].checked === false) {
                                el.classList.remove('Hidden')
                            }
                        }
                        break
                    case 'Уход за собой':
                        if (el.children[0].innerText !== 'Уход за собой') {
                            el.classList.add('Hidden')
                            if (allProductsCheckbox[i].checked === false) {
                                el.classList.remove('Hidden')
                            }
                        }
                        break
                    case 'Продукция для гостиниц':
                        if (el.children[0].innerText !== 'Продукция для гостиниц') {
                            el.classList.add('Hidden')
                            if (allProductsCheckbox[i].checked === false) {
                                el.classList.remove('Hidden')
                            }
                        }
                        break
                }
            })
    })
}