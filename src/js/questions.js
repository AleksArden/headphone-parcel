import { answers } from './answers';

let getRef = x => document.querySelector(x);

getRef('.questions__list').addEventListener('click', onClick);

function onClick(e) {
    if (e.target.nodeName !== 'use') return
    const btnNumber = e.target.dataset.action;
    const { number, text } = answers[`${btnNumber}`];

    if (getRef(`p[data-text="${btnNumber}"]`) !== null) {
        removeElement(number);
        return;
    }
    createElement(number, text);
}
function createElement(number, text) {
    const p = document.createElement('p');
    p.setAttribute('data-text', `${number}`)
    p.textContent = `${text}`
    p.style.marginTop = 16 + 'px';
    return getRef(`div[data-action="${number}"]`).append(p);
}
function removeElement(number) {
    getRef(`p[data-text="${number}"]`).remove();
}
