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

const viewAllCast = () => {
    const cardsOpenBtn = document.querySelector('.card-open');
    const cardsCloseBtn = document.querySelector('.card-close');
    const cardBox = document.querySelector('.cast__content');
    const cardPlug = document.querySelector('.card-plug');

    function onClick(btn, displayFirst, displaySecond) {
        btn.addEventListener('click', () => {
            cardPlug.style.display = displayFirst;
            for (let i = 6; i < 10; i++){
                const cardBoxChildrens = cardBox.children;
                cardBoxChildrens[i].style.display = displaySecond;
                cardBoxChildrens[i + 1].style.marginTop = '40px';
            }
        })
    }

    onClick(cardsOpenBtn, 'none', 'block');
    onClick(cardsCloseBtn, 'block', 'none');
}

viewAllCast();
burgerOnClick('.navigation__item-open', '.burger__menu-btn', '.burger__menu');