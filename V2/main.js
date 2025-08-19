window.addEventListener('load', function() {
  // Show loading screen first
  showLoadingScreen();
  
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 1280 / 2;
  canvas.height = 720 / 2;
  
  const screenContainer = document.querySelector('.screen-container');
  const mainScreen = document.getElementById('main-screen');
  
  function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
    screen.style.display = "none";
    });
    document.getElementById(screenId).style.display = "flex";
  }

  // After 3 seconds, hide loading and show main
  setTimeout(() => {
    showScreen('main-screen');
  }, 3000);
});

export function getSnakeHTML() {
  return ` 
  <div class="main-pages">
    <!-- Page 1 -->
    <div class="main-page" data-page="1">
      <div class="grid-apps"></div>
    </div>
  <div>
  <img id="main_img" src="img/main_phone.png" alt="main-background">
  `;
}