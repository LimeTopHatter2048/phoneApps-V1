//script.js
import { sceneLoad } from './screenCollection.js';
import { timers } from './utils.js';

window.addEventListener('load', function(){
  const loadingScreen = document.getElementById('loading-screen');
  const screenContainer = document.querySelector('.screen-container');

  function hideLoading() {
    loadingScreen.classList.add('hidden');
  }
  function showLoading() {
    loadingScreen.classList.remove('hidden');
  }

  //Handles switching/removing screens
  function findScreenLoad(className) {
    // .find() instead of .filter().
    return sceneLoad.find(load => load.className === className);
  }
  window.showScreen = function(className) {
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

        if (typeof instance.start === "function") {
          instance.start();
        }
      }
    }
    // hide others, show this one
    screenContainer.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));

    if (screen) {
      screen.classList.add("active");
      hideLoading();
    } else {
      // no screen active? show loader again
      showLoading();
    }
  }
  
  // Start on password
  showScreen('.password-screen');
  hideLoading();   // ✅ explicitly remove loader once ready

  requestAnimationFrame(frame); // start loop
});

// ===== Timer + frame loop =====
let lastTime = 0;

function frame(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  // update timers
  for (let i = timers.length - 1; i >= 0; i--) {
    const t = timers[i]; // get diary
    t.elapsed += deltaTime;
    if (t.elapsed >= t.duration) {
      t.action();
      timers.splice(i, 1); // remove finished
    }
  }

  requestAnimationFrame(frame);
}