import icons from 'url:../../img/icons.svg'; // Parcel 2

import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    // Page 1 and other pages
    // Page 1 and NO other pages
    // Last page
    // Other Page
  }
}

export default new PaginationView();
