import cemantix from './component/cemantix.js';
import game from './component/game.js';
import loader from './component/loader.js';
import navigation from './component/navigation.js';
import pedantix from './component/pedantix.js';

const initialize = function() {
    console.log('-- init --');

    game.init();
    loader.init();
    navigation.init();

    cemantix.init();
    pedantix.init();

    setTimeout(() => {
        loader.closeLoader();
        game.openNickname();
    }, 600);
};

export default initialize;
