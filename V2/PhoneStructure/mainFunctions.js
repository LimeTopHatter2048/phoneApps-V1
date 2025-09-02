// mainFunctions.js
export class mainFunctions {
  constructor(wrapper, apps, totalPages = 3, startPage = 0) {
    this.wrapper = wrapper;
    this.apps = apps;
    this.phone = wrapper.querySelector('.phone-container');
    this.container = wrapper.querySelector('.screen-container');
    this.main = wrapper.querySelector('.main-screen');
    
    this.totalPages = totalPages;
    this.currentPage = startPage;
  }
  renderInitialScreen() {
    this.createMainPages();
    this.placeApps();
    this.addEventListeners();
    this.showPage(this.currentPage);
  }
  createMainPages(){
    for (let pageIndex = 0; pageIndex < this.totalPages; pageIndex++) {
      const pageHTML = `
        <div class="main-page page${pageIndex}" data-page="${pageIndex}">
        </div>
      `;
      // insertAdjacentHTML → inserts raw HTML (as a string)
      //'beforebegin' → before the element itself.
      //'afterbegin' → inside the element, before its first child.
      //'beforeend' → inside the element, after its last child.
      //'afterend' → after the element itself.
      this.main.insertAdjacentHTML('beforeend', pageHTML);
    }
  }
  
  placeApps() {
    this.apps.forEach(app => {
      const page = this.wrapper.querySelector(`.page${app.page}`);
      if (page) {
        const appDiv = document.createElement('div');
        appDiv.className = 'app';
        appDiv.id = app.name.replace(/\s+/g, '-').toLowerCase();
        appDiv.style.background = app.color;
        appDiv.style.gridColumn = app.x;
        appDiv.style.gridRow = app.y;
        appDiv.innerHTML = `
          <img src="${app.icon}" alt="${app.name}" class="app-icon">
          <span class="app-label">${app.name}</span>
        `;

        // Attach app's screen load
        if (typeof app.load === 'function') {
          appDiv.addEventListener('click', () => app.load());
        }

        page.appendChild(appDiv);
      }
    });
  }
  addEventListeners() {
    // Navigation between pages by clicking left/right edge
    this.main.addEventListener("click", (event) => {
      const clickX = event.clientX;
      const screenWidth = this.main.clientWidth;
      const edgeThreshold = 50; // px from the edges
    
      if (clickX <= edgeThreshold) {
        // Left edge → previous page
        this.currentPage = (this.currentPage - 1 + this.totalPages) % this.totalPages;
        this.showPage(this.currentPage);
      } else if (clickX >= screenWidth - edgeThreshold) {
        // RIGHT edge → next page
        this.currentPage = (this.currentPage + 1) % this.totalPages;
        this.showPage(this.currentPage);
        }
      });
  }

  showPage(pageIndex) {
    const pages = this.wrapper.querySelectorAll('.main-page');
    pages.forEach(p => p.classList.remove('active'));

    const page = this.wrapper.querySelector(`.page${pageIndex}`);
    if (page) page.classList.add('active');
  }
}