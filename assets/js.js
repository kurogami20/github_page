const tab = [
  {
    title: "Easy",
    content:
      "Github Pages is a very easy to use static site hosting service that allows you to create and publish websites directly from your GitHub repositories.",
  },
  {
    title: "Faster",
    content:
      "Github Pages is a very fast way to host your static websites with minimal setup and configuration required.",
  },
  {
    title: "Reliable",
    content:
      "Github Pages is a very reliable service that ensures your website is always available and accessible to your users.",
  },
  {
    title: "Secure",
    content:
      "Github Pages is a very secure service that protects your website from unauthorized access and potential threats.",
  },
  {
    title: "Free",
    content:
      "Github Pages is a free service that allows you to host your static websites without any cost.",
  },
  {
    title: "Customizable",
    content:
      "Github Pages is a customizable service that allows you to create your deploy script according to your needs.",
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
