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
