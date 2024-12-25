const tabs = document.querySelectorAll(".tabs li");
const tabsArray = Array.from(tabs);
const tabContent = document.querySelectorAll(".tab-content");
const tabContentArray = Array.from(tabContent);

tabsArray.forEach((e) => {
  e.addEventListener("click", () => {
    tabsArray.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});

