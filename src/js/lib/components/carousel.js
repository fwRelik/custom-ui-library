// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Реализация слайдера, поверхностная настройка, использовать при наличии верстки в html документе.
// Implementation of the slider, superficial setting, use if there is layout in the html document.
$.prototype.carousel = function ({ autoRun: { autoplay = false, duration = 1000 } = {}, options: { round = false } = {} } = {}) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle($(this[i]).find('.carousel-inner')[0]).width;
        const slides = $(this[i]).find('.carousel-item').getArray();
        const slidesField = $(this[i]).find('.carousel-slides')[0];
        const dots = $(this[i]).find('.carousel-indicators li').getArray();

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0,
            slideIndex = 0;

        $($(this[i]).find('[data-slide="next"]')[0]).click(e => {
            e.preventDefault();

            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                if (!round) return;
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $($(this[i]).find('[data-slide="prev"]')[0]).click(e => {
            e.preventDefault();

            if (offset == 0) {
                if (!round) return;
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }

            dots.forEach(dot => $(dot).removeClass('active'));
            $(dots[slideIndex]).addClass('active');
        });

        const sliderId = $(this[i]).getAttr('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = $(e.target).getAttr('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => $(dot).removeClass('active'));
            $(dots[slideIndex]).addClass('active');
        });

        // Авто переключение слайдов, с обработчиками событий.
        // Auto switching slides, with event handlers.
        let _autoRun_ = _autoRun.bind(this);
        if (autoplay) {

            // Если авто переключение работает то и слайдер будет циклический.
            // If auto switching works then the slider will be cyclic.
            round = true;

            const nextButton = $(this[i]).find('[data-slide="next"]')[0];
            _autoRun_(duration, nextButton);

            $(nextButton).closest('.carousel').on('mouseleave', () => {
                _autoRun_(duration, nextButton);
            });
        }

        function _autoRun(duration, trigger) {
            const autoRun = setInterval(() => {
                $(trigger).click();
            }, duration);

            $(trigger).closest('.carousel').on('mouseenter', () => {
                clearInterval(autoRun);
            });
        }
    }
};

// Внутри Программная реализация слайдера, нужна только оболочка в html документе для созание и настройки слайдера.
// Inside Software implementation of the slider, it only needs a wrapper in the html document to create and customize the slider.
$.prototype.createCarousel = function ({ content: { navigationDot, switching, count, settings }, autoRun: { autoplay = false, duration = 1000 } = {}, options: { round = false } = {} } = {}) {
    for (let i = 0; i < this.length; i++) {
        let slider = document.createElement('div');

        $(slider).html(`
            <ol class="carousel-indicators">

            </ol>
            <div class="carousel-inner">
                <div class="carousel-slides">

                </div>
            </div>

            <a href="#" class="carousel-prev" data-slide="prev">
                <span class="carousel-prev-icon">&lt;</span>
            </a>
            <a href="#" class="carousel-next" data-slide="next">
                <span class="carousel-next-icon">&gt;</span>
            </a>
        `);

        const items = [],
            dots = [];
        for (let i = 0; i < count; i++) {
            let item = document.createElement('div'),
                image = document.createElement('img'),
                dot = document.createElement('li');

            $(item).addClass('carousel-item', ...settings[i][0]);

            $(image).setAttr('src', settings[i][1]);
            $(image).setAttr('alt', settings[i][2]);

            $(dot).setAttr('data-slide-to', i);
            if (i == 0) {
                $(dot).addClass('active')
            }


            $(item).append(image);

            items.push(item);
            dots.push(dot);
        }
        if (navigationDot) {
            $(slider).find('.carousel-indicators').append(...dots);
        }

        if (!switching) {
            $(slider).find('a').visibleHide();
        }

        $(slider).find('.carousel-slides').append(...items);

        $(this[i]).append(slider);

        $(this[i]).carousel({
            autoRun: {
                autoplay: autoplay,
                duration: duration
            },
            options: {
                round: round
            }
        });
    }
}