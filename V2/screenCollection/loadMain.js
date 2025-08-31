// loadMain.js
// import { getHTML } from `./${screenName}HTML.js`;
import { getMainHTML } from '../PhoneStructure/main_HTML.js';
import { mainFunctions } from '../PhoneStructure/mainFunctions.js';
import { appLoad } from '../screenCollection.js';

export class loadMainScreen  {
    constructor() {
        console.log(`main Screen initialized!`);
        this.wrapper = document.createElement('div');
        this.wrapper.className = "main-screen screen"; // changed from 'screen'
        // get html screen
        this.wrapper.innerHTML = getMainHTML();
        // add adjustments 
        this.functions = new MainFunctions(this.wrapper, appLoad);
    }

    getHTML() {
        return this.wrapper;
    }

    start() {
        console.log("screen started!");
        this.functions.renderInitialScreen();
    }
}

// Export diary metadata for auto-registration
export const diary = {
  className: ".main-screen",
  load: loadMainScreen
};