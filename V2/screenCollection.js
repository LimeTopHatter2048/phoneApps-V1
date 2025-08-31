// screenCollection.js
const screenModules = import.meta.glob('./screenCollection/*.js', { eager: true });

// Collect all screen `diary` objects
export const sceneLoad = Object.values(screenModules)
  .filter(m => m.diary)
  .map(m => m.diary);

// Collect all app definitions
export const appLoad = Object.values(screenModules)
  .filter(m => m.diary_app)
  .flatMap(m => m.diary_app);