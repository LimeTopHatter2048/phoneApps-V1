// screenTemplates.js
const screenList = [];

export function registerScreen(name, htmlString) {
  screenList.push({ name, html: htmlString, loaded: false });
}

export function getScreen(name) {
  return screenList.find(screen => screen.name === name);
}

export function markScreenLoaded(name, loaded) {
  const screen = getScreen(name);
  if (screen) screen.loaded = loaded;
}
