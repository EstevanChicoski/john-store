const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav)
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
};

showMenu("nav-toggle", "nav-menu");

const navLink = document.querySelectorAll(".nav__link");

console.log(navLink);

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1500,
  reset: true,
});

sr.reveal("body", { delay: 50 });
sr.reveal(".main img", { delay: 50 });
sr.reveal(".login .sla", { delay: 50 });

sr.reveal(".title", { delay: 50 });
sr.reveal("input, button, a", { delay: 50 });

sr.reveal("header h1", { delay: 50 });
sr.reveal(".rds, .dc, .inpt", { delay: 50 });




function calculate(){
  var name = document.getElementById("nome");
}

document.getElementById("h1").textContent="Olá " +nome;