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

const profileButton = document.querySelector('.profile_button')
profileButton.addEventListener('click', () => {
    const profileBox = document.querySelector('.profile_actions')
    if (profileBox.className === 'profile_actions Active') {
        profileBox.classList.remove('Active')
    } else {
        profileBox.classList.add('Active')
    }
})