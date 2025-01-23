// light and dark mode

const body = document.querySelector("body");
const switcher = document.querySelector("#switcher");
switcher.addEventListener("click", () => {
  body.classList.toggle("active");
  switcher.classList.toggle("active");
});

// light and dark mode

// Humberger Menu and Navigation Links

const humberger = document.querySelector(".humberger");
const bg_eff = document.querySelector(".bg-eff");
const links = document.querySelector(".links");
humberger.onclick = () => {
  humberger.classList.toggle("active");
  bg_eff.classList.toggle("active");
  links.classList.toggle("active");
  bg_eff.onclick = () => {
    humberger.classList.toggle("active");
    bg_eff.classList.toggle("active");
    links.classList.toggle("active");
  };
};

// Humberger Menu and Navigation Links

// cars type

let types = document.querySelectorAll(".types li");
let content = document.querySelectorAll(".card");

types.forEach((e) => {
  e.addEventListener("click", () => {
    // Remove 'active' class from all types
    types.forEach((t) => t.classList.remove("active"));
    // Add 'active' class to the clicked type
    e.classList.add("active");

    // Get the category to filter by
    let filter = e.getAttribute("data-cont");

    // Loop through all cards
    content.forEach((card) => {
      if (filter === ".all" || card.classList.contains(filter.substring(1))) {
        card.classList.add("active"); // Show the card
      } else {
        card.classList.remove("active"); // Hide the card
      }
    });
  });
});
// cars type
