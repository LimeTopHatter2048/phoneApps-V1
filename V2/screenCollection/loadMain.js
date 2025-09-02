// loadMain.js
// import { getHTML } from `./${screenName}HTML.js`;
import { getMainHTML } from '../PhoneStructure/main_HTML.js';
import { mainFunctions } from '../PhoneStructure/mainFunctions.js';
import { appLoad } from '../screenCollection.js';

export class loadMainScreen  {
    constructor() {
        console.log(`main Screen initialized!`);
        this.wrapper.innerHTML = `
            <div class="main-screen screen">
                ${getMainHTML()}
            </div>
        `;
        // add adjustments 
        this.functions = new mainFunctions(this.wrapper, appLoad);
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