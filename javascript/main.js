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

// best seller in mounth

const bestSeller = document.querySelector("#bestSeller");

const currentDate = new Date();
const lastMonthDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() - 1
);
const monthName = lastMonthDate.toLocaleString("default", { month: "long" });
bestSeller.innerHTML = `Best Seller <br> in <span>${monthName}</span>`;

// best seller in mounth
