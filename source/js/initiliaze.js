import { addLoader, addNavigation, closeLoader } from './dom.js';

export async function initialize() {
    addLoader();
    addNavigation();
    closeLoader();
}

