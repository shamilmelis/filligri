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