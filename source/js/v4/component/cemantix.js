import { JDOM, JIDS } from '../dom.js';
import game from './game.js';

class Cemantix {

    init() {
        JDOM.body().appendChild(this._buildCemantix());
        JDOM.cemantix.success().style.display = 'none'; // fix
        console.log('-- cemantix (initialized) --');
    }

    _buildCemantix() {
        // Leaderboard button
        this.leaderboardButton = document.createElement('button');
        this.leaderboardButton.id = JIDS.cemantixLeaderboardButton;
        this.leaderboardButton.innerText = 'Envoyer ton score Cémantix sur le leadboard ( jemantix.r353t.net )';
        this.leaderboardButton.addEventListener('click', this.sendScore.bind(this));
        JDOM.cemantix.success().appendChild(this.leaderboardButton);

        return JDOM.cemantix.game();
    }

    getScore() {
        return JDOM.cemantix.tries().innerText.replace('coups', '').trim();
    }

    async sendScore() {
        this.leaderboardButton.disabled = true;
        if (this.allowedToUpdateScore()) {
            const body = new FormData();
            body.append('nickname', game.getNickname());
            body.append('score', this.getScore());
            body.append('gamemode', 1);

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
        const last = window.localStorage.getItem('latest_cemantix_score');

        if (last === undefined || last === null) {
            return true;
        } else {
            const midnight = new Date(Date.now());
            midnight.setHours(0);
            midnight.setMinutes(0);
            midnight.setSeconds(0);
            return midnight.getTime() > new Date(parseInt(last)).getTime();
        }
    }

    updateLastScore() {
        window.localStorage.setItem('latest_cemantix_score', Date.now());
    }

}

export default new Cemantix();
