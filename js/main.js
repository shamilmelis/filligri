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
