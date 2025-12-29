const app = {
  init() {
    app.menu();
  },
  menu() {
    const sectionQuickStart = document.getElementById("quickstart");
    const menuQuickStart = document.getElementById("quickstart_menu");
    console.log(sectionQuickStart);
    console.log(menuQuickStart);
    if (sectionQuickStart && menuQuickStart) {
      sectionQuickStart.addEventListener("mouseenter", () => {
        menuQuickStart.style.backgroundColor = "#fcb700";
      });
    }
  },
};
app.init();
