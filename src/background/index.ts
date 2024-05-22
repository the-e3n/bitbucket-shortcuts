import { Runtime, runtime } from 'webextension-polyfill';

class Background {
    startup = async () => {};

    constructor() {
        // this.startup();
    }
}

export const background = new Background();
