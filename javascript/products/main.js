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
  e.addEventListener("click", (e) => {
    allLisArray.forEach((e) => {
      e.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let img = e.currentTarget.querySelector("img").getAttribute("src");
    mainImage.setAttribute("src", img);
  });
});

let carName = document.querySelector("#carName").innerText;
mainImage.setAttribute("alt", carName);

const imageSlide = document.querySelectorAll(".smallImages li img");

if (imageSlide.length >= 1) {
  imageSlide[0].setAttribute("alt", `${carName} Main`);
}
if (imageSlide.length >= 2) {
  imageSlide[1].setAttribute("alt", `${carName} Front`);
}
if (imageSlide.length >= 3) {
  imageSlide[2].setAttribute("alt", `${carName} back`);
}
if (imageSlide.length >= 4) {
  imageSlide[3].setAttribute("alt", `${carName} Right Side`);
}
if (imageSlide.length >= 5) {
  imageSlide[4].setAttribute("alt", `${carName} left Side`);
}

console.log(imageSlide);

// open images from gallery

// quantity Buttons

let decrease = document.querySelector("#decrease");
let quantity = document.querySelector("#quantity");
let increase = document.querySelector("#increase");

increase.addEventListener("click", () => {
  quantity.innerText++;
});
decrease.addEventListener("click", () => {
  quantity.innerText--;

  if (quantity.innerText < 1) {
    quantity.innerText = 1;
  }
});
// quantity Buttons

// color plaets

let colors = document.querySelectorAll(".palet li");
let colorsArray = Array.from(colors);

colorsArray.forEach((e) => {
  e.addEventListener("click", (e) => {
    colorsArray.forEach((e) => {
      e.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// color plaets
