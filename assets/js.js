// *navigation
const navApp = {
  init() {
    navApp.handleNav();
  },
  handleNav() {
    // *je récupère le paramètre de l'url
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get("page");
    if (page === "documentation") {
      // * je redirige sur la page documentation doc.html
      window.location.href = "./doc.html";
    }
  },
};
navApp.init();

// *layout (header, footer)
const layoutApp = {
  init() {
    layoutApp.header();
    layoutApp.footer();
  },

  header() {
    // * je vais récupérer la balise header
    const headerElm = document.querySelector("header");
    // * je vais ajouter le contenu du header
    headerElm.innerHTML = ` <div class="navbar bg-base-100 shadow-sm w-full px-10 lg:px-20">
          <div class="flex-1">
            <a class="text-xl lg:text-3xl font-bold" href="/"
              ><i class="fa-brands fa-github"></i> Github Pages</a
            >
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li class="text-lg lg:text-xl">
                <a href="/?page=documentation" class="hover:bg-white">Documentation</a>
              </li>
            </ul>
          </div>
        </div>`;
    headerElm.classList.add(
      "max-w-screen",
      "sticky",
      "top-0",
      "left-0",
      "right-0",
      "z-10",
      "bg-white"
    );
  },
  footer() {
    // * je vais récupérer la balise footer
    const footerElm = document.querySelector("footer");
    // * je vais ajouter le contenu du footer
    footerElm.innerHTML = `  <aside>
          <a class="text-xl lg:text-3xl font-bold" href="/"
            ><i class="fa-brands fa-github"></i> Github Pages</a
          >
        </aside>
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link link-hover link-warning">Documentation</a>
        </nav>
        <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover link-warning">Terms of use</a>
          <a class="link link-hover link-warning">Privacy policy</a>
          <a class="link link-hover link-warning">Cookie policy</a>
        </nav>`;
    footerElm.classList.add(
      "footer",
      "sm:footer-horizontal",
      "bg-base-200",
      "text-base-content",
      "p-10"
    );
  },
};
layoutApp.init();

// *home
// * je crée un objet pour afficher mes cards sur l'accueil
const tab = [
  {
    title: 'Easy <i class="fa-solid fa-thumbs-up"></i>',
    content:
      "Github Pages is a very easy to use static site hosting service that allows you to create and publish websites directly from your GitHub repositories.",
  },
  {
    title: 'Fast <i class="fa-solid fa-forward"></i>',
    content:
      "Github Pages is a very fast way to host your static websites with minimal setup and configuration required.",
  },
  {
    title: 'Reliable <i class="fa-solid fa-handshake"></i>',
    content:
      "Github Pages is a very reliable service that ensures your website is always available and accessible to your users.",
  },
  {
    title: 'Secure <i class="fa-solid fa-shield"></i>',
    content:
      "Github Pages is a very secure service that protects your website from unauthorized access and potential threats.",
  },
  {
    title: 'Free <i class="fa-solid fa-coins"></i>',
    content:
      "Github Pages is a free service that allows you to host your static websites without any cost.",
  },
  {
    title: 'Customizable <i class="fa-solid fa-gears"></i>',
    content:
      "Github Pages is a customizable service that allows you to create your deploy script according to your needs.",
  },
];
const cardHome = {
  getTabs() {
    // * je récupère mon container ou je veux insérer mes cards
    const tabsContainer = document.getElementById("tabs");
    // * je crée mes cards à partir de mon tableau tab
    // 'map' sert à transformer un tableau en un autre tableau
    // et va ainsi itérer sur chaque élément du tableau tab
    const cards = tab.map((tabs) => cardHome.createTabElm(tabs));
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
    titleElm.innerHTML = tabs.title;
    contentElm.textContent = tabs.content;

    return tabFragmElm;
  },
};
cardHome.getTabs();
