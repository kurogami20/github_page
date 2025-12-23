const tab = [
  {
    title: "Easy",
    content:
      "Github Pages is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Faster",
    content:
      "Github Pages is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Reliable",
    content:
      "Github Pages is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Secure",
    content:
      "Github Pages is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Free",
    content:
      "Github Pages is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const app = {
  getTabs() {
    // * je récupère mon container ou je veux insérer mes cards
    const tabsContainer = document.getElementById("tabs");
    // * je crée mes cards à partir de mon tableau tab
    // 'map' sert à transformer un tableau en un autre tableau
    // et va ainsi itérer sur chaque élément du tableau tab
    const cards = tab.map((tabs) => app.createTabElm(tabs));
    // * j'insère mes cards dans le container
    // '...cards' permet de décomposer le tableau cards en éléments individuels et tous les insérer en une seule fois
    tabsContainer.append(...cards);
  },

  createTabElm(tabs) {
    // * je vais chercher mon template
    const tabTemplateElm = document.getElementById("card_template");
    // * je vais copier le contenu de mon template
    const tabFragmElm = tabTemplateElm.content.cloneNode(true);
    // *je récupère les éléments à modifier dans le contenu du template
    // titre
    const titleElm = tabFragmElm.querySelector('[slot="title_card"]');
    // contenu
    const contentElm = tabFragmElm.querySelector('[slot="content_card"]');

    // * je modifie les éléments avec les données
    titleElm.textContent = tabs.title;
    contentElm.textContent = tabs.content;

    return tabFragmElm;
  },
};
app.getTabs();
