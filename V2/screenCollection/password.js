//passwordScreen.js

export function loadPasswordScreen() {
  const div = document.createElement("div");
  div.classList.add("screen", "password-screen");
  div.innerHTML =`
  <div class="password-screen screen">
    <!-- backGround screen -->
    <img src="password_icon.avif" alt="Start Icon" class="screen-icon">
    <!-- pages will be injected here -->
    <div class="page passwordStart-page active">
      <label>click to start</label>
    </div>
    <div class="page passwordBox-page">
      <label>Username</label>
      <input type="text" id="passwordBox" placeholder="Enter password">
      <br>
      <button id="submitBtn">Submit</button>
      <div class="message" id="passwordMessage"></div>
    </div>
    <div class="page access-page">
      <h2 class="success-message">✅ Access Granted!</h2>
    </div>
    <div class="page lockout-page">
      <h2>🔒 Locked Out!</h2>
      <p>You used all attempts.</p>
    </div>
  </div>
  `;
  return div;
}

// functions for functions diary
function checkPassword() {

}

export const diary_functions = { checkPassword };

export const diary_load = {
  className: ".password-screen",
  load: loadPasswordScreen
};


//DOMContentLoaded to ensure elements exist
document.addEventListener("DOMContentLoaded", () => {
  const correctPassword = "secret123";  // change this to your desired password
  let attempts = 3;
    
  // Function to switch pages
  function showPage(className) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("active"));
    const nextPage = document.querySelector(className);
    if(nextPage) nextPage.classList.add("active");
  }

  // Start screen click
  const startPage = document.querySelector('.passwordStart-page');
  startPage.addEventListener("click", () => {
    showPage('.passwordBox-page'); // switch to password input page
  });

  // listed values 
  const passwordInput = document.getElementById("passwordBox");
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("passwordMessage");

  submitBtn.addEventListener("click", () => {
    if (passwordInput.value === correctPassword){
      showPage('.access-page');
      // After 3 seconds, hide loading and show main
      /* setTimeout(() => {
        showScreen('main-screen');
      }, 3000); */
    } else {
      attempts--;
      if (attempts > 0) {
        message.textContent = `❌ Wrong password! ${attempts} tries left.`;
        message.style.color = "red";
      } else {
        showPage('.lockout-page');
      }
    }
  });

  // Initialize first page
  showPage('.passwordStart-page');
});
