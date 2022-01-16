const servicesList = document.querySelectorAll('li.services__list__item');
const servicesInfoList = document.querySelectorAll('p.services__info__text');
const leaguagesList = document.querySelectorAll('ul.header__list li');
const btnMoreInfo = document.querySelector('button.publications__btn');
const closeMobileNavBtn = document.querySelector('button.mobile-nav__close-btn');
const openMobileNavBtn = document.querySelector('div.header__mobile-nav-btn');
const mobileNav = document.querySelector('div.mobile-nav');
const htmlBody = document.querySelector('body.body');

function init() {
    addEventsToServeses();
    initSlider();
    changeLeauguage();
    addEventToBtnMore();
    addEventsToMobNav();
}

function hideElems(servicesInfoList) {
    for (let i = 0; i < servicesInfoList.length; i++) {
        servicesInfoList[i].classList.remove('d-block');
    }
}

function removeClass(className, servicesList) {
    for (let i = 0; i < servicesList.length; i++) {
        servicesList[i].classList.remove(`${className}`);
    }
}


function showWidthInfo() {
    if (window.matchMedia("(max-width: 991px)").matches) {
        console.log("меньше 991")
    } else {
        console.log("больше 991")
    }
}

function onClickChangeColor(e) {
    showWidthInfo();
    removeClass('active', servicesList);
    hideElems(servicesInfoList);

    e.target.classList.add('active');
    servicesInfoList[e.target.getAttribute('data-id')].classList.add('d-block');
}

function addEventsToServeses() {
    for (let i = 0; i < servicesList.length; i++) {
        servicesList[i].addEventListener("click", onClickChangeColor);
    }

}


function initSlider() {
    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function changeLeauguage() {
    leaguagesList.forEach(element => {
        element.addEventListener('click', onClickChangeLeanguage);
    });
}

function onClickChangeLeanguage(e) {
    leaguagesList.forEach(element => {
        element.classList.remove('active-leanguage');
    });

    e.target.classList.add('active-leanguage');
    e.target.classList.add('no-hover-lng');
}

function addEventToBtnMore() {
    btnMoreInfo.addEventListener('click', showMoreInfoBtnMore)
}

function showMoreInfoBtnMore(e) {
    e.target.classList.toggle('active-btn-more');
}

function addEventsToMobNav() {
    openMobileNavBtn.addEventListener('click', showMobileNav);
    closeMobileNavBtn.addEventListener('click', hideMobileNav);
}

function showMobileNav() {
    mobileNav.classList.add('mobile-nav-active');
    mobileNav.classList.remove('mobile-nav-hidden');
    htmlBody.classList.add('no-scroll');
}

function hideMobileNav(){
    mobileNav.classList.add('mobile-nav-hidden');
    mobileNav.classList.remove('mobile-nav-active');
    htmlBody.classList.remove('no-scroll');
}

init();


