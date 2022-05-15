// Импорт ядра для использование _$ функций.
// Import core to use _$ functions.
import _$ from '../core';

// Создание Уведомлений
_$.prototype.notification = function ({ message = null, status = '', cClass = null, timeout = 4000, options: { _wrapClass = 'wrap_notifications', _mainClass = 'notification' } } = {}) {
    if (status === '') status = 'primary';

    let wrapField;
    if (document.querySelector(`.${_wrapClass}`)) {
        wrapField = document.querySelector(`.${_wrapClass}`);
    } else {
        wrapField = document.createElement('div');
        _$(wrapField).addClass(_wrapClass);
        document.body.appendChild(wrapField);
    }

    const field = document.createElement('div');
    _$(field).addClass(_mainClass);

    if (cClass) {
        _$(field).addClass(...cClass);
    }

    // Добавление иконок в начало уведомлений.
    // Adding icons to the top of notifications.

    let icon;
    switch (status) {
        case 'primary':
            icon = `<i class="fa-light fa-circle-info"></i>`;
            break;
        case 'success':
            icon = `<i class="fa-light fa-circle-check"></i>`;
            break;
        case 'danger':
            icon = `<i class="fa-light fa-hexagon-exclamation"></i>`;
            break;
        case 'warning':
            icon = `<i class="fa-light fa-diamond-exclamation"></i>`;
            break;
        case 'error':
            icon = `<i class="fa-light fa-octagon-xmark"></i>`;
            break;
        default:
            icon = '';
            break;
    }

    _$(field).html(`
            <div class="${_mainClass}-body ${_mainClass}-${status}">
                <div class="${_mainClass}-icon">${icon}</div>
                <div class="${_mainClass}-message">${message}</div>
            </div>
        `);

    wrapField.appendChild(field);

    let _timeout;
    function startDismissal() {
        _timeout = setTimeout(_remove_notification, timeout);
    }
    startDismissal();

    function _mouseLeave() {
        startDismissal();
    }

    function _mouseEnter() {
        clearTimeout(_timeout);
    }
    function _click() {
        _remove_notification();
    }

    function _remove_notification() {
        _$(field).addClass(`${_mainClass}-dismissal`);

        setTimeout(() => {
            _$(field).remove();

            if (_$(`.${_mainClass}`).length === 0) {
                _$(wrapField).remove();
            }
        }, 1000);
    }

    const funcs = [_click, _mouseEnter, _mouseLeave];
    ['click', 'mouseenter', 'mouseleave'].forEach((event, i) => {
        _$(field).on(event, funcs[i]);
    });
}