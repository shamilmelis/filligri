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
let swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    freeMode: true,
});

if (document.documentElement.clientWidth < 450) {
    let swiper = new Swiper(".swiper", {
        slidesPerView: 'auto',
        spaceBetween: 7,
        freeMode: true,
    });
}

const cardsSwiper = new Swiper(".mySecondSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const catalogPopup = document.querySelector('.nav_routes')
catalogPopup.addEventListener('mouseenter', () => {
    const el = document.querySelector('.catalog_popup_box')
    el.style.display = "flex"
    el.addEventListener('mouseleave', () => {
        el.style.display = "none"
    })
})