// loadpassword.js
// import { getHTML } from `./${screenName}HTML.js`;
import { getPasswordHTML } from './PhoneStructure/password_HTML.js';
import { passwordFunctions } from './PhoneStructure/passwordFunctions.js';

export class loadPasswordScreen  {
    constructor() {
        console.log(`Password Screen initialized!`);
        this.wrapper = document.createElement('div');
        this.wrapper.className = "password-screen screen"; // changed from 'screen'
        // get html screen
        this.wrapper.innerHTML = getPasswordHTML();
        // add adjustments 
        this.functions = new passwordFunctions(this.wrapper);
    }

    getHTML() {
        return this.wrapper;
    }

    start() {
        console.log("screen started!");
        this.passwordFunctions.renderInitialScreen();
    }
}

// Export diary metadata for auto-registration
export const diary = {
  className: ".password-screen",
  load: loadPasswordScreen
};