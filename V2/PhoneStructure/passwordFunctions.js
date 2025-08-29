// passwordFunctions.js
export class passwordFunctions {
  constructor(wrapper) {
    this.wrapper = wrapper;
    this.startPage = wrapper.querySelector('.passwordStart-page');
    this.boxPage = wrapper.querySelector('.passwordBox-page');
    this.accessPage = wrapper.querySelector('.access-page');
    this.lockoutPage = wrapper.querySelector('.lockout-page');

    this.submitBtn = wrapper.querySelector('#submitBtn');
    this.passwordBox = wrapper.querySelector('#passwordBox');
    this.message = wrapper.querySelector('#passwordMessage');

    this.addEventListeners();
  }

  addEventListeners() {
    this.startPage.addEventListener('click', () => {
      this.showPage(this.boxPage);
    });

    this.submitBtn.addEventListener('click', () => {
      const input = this.passwordBox.value.trim();
      if (input === "1234") {
        this.showPage(this.accessPage);
      } else {
        this.showPage(this.lockoutPage);
      }
    });
  }

  renderInitialScreen() {
    this.showPage(this.startPage);
  }

  showPage(page) {
    this.wrapper.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    page.classList.add('active');
  }
}
