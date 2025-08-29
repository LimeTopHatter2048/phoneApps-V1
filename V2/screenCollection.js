const modules = import.meta.glob('./screenCollection/*.js', { eager: true });

// Each module must export a `diary` object
export const sceneLoad = Object.values(modules).map(m => m.diary);