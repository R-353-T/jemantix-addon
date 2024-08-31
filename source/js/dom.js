export const CEMANTIX_DOM = {
    menu: () => document.querySelector('nav.menu'),
    tabs: () => document.querySelector('div#tabs'),
    cemantixButton: () => document.querySelector('a#cemantix'),
    pedantixButton: () => document.querySelector('a#pedantix'),

    cemantixSuccess: () => document.querySelector('#cemantix-success'),
    pedantixSuccess: () => document.querySelector('#pedantix-success'),

    pedantixSpanArray: () => [...document.querySelectorAll('#wiki span:not(.jemantix-found)')],
    pedantixForm: () => document.querySelector('#pedantix-form'),
    pedantixGame: () => document.querySelector('#pedantix-game'),
    pedantixGuessable: () => document.querySelector('#pedantix-guessable'),

    pedantixYesterday: () => document.querySelector('#pedantix-summary .yesterday'),
    cemantixYesterday: () => document.querySelector('#cemantix-summary .yesterday'),

    cemantixTries: () => document.querySelector('#cemantix-tries'),
    pedantixTries: () => document.querySelector('#pedantix-tries')
};

export const JEMANTIX_DOM = {
    body: () => document.querySelector('body'),
    loader: () => document.querySelector('#jemantix-loader'),
    navigation: () => document.querySelector('#jemantix-navigation'),
    navigationTabs: () => document.querySelector('#jemantix-navigation-tabs'),
    navigationButton: () => document.querySelector('#jemantix-navigation-button'),

    navigationLinks: () => [
        ...JEMANTIX_DOM.navigation().querySelectorAll('a'),
        ...JEMANTIX_DOM.navigationTabs().querySelectorAll('a')
    ],

    nickname: {
        container: () => document.querySelector('#jemantix-nickname-container'),
        input: () => document.querySelector('#jemantix-nickname-input'),
        button: () => document.querySelector('#jemantix-nickname button'),
        error: () => document.querySelector('#jemantix-nickname-container .error')
    }
};
