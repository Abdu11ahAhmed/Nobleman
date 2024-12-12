var navData = [
  {
    name: "Home",
    link: "../pages",
  },
  {
    name: "Models",
    link: "../pages",
  },
  {
    name: "About",
    link: "../pages",
  },
  {
    name: "Services",
    link: "../pages",
  },
  {
    name: "Contacts",
    link: "../pages",
  },
];

for (var i in navData) {
  var use = `<li>
                <a href="${navData[i].link}">${navData[i].name}</a>
            </li>`;

  var nav = document.getElementById("#nav-links");
  nav.append(use);
}
