import { getScreen, markScreenLoaded } from './screenTemplates.js';

const container = document.getElementById("container");
const loadingScreen = document.getElementById("loading-screen");

async function toggleScreen(name) {
  const container = document.querySelector("#container");
  const loadingScreen = document.querySelector("#loading-screen");

  const currentScreen = container.querySelector(":scope > .screen:not(.hidden)");
  const targetScreen = container.querySelector(`.screen[data-name="${name}"]`);

  // Hide current screen
  if (currentScreen) currentScreen.classList.add("hidden");

  // Show loading screen
  loadingScreen.classList.remove("hidden");

  if (targetScreen) {
    // Already loaded, just unhide
    await new Promise(resolve => setTimeout(resolve)); // allow reflow
    targetScreen.classList.remove("hidden");

  } else {
    // Not yet loaded, fetch and load it
    const screenData = getScreen(name);
    if (screenData && screenData.loaded === false) {
      await openScreen(name);
    }
    // Now it's in DOM, unhide it
    const newScreen = container.querySelector(`.screen[data-name="${name}"]`);
    if (newScreen) newScreen.classList.remove("hidden");
  }

  // Hide loading screen
  loadingScreen.classList.add("hidden");
}

export function openScreen(name) {

}

export function closeScreen(name) {

}

function showLoading() {
  loadingScreen.classList.remove('hidden');
}

function hideLoading() {
  loadingScreen.classList.add('hidden');
}

function setupHoverExit(screenName) {
  const screen = document.getElementById(screenName);
  const hoverTab = screen?.querySelector('.hover-tab');

  if (!hoverTab) return;

  screen.addEventListener('mousemove', (e) => {
    if (e.clientY < 30) {
      hoverTab.classList.add('show');
    } else {
      hoverTab.classList.remove('show');
    }
  });

  hoverTab.querySelector('.exit-btn').addEventListener('click', () => {
    closeScreen(screenName);
  });
}
