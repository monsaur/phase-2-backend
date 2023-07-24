'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () {
  modal.classList.add('closed');
};

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  };

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {
        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');
      }
    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
  });
}

function search() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var searchResults = document.getElementById("searchResults");

  // Map the search terms to their corresponding HTML files
  var searchMap = {
    grooming: "listings-detailed-1.html",
    spa: "listings-detailed-2.html",
    electronics: "listings-detailed-3.html",
    auto: "listings-detailed-4.html",
    haircuts: "listings-detailed-5.html",
    styling: "listings-detailed-5.html",
    dental: "listings-detailed-6.html",
    daycare: "listings-detailed-7.html",
    dog: "listings-detailed-7.html",
    home: "listings-detailed-8.html"
  };

  // Check if the search term exists in the map
  if (searchMap.hasOwnProperty(searchInput)) {
    var file = searchMap[searchInput];
    window.location.href = file;
  } else {
    document.getElementById("searchInput").value = "No results found.";
  }
}

function confirmDelete() {
  var result = confirm("Listing will be permanently deleted. Proceed?");
  if (result) {
    // User clicked "OK" on the confirmation dialog
    alert("Listing deleted successfully.");
  } else {
    // User clicked "Cancel" on the confirmation dialog
    alert("Deletion cancelled.");
  }
}

function logout() {
  window.location.href = 'index.html'; // Redirect to index.html
}

const navItems = [
  { text: 'Home', url: 'homepage.html' },
  { text: 'Service Listings', url: 'listings.html' },
  { text: 'Create a Listing', url: 'create_listing.html' },
  { text: 'View My Listings', url: 'delete-listings' }
];

const navLinksContainer = document.querySelector('.nav_items');
const navToggleBtn = document.querySelector('.nav_toggle');

// Create and append the navigation links
navItems.forEach(item => {
  const link = document.createElement('a');
  link.href = item.url;
  link.textContent = item.text;
  const listItem = document.createElement('li');
  listItem.appendChild(link);
  navLinksContainer.appendChild(listItem);
});

// Toggle navigation on button click
navToggleBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});