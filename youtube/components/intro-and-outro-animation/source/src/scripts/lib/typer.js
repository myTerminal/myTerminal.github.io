/* global window */ 

let characters = [];

let typeElement = null;
let typeTimer = null;
let typeCallback = null;

let unTypeElement = null;
let unTypeTimer = null;
let unTypeCallback = null;

let index;

const typeToElement = (element, text) => {
    if (element.innerHTML) {
        element.innerHTML += `${text}`;
    } else {
        element.innerHTML = `${text}`;
    }
};

const typeOnce = () => {
    if (index >= characters.length - 1) {
        window.clearInterval(typeTimer);
        typeCallback();
    }

    typeToElement(typeElement, characters[index]);
    typeElement.scrollTop = typeElement.scrollHeight - typeElement.offsetHeight;

    index += 1;
};

export const type = (element, text, speed, callback = () => {}) => {
    typeElement = element;
    characters = text.split('');
    index = 0;
    typeCallback = callback;

    typeTimer = window.setInterval(
        typeOnce,
        speed
    );
};

const unTypeFromElement = (element, text) => {
    element.innerHTML = element.innerHTML.slice(
        0,
        element.innerHTML.length - 1
    );
};

const unTypeOnce = () => {
    if (typeElement.innerHTML.length <= 0) {
        window.clearInterval(unTypeTimer);
        unTypeCallback();
    }

    unTypeFromElement(unTypeElement);

    index += 1;
};

export const unType = (element, speed, callback = () => {}) => {
    unTypeElement = element;
    index = 0;
    unTypeCallback = callback;

    unTypeTimer = window.setInterval(
        unTypeOnce,
        speed
    );
};
