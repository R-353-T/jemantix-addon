import { JDOM, JIDS } from '../dom.js';

class Loader {

    init() {
        JDOM.body().appendChild(this._buildLoader());
        console.log('-- loader (initialized) --');
        this.openLoader('Chargement des upgrades...');
    }

    _buildLoader() {
        this.container = document.createElement('div');
        this.container.id = JIDS.loader;

        // Body
        this.body = document.createElement('div');
        this.body.id = JIDS.loaderBody;
        this.container.appendChild(this.body);

        // Spinner
        this.spinner = document.createElement('div');
        this.spinner.id = JIDS.loaderSpinner;
        this.body.appendChild(this.spinner);

        // Message
        this.message = document.createElement('div');
        this.message.id = JIDS.loaderMessage;
        this.message.innerText = '';
        this.body.appendChild(this.message);

        return this.container;
    }

    /**
     * @param {string} message
     */
    openLoader(message) {
        this.message.innerText = message;
        this.container.classList.add('j-activate');
    }

    /**
     * @param {string} message
     */
    closeLoader() {
        this.container.style.animation = '300ms fadeOut linear both';
        setTimeout(() => this.container.classList.remove('j-activate'), 300);
    }

}

export default new Loader();
