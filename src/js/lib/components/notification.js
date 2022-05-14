// Импорт ядра для использование $ функций.
// Import core to use $ functions.
import $ from '../core';

// Создание Уведомлений
$.prototype.notification = function ({ message = null, status = '', cClass = [], timeout = 1000 } = {}) {
    if (status === '') status = 'primary';

    let wrapField;
    if (document.querySelector('.wrap_notifications')) {
        wrapField = document.querySelector('.wrap_notifications');
    } else {
        wrapField = document.createElement('div');
        $(wrapField).addClass('wrap_notifications');
        document.body.appendChild(wrapField);
    }

    const field = document.createElement('div');
    $(field).addClass('notification');

    if (status) {
        $(field).addClass(...cClass);
    }

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

    $(field).html(`
            <div class="notification-body notification-${status}">
                <div class="notification-icon">${icon}</div>
                <div class="notification-message">${message}</div>
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
        $(field).addClass('notification-dismissal');

        setTimeout(() => {
            $(field).remove();

            if ($('.notification').length === 0) {
                $(wrapField).remove();
            }
        }, 1000);
    }

    const funcs = [_click, _mouseEnter, _mouseLeave];
    ['click', 'mouseenter', 'mouseleave'].forEach((event, i) => {
        $(field).on(event, funcs[i]);
    });
}