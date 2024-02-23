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
    const filterChevrons = document.querySelectorAll('.filter_chevron')
    filterOptions.forEach(el => {
        el.classList.add('Active')
    })
    filterChevrons.forEach(el => {
        el.classList.add('Active')
    })
}

if (document.documentElement.clientWidth > 950) {
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
}

if (document.documentElement.clientWidth < 950) {
    const sortButton = document.querySelector('.sort_button')
    sortButton.addEventListener('click', () => {
        const sortButtons = document.querySelectorAll('.sort_button')
        if (sortButton.innerHTML === 'Дешевле <i class="fa-solid fa-up-down"></i>') {
            sortButton.innerHTML = 'Дороже <i class="fa-solid fa-up-down"></i>'
        } else {
            sortButton.innerHTML = `Дешевле <i class="fa-solid fa-up-down"></i>`
        }
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
const closeOnXFilters = document.querySelector('.close-filter-popup_button')
closeOnXFilters.addEventListener('click', () => {
    const filterContainer = document.querySelector('.filtration_col')
    filterContainer.classList.remove('Active')
    document.querySelector('body').classList.remove('Noscroll')
})

document.addEventListener('click', (e) => {
    const filterContainer = document.querySelector('.filtration_col')
    if (e.target.contains(filterContainer)) {
        filterContainer.classList.remove('Active')
        document.querySelector('body').classList.remove('Noscroll')
    }
})

const applyFilters = document.querySelector('.apply-filter_button')
applyFilters.addEventListener('click', () => {
    const filterContainer = document.querySelector('.filtration_col')
    filterContainer.classList.remove('Active')
    document.querySelector('body').classList.remove('Noscroll')
})

const products = [
    {
        "id": 1,
        "category": "Бытовая химия",
        "prods": [
            {
                "id": 1,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 2,
                "name": "СРЕДСТВО ДЛ СТЕКОЛ И ЗЕРКАЛ ECOLOGICA",
                "description": "Средство для стекол и зеркал",
                "price": 128,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 3,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": true,
            }
        ]
    },
    {
        "id": 2,
        "category": "Профессиональный клининг",
        "prods": [
            {
                "id": 1,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 2,
                "name": "СРЕДСТВО ДЛ СТЕКОЛ И ЗЕРКАЛ ECOLOGICA",
                "description": "Средство для стекол и зеркал",
                "price": 128,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 3,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": true,
            }
        ]
    },
    {
        "id": 3,
        "category": "Автохимия",
        "prods": [
            {
                "id": 1,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 2,
                "name": "СРЕДСТВО ДЛ СТЕКОЛ И ЗЕРКАЛ ECOLOGICA",
                "description": "Средство для стекол и зеркал",
                "price": 128,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 3,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": true,
            }
        ]
    },
    {
        "id": 4,
        "category": "Промышленная химия",
        "prods": [
            {
                "id": 1,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 2,
                "name": "СРЕДСТВО ДЛ СТЕКОЛ И ЗЕРКАЛ ECOLOGICA",
                "description": "Средство для стекол и зеркал",
                "price": 128,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 3,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": true,
            }
        ]
    },
    {
        "id": 5,
        "category": "Уход за собой",
        "prods": [
            {
                "id": 1,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 2,
                "name": "СРЕДСТВО ДЛ СТЕКОЛ И ЗЕРКАЛ ECOLOGICA",
                "description": "Средство для стекол и зеркал",
                "price": 128,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 3,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": true,
            }
        ]
    },
    {
        "id": 6,
        "category": "Продукция для гостиниц",
        "prods": [
            {
                "id": 1,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 2,
                "name": "СРЕДСТВО ДЛ СТЕКОЛ И ЗЕРКАЛ ECOLOGICA",
                "description": "Средство для стекол и зеркал",
                "price": 128,
                "currency": "₽",
                "discount": false,
            },
            {
                "id": 3,
                "name": "СРЕДСТВО МЫТЬЯ ПОЛА SYNERGETIC",
                "description": "Концентрированное универсальное средство",
                "price": 220,
                "currency": "₽",
                "discount": true,
            }
        ]
    }
]

const wrapper = document.querySelector('.products_inner_wrapper_box')
let selectedFilter = ''
const getProducts = () => {
        if (selectedFilter === '') {
            products.map(elem => {
                wrapper.innerHTML += `<div class="products_inner_box">
                    <h3 class="products_type_title">${elem.category}</h3>
                    <div class="products_inner_row">
                      ${elem.prods.map(product => {
                    return (
                        `<div class="col-4 products_inner_col">
                             <div class="product_box">
                                 ${product.discount === true ? '<span class="product_discount">-5%</span>' : ''}
                                 <a href="#" class="product_link"></a>
                                 <img src="./assets/cards/1.png" alt="product" class="product_img">
                                 <h3 class="product_name">${product.name}</h3>
                                 <p class="product_descr">${product.description}</p>
                                 <span class="product_price">${product.price + ' ' + product.currency}</span>
                                 <button class="product-to-cart_button">В корзину</button>
                             </div>
                     </div>`
                    )
                }).join('')}
                    </div>
                </div>`
            })
        } else {
            products.filter(el => el.category === selectedFilter).map(elem => {
                wrapper.innerHTML += `<div class="products_inner_box">
                    <h3 class="products_type_title">${elem.category}</h3>
                    <div class="products_inner_row">
                      ${elem.prods.map(product => {
                    return (
                        `<div class="col-4 products_inner_col">
                             <div class="product_box">
                                 ${product.discount === true ? '<span class="product_discount">-5%</span>' : ''}
                                 <a href="#" class="product_link"></a>
                                 <img src="./assets/cards/1.png" alt="product" class="product_img">
                                 <h3 class="product_name">${product.name}</h3>
                                 <p class="product_descr">${product.description}</p>
                                 <span class="product_price">${product.price + ' ' + product.currency}</span>
                                 <button class="product-to-cart_button">В корзину</button>
                             </div>
                     </div>`
                    )
                }).join('')}
                    </div>
                </div>`
            })
        }
}
getProducts()
const allProductsCheckbox = document.getElementsByClassName('filter_checkbox')
for (let i = 0; i < allProductsCheckbox.length; i++) {
    allProductsCheckbox[i].addEventListener('click', () => {
        const allProducts = document.querySelectorAll('.products_inner_box')
        allProductsCheckbox[i].nextElementSibling.classList.add('Active')
        allProductsCheckbox[i].parentElement.nextElementSibling.classList.add('Active')
        let getCategory = allProductsCheckbox[i].title
        console.log(getCategory)
        selectedFilter = getCategory
        getProducts()
        if (allProductsCheckbox[i].checked === false) {
            let removedCheckbox = allProductsCheckbox[i].title
            console.log(removedCheckbox + ' ' + 'Убрано')
            console.log(products)
            selectedFilter = ''
            getProducts()
            allProductsCheckbox[i].nextElementSibling.classList.remove('Active')
            allProductsCheckbox[i].parentElement.nextElementSibling.classList.remove('Active')
        }
    })
}
