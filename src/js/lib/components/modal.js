// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Реализация привязки и активизации триггеров с модальными окнами по дата атрибуту.
// Implementation of binding and activation of triggers with modal windows by date attribute.
$.prototype.modal = function (created) {
    for (let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            _scroll_fixer('hidden');
        });

        $(`${target} [data-close]`).array.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500, _scroll_fixer);
                if (created) {
                    $(target).remove();
                }
            });
        });

        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500, _scroll_fixer);

                if (created) {
                    $(target).remove();
                }
            }
        });
    }

    // Функция для предотвращение скачка страницы при открытии модального окна.
    // Function to prevent a page jump when opening a modal window.
    function _scroll_fixer(state = '') {
        document.body.style.overflow = state;
        if (state) {
            document.body.style.marginRight = `${$().scrollRep()}px`;
        } else {
            document.body.style.marginRight = ``;
        }
    }
};

// Внутри Программная реализация создание модальных окон.
// Internal Implementation of creating modal windows.
$.prototype.createModal = function ({ text: { title, body }, btns: { count, settings, } } = {}) {
    for (let i = 0; i < this.length; i++) {

        let modal = document.createElement('div');
        $(modal).addClass('modal');
        $(modal).setAttr('id', $(this[i]).getAttr('data-target').slice(1));

        const buttons = [];
        for (let j = 0; j < count; j++) {
            let btn = document.createElement('button');

            $(btn).addClass('btn', ...settings[j][1]);
            btn.textContent = settings[j][0];

            if (settings[j][2]) {
                $(btn).setAttr('data-close', 'true');
            }
            if (settings[j][3] && typeof (settings[j][3]) === 'function') {
                $(btn).click(settings[j][3]);
            }

            buttons.push(btn);
        }

        $(modal).html(`
        <div class="modal-dialog">
            <div class="modal-content"><button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${title}
                    </div>
                </div>
                <div class="modal-body">
                    ${body}
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `);

        $(modal).find('.modal-footer').append(...buttons);
        document.body.appendChild(modal);
        $(this[i]).modal(true);
        $($(this[i]).getAttr('data-target')).fadeIn(500);
    }
};

// Начальная инициализация модальных окон с похожими дата атрибутами. (Триггеры и сами модальные окна).
// Initialization of modal windows with similar date attributes. (Triggers and modal windows themselves).
// $('[data-toggle="modal"]').modal();