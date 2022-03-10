'use strict';

function termsPop() {
    const modal = document.querySelector('.modal');

    modal.style.display === 'none'
        ? (modal.style.display = '')
        : (modal.style.display = 'none');
}

window.addEventListener('message', function (e) {
    console.log(e.data);
    const modal = document.querySelector('.modal');

    modal.style.display === 'none'
        ? (modal.style.display = '')
        : (modal.style.display = 'none');
});
