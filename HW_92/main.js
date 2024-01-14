const btn = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const body = document.body;

const openModal = () => {
    modal.classList.add('modal--open');
    body.classList.add('body--fixed')
}
const closeModalClick = event => {
    const eventTarget = event.target;
    if (eventTarget && eventTarget.classList.contains('modal--open') || eventTarget.classList.contains('modal__close-btn')) {
        modal.classList.toggle('modal--open');
        body.classList.toggle('body--fixed');
    }
}
const closeModalClickEscape = event => {
    if(event.code === 'Escape' && modal.classList.contains('modal--open') && body.classList.contains('body--fixed')) {
        modal.classList.toggle('modal--open');
        body.classList.toggle('body--fixed');
    }
}

// ====Откпрытие модального окна====================

btn.addEventListener('click', openModal);

// ======Закрытие модального окна кликом мыши======

modal.addEventListener('click', closeModalClick);

// =====Закрытие модального окна с помощью клика Escape на клавиатуре=========================================

document.addEventListener('keydown', closeModalClickEscape);
