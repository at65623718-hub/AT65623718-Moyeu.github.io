// Sélectionne le bouton et la zone de texte
const boutonContact = document.getElementById("btn-contact");
const emailAffiche = document.getElementById("email-affiche");

// Variable pour savoir si l'email est déjà affiché
let estAffiche = false;

// Quand on clique sur le bouton...
boutonContact.addEventListener("click", function () {
  if (!estAffiche) {
    emailAffiche.textContent = "📧 adama.exemple@email.com";
    boutonContact.textContent = "Cacher mon email";
  } else {
    emailAffiche.textContent = "";
    boutonContact.textContent = "Afficher mon email";
  }
  estAffiche = !estAffiche;
});
