//script.js
import { sceneLoad } from './screenCollection.js';

window.addEventListener('load', function(){
  const loadingScreen = document.getElementById('loading-screen');
  function hideLoading() {
    loadingScreen.classList.add('hidden');
  }

  const screenContainer = document.querySelector('.screen-container');
  //Handles switching/removing screens
  function findScreenLoad(className) {
    // .find() instead of .filter().
    return sceneLoad.find(load => load.className === className);
  }
  function showScreen(className) {
    let screen = screenContainer.querySelector(className);
    if(!screen){
      // If doesn't exist, create & initialize
      const loadClass = findScreenLoad(className);
      if (loadClass && typeof loadClass.load === "function") {
        const objectClass = loadClass.load;
        const instance  = new objectClass();
        const newScreen = instance.getHTML();
        
        screenContainer.appendChild(newScreen);
        screen = newScreen;
      }
    }
    // hide others, show this one
    screenContainer.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
  }
  
  // Start on password
  showScreen('.password-screen');
  hideLoading();   // ✅ explicitly remove loader once ready
});