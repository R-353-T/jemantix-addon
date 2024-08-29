import { addLoader, addNavigation, CEMANTIX_DOM, closeLoader } from './dom.js';
import { fixCemantixSuccess } from './patch.js';
import { refreshPedantixSpanStyle } from './pedantix.js';

export async function initialize() {
    /** DOM INJECTION **/
    addLoader();
    addNavigation();

    /** PEDANTIX EVENTS **/
    CEMANTIX_DOM.pedantixButton().addEventListener('click', refreshPedantixSpanStyle);
    CEMANTIX_DOM.pedantixForm().addEventListener('submit', refreshPedantixSpanStyle);

    /** FIXES **/
    fixCemantixSuccess();

    setTimeout(() => closeLoader(), 1000);
}
