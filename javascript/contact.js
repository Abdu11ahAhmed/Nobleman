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

// contact us validation
let fName = document.querySelector("#fName");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let sendBtn = document.querySelector("#sendBtn");
const errrMessage = document.querySelector(".errr");
const errMessage = document.querySelector(".err");
const closeErr = document.querySelector(".close");

// valid email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// valid email

sendBtn.addEventListener("click", (e) => {
  let validInput = false;

  if (
    fName.value.trim() === "" ||
    email.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    errrMessage.style.display = "flex";
    errMessage.innerHTML = `Please fill out fields <div class="close"></div>`;
  } else if (!isValidEmail(email.value.trim())) {
    errrMessage.style.display = "flex";
    errMessage.innerHTML = `Invalid Email <div class="close"></div>`;
  } else {
    errrMessage.style.display = "none";
    alert("Thanks for sending a message");
    validInput = true;
  }

  if (validInput === false) {
    e.preventDefault();
  }
});
// contact us validation
