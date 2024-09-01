import { JDOM, JIDS } from '../dom.js';
import { generateUID } from '../utils.js';

class Game {
    init() {
        JDOM.body().id = JIDS.jemantix;
        console.log('-- game (initialized) --');

        // Nickname
        JDOM.body().appendChild(this._buildNickname());
        this.nicknameButton.addEventListener('click', this.updateNickname.bind(this));
        this.nicknameCloseButton.addEventListener('click', this.closeNickname.bind(this));
        console.log('-- game nickname (initialized) --');
    }

    _buildNickname() {
        this.nicknameContainer = document.createElement('div');
        this.nicknameContainer.id = JIDS.nickname;

        // Nickname
        this.nicknameBody = document.createElement('div');
        this.nicknameBody.id = JIDS.nicknameBody;
        this.nicknameContainer.appendChild(this.nicknameBody);

        // Message
        this.nicknameMessage = document.createElement('p');
        this.nicknameMessage.id = JIDS.nicknameMessage;
        this.nicknameMessage.innerText = 'Surnom du joueur';
        this.nicknameBody.appendChild(this.nicknameMessage);

        // Input
        this.nicknameInput = document.createElement('input');
        this.nicknameInput.id = JIDS.nicknameInput;

        const currentNickname = this.getNickname();
        if (currentNickname === null || currentNickname.length === 0) {
            this.setNickname(generateUID());
        }

        this.nicknameInput.value = this.getNickname();
        this.nicknameBody.appendChild(this.nicknameInput);

        // Button
        this.nicknameButton = document.createElement('button');
        this.nicknameButton.id = JIDS.nicknameButton;
        this.nicknameButton.innerText = 'Valider';
        this.nicknameBody.appendChild(this.nicknameButton);

        // Button
        this.nicknameCloseButton = document.createElement('button');
        this.nicknameCloseButton.id = JIDS.nicknameCloseButton;
        this.nicknameCloseButton.innerText = 'Fermer';
        this.nicknameBody.appendChild(this.nicknameCloseButton);

        // Error
        this.nicknameError = document.createElement('p');
        this.nicknameError.id = JIDS.nicknameError;
        this.nicknameBody.appendChild(this.nicknameError);

        return this.nicknameContainer;
    }

    getNickname() {
        return window.localStorage.getItem(JIDS.nickname);
    }

    setNickname(nickname) {
        window.localStorage.setItem(JIDS.nickname, nickname);
    }

    updateNickname() {
        console.log('(event) update nickname');
        const nickname = this.nicknameInput.value.trim();

        if (nickname.length < 3) {
            this.nicknameError.innerText = 'Votre surnom doit comporter au moins 3 caractères';
        } else {
            this.setNickname(nickname);
            this.nicknameError.innerText = 'Votre pseudo à été mis à jour';
        }
    }

    /**
     * @param {string} message
     */
    openNickname() {
        this.nicknameContainer.style.animation = '300ms fadeIn linear both';
        this.nicknameContainer.classList.add('j-activate');
    }

    /**
     * @param {string} message
     */
    closeNickname() {
        this.nicknameContainer.style.animation = '300ms fadeOut linear both';
        setTimeout(() => {
            this.nicknameContainer.classList.remove('j-activate');
        }, 300);
    }
}

export default new Game();
