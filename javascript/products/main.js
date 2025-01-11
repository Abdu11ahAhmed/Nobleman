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

// open images from gallery

let mainImage = document.querySelector("#mainImage");
let allLis = document.querySelectorAll(".smallImages li");
let allLisArray = Array.from(allLis);

allLisArray.forEach((e) => {
  e.addEventListener("click", (e)=> {
    allLisArray.forEach((e)=> {
      e.classList.remove("active");
    })
    e.currentTarget.classList.add("active");
    let img = e.currentTarget.querySelector("img").getAttribute("src");
    mainImage.setAttribute("src", img);
  })
});

console.log(allLis);
// open images from gallery
