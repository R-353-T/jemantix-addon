import { CEMANTIX_DOM, JEMANTIX_DOM } from './dom.js';

/** **********************************************/
/** Utils                                      **/
/** **********************************************/

export const IS_CHROME = () => window.navigator.userAgent.toLocaleLowerCase().includes('chrome');

/** **********************************************/
/** Body                                        **/
/** **********************************************/

export function addBodyClass() {
    JEMANTIX_DOM.body().classList.add('jemantix');
}

/** **********************************************/
/** Nickname                                    **/
/** **********************************************/

export function validateNickname() {
    console.log('nickname');

    const nickname = JEMANTIX_DOM.nickname.input().value.trim();

    if (nickname.length < 3) {
        JEMANTIX_DOM.nickname.error().innerHTML = 'Ton pseudo doit au moins contenir 3 caractères (sans les espaces)';
    } else {
        JEMANTIX_DOM.nickname.error().innerHTML = '';
        localStorage.setItem('jemantix_nickname', nickname);
        JEMANTIX_DOM.nickname.container().classList.add('has');
    }
}

export function selectNicknameSelection() {

    const nickname = localStorage.getItem('jemantix_nickname') !== null ?
        localStorage.getItem('jemantix_nickname') :
        '';

    const nicknameContainer = document.createElement('div');
    nicknameContainer.id = 'jemantix-nickname-container';

    const nicknameSelection = document.createElement('div');
    nicknameSelection.id = 'jemantix-nickname';
    nicknameSelection.innerHTML = '<label>SURNOM DU JOUEUR</label>' +
    '<p class="error"></p>' +
    `<input type="text" id="jemantix-nickname-input" value="${nickname}">` +
    '<button>confirmer</button>';

    JEMANTIX_DOM.body()
        .appendChild(nicknameContainer)
        .appendChild(nicknameSelection);

    JEMANTIX_DOM.nickname.button().addEventListener('click', validateNickname);
}

/** **********************************************/
/** Chrome web accessible ressources            **/
/** **********************************************/

export function addWebAccessibleRessources() {
    if (IS_CHROME()) {
        const bgImageUrl = chrome.runtime.getURL('asset/icon/png/grid.png');
        JEMANTIX_DOM.navigationButton().style.backgroundImage = `url("${bgImageUrl}")`;
    }
}

/** **********************************************/
/** Loader                                      **/
/** **********************************************/

export function addLoader() {
    const backdrop = document.createElement('div');
    backdrop.id = 'jemantix-loader';

    const backdropLoader = document.createElement('div');
    backdropLoader.classList.add('loader');

    const titleLoader = document.createElement('h3');
    titleLoader.innerHTML = '<b>Jemantix</b> ne prendra qu\'un instant à charger..';

    JEMANTIX_DOM.body()
        .appendChild(backdrop)
        .appendChild(backdropLoader);
    backdrop.appendChild(titleLoader);
}

export function openLoader() {
    JEMANTIX_DOM.loader().style.animation = '300ms fadeIn linear both';
    JEMANTIX_DOM.loader().classList.remove('hidden');
}

export function closeLoader() {
    JEMANTIX_DOM.loader().style.animation = '300ms fadeOut linear both';
    setTimeout(() => { JEMANTIX_DOM.loader().style.display = 'none'; }, 300);
}

/** **********************************************/
/** Navigation                                  **/
/** **********************************************/

export function toggleNavigation() {
    const button = JEMANTIX_DOM.navigationButton();
    const navigation = JEMANTIX_DOM.navigation();
    const tabs = JEMANTIX_DOM.navigationTabs();

    if (button.classList.contains('jemantix-active')) {
        button.classList.remove('jemantix-active');
        navigation.style.animation = '300ms fadeOutUp linear both';
        tabs.style.animation = '300ms fadeOutLeft linear both';
        setTimeout(() => {
            navigation.classList.remove('jemantix-active');
            tabs.classList.remove('jemantix-active');
            if (IS_CHROME()) {
                const gridBgImageUrl = chrome.runtime.getURL('asset/icon/png/grid.png');
                button.style.backgroundImage = `url("${gridBgImageUrl}")`;
            }
        }, 300);
    } else {
        if (IS_CHROME()) {
            const closeBgImageUrl = chrome.runtime.getURL('asset/icon/png/close.png');
            button.style.backgroundImage = `url("${closeBgImageUrl}")`;
        }

        navigation.style.animation = '300ms fadeInDown linear both';
        tabs.style.animation = '300ms fadeInLeft linear both';
        button.classList.add('jemantix-active');
        navigation.classList.add('jemantix-active');
        tabs.classList.add('jemantix-active');
    }
}

export function addNavigation() {
    const navigation = document.createElement('div');
    navigation.id = 'jemantix-navigation';

    const navigationTabs = document.createElement('div');
    navigationTabs.id = 'jemantix-navigation-tabs';

    const navigationButton = document.createElement('div');
    navigationButton.id = 'jemantix-navigation-button';

    CEMANTIX_DOM.cemantixButton().innerHTML = 'Cémantix';
    CEMANTIX_DOM.pedantixButton().innerHTML = 'Pédantix';

    navigation.appendChild(CEMANTIX_DOM.menu());
    navigationTabs.appendChild(CEMANTIX_DOM.tabs());
    navigationTabs.appendChild(CEMANTIX_DOM.cemantixYesterday());
    navigationTabs.appendChild(CEMANTIX_DOM.pedantixYesterday());

    JEMANTIX_DOM.body().appendChild(navigation);
    JEMANTIX_DOM.body().appendChild(navigationTabs);
    JEMANTIX_DOM.body().appendChild(navigationButton);

    navigationButton.addEventListener('click', toggleNavigation);

    JEMANTIX_DOM.navigationLinks().forEach(link => {
        link.addEventListener('click', toggleNavigation);
    });
}

/** **********************************************/
/** Pedantix                                    **/
/** **********************************************/

export function setupPedantix() {
    CEMANTIX_DOM.pedantixGame().insertBefore(CEMANTIX_DOM.pedantixGuessable(), CEMANTIX_DOM.pedantixGame().firstChild);
}

/** **********************************************/
/** Cemantix                                    **/
/** **********************************************/

export function fixCemantixSuccess() {
    CEMANTIX_DOM.cemantixSuccess().style.display = 'none';
}
