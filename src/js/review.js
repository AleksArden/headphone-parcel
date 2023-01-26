let getRef = x => document.querySelector(x);

getRef('.review__button-list').addEventListener('click', onClick)

function onClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') return
    const btnNumber = evt.target.dataset.action;

    getRef('div[data-action="01"]').classList.remove('review__active-display');
    getRef('div[data-action="02"]').classList.remove('review__active-display');
    getRef('div[data-action="03"]').classList.remove('review__active-display');
    getRef(`div[data-action="${btnNumber}"]`).classList.add('review__active-display');

    getRef('button[data-action="01"]').classList.remove('review__active-opacity');
    getRef('button[data-action="02"]').classList.remove('review__active-opacity');
    getRef('button[data-action="03"]').classList.remove('review__active-opacity');
    getRef(`button[data-action="${btnNumber}"]`).classList.add('review__active-opacity');
}
