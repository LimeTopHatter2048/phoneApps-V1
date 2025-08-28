//main.js
import { sceneLoad } from './screenCollection.js';
//DOMContentLoaded to ensure elements exist
//Waits for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.screen-container');

  //Handles switching/removing screens
  function findScreenLoad(className) {
    //for each diary pull load from match name
    return sceneLoad.filter(load => load.className === className);
  }

  function showScreen(className) {
    // check if screen is in screen container 
    let screen = container.querySelector(className);
    if(!screen){
      // Build dynamically if not already added
      const loadPull = findScreenLoad(className);
      if (loadPull && typeof loadPull.load === "function") {
        const newScreen = loadPull.load(); // CALL the loader function
        container.appendChild(newScreen);
        screen = newScreen;
      }
    } 
    // hide others, show this one
    container.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
  }

  // Start on password
  showScreen('.password-screen');
});