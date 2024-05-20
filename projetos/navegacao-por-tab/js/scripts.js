const tabList = document.querySelectorAll(".js-tab-animais li");
const tabContent = document.querySelectorAll(".js-tab-content section");

if (tabList.length && tabContent.length) {
  tabContent[0].classList.add("active");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("active");
    });

    tabContent[index].classList.add("active");
  }

  tabList.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
