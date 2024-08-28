const CEMANTIX_DOM = {
    menu: () => document.querySelector('nav.menu')
};

const JEMANTIX_DOM = {
    body: () => document.querySelector('body'),
    loader: () => document.querySelector('#jemantix-loader'),
    navigation: () => document.querySelector('#jemantix-navigation'),
    navigationButton: () => document.querySelector('#jemantix-navigation-button')
};

/** ***********************************************/
/** Loader                                      **/
/** ***********************************************/

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
    setTimeout(() => { JEMANTIX_DOM.loader().classList.add('hidden'); }, 300);
}

/** ***********************************************/
/** Navigation                                  **/
/** ***********************************************/

export function toggleNavigation() {
    const button = JEMANTIX_DOM.navigationButton();
    const navigation = JEMANTIX_DOM.navigation();

    if (button.classList.contains('jemantix-active')) {
        button.classList.remove('jemantix-active');
        navigation.style.animation = '300ms fadeOutUp linear both';
        setTimeout(() => { navigation.classList.remove('jemantix-active'); }, 300);
    } else {
        navigation.style.animation = '300ms fadeInDown linear both';
        button.classList.add('jemantix-active');
        navigation.classList.add('jemantix-active');
    }
}

export function addNavigation() {
    const navigation = document.createElement('div');
    navigation.id = 'jemantix-navigation';

    const navigationButton = document.createElement('div');
    navigationButton.id = 'jemantix-navigation-button';

    navigation.appendChild(CEMANTIX_DOM.menu());
    JEMANTIX_DOM.body().appendChild(navigation);
    JEMANTIX_DOM.body().appendChild(navigationButton);

    navigationButton.addEventListener('click', toggleNavigation);
}

