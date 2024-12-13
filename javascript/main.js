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
