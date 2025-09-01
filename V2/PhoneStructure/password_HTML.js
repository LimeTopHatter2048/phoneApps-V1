//password_HTML.js
export function getPasswordHTML() {
  return `
    <!-- backGround screen -->
    <img src="image/password_icon.avif" alt="Start Icon" class="image-icon">
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
      <h2 class="message success-message">✅ Access Granted!</h2>
    </div>
    <div class="page lockout-page">
      <h2 class="message lockout-message">🔒 Locked Out!</h2>
      <p>You used all attempts.</p>
    </div>
  `;
}