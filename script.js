// === Bouton email ===
const boutonContact = document.getElementById("btn-contact");
const emailAffiche = document.getElementById("email-affiche");
let estAffiche = false;

boutonContact.addEventListener("click", function () {
  if (!estAffiche) {
    emailAffiche.textContent = "📧 at65623718@gmail.com";
    boutonContact.textContent = "Cacher mon email";
  } else {
    emailAffiche.textContent = "";
    boutonContact.textContent = "Afficher mon email";
  }
  estAffiche = !estAffiche;
});

// === Animation des barres de compétences au scroll ===
const barres = document.querySelectorAll(".remplissage");

const observateur = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("style").match(/width:([^%]+%)/)[1];
    }
  });
}, { threshold: 0.3 });

barres.forEach(barre => {
  const largeurFinale = barre.style.width;
  barre.style.width = "0";
  barre.setAttribute("style", `width:${largeurFinale}`);
  barre.style.width = "0";
  observateur.observe(barre);
});

// === Navbar — changer de couleur au scroll ===
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
