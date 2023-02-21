let init = false;

function swiperBrand() {
    if (window.innerWidth <= 767) {
        if (!init) {
            init = true;

            swiper = new Swiper(".brands__swiper", {
                spaceBetween: 16,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true
                },
                mousewheel: {
                    sensitivity: 1
                },
                loop: true,
                slidesPerView: "auto",
            });

        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperBrand();
window.addEventListener("resize", swiperBrand);


let btn = document.querySelector('.brands__show-btn')
btn.addEventListener("click", function (e) {
    // раскрывается блок
    document.querySelector('.brands__swiper-wrapper').classList.toggle('brands__swiper-wrapper--height');

    // меняется текст в кнопке
    let btnText = document.querySelector('.brands__show-btn>span')
    if (btnText.classList.contains('show-btn__text')) {
        btnText.classList.remove('show-btn__text');
        btnText.classList.add('show-btn__text--clicked');
    } else if (btnText.classList.contains('show-btn__text--clicked')) {
        btnText.classList.remove('show-btn__text--clicked');
        btnText.classList.add('show-btn__text');
    }

    // анимация стрелок кнопки
    e.currentTarget.classList.toggle('show-btn--rotate');
})