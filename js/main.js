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

const cardsSwiper = new Swiper(".mySecondSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const profile = document.getElementsByClassName('profile_button')
for (let i = 0; i < profile.length; i++){
    profile[i].addEventListener('click', () => {
        const regPopup = document.querySelector('.reg_popup_wrapper')
        const body = document.querySelector('body')
        body.classList.add('Hidden')
        regPopup.classList.add('Active')
    })
}

const closeProfile = document.querySelector('.close_regPopup-btn')
closeProfile.addEventListener('click', () => {
    const regPopup = document.querySelector('.reg_popup_wrapper')
    const body = document.querySelector('body')
    body.classList.remove('Hidden')
    regPopup.classList.remove('Active')
})

const sexToggle = document.getElementsByClassName('sex_box_toggler')
for (let i = 0; i < sexToggle.length; i++) {
    const woman = document.querySelector('.woman_toggler')
    const man = document.querySelector('.man_toggler')
    sexToggle[0].classList.add('Active')
    woman.classList.add('Active')
    sexToggle[i].addEventListener('click', (e) => {
        switch (sexToggle[i].id) {
            case 'woman':
                sexToggle[i].classList.add('Active')
                sexToggle[1].classList.remove('Active')
                man.classList.remove('Active')
                woman.classList.add('Active')
                break
            case 'man':
                sexToggle[i].classList.add('Active')
                sexToggle[0].classList.remove('Active')
                man.classList.add('Active')
                woman.classList.remove('Active')
                break
        }
    })
}

const checkPassword = document.querySelector('.check_password')
checkPassword.addEventListener('click' , () => {
    let password = document.querySelector('.reg_pass_input')
    let checker = document.getElementById('first-checker')
    if (password.type === 'password') {
        password.type = 'text'
        checker.className = 'fa-solid fa-eye'
    } else {
        password.type = 'password'
        checker.className = 'fa-solid fa-eye-slash'
    }
})

const checkAgainPassword = document.querySelector('.check-again_password')
checkAgainPassword.addEventListener('click' , () => {
    let password = document.querySelector('.reg_pass-again_input')
    let checker = document.getElementById('second-checker')
    if (password.type === 'password') {
        password.type = 'text'
        checker.className = 'fa-solid fa-eye'
    } else {
        password.type = 'password'
        checker.className = 'fa-solid fa-eye-slash'
    }
})

const regTab = document.querySelector('.register_button')
regTab.addEventListener('click', () => {
    const loginBox = document.querySelector('.login_popup_inputs')
    const registerBox = document.querySelector('.reg_popup_inputs')
    const mainBox = document.querySelector('.reg_popup_box')
    const loginTab = document.querySelector('.login_button')
    loginBox.classList.remove('Active')
    registerBox.classList.remove('Closed')
    registerBox.classList.add('Active')
    mainBox.classList.remove('Login')
    regTab.classList.add('Active')
    loginTab.classList.remove('Active')
})

const loginTab = document.querySelector('.login_button')
loginTab.addEventListener('click', () => {
    const loginBox = document.querySelector('.login_popup_inputs')
    const registerBox = document.querySelector('.reg_popup_inputs')
    const mainBox = document.querySelector('.reg_popup_box')
    const regTab = document.querySelector('.register_button')
    loginBox.classList.add('Active')
    registerBox.classList.add('Closed')
    mainBox.classList.add('Login')
    loginTab.classList.add('Active')
    regTab.classList.remove('Active')
})

const sendNewPass = document.querySelector('.send_code_button')
const codeArray = [];
sendNewPass.addEventListener('click', () => {
    const sentText = document.querySelector('.sent_password_text')
    const getMail = document.querySelector('.forget_mail_input')
    if (getMail.value) {
        let obj = {
            email: `${getMail.value}`
        }
        codeArray.push(obj)
        sentText.classList.add('Active')
        setTimeout(() => {
            sentText.classList.remove('Active')
        }, 3000)
        getMail.value = ''
        let timer = 60;
        if (codeArray.length > 0) {
            sendNewPass.classList.add('Disabled')
            sendNewPass.disabled = true
            const startTimer = setInterval(() => {
                timer--
                sendNewPass.innerHTML = `Отправить (${timer})`
                if (timer === 0) {
                    clearInterval(startTimer)
                    sendNewPass.classList.remove('Disabled')
                    sendNewPass.disabled = false
                    sendNewPass.innerHTML = 'Отправить'
                }
            }, 1000)
        }
    } else {
        alert('Напишите почту!')
    }
})

const forgetPassButton = document.querySelector('.forget_password_button')
forgetPassButton.addEventListener('click', () => {
    const container = document.querySelector('.forget_password_wrapper')
    container.classList.add('Active')
})

const closeFP = document.querySelector('.close_forget_popup_button')
closeFP.addEventListener('click', () => {
    const container = document.querySelector('.forget_password_wrapper')
    container.classList.remove('Active')
})

const registration = document.querySelector('.reg_button')
registration.addEventListener('click', () => {
    const errorName = document.querySelector('.error_name_text')
    const errorDate = document.querySelector('.error_data_text')
    const errorMail = document.querySelector('.error_mail_text')
    const errorPass = document.querySelector('.error_pass_text')
    const errorPassAgain = document.querySelector('.error_pass-again_text')
    const nameInput = document.querySelector('.reg_name_input')
    const dateInput = document.querySelector('.reg_data_input')
    const mailInput = document.querySelector('.reg_mail_input')
    const passInput = document.querySelector('.reg_pass_input')
    const passAgainInput = document.querySelector('.reg_pass-again_input')
    if (nameInput.value) {
        nameInput.classList.remove('Error')
        errorName.classList.remove('Active')
        if (dateInput.value) {
            dateInput.classList.remove('Error')
            errorDate.classList.remove('Active')
            if (mailInput.value) {
                mailInput.classList.remove('Error')
                errorMail.classList.remove('Active')
                if (passInput.value) {
                     errorPass.classList.remove('Active')
                    if (passAgainInput.value) {
                        alert('all good')
                        errorPassAgain.classList.remove('Active')
                    } else {
                        errorPassAgain.classList.add('Active')
                    }
                } else {
                    errorPass.classList.add('Active')
                }
            } else {
                mailInput.classList.add('Error')
                errorMail.classList.add('Active')
            }
        } else {
            dateInput.classList.add('Error')
            errorDate.classList.add('Active')
        }
    } else {
        nameInput.classList.add('Error')
        errorName.classList.add('Active')
        dateInput.classList.add('Error')
        errorDate.classList.add('Active')
        mailInput.classList.add('Error')
        errorMail.classList.add('Active')
        passInput.classList.add('Error')
        errorPass.classList.add('Active')
        errorPassAgain.classList.add('Active')
    }
})

const autorization = document.querySelector('.login_enter_button')
autorization.addEventListener('click', () => {
    const logEmail = document.querySelector('.log_mail_input')
    const logPass = document.querySelector('.log_pass_input')
    const errorEmail = document.querySelector('.error-log_mail_text')
    const errorPass = document.querySelector('.error-log_pass_text')
    if (logEmail.value) {
        errorEmail.classList.remove('Active')
        if (logPass.value) {
            alert('Вы вошли!')
            errorEmail.classList.remove('Active')
            errorPass.classList.remove('Active')
            logEmail.value = ''
            logPass.value = ''
        } else {
            errorPass.classList.add('Active')
        }
    } else {
        errorEmail.classList.add('Active')
    }
})