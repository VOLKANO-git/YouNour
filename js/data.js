const courses = [
  { id: 1, titre: "Maths",  niveau: "Collège", creneau: "Lundi 17h-19h", prix: 350, places: 8 },
  { id: 2, titre: "Physique", niveau: "2e Bac", creneau: "Mercredi 17h-19h", prix: 450, places: 0 },
  { id: 3, titre: "chimie", niveau: "Lycée", creneau: "Jeudi 16h-18h", prix: 400, places: 6 },
  { id: 4, titre: "Français ",  niveau: "Primaire", creneau: "Samedi 10h-12h", prix: 250, places: 10 },
  { id: 5, titre: "Anglais", niveau: "Lycée", creneau: "Lundi 18h-19h30", prix: 300, places: 12 },
  { id: 6, titre: "SVT ", niveau: "2e Bac", creneau: "Vendredi 17h-19h", prix: 400, places: 0 },
  { id: 7, titre: "Arabe", niveau: "Primaire", creneau: "Dimanche 10h-12h", prix: 250, places: 11 },
  { id: 8, titre: "Informatique", niveau: "Collège", creneau: "Mardi 16h-17h30", prix: 350, places: 3 },
  { id: 9, titre: "Maths", niveau: "Lycee", creneau: "Samedi 16h-17h30", prix: 300, places: 9 },
  { id: 10, titre: "Physique", niveau: "Collège", creneau: "Lundi 19h-21h ", prix: 300, places: 5 },
  { id: 11, titre: "SVT", niveau: "Collège", creneau: "Mardi 15h-17h30", prix: 250, places: 11 },
  { id: 8, titre: "Francais", niveau: "Lycee", creneau: "Dimanche 8h-11h30", prix: 200, places: 9 },
]; 
const liste = document.querySelector("#liste-cours");
const compteur = document.querySelector("#compteur");

function renderCourses(list) {
  liste.innerHTML = "";

  list.forEach((c) => {
    const complet = c.places === 0;
    liste.innerHTML += `
      <article class="carte">
        <h3>${c.titre}</h3>
        <p>${c.niveau}</p>
        <p>${c.creneau}</p>
        <p>${c.prix} MAD / mois</p>
        <p>${complet ? "Complet" : c.places + " places restantes"}</p>
        <button data-id="${c.id}" ${complet ? "disabled" : ""}>
          ${complet ? "Complet" : "Ajouter"}
        </button>
      </article>`;
  });

  compteur.textContent = `${list.length} cours disponibles`;
}

renderCourses(courses);
