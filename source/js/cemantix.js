import { CEMANTIX_DOM } from './dom.js';

export function shareCemantixVictory() {
    const shareSection = document.createElement('div');
    shareSection.id = 'jemantix-cemantix-share';
    shareSection.innerHTML = '<button id="jemantix-cemantix-share-button">Partager mon score !</button>' +
    '<a href="https://www.jemantix.r353t.net/" target="_blank">Voir le leaderboard</a>';
    CEMANTIX_DOM.cemantixSuccess().appendChild(shareSection);
}

export function shareCemantixScore(ev) {

    const score = CEMANTIX_DOM.cemantixTries().innerHTML;
    console.log(score);

}
