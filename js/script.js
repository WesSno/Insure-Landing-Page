const navMenu = document.querySelector(".nav-menu");
const navBtn = document.querySelector(".nav-button");
const hamIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const navItems = document.querySelectorAll(".nav-item");
const desktopNavLinks = document.querySelectorAll(".desktop-nav-link");

console.log(desktopNavLinks);

toggleMenu = () => {
  if (navMenu.classList.contains("showMenu")) {
    navMenu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    hamIcon.style.display = "block";
    document.body.style.overflowY = "visible";
  } else {
    navMenu.classList.add("showMenu");
    closeIcon.style.display = "block";
    hamIcon.style.display = "none";
    document.body.style.overflowY = "hidden";
  }
};

navBtn.addEventListener("click", toggleMenu);

navItems.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

document.addEventListener("click", (e) => {
  desktopNavLinks.forEach((link) => {
    link.classList.remove("active");
  });

  const clickedLink = e.target.closest(".desktop-nav-link");

  if (clickedLink) {
    clickedLink.classList.add("active");
  }
});
