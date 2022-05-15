// Импорт ядра для использование _$ функций.
// Import core to use _$ functions.
import _$ from '../core';

// Реализация привязки и активизации триггеров с модальными окнами по дата атрибуту.
// Implementation of binding and activation of triggers with modal windows by date attribute.
_$.prototype.modal = function (_created) {
    for (let i = 0; i < this.length; i++) {
        const target = _$(this[i]).getAttr('data-target');
        _$(this[i]).click((e) => {
            e.preventDefault();
            _$(target).fadeIn(300);
            _scroll_fixer('hidden');
        });

        _$(`${target} [data-close]`).array.forEach(elem => {
            _$(elem).click(() => {
                _$(target).fadeOut(300, _scroll_fixer);

                if (_created) {
                    _$(target).remove();
                }
            });
        });

        let nextClick = true;
        _$(target).click(e => {
            if (e.target.classList.contains('modal') && nextClick) {
                nextClick = false;
                _$(target).fadeOut(300, () => {
                    _scroll_fixer();
                    nextClick = true;
                });

                if (_created) {
                    _$(target).remove();
                }
            }
        });
    }

    // Функция для предотвращение скачка страницы при открытии модального окна.
    // Function to prevent a page jump when opening a modal window.
    function _scroll_fixer(state = '') {
        document.body.style.overflow = state;
        if (state) {
            document.body.style.marginRight = `${_$().scrollRep()}px`;
        } else {
            document.body.style.marginRight = ``;
        }
    }
};

// Внутри Программная реализация создание модальных окон.
// Internal Implementation of creating modal windows.
_$.prototype.createModal = function ({ text: { title = null, body = null } = {}, btns: { count = null, settings = null } = {} } = {}) {
    for (let i = 0; i < this.length; i++) {

        let modal = document.createElement('div');
        _$(modal).addClass('modal');
        _$(modal).setAttr('id', _$(this[i]).getAttr('data-target').slice(1));

        const buttons = [];
        for (let j = 0; j < count; j++) {
            let btn = document.createElement('button');

            _$(btn).addClass('btn', ...settings[j][1]);
            btn.textContent = settings[j][0];

            if (settings[j][2]) {
                _$(btn).setAttr('data-close', 'true');
            }
            if (settings[j][3] && typeof (settings[j][3]) === 'function') {
                _$(btn).click(settings[j][3]);
            }

            buttons.push(btn);
        }

        _$(modal).html(`
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
                    <div class="modal-footer d-flex f-justify-end">
                        
                    </div>
                </div>
            </div>
        `);

        _$(modal).find('.modal-footer').append(...buttons);
        document.body.appendChild(modal);

        _$(this[i]).modal(true);

        _$(_$(this[i]).getAttr('data-target')).fadeIn(300);
    }
};

// Начальная инициализация модальных окон с похожими дата атрибутами. (Триггеры и сами модальные окна).
// Initialization of modal windows with similar date attributes. (Triggers and modal windows themselves).
// _$('[data-toggle="modal"]').modal();