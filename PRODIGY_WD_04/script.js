// Nav-Bar Responsiveness
const nav = document.querySelector('.nav')
let linkContainer = document.querySelector(".links");
let toggler = document.querySelector(".toggler");


let isOpen;

toggler.addEventListener("click", function () {
  isOpen = !isOpen;

  if (isOpen) {
    linkContainer.style.display = "block";
    toggler.classList.remove("fa-bars");
    toggler.classList.add("fa-xmark");
  } else {
    toggler.classList.remove("fa-xmark");
    toggler.classList.add("fa-bars");
    linkContainer.style.display = "none";
  }
});

// Function to be called when the target element intersects with the viewport
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.classList.remove('colored-nav')
      console.log('Target element is in view!');
    } else {
      nav.classList.add('colored-nav')
      console.log('Target element is out of view!');
    }
  });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection);

// Get the target element
const target = document.querySelector('.hi-there');

// Start observing the target element
observer.observe(target);






// Tabbed Component
const tabs = document.querySelectorAll(".tab-btn");
const tabsContainer = document.querySelector(".tab-container");
const tabsContent = document.querySelectorAll(".tab-content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-btn");
  console.log(clicked)

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("tab-btn--active"));
  tabsContent.forEach((c) => c.classList.remove("tab-content--active"));

  // Activate tabs
  clicked.classList.add("tab-btn--active");

  // Activate content area
  document
    .querySelector(`.tab-content--${clicked.dataset.tab}`)
    .classList.add(`tab-content--active`);
});
