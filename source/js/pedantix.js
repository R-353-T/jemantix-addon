import { CEMANTIX_DOM } from './dom.js';

/**
 * @param {string} strValue
 * @returns {number[]}
 */
function getRgbVals(strValue) {
    return strValue.replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map(num => parseInt(num));
}

/**
 * @param {number[]} input
 * @param {number[]} expect
 * @returns {boolean}
 */
function rbgEqual(input, expect) {
    return input[0] === expect[0] &&
           input[1] === expect[1] &&
           input[2] === expect[2];
}

/**
 * @param {number[]} rgb
 * @returns {boolean}
 */
function rgbIsGray(rgb) {
    return rgb[0] !== 255 &&
           rgb[0] === rgb[1] &&
           rgb[1] === rgb[2];
}

/**
 * @param {HTMLSpanElement} span
 */
export function pedantixSpanFound(span) {
    const foundRgbColor = [255, 255, 255];
    const foundRgbBackgroundColor = [24, 37, 83];

    const newStyle = {
        backgroundColor: 'transparent',
        color: '#fff'
    };

    if (span.style.color.length &&
        rbgEqual(getRgbVals(span.style.backgroundColor), foundRgbBackgroundColor) &&
        rbgEqual(getRgbVals(span.style.color), foundRgbColor)
    ) {
        // console.log('[found]', span);
        Object.assign(span.style, newStyle);
        span.classList.add('jemantix-found');
    }
}

/**
 * @param {HTMLSpanElement} span
 */
export function pedantixSpanFind(span) {
    const targetedRgbBackgroundColor = [102, 238, 102];
    const newStyle = {
        backgroundColor: '#76b900',
        color: '#fff'
    };

    if (span.style.backgroundColor.length &&
        rbgEqual(getRgbVals(span.style.backgroundColor), targetedRgbBackgroundColor)) {
        // console.log('[find]', span);
        Object.assign(span.style, newStyle);
    }
}

/**
 * @param {HTMLSpanElement} span
 */
export function pedantixSpanHint(span) {
    const newStyle = { backgroundColor: '#1f3b89' };

    if (span.style.color.length &&
        rgbIsGray(getRgbVals(span.style.color))) {
        // console.log('[hint]', span);
        Object.assign(span.style, newStyle);
    }
}

/**
 * @param {HTMLSpanElement} span
 */
export function pedantixHidden(span) {
    const newStyle = { backgroundColor: '#1f3b89' };

    if (span.style.backgroundColor.length === 0 &&
        span.classList.contains('jemantix-found') === false) {
        // console.log('[hidden]', span);
        Object.assign(span.style, newStyle);
    }
}

export function refreshPedantixSpanStyle() {
    const spanArray = CEMANTIX_DOM.pedantixSpanArray();
    // console.log(`${spanArray.length} updated`);

    /** @todo fix low connection issue (wait latest XHR) */

    for (const span of spanArray) {
        setTimeout(() => {
            pedantixSpanFound(span);

            pedantixSpanFind(span);

            pedantixSpanHint(span);

            pedantixHidden(span);
        }, 750);
    }
}
