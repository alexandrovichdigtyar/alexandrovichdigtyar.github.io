const servicesList = document.querySelectorAll('li.services__list__item');
const servicesInfoList = document.querySelectorAll('p.services__info__text');
const leaguagesList = document.querySelectorAll('ul.header__list li');
const btnMoreInfo = document.querySelector('button.publications__btn');

function init() {
    addEventsToServeses();
    initSlider();
    changeLeauguage();
    addEventToBtnMore();
}

function hideElems(servicesInfoList) {
    for (let i = 0; i < servicesInfoList.length; i++) {
        servicesInfoList[i].classList.remove('d-block')
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


function initSlider(){
let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

function changeLeauguage(){
    leaguagesList.forEach(element => {
        element.addEventListener('click', onClickChangeLeanguage);
    });
}

function onClickChangeLeanguage(e){
    leaguagesList.forEach(element => {
        element.classList.remove('active-leanguage');
    });

    e.target.classList.add('active-leanguage');
}

function addEventToBtnMore(){
    btnMoreInfo.addEventListener('click',showMoreInfoBtnMore)
}

function showMoreInfoBtnMore(e) {
    e.target.classList.toggle('active-btn-more');
}


init();


