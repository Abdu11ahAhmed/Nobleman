// light and dark mode
const body = document.querySelector("body");
const switcher = document.querySelector("#switcher");
switcher.addEventListener("click", () => {
  body.classList.toggle("active");
  switcher.classList.toggle("active");
});
// light and dark mode

const errrMessage = document.querySelector(".errr");
const errMessage = document.querySelector(".err");
const closeErr = document.querySelector(".close");

let emailLabel = document.querySelector("[for='email']");
let submitBtn = document.querySelector("#submitBtn");

// valid email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// valid email

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const validEmail = email.value.trim();

  if (email.value === "") {
    errrMessage.style.display = "flex";
    errMessage.innerHTML = `Please enter your email <div class="close"></div>`;
  } else if (!isValidEmail(validEmail)) {
    errrMessage.style.display = "flex";
    errMessage.innerHTML = `Please enter a valid email <div class="close"></div>`;
  } else {
    errrMessage.style.display = "none";
    document.querySelector("form").reset();
    emailLabel.textContent = "Please Enter Your OTP Code";
    email.placeholder = "Please Enter Your OTP Code";
    submitBtn.textContent = "Check the Code";

    function generateRandomNumberRestoration() {
      return Math.floor(100000 + Math.random() * 900000);
    }
    const restoreNumber = generateRandomNumberRestoration();
    console.log(`Your OTP Code is : ${restoreNumber}`);

    submitBtn.addEventListener("click", function (event) {
      if (email.value === "") {
        errrMessage.style.display = "flex";
        errMessage.innerHTML = `Please enter your OTP<div class="close"></div>`;
      } else if (!isValidEmail(validEmail)) {
        errrMessage.style.display = "none";
      } else if (email.value.trim() !== restoreNumber.toString()) {
        errrMessage.style.display = "flex";
        errMessage.innerHTML = `Not currect OTP Code <div class="close"></div>`;
      } else if (email.value.trim() === restoreNumber.toString()) {
        errrMessage.style.display = "none";
        alert("thanks so much, valid email and correct OTP");
      }
    });
  }
});

closeErr.addEventListener("click", function () {
  errrMessage.style.display = "none";
});
