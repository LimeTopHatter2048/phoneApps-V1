let currentPage = 0;
const totalPages = 3;

// Return main screen HTML with multiple "pages"
export function getMainScreenHTML() {
  return ` 
  <div class="main-pages">
    <!-- Page 1 -->
    <div class="main-page" data-page="1">
      <div class="grid-apps"></div>
    </div>
  <div>
  <img id="main_img" src="img/main_phone.png" alt="main-background">
  `;
}

const apps = [{ name: 'Snake', x: 4, y: 1 }];