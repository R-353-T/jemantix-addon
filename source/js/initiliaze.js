import { addBodyClass, addLoader, addNavigation, addWebAccessibleRessources, CEMANTIX_DOM, closeLoader, setupPedantix } from './dom.js';
import { fixCemantixSuccess } from './patch.js';
import { refreshPedantixSpanStyle } from './pedantix.js';

export async function initialize() {

    // eslint-disable-next-line no-console
    console.log('initialize');

    /** DOM INJECTION **/
    addBodyClass();
    addLoader();
    addNavigation();
    setupPedantix();

    addWebAccessibleRessources();

    /** PEDANTIX EVENTS **/
    CEMANTIX_DOM.pedantixButton().addEventListener('click', refreshPedantixSpanStyle);
    CEMANTIX_DOM.pedantixForm().addEventListener('submit', refreshPedantixSpanStyle);

    /** FIXES **/
    fixCemantixSuccess();

    setTimeout(() => closeLoader(), 1000);
}
