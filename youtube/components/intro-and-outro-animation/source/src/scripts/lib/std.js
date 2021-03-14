/* global window */

let printElement = null;
let lines = [];
let index;
let printTimer = null;

const printToElement = (element, text) => {
    if (element.innerText) {
        element.innerText += `\n${text}`;
    } else {
        element.innerText = `${text}`;
    }
};

const runTimer = () => {
    if (index >= lines.length - 1) {
        window.clearInterval(printTimer);
    }

    printToElement(printElement, lines[index]);
    printElement.scrollTop = printElement.scrollHeight - printElement.offsetHeight;

    index += 1;
};

export const print = (element, array, speed) => {
    printElement = element;
    lines = array;
    index = 0;

    printTimer = window.setInterval(
        runTimer,
        speed
    );
};
