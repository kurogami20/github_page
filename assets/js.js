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
                <a href="/doc.html" class="hover:bg-white">Documentation</a>
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
