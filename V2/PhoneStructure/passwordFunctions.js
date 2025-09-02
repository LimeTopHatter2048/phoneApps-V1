// passwordFunctions.js
import { wait } from '../utils.js';

export class passwordFunctions {
  constructor(wrapper, password="1234", attempts = 3) {
    this.wrapper = wrapper;
    this.startPage = wrapper.querySelector('.passwordStart-page');
    this.boxPage = wrapper.querySelector('.passwordBox-page');
    this.accessPage = wrapper.querySelector('.access-page');
    this.lockoutPage = wrapper.querySelector('.lockout-page');

    this.submitBtn = wrapper.querySelector('#submitBtn');
    this.passwordBox = wrapper.querySelector('#passwordBox');
    this.message = wrapper.querySelector('#passwordMessage');

    this.password = password;
    this.attempts = attempts;

    this.addEventListeners();
  }

  addEventListeners() {
    this.startPage.addEventListener('click', () => {
      this.showPage(this.boxPage);
    });

    this.submitBtn.addEventListener('click', () => {
      const input = this.passwordBox.value.trim();
      if (input === this.password) {
        this.showPage(this.accessPage);
        wait(3, () => {
          //alert("3 seconds later!");
          showScreen('.main-screen');
        });
      } else {
        this.attempts--;
        if (this.attempts > 0) {
          this.message.textContent = `❌ Wrong password! ${this.attempts} tries left.`;
          this.message.style.color = "red";
        } else {
          this.showPage(this.lockoutPage);
        }
      }
    });
  }

  renderInitialScreen() {
    this.showPage(this.startPage);
  }

  showPage(pageElement) {
    this.wrapper.querySelectorAll('.page').forEach(p => {p.classList.remove('active');
    });
    if(pageElement){
      pageElement.classList.add('active');
    }
  }
}
