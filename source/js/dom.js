export const CEMANTIX_DOM = {
    menu: () => document.querySelector('nav.menu'),
    tabs: () => document.querySelector('div#tabs'),
    cemantixButton: () => document.querySelector('a#cemantix'),
    pedantixButton: () => document.querySelector('a#pedantix'),
    cemantixSuccess: () => document.querySelector('#cemantix-success'),

    pedantixSpanArray: () => [...document.querySelectorAll('#wiki span:not(.jemantix-found)')],
    pedantixForm: () => document.querySelector('#pedantix-form'),
    pedantixGame: () => document.querySelector('#pedantix-game'),
    pedantixGuessable: () => document.querySelector('#pedantix-guessable'),

    pedantixYesterday: () => document.querySelector('#pedantix-summary .yesterday'),
    cemantixYesterday: () => document.querySelector('#cemantix-summary .yesterday')
};

export const JEMANTIX_DOM = {
    body: () => document.querySelector('body'),
    loader: () => document.querySelector('#jemantix-loader'),
    navigation: () => document.querySelector('#jemantix-navigation'),
    navigationTabs: () => document.querySelector('#jemantix-navigation-tabs'),
    navigationButton: () => document.querySelector('#jemantix-navigation-button')
};

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
        }, 300);
    } else {
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
}

/** **********************************************/
/** Pedantix                                    **/
/** **********************************************/

export function setupPedantix() {
    CEMANTIX_DOM.pedantixGame().insertBefore(CEMANTIX_DOM.pedantixGuessable(), CEMANTIX_DOM.pedantixGame().firstChild);
}
