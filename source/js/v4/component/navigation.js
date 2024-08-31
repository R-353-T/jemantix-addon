import { JBACKGROUNDS, JDOM, JIDS } from '../dom.js';
import { applyBackground } from '../utils.js';
import game from './game.js';

class Navigation {

    init() {
        JDOM.body().appendChild(this._buildNavigation());

        for (const id in JBACKGROUNDS.navigation) {
            console.log(id, document.querySelector(`#${id}`));
            applyBackground(
                document.querySelector(`#${id}`),
                JBACKGROUNDS.navigation[id]
            );
        }

        this.nicknameButton.addEventListener('click', game.openNickname.bind(game));
        console.log('-- navigation (initialized) --');
    }

    _buildNavigation() {
        this.navigation = document.createElement('nav');
        this.navigation.id = JIDS.navigation;

        // Header
        this.navigationHeader = document.createElement('header');
        this.navigationHeader.id = JIDS.navigationHeader;
        JDOM.pedantix.yesterday().innerHTML = JDOM.pedantix.yesterday()
            .innerHTML.replace('<br>', '').replace(':', '');
        this.navigationHeader.appendChild(JDOM.cemantix.yesterday());
        this.navigationHeader.appendChild(JDOM.pedantix.yesterday());
        this.navigation.appendChild(this.navigationHeader);

        // Content
        this.navigationContent = document.createElement('div');
        this.navigationContent.id = JIDS.navigationContent;
        JDOM.cemantix.tab().innerHTML = 'Cémantix';
        JDOM.pedantix.tab().innerHTML = 'Pédantix';
        this.navigationContent.appendChild(JDOM.cemantix.tab());
        this.navigationContent.appendChild(JDOM.pedantix.tab());
        JDOM.menuElements().forEach(element => { this.navigationContent.appendChild(element); });

        this.navigation.appendChild(this.navigationContent);

        // Nickname button
        this.nicknameButton = document.createElement('a');
        this.nicknameButton.classList.add('icon');
        this.nicknameButton.id = JIDS.navigationProfileButton;
        this.navigationContent.appendChild(this.nicknameButton);

        // Leaderboard button
        this.leaderboardButton = document.createElement('a');
        this.leaderboardButton.classList.add('icon');
        this.leaderboardButton.id = JIDS.navigationLeaderboardButton;
        this.leaderboardButton.target = '_blank';
        this.leaderboardButton.href = 'https://www.jemantix.r353t.net';
        this.navigationContent.appendChild(this.leaderboardButton);

        return this.navigation;
    }
}

export default new Navigation();
