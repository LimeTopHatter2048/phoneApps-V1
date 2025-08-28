// mainScreen.js
// import variables from js scenes 
import { apps } from '../screenCollection.js';

//mainScreen.js
export const diary = {
  className: ".main-screen",
  load: loadMainScreen
};

export function loadMainScreen() {
  const div = document.createElement("div");
  div.className = "screen main-screen";
  div.innerHTML = `
    <h2>📱 Main Screen</h2>
    <button id="backBtn">Go Back</button>
  `;

  // add pages to .innerHTML
  let currentPage = 0;
  const totalPages = 3;

  for (let pageIndex = 1; pageIndex < totalPages; pageIndex++) {
    const page = document.createElement("div");
    page.className = `main-page page${pageIndex}`;
    div.appendChild(page);
  }

  // Place apps in their correct pages
  apps.forEach(app => {
    //for each app get page, 
    const page = document.querySelector(`.page${app.page}`);
    if (page) {
      const appDiv = document.createElement('div');
      appDiv.className = 'app';
      appDiv.id = app.name;
      appDiv.style.background = app.color;
      appDiv.style.gridColumn = app.x;
      appDiv.style.gridRow = app.y;
      appDiv.innerHTML = `
        <img src="${app.icon}" alt="${app.name}" class="app-icon">
        <span class="app-label">${app.name}</span>
      `;
      
      // Add click event to activate app's load function
      //appDiv.addEventListener("click", () => app.load?.());
      appDiv.addEventListener('click', () => {
        if (typeof app.load === 'function') {
          app.load(); // call name function add ()
        }
      });
      page.appendChild(appDiv);
    }
  });

  // Navigation

  return div;
}