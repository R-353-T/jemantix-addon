/**
 * @param {HTMLElement} el
 * @returns
 */
function dqs(el) { return document.querySelector(el); }

/**
 * @param {HTMLElement} el
 * @returns
 */
function dqsa(el) { return [...document.querySelectorAll(el)]; }

export const JIDS = {
    jemantix: 'jemantix',

    loader: 'jemantix-loader',
    loaderBody: 'jemantix-loader-body',
    loaderSpinner: 'jemantix-loader-spinner',
    loaderMessage: 'jemantix-loader-message',

    nickname: 'jemantix-nickname',
    nicknameBody: 'jemantix-nickname-body',
    nicknameMessage: 'jemantix-nickname-message',
    nicknameError: 'jemantix-nickname-error',
    nicknameInput: 'jemantix-nickname-input',
    nicknameButton: 'jemantix-nickname-button',
    nicknameCloseButton: 'jemantix-nickname-close-button',

    navigation: 'jemantix-navigation',
    navigationHeader: 'jemantix-navigation-header',
    navigationContent: 'jemantix-navigation-content',
    navigationProfileButton: 'jemantix-profile',
    navigationLeaderboardButton: 'jemantix-leaderboard'
};

export const JDOM = {
    body: () => dqs('body'),
    menuElements: () => dqsa('nav.menu a'),
    pedantix: {
        yesterday: () => document.querySelector('#pedantix-summary .yesterday'),
        tab: () => document.querySelector('#tabs #pedantix')
    },
    cemantix: {
        yesterday: () => document.querySelector('#cemantix-summary .yesterday'),
        tab: () => document.querySelector('#tabs #cemantix')
    }
};

export const JBACKGROUNDS = {
    navigation: {
        'rules-button': 'asset/icon/png/info.png',
        'faq-button': 'asset/icon/png/faq.png',
        'history-button': 'asset/icon/png/history.png',
        'cloud-button': 'asset/icon/png/cloud.png',
        'jemantix-profile': 'asset/icon/png/account.png',
        'jemantix-leaderboard': 'asset/icon/png/trophy.png'
    }
};
