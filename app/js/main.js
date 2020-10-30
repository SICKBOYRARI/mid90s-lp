const burgerOnClick = (openBtn, closeBtn, menu) => {
    const burgerOpen = document.querySelector(openBtn);
    const burgerClose = document.querySelector(closeBtn);
    const burgerMenu = document.querySelector(menu);

    function onClick(btn, display) {
        btn.addEventListener('click', () => {
            burgerMenu.style.display = display;
        })
    }

    onClick(burgerOpen, 'block');
    onClick(burgerClose, 'none');
}

burgerOnClick('.navigation__item-open', '.burger__menu-btn', '.burger__menu');