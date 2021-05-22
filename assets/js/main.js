// Variabel
let btnShowMenu = document.querySelector(".navOne button");
let navMenu = document.querySelector(".navTwo");
let notif = document.querySelector(".myAlert");
let navLink = document.querySelectorAll(".navTwo ul li");
let sections = document.querySelectorAll("section");
const scriptURL = "";
const form = document.forms["contact-form"];

// Show Menu
btnShowMenu.addEventListener("click", () => {
  btnShowMenu.classList.toggle("shBtn");
  navMenu.classList.toggle("showMenu");
});
for (let x = 0; x < navLink.length; x++) {
  navLink[x].addEventListener("click", () => {
    btnShowMenu.classList.toggle("shBtn");
    navMenu.classList.toggle("showMenu");
    sections[x].scrollIntoView();
  });
}

// Scroll Into View
function scrPort(n) {
  n.scrollIntoView();
}

// Scroll Active Menu
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLink.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});

// Backtotop
window.addEventListener("load", () => {
  sections[0].scrollIntoView();
});

// Contact Form GSheets
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      notif.classList.toggle("show");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
// Hide Alert Notification
function hideNotif() {
  notif.classList.toggle("show");
}
