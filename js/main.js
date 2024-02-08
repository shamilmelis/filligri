const menuButton = document.querySelector('.menu_button')
menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.header_wrapper')
    console.log(menu)
    if (menu.className === 'header_wrapper Active') {
        menu.classList.remove('Active')
    } else {
        menu.classList.add('Active')
    }
})

const catalogButton = document.getElementsByClassName('button-category-none')
for (let i = 0; i < catalogButton.length; i++) {
    const slideBar = document.querySelector('.slider-bar')
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
        spaceBetween: 10,
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