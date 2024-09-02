import { JDOM, JIDS } from '../dom.js';
import { equalRgbs, getRgbVals, isGrayRgb } from '../utils.js';
import game from './game.js';

class Pedantix {

    init() {
        const pedantix = this._buildPedantix();
        pedantix.insertBefore(JDOM.pedantix.guessedTable(), JDOM.pedantix.form());
        JDOM.body().appendChild(pedantix);

        JDOM.pedantix.form().addEventListener('submit', this.onWordSubmittion.bind(this));

        console.log('-- pedantix (initialized) --');
    }

    _buildPedantix() {
        // Leaderboard button
        this.leaderboardButton = document.createElement('button');
        this.leaderboardButton.id = JIDS.pedantixLeaderboardButton;
        this.leaderboardButton.innerText = 'Envoyer ton score Pédantix sur le leadboard ( jemantix.r353t.net )';
        this.leaderboardButton.addEventListener('click', this.sendScore.bind(this));
        JDOM.pedantix.success().appendChild(this.leaderboardButton);

        return JDOM.pedantix.game();
    }

    /** Leaderboard **/

    getScore() {
        return JDOM.pedantix.tries().innerText.replace('coups', '').trim();
    }

    async sendScore() {
        this.leaderboardButton.disabled = true;
        if (this.allowedToUpdateScore()) {
            const body = new FormData();
            body.append('nickname', game.getNickname());
            body.append('score', this.getScore());
            body.append('gamemode', 2);

            const response = await fetch('https://www.jemantix.r353t.net/', {
                method: 'POST',
                body
            });

            const jsonResponse = await response.json();
            if (jsonResponse.ok === true) {
                this.updateLastScore();
            }

            this.leaderboardButton.innerText = 'Envoyé !';
        } else {
            this.leaderboardButton.innerText = 'Déjà envoyé !';
        }

        setTimeout(() => {
            this.leaderboardButton.innerText = 'Envoyer son score sur le leadboard: jemantix.r353t.net';
            this.leaderboardButton.disabled = false;
        }, 60000);
    }

    allowedToUpdateScore() {
        const last = window.localStorage.getItem('latest_pedantix_score');

        if (last === undefined || last === null) {
            return true;
        } else {
            const noon = new Date(Date.now());
            noon.setHours(12);
            noon.setMinutes(0);
            noon.setSeconds(0);
            return noon.getTime() > new Date(parseInt(last)).getTime() &&
            new Date(Date.now()) > noon.getTime();
        }
    }

    updateLastScore() {
        window.localStorage.setItem('latest_pedantix_score', Date.now());
    }

    /** UI **/

    /**
     * @param {HTMLSpanElement} span
     */
    _found(span) {
        if (span.style.boxShadow === 'none' && span.innerText.length > 0) {
            span.style.color = 'white';
            span.classList.add('jemantix-found');
            span.style.fontStyle = 'normal';
        }
    }

    /**
     * @param {HTMLSpanElement} span
     */
    _find(span) {
        const expectedBgRgb = [102, 238, 102];
        const bgRgb = getRgbVals(span.style.backgroundColor);
        if (equalRgbs(bgRgb, expectedBgRgb)) {
            span.style.backgroundColor = '#548506';
            span.style.fontStyle = 'normal';
        }
    }

    /**
     * @param {HTMLSpanElement} span
     */
    _hidden(span) {
        const bgRgb = getRgbVals(span.style.backgroundColor);
        if (isGrayRgb(bgRgb)) {
            span.style.backgroundColor = '#182553';
            span.style.fontStyle = 'italic';
        }
    }

    onWordSubmittion() {
        setTimeout(() => {
            const spanArray = JDOM.pedantix.wikiSpans();
            console.log(`Updating ${spanArray.length} words`);
            for (const span of spanArray) {
                this._found(span);
                this._find(span);
                this._hidden(span);
            }
        }, 900);
    }
}

export default new Pedantix();
