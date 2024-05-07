let toggler = document.querySelector("#toggler");
let linkContainer = document.querySelector("#links");
let navLinks = document.querySelectorAll("#link");
let nav = document.querySelector("#nav");
let logo = document.querySelector("#logo");

let isOpen;

//
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

// Changing the color of the navigation links on hover
navLinks.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.color = "brown";
  });

  link.addEventListener("mouseleave", function () {
    this.style.color = "black";
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY < 100) {
    nav.style.background = "transparent";
    logo.setAttribute("src", "./Images/logo-dark.png");
    toggler.style.color = "black";
    logo.style.width = "80%";
    navLinks.forEach((link) => (link.style.color = "black"));
    linkContainer.style.background = 'brown'
  } else {
    nav.style.background = "rgba(0,0,0,0.5)";
    nav.style.color = 'white'
    toggler.style.color = "white";
    logo.setAttribute("src", "./Images/logo-white.png");
    logo.style.width = "45%";
    navLinks.forEach((link) => (link.style.color = "white"));
    linkContainer.style.background = 'transparent'
  }
});

