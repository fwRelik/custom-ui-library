// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Планируется расширить функционал анимаций в виде кривой графики.
// It is planned to expand the functionality of animations in the form of curved graphics.

// Внутри Программная функция.
// Inside Program function.
$.prototype.animateOverTime = function (dur, cb, fin) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart,
            complection = Math.min(timeElapsed / dur, 1);

        cb(complection);

        if (timeElapsed < dur) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
    }

    return _animateOverTime;
};

// Плавное появление в заданном интервале указанного элемента.
// Smooth appearance in the specified interval of the specified element.
$.prototype.fadeIn = function (dur, display = 'block', fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }

    return this;
};

// Плавное скрытие в заданном интервале указанного элемента.
// Smooth hiding in the given interval of the specified element.
$.prototype.fadeOut = function (dur, fin) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }

    return this;
};

// Плавное переключение между состояниями отображение в заданном интервале указанного элемента.
// Smooth switching between the display states in the specified interval of the specified element.
$.prototype.fadeToggle = function (dur, display = 'block', fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            $(this[i]).fadeIn(dur, display, fin);
        } else {
            $(this[i]).fadeOut(dur, fin);
        }
    }
    return this;
}