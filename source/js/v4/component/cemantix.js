import { JDOM } from '../dom.js';

class Cemantix {

    init() {

        JDOM.body().appendChild(this._buildCemantix());
        console.log('-- cemantix (initialized) --');
    }

    _buildCemantix() {
        return JDOM.cemantix.game();
    }

}

export default new Cemantix();
