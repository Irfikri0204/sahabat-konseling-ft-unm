const menu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");

menu.addEventListener("click", displayMenu);
hamburgerMenu.addEventListener("click", displayMenu);

const iconBars = document.querySelector(".ri-menu-line");
const iconClose = document.querySelector(".ri-close-large-line");

function displayMenu() {
  if (menu.classList.contains("absolute")) {
    menu.classList.add("hidden");
    iconBars.style.display = "inline";
    iconClose.style.display = "none";

    menu.classList.remove("absolute");
    menu.classList.remove("top-14");
    menu.classList.remove("w-full");
    menu.classList.remove("left-0");
    menu.classList.remove("bg-primary-500");
    menu.classList.remove("divide-secondary-300");
    menu.classList.remove("divide-y-2");
  } else {
    menu.classList.remove("hidden");
    iconBars.style.display = "none";
    iconClose.style.display = "inline";

    menu.classList.add("absolute");
    menu.classList.add("top-14");
    menu.classList.add("w-full");
    menu.classList.add("left-0");
    menu.classList.add("bg-primary-500");
    menu.classList.add("divide-secondary-300");
    menu.classList.add("divide-y-2");
  }
}
