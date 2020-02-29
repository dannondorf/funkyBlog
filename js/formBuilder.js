import {
    headers
} from './dataUtils.js';

const formWrapper = document.forms[0].querySelector('div');

export function buildForm() {
    formWrapper.innerHTML = '';
    headers.forEach(header => {
        const label = document.createElement('label');
        label.setAttribute('for', header);
        label.innerText = header.toUpperCase() + ':';
        const type = header === 'body' ? 'textarea' : 'input'
        const el = document.createElement(type);
        el.setAttribute('name', header);
        formWrapper.appendChild(label);
        formWrapper.appendChild(el);
    });
}
