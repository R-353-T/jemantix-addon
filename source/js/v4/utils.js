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
