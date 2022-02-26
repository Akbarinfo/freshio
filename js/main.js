let openMenuBtn = document.getElementById('id-site-menu');
let navBox = document.getElementById('id-navbox');
let closeMenu = document.getElementById('id-navclose');


openMenuBtn.addEventListener('click', function () {
  navBox.classList.add('open-nav');
});

closeMenu.addEventListener('click', function () {
  navBox.classList.remove('open-nav');
});

// MENU HOME

let openhomeBtn = document.getElementById('id-home');
let navhome = document.getElementById('id-homebox');
let closehome = document.getElementById('id-homeclose');


openhomeBtn.addEventListener('click', function () {
  navhome.classList.add('open-mdown');
});

closehome.addEventListener('click', function () {
  navhome.classList.remove('open-mdown');
});


// MENU SHOP

let openshopBtn = document.getElementById('id-shop');
let navshop = document.getElementById('id-shopbox');
let closeshop = document.getElementById('id-shopclose');


openshopBtn.addEventListener('click', function () {
  navshop.classList.add('open-mdown');
});

closeshop.addEventListener('click', function () {
  navshop.classList.remove('open-mdown');
});

// MENU PAGES

let openpagesBtn = document.getElementById('id-pages');
let navpages = document.getElementById('id-pagesbox');
let closepages = document.getElementById('id-pagesclose');


openpagesBtn.addEventListener('click', function () {
  navpages.classList.add('open-mdown');
});

closepages.addEventListener('click', function () {
  navpages.classList.remove('open-mdown');
});



// SEARCH TOP

let openSearch = document.getElementById('id-search');
let iconSearch = document.getElementById('id-search-icon');

let count = 0;
openSearch.addEventListener('click', function () {

  if (count == 0) {
    iconSearch.className = 'fal fa-times';
    iconSearch.style.fontSize = '24px';
    iconSearch.style.color = '#0a472e';
    count++;
  }
  else {
    iconSearch.className = 'fal fa-search';
    iconSearch.style.fontSize = '24px';
    iconSearch.style.color = '#0a472e';
    count = 0;
  }
})
