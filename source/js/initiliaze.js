import { shareCemantixVictory } from './cemantix.js';
import { CEMANTIX_DOM } from './dom.js';
import { addBodyClass, addLoader, addNavigation, addWebAccessibleRessources, closeLoader, setupPedantix, fixCemantixSuccess, selectNicknameSelection } from './functions.js';
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

    selectNicknameSelection();

    /** PEDANTIX **/
    CEMANTIX_DOM.pedantixButton().addEventListener('click', refreshPedantixSpanStyle);
    CEMANTIX_DOM.pedantixForm().addEventListener('submit', refreshPedantixSpanStyle);

    /** CEMANTIX **/
    shareCemantixVictory();

    /** FIXES **/
    fixCemantixSuccess();

    setTimeout(() => closeLoader(), 1000);
}
