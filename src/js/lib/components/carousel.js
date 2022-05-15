// Импорт ядра для использование _$ функций.
// Import core to use _$ functions.
import _$ from '../core';

// Реализация слайдера, поверхностная настройка, использовать при наличии верстки в html документе.
// Implementation of the slider, superficial setting, use if there is layout in the html document.

// Без кнопок в верстке не будет работать. (；^ω^）
// Without buttons in the layout will not work. (；^ω^）
_$.prototype.carousel = function ({ options: { round = false, reverse = false, autoplay = false, duration = 4000 } = {} } = {}) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(_$(this[i]).find('.carousel-inner')[0]).width;
        const slides = _$(this[i]).find('.carousel-item').getArray();
        const slidesField = _$(this[i]).find('.carousel-slides')[0];
        const dots = _$(this[i]).find('.carousel-indicators li').getArray();

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0,
            slideIndex = 0;

        _$(_$(this[i]).find('[data-slide="next"]')[0]).click(e => {
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

        _$(_$(this[i]).find('[data-slide="prev"]')[0]).click(e => {
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

            dots.forEach(dot => _$(dot).removeClass('active'));
            _$(dots[slideIndex]).addClass('active');
        });

        const sliderId = _$(this[i]).getAttr('id');
        _$(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = _$(e.target).getAttr('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => _$(dot).removeClass('active'));
            _$(dots[slideIndex]).addClass('active');
        });

        // Авто переключение слайдов, с обработчиками событий.
        // Auto switching slides, with event handlers.
        let _autoRun_ = _autoRun.bind(this);
        if (autoplay) {

            // Если авто переключение работает то и слайдер будет циклический.
            // If auto switching works then the slider will be cyclic.
            round = true;

            let button = 'next';
            if (reverse) {
                button = 'prev';
            }

            const focusButton = _$(this[i]).find(`[data-slide="${button}"]`)[0];
            _autoRun_(duration, focusButton);

            _$(focusButton).closest('.carousel').on('mouseleave', () => {
                _autoRun_(duration, focusButton);
            });
        }

        function _autoRun(duration, trigger) {
            const autoRun = setInterval(() => {
                _$(trigger).click();
            }, duration);

            _$(trigger).closest('.carousel').on('mouseenter', () => {
                clearInterval(autoRun);
            });
        }
    }
};

// Внутри Программная реализация слайдера, нужна только оболочка в html документе для созание и настройки слайдера.
// Inside Software implementation of the slider, it only needs a wrapper in the html document to create and customize the slider.
_$.prototype.createCarousel = function ({ content: { navigationDot = null, switching = null, count = null, settings = null }, options: { round = false, reverse = false, autoplay = false, duration = 1000 } } = {}) {
    for (let i = 0; i < this.length; i++) {
        let slider = document.createElement('div');

        _$(slider).html(`
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

            _$(item).addClass('carousel-item', ...settings[i][0]);

            _$(image).setAttr('src', settings[i][1]);
            _$(image).setAttr('alt', settings[i][2]);

            _$(dot).setAttr('data-slide-to', i);
            if (i == 0) {
                _$(dot).addClass('active')
            }


            _$(item).append(image);

            items.push(item);
            dots.push(dot);
        }
        if (navigationDot) {
            _$(slider).find('.carousel-indicators').append(...dots);
        }

        // Кнопки видны не будут но они остануться в верстке для того что бы основной функционал работал.
        // The buttons will not be visible, but they will remain in the layout in order for the main functionality to work.
        if (!switching) {
            _$(slider).find('a').visibleHide();
        }

        _$(slider).find('.carousel-slides').append(...items);

        _$(this[i]).append(slider);

        _$(this[i]).carousel({
            options: {
                round: round,
                reverse: reverse,
                autoplay: autoplay,
                duration: duration
            }
        });
    }
}