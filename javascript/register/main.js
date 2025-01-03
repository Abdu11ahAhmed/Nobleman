// light and dark mode
const body = document.querySelector("body");
const switcher = document.querySelector("#switcher");
switcher.addEventListener("click", () => {
  body.classList.toggle("active");
  switcher.classList.toggle("active");
});
// light and dark mode

// registration tabs switcher
const tabs = document.querySelectorAll(".tabs li");
const tabsArray = Array.from(tabs);
const tabsContent = document.querySelectorAll("form div");
const tabsContentArray = Array.from(tabsContent);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    tabsContentArray.forEach((div) => {
      div.classList.remove("active");
    });
    document
      .querySelector(e.currentTarget.dataset.cont)
      .classList.add("active");
  });
});
// registration tabs switcher

// switching tabs when don't have account or already have account
const signinTab = document.getElementById("signinTab");
const switchToSign = document.getElementById("switchToSign");
const loginTab = document.getElementById("loginTab");
const switchToLogin = document.getElementById("switchToLogin");

switchToSign.addEventListener("click", (e) => {
  e.preventDefault();
  signinTab.click();
});
switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  loginTab.click();
});
// switching tabs when don't have account or already have account

// registration validate

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const logintBtn = document.getElementById("loginSubmitBtn");
const errrMessage = document.querySelector(".errr");
const errMessage = document.querySelector(".err");
const closeErr = document.querySelector(".close");

// valid email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// valid email

logintBtn.onclick = (e) => {
  e.preventDefault();
  const logEmail = loginEmail.value.trim();

  if (logEmail === "" || loginPassword.value === "") {
    errrMessage.style.display = "flex";
    errMessage.innerHTML = `Please fill out fields <div class="close"></div>`;
  } else if (!isValidEmail(logEmail)) {
    errrMessage.style.display = "flex";
    errMessage.innerHTML = `Please enter a valid email`;
  } else {
    errrMessage.style.display = "none";
    alert("Valid email address, Thank you");
  }
};

// to Close err prompt
closeErr.onclick = () => {
  errrMessage.style.display = "none";
};
// to Close err prompt

const signFName = document.querySelector("#signFName");
const signLName = document.querySelector("#signLName");
const signEmail = document.querySelector("#signEmail");
const signPassword = document.querySelector("#signPassword");
const signPasConf = document.querySelector("#signPasConf");
const signBtn = document.querySelector("#signSubmitBtn");

signBtn.onclick = (e) => {
  e.preventDefault();

  if (
    signFName.value === "" ||
    signLName.value === "" ||
    signEmail.value === "" ||
    signPassword.value === "" ||
    signPasConf.value === ""
  ) {
    errrMessage.style.display = "flex";
    errMessage.innerHTML = `Please fill out fields <div class="close"></div>`;
  } else if (!isValidEmail(signEmail.value.trim())) {
    errrMessage.style.display = "flex";
    errMessage.innerHTML = `Please write email currectly <div class="close"></div>`;
  } else if (signPassword.value !== signPasConf.value) {
    errrMessage.style.display = "flex";
    errMessage.innerHTML = `Passwords is not matched <div class="close"></div>`;
  } else {
    errrMessage.style.display = "none";
    alert(
      "Thanks for joining to us, Have a good day MR." +
        signFName +
        " " +
        signLName
    );
  }
};

// registration validate
