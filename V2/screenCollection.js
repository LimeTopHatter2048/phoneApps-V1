// screenCollection.js
// Auto-import all screens inside screenCollection folder
const modules = import.meta.glob('./screenCollection/*.js', { eager: true });

// Each screen module should export a `diary` object like:
// export const diary = { className: ".password-screen", load: loadPasswordScreen };

export const sceneLoad = Object.values(modules).map(m => m.diary);