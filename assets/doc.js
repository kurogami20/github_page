const app = {
  init() {
    app.menu();
  },
  menu() {
    // * je vais récupérer l'élément quickstart
    const sectionQuickStart = document.getElementById("quickstart");
    // * je vais récupérer l'élément du menu quickstart
    const menuQuickStart = document.getElementById("quickstart_menu");
    // * j'ajoute un écouteur d'événement au survol de la section quickstart
    if (sectionQuickStart && menuQuickStart) {
      // * au survol de la section quickstart, je change la couleur de fond du menu quickstart
      sectionQuickStart.addEventListener("click", () => {
        menuQuickStart.style.backgroundColor = "#fcb700";
      });
    }
  },
};
app.init();
