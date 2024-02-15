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
        })
    })
}

if (document.documentElement.clientWidth < 950) {
    catalogPopup.addEventListener('click', () => {
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

const nameInput = document.querySelector('.name_input')
const mailInput = document.querySelector('.email_input')
const messageArea = document.querySelector('.message_textarea')

const subButton = document.querySelector('.submit_button')
subButton.addEventListener('click', () => {
    if (nameInput.value) {
        if (mailInput.value) {
            if (messageArea.value) {
                alert('Отправлено!')
            } else {
                alert('Напишите сообщение!')
            }
        } else {
            alert('Напишите почту')
        }
    } else {
        alert('Напишите имя!')
    }
})

nameInput.addEventListener('change', (e) => {
    const checker = document.getElementsByClassName('check_input_img')
    for (let i = 0; i < checker.length; i++) {
        if (e.target.value) {
            checker[0].classList.add('Active')
        } else {
            checker[0].classList.remove('Active')
        }
    }
})

mailInput.addEventListener('change', (e) => {
    const checker = document.getElementsByClassName('check_input_img')
    for (let i = 0; i < checker.length; i++) {
        if (e.target.value) {
            checker[1].classList.add('Active')
        } else {
            checker[1].classList.remove('Active')
        }
    }
})

messageArea.addEventListener('change', (e) => {
    if (nameInput.value) {
        if (mailInput.value) {
            if (e.target.value) {
                subButton.classList.add('Active')
            } else {
                subButton.classList.remove('Active')
            }
        }
    }
})
const getDevelop = document.querySelector('.develop_box')
const developTitle = document.querySelector('.develop_title')
const developAdress = document.querySelector('.develop_adress')
const pointD = document.querySelector('.develop_point')
const getOffice = document.querySelector('.office_box')
const officeTitle = document.querySelector('.office_title')
const officeAdress = document.querySelector('.office_adress')
const pointO = document.querySelector('.office_point')
const mapFrame = document.querySelector('.map_frame')

pointO.classList.add('Active')
officeTitle.classList.add('Active')
officeAdress.classList.add('Active')
getOffice.addEventListener('click', () => {
    mapFrame.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Ab64c52aa381aaa1862385a05ef148308781b4c541c66b929b4e9ee75a50b8ea7&amp;source=constructor'
    pointO.classList.add('Active')
    officeTitle.classList.add('Active')
    officeAdress.classList.add('Active')

    pointD.classList.remove('Active')
    developTitle.classList.remove('Active')
    developAdress.classList.remove('Active')

})

getDevelop.addEventListener('click', () => {
    mapFrame.src = 'https://yandex.ru/map-widget/v1/?um=constructor%3Af996d28ccb2e78cb147eeda070ab4d23fd26599c0d491f289ccf1305061ff71d&amp;source=constructor'
    pointD.classList.add('Active')
    developTitle.classList.add('Active')
    developAdress.classList.add('Active')

    pointO.classList.remove('Active')
    officeTitle.classList.remove('Active')
    officeAdress.classList.remove('Active')
})

const showAd = document.querySelector('.map_open_btn')
showAd.addEventListener('click', () => {
    const menu = document.querySelector('.map_inner')
    menu.classList.toggle('Hide')
})