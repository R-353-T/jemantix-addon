
/**
 * @returns {boolean}
 */
export function isChrome() {
    return window.navigator.userAgent.toLocaleLowerCase().includes('chrome');
};

/**
 * @param {HTMLElement} element
 * @param {string} src
 */
export function applyBackground(element, src) {
    if (isChrome()) {
        const urlA = chrome.runtime.getURL(src);
        element.style.backgroundImage = `url('${urlA}')`;
    } else {
        const urlB = browser.runtime.getURL(src);
        element.style.backgroundImage = `url('${urlB}')`;
    }
}

/**
 * @returns {string}
 */
export function generateUID() {
    let firstPart = (Math.random() * 46656) | 0;
    let secondPart = (Math.random() * 46656) | 0;
    firstPart = `000${firstPart.toString(36)}`.slice(-3);
    secondPart = `000${secondPart.toString(36)}`.slice(-3);
    return firstPart + secondPart;
}

/**
 * @param {string} str
 * @returns {number[]}
 */
export function getRgbVals(str) {
    return str.replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map(value => parseInt(value));
}

/**
 * @param {number[]} rgb1
 * @param {number[]} rgb2
 * @returns {boolean}
 */
export function equalRgbs(rgb1, rgb2) {
    return rgb1[0] === rgb2[0] &&
    rgb1[1] === rgb2[1] &&
    rgb1[2] === rgb2[2];
}

/**
 * @param {number[]} rgb
 * @returns
 */
export function isGrayRgb(rgb) {
    return rgb[0] !== 255 &&
           rgb[0] === rgb[1] &&
           rgb[1] === rgb[2];
}
