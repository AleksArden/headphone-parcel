let getRef = x => document.querySelector(x);

getRef('.sales__btn-list').addEventListener('click', onClick);


function onClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') return;
    const btnColor = evt.target.dataset.action;

    if (btnColor === 'black') {

        getRef('img[data-action="gray"]').style.display = 'none';
        getRef('img[data-action="black"]').style.display = 'block';
        return;
    }

    getRef('img[data-action="black"]').style.display = 'none';
    getRef('img[data-action="gray"]').style.display = 'block';
}